window.smoothScroll = () => {
  let scrollTriggers = document.querySelectorAll('.button-page-nav');

  console.log(scrollTriggers);

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