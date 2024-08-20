const carousel = document.querySelector('.carousel');
const images = document.querySelectorAll('.carousel img');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
let currentIndex = 0;
let interval;






function moveCarousel(index) {
    currentIndex = (index + images.length) % images.length;
    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function startCarousel() {
    interval = setInterval(() => {
        moveCarousel(currentIndex + 1);
    }, 3000); // Cambia la imagen cada 3 segundos
}

function stopCarousel() {
    clearInterval(interval);
}

nextButton.addEventListener('click', () => {
    stopCarousel();
    moveCarousel(currentIndex + 1);
    startCarousel();
});

prevButton.addEventListener('click', () => {
    stopCarousel();
    moveCarousel(currentIndex - 1);
    startCarousel();
});

startCarousel();




