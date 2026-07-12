(function () {
  var portail = document.getElementById('portail');
  if (!portail) return;
  var porteG = portail.querySelector('.porte-g');
  if (!porteG) return;

  porteG.addEventListener('click', ouvrir);

  function ouvrir() {
    portail.classList.add('is-ouvert');

    function terminer() {
      portail.classList.add('is-caché');
      document.documentElement.classList.remove('portail-actif');
      try { sessionStorage.setItem('darija-entree', '1'); } catch (err) {}
    }

    var reduit = matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduit) { terminer(); return; }

    porteG.addEventListener('transitionend', function fin(e) {
      if (e.propertyName !== 'transform') return;
      porteG.removeEventListener('transitionend', fin);
      terminer();
    });
  }

  var revoir = document.getElementById('revoir-portail');
  if (revoir) {
    revoir.addEventListener('click', function (e) {
      e.preventDefault();
      try { sessionStorage.removeItem('darija-entree'); } catch (err) {}
      portail.classList.remove('is-ouvert', 'is-caché');
      document.documentElement.classList.add('portail-actif');
    });
  }
})();
