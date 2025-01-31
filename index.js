const screencaptureObserver = new IntersectionObserver(entries => {
   entries.forEach(entry => entry.target.classList.toggle('setOpacity', entry.isIntersecting))
}, { threshold: 0.95 });

const screencaptureObserverSelector = document.querySelector('.screencapture');

screencaptureObserver.observe(screencaptureObserverSelector);

