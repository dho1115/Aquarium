const screencaptureObserver = new IntersectionObserver(entries => {
   entries.forEach(entry => {      
      entry.target.classList.toggle('animateOpacityToZero', entry.isIntersecting);
      if (entry.isIntersecting) screencaptureObserver.unobserve(entry.target);
   })
}, { threshold: 0.95 });

const screencaptureObserverSelector = document.querySelector('.behindscreencapture');
screencaptureObserver.observe(screencaptureObserverSelector);




