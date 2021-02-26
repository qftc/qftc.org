window.smoothScroll = () => {
  let scrollTriggers = document.querySelectorAll('.button-page-nav');

  scrollTriggers.forEach(trigger => {
    console.log(trigger.dataset.anchor)

    trigger.addEventListener('click', (event) => {
      let target = document.getElementById(trigger.dataset.anchor);
      let scrollToPosition = target.offsetTop - 130;
      
      window.scroll({
        top: scrollToPosition, 
        left: 0, 
        behavior: 'smooth'
      });
    })
  })
}

window.navFill = () => {
  let nav = document.querySelector('nav');

  nav.classList.add('nav-start');

  document.addEventListener('scroll', (e) => {
    let scrollToPosition = window.scrollY
    
    if (scrollToPosition >= 82) {
      nav.classList.remove('nav-start');
    } else {
      nav.classList.add('nav-start')
    }
  })
}

window.mobileNav = () => {
   const nav = document.querySelector('.nav-links'); 
   const openTrigger = document.querySelector('.open-nav');
   const closeTrigger = document.querySelector('.close-nav');

   openTrigger.addEventListener('click', (event) => {
    nav.classList.remove('nav-links-hidden-mobile');
   });

   closeTrigger.addEventListener('click', (event) => {
    nav.classList.add('nav-links-hidden-mobile');
   });
}