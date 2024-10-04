export function initializeCarousel() {
    const carousel = document.querySelector('.carousel');
    const prevButton = document.querySelector('.carousel-button.prev');
    const nextButton = document.querySelector('.carousel-button.next');
    const card = carousel.querySelector('.project-card');
    
    if (!carousel || !prevButton || !nextButton || !card) {
        console.error('Carousel elements not found');
        return;
    }

    // Calculate the width of two cards (card width + margin)
    const cardWidth = card.offsetWidth + parseFloat(getComputedStyle(card).marginRight);
    const scrollDistance = cardWidth; // Move by the width of two cards

    function updateArrows() {
        const maxScrollLeft = carousel.scrollWidth - carousel.clientWidth;

        // Disable prev button if at the start
        prevButton.disabled = carousel.scrollLeft <= 0;

        // Disable next button if at the end
        nextButton.disabled = carousel.scrollLeft >= maxScrollLeft;
    }

    prevButton.addEventListener('click', () => {
        carousel.scrollBy({ left: -scrollDistance, behavior: 'smooth' });
    });

    nextButton.addEventListener('click', () => {
        carousel.scrollBy({ left: scrollDistance, behavior: 'smooth' });
    });

    // Listen for scroll events to update arrow states dynamically
    carousel.addEventListener('scroll', updateArrows);

    // Update the arrows initially
    updateArrows();
}
