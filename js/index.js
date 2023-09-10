let currentSlide = 0;
const itemContainer = document.querySelector('.carousel-item-container');
const items = document.querySelectorAll('.carousel-item');
const indicators = document.querySelectorAll('.carousel-indicator');

function showSlide(index) {
    const offset = -index * 260; // Ancho de cada elemento
    itemContainer.style.transform = `translateX(${offset}px)`;
    currentSlide = index;

    // Actualiza los indicadores de navegación
    indicators.forEach((indicator, idx) => {
        if (idx === index) {
            indicator.classList.add('active');
        } else {
            indicator.classList.remove('active');
        }
    });
}

function prevSlide() {
    const prevSlide = (currentSlide - 1 + items.length) % items.length;
    showSlide(prevSlide);
}

function nextSlide() {
    const nextSlide = (currentSlide + 1) % items.length;
    showSlide(nextSlide);
}

// Iniciar el carrusel
showSlide(currentSlide);

// Cambiar de diapositiva automáticamente cada 3 segundos
setInterval(nextSlide, 3000);