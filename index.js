const transparentFishStockObserver = new IntersectionObserver(entries => {
   console.log({ entries });
}, {threshold: 0.75});
const transparentFishStock = document.querySelector('.transparentFishStockWrapper');

transparentFishStockObserver.observe(transparentFishStock);

