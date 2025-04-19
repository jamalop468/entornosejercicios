const button = document.getElementById('moverButton');
const area = document.querySelector('.area-movimiento');

button.addEventListener('click', function() {

    const areaWidth = area.offsetWidth;
    const areaHeight = area.offsetHeight;

    const maxX = areaWidth - button.offsetWidth;
    const maxY = areaHeight - button.offsetHeight;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    button.style.left = `${randomX}px`;
    button.style.top = `${randomY}px`;
});