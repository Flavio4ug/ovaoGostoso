let position = 0;

function moveCarousel(direction) {
    const carousel = document.querySelector('.carousel ul');
    const itemWidth = document.querySelector('.carousel ul li').offsetWidth;
    const carouselWidth = carousel.scrollWidth;
    const containerWidth = document.querySelector('.carousel').offsetWidth;

    position += direction * itemWidth;

    // Limites
    if (position > 0) {
        position = 0;
    } else if (Math.abs(position) + containerWidth > carouselWidth) {
        position = -(carouselWidth - containerWidth);
    }

    // Transição suave
    carousel.style.transition = 'transform 0.5s ease';
    carousel.style.transform = `translateX(${position}px)`;
}

// Adicionando debounce para evitar cliques rápidos
let isMoving = false;
function debounceMoveCarousel(direction) {
    if (!isMoving) {
        moveCarousel(direction);
        isMoving = true;
        setTimeout(() => {
            isMoving = false;
        }, 500); // Espera o tempo da transição
    }
}

// Use debounceMoveCarousel nas chamadas de clique dos botões
