export function initializeCarousels() {
    const carousels = document.querySelectorAll('.carousel-container');
    carousels.forEach((carouselContainer, index) => {
        const carousel = carouselContainer.querySelector('.carousel');
        const projectCards = carousel.querySelectorAll('.project-card');
        const prevButton = carouselContainer.querySelector('.prev');
        const nextButton = carouselContainer.querySelector('.next');

        if (projectCards.length === 0) {
            console.warn('No project cards found in this carousel. Skipping initialization.');
            return;
        }

        let scrollAmount = -20;
        const cardWidth = projectCards[0].offsetWidth + 20; // 20px for left margin

        nextButton.addEventListener('click', () => {
            scrollAmount += cardWidth;
            const maxScroll = carousel.scrollWidth - carousel.clientWidth;
            if (scrollAmount > maxScroll) scrollAmount = maxScroll;
            carousel.scrollTo({
                left: scrollAmount,
                behavior: 'smooth'
            });
        });

        prevButton.addEventListener('click', () => {
            scrollAmount -= cardWidth;
            if (scrollAmount < 0) scrollAmount = 0;
            carousel.scrollTo({
                left: scrollAmount,
                behavior: 'smooth'
            });
        });
    });
}