let animations = document.querySelectorAll('.c-section__anim');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const target = entry.target;
    if(entry.intersectionRatio > 0) {
			target.classList.add('c-section__anim--active');
    } else {
      target.classList.remove('c-section__anim--active');
    }
  })
})
animations.forEach(animation => observer.observe(animation))