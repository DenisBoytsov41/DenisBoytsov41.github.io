const parallaxContainer = document.querySelector('.parallax-container');
const parallaxElement = document.querySelector('.parallax-element');

parallaxContainer.addEventListener('mousemove', function(event) {
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    const offsetX = (mouseX - (parallaxContainer.offsetWidth / 2)) / 30;
    const offsetY = (mouseY - (parallaxContainer.offsetHeight / 2)) / 30;

    parallaxElement.style.transform = 'translate(${offsetX}px, ${offsetY}px)',offsetX,offsetY;
});

parallaxContainer.addEventListener('mouseleave', function() {
    parallaxElement.style.transform = 'translate(0, 0)';
});