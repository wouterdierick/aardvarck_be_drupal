

(function(){
  const toggle = document.getElementById('menu-toggle');
  const wrapper = document.getElementById('menu-wrapper');
  const mq = window.matchMedia("(max-width: 480px)");

  function matchBreakpoint(e) {
    if (e.matches) {
      // console.log("Viewport <= 640px");
      initMobileMenu();
    } else {
      // console.log("Viewport > 640px");
      destroyMobileMenu();
    }
  }
  mq.addEventListener("change", matchBreakpoint);
  matchBreakpoint(mq);

  function openMenu() {
    // console.log('openMenu');
    toggle.setAttribute('aria-expanded','true');
    wrapper.classList.add('open');
    wrapper.setAttribute('aria-hidden','false');
    document.addEventListener('keydown', onKeyDown);
  }

  function closeMenu() {
    // console.log('closeMenu');
    toggle.focus();
    toggle.blur();
    toggle.setAttribute('aria-expanded','false');
    wrapper.classList.remove('open');
    wrapper.setAttribute('aria-hidden','true');
    document.removeEventListener('keydown', onKeyDown);
  }

  function toggleMenu(e) {
    if(toggle.getAttribute('aria-expanded') === 'true') {
      closeMenu();
    } else {
      openMenu();
    }
  }

  function onKeyDown(e){
    if(e.key === 'Escape'){
      e.preventDefault();
      closeMenu();
      return;
    }
  }

  function initMobileMenu() {
    // console.log('initMobileMenu');
    toggle.addEventListener('click', toggleMenu);
    toggle.removeAttribute('aria-hidden');
    closeMenu();
  }

  function destroyMobileMenu() {
    // console.log('destroyMobileMenu');
    wrapper.removeAttribute('aria-hidden');
    wrapper.querySelector('.main-navigation > ul > li > a').focus();
    wrapper.querySelector('.main-navigation > ul > li > a').blur();
    wrapper.classList.remove('open');
    toggle.removeEventListener('click', toggleMenu);
    toggle.removeAttribute('aria-expanded');
    toggle.setAttribute('aria-hidden','true');
  }

})();
