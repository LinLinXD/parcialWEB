let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');
const indicators = document.querySelectorAll('.carousel-indicators button');

function showSlide(index) {
    // Actualiza la posición del carrusel
    const carouselInner = document.querySelector('.carousel-inner');
    carouselInner.style.transform = `translateX(-${index * 100}%)`;

    // Actualiza el indicador activo
    indicators.forEach(indicator => indicator.classList.remove('active'));
    indicators[index].classList.add('active');

    currentIndex = index;
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % items.length;
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    showSlide(currentIndex);
}

function goToSlide(index) {
    showSlide(index);
}