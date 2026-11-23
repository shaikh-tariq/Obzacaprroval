/* Brand strip: each row copies its logo list once so the loop is seamless (the copy is hidden from screen readers).
   To change the logos, edit the <li> items inside the .proof-list rows in HomePage.jsx. */
(function () {
  [].forEach.call(document.querySelectorAll('.proof-track'), function (t) {
    if (!t.firstElementChild) return;
    var c = t.firstElementChild.cloneNode(true);
    c.setAttribute('aria-hidden', 'true');
    t.appendChild(c);
  });
})();
