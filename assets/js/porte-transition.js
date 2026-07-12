(function () {
  var overlay = document.getElementById('porte-transition');
  var portes = document.querySelectorAll('.porte-chapitre');
  if (!overlay || !portes.length) return;

  var vantailG = overlay.querySelector('.pt-vg');
  var naviguer = null;

  portes.forEach(function (porte) {
    porte.addEventListener('click', function (e) {
      if (e.defaultPrevented) return;
      if (e.button !== 0) return;
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;

      e.preventDefault();

      var href = porte.getAttribute('href');
      var module = porte.dataset.module || '';
      overlay.dataset.module = module;
      overlay.classList.add('is-active');

      if (naviguer) {
        vantailG.removeEventListener('transitionend', naviguer);
        clearTimeout(overlay._filet);
      }
      naviguer = function (ev) {
        if (ev && ev.propertyName !== 'transform') return;
        vantailG.removeEventListener('transitionend', naviguer);
        window.location.href = href;
      };
      vantailG.addEventListener('transitionend', naviguer);
      overlay._filet = setTimeout(naviguer, 700);
    });
  });
})();
