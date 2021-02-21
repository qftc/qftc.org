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