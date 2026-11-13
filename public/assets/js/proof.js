/* Proof strip: copies the logo list once so the loop is seamless (the copy is hidden from screen readers).
   To change the logos, edit the <li> items inside .proof-list in index.html. */
(function () {
  var t = document.querySelector('.proof-track');
  if (!t || !t.firstElementChild) return;
  var c = t.firstElementChild.cloneNode(true);
  c.setAttribute('aria-hidden', 'true');
  t.appendChild(c);
})();
