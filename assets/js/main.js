const burgerButton = document.querySelector('.menu-toggle');
const burgerMenu = document.querySelector('.burger-menu');
const burgerClose = document.querySelector('.menu-close');

burgerButton.addEventListener('click', () => {
    burgerMenu.classList.add('open');
    burgerMenu.classList.remove('hidden');
});

burgerClose.addEventListener('click', () => {
    burgerMenu.classList.remove('open');
    setTimeout(() => burgerMenu.classList.add('hidden'), 100); // Скрытие после анимации
});

document.addEventListener('click', (event) => {
    if (!burgerMenu.contains(event.target) && !burgerButton.contains(event.target)) {
        burgerMenu.classList.remove('open');
        setTimeout(() => burgerMenu.classList.add('hidden'), 100);
    }
});