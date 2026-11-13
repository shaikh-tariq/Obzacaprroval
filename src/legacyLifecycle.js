const sourceCache = new Map();

function getScriptSource(path) {
  if (!sourceCache.has(path)) {
    sourceCache.set(path, fetch(`/${path}`).then((response) => {
      if (!response.ok) {
        throw new Error(`Failed to load script ${path}: ${response.status} ${response.statusText}`);
      }

      return response.text();
    }));
  }

  return sourceCache.get(path);
}

export function createScriptLifecycle() {
  const listeners = [];
  const timeouts = new Set();
  const intervals = new Set();
  const animationFrames = new Set();
  const observers = [];
  let disposed = false;
  const hadStoryApi = Object.prototype.hasOwnProperty.call(window, '__obzac');
  const originalStoryApi = window.__obzac;
  const eventTargetPrototype = window.EventTarget.prototype;
  const originalAddEventListener = eventTargetPrototype.addEventListener;
  const originalSetTimeout = window.setTimeout;
  const originalClearTimeout = window.clearTimeout;
  const originalSetInterval = window.setInterval;
  const originalClearInterval = window.clearInterval;
  const originalRequestAnimationFrame = window.requestAnimationFrame;
  const originalCancelAnimationFrame = window.cancelAnimationFrame;
  const observerConstructors = ['IntersectionObserver', 'MutationObserver', 'ResizeObserver']
    .filter((name) => typeof window[name] === 'function')
    .map((name) => ({ name, constructor: window[name] }));

  eventTargetPrototype.addEventListener = function (type, listener, options) {
    if ((this === window || this === document) && listener) {
      listeners.push({ target: this, type, listener, options });
    }

    return originalAddEventListener.call(this, type, listener, options);
  };

  window.setTimeout = function (callback, delay, ...args) {
    let id;
    const wrappedCallback = typeof callback === 'function'
      ? function (...callbackArgs) {
        timeouts.delete(id);
        return callback.apply(this, callbackArgs);
      }
      : callback;

    id = originalSetTimeout.call(this, wrappedCallback, delay, ...args);
    timeouts.add(id);
    return id;
  };

  window.clearTimeout = function (id) {
    timeouts.delete(id);
    return originalClearTimeout.call(this, id);
  };

  window.setInterval = function (callback, delay, ...args) {
    const id = originalSetInterval.call(this, callback, delay, ...args);
    intervals.add(id);
    return id;
  };

  window.clearInterval = function (id) {
    intervals.delete(id);
    return originalClearInterval.call(this, id);
  };

  window.requestAnimationFrame = function (callback) {
    let id;
    id = originalRequestAnimationFrame.call(this, (time) => {
      animationFrames.delete(id);
      callback(time);
    });
    animationFrames.add(id);
    return id;
  };

  window.cancelAnimationFrame = function (id) {
    animationFrames.delete(id);
    return originalCancelAnimationFrame.call(this, id);
  };

  observerConstructors.forEach(({ name, constructor }) => {
    window[name] = new Proxy(constructor, {
      construct(target, args, newTarget) {
        const observer = Reflect.construct(target, args, newTarget);
        observers.push(observer);
        return observer;
      },
    });
  });

  function run(source, path) {
    if (disposed) return;

    try {
      window.eval(`${source}\n//# sourceURL=${path}`);
    } catch (error) {
      throw new Error(`Failed to initialize script ${path}`, { cause: error });
    }
  }

  return {
    async load(paths, inlineSources) {
      inlineSources.forEach((source, index) => {
        run(source, `inline-page-script-${index + 1}`);
      });

      const sources = await Promise.all(paths.map((path) => getScriptSource(path)));
      if (disposed) return;

      sources.forEach((source, index) => run(source, paths[index]));
    },

    dispose() {
      disposed = true;
      listeners.forEach(({ target, type, listener, options }) => {
        target.removeEventListener(type, listener, options);
      });
      timeouts.forEach((id) => window.clearTimeout(id));
      intervals.forEach((id) => window.clearInterval(id));
      animationFrames.forEach((id) => window.cancelAnimationFrame(id));
      observers.forEach((observer) => observer.disconnect());
      eventTargetPrototype.addEventListener = originalAddEventListener;
      window.setTimeout = originalSetTimeout;
      window.clearTimeout = originalClearTimeout;
      window.setInterval = originalSetInterval;
      window.clearInterval = originalClearInterval;
      window.requestAnimationFrame = originalRequestAnimationFrame;
      window.cancelAnimationFrame = originalCancelAnimationFrame;
      observerConstructors.forEach(({ name, constructor }) => {
        window[name] = constructor;
      });
      if (window.__obzac !== originalStoryApi) {
        if (hadStoryApi) window.__obzac = originalStoryApi;
        else delete window.__obzac;
      }
      listeners.length = 0;
      timeouts.clear();
      intervals.clear();
      animationFrames.clear();
      observers.length = 0;
    },
  };
}
