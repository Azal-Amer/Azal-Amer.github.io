let isExpanded = false;
let activeCarousel = null;

export function initializeCardExpansion() {
    const projectCards = document.querySelectorAll('.project-card');
    if (projectCards.length === 0) {
        console.error("No project cards found.");
        return;
    }
    
    // Create overlay
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');
    document.body.appendChild(overlay);
    
    // Create expanded card
    const expandedCard = document.createElement('div');
    expandedCard.classList.add('expanded-card');
    document.body.appendChild(expandedCard);
    
    projectCards.forEach(card => {
        const expandButton = card.querySelector('.expand-button');
        expandButton.addEventListener('click', (e) => {
            e.stopPropagation();
            if (!isExpanded) {
                const carousel = card.closest('.carousel-container').querySelector('.carousel');
                expandCard(card, carousel);
            }
        });
    });
    
    overlay.addEventListener('click', closeExpandedCard);
    
    function expandCard(card, carousel) {
        if (isExpanded) return;
        isExpanded = true;
        activeCarousel = carousel;
        
        const title = card.querySelector('h3').textContent;
        const description = card.querySelector('.long-description').textContent;
        const imageSrc = card.querySelector('.expanded-content img').src;
        const expandedContent = `
            <div class="expanded-content">
                <div class="long-description">
                    <h2>${title}</h2>
                    <p>${description}</p>
                </div>
                <div class="project-image">
                    <img src="${imageSrc}" alt="${title}">
                </div>
            </div>
        `;
        
        const closeButton = document.createElement('button');
        closeButton.classList.add('close-button');
        closeButton.innerHTML = '&times;';
        closeButton.addEventListener('click', closeExpandedCard);
        
        expandedCard.innerHTML = expandedContent;
        expandedCard.appendChild(closeButton);
        
        overlay.classList.add('active');
        expandedCard.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent scrolling on the body
        activeCarousel.style.pointerEvents = 'none'; // Disable interactions for the relevant carousel
    }
    
    function closeExpandedCard() {
        if (!isExpanded) return;
        isExpanded = false;
        
        overlay.classList.remove('active');
        expandedCard.classList.remove('active');
        document.body.style.overflow = ''; // Re-enable scrolling on the body
        
        if (activeCarousel) {
            activeCarousel.style.pointerEvents = ''; // Remove the inline style completely
            activeCarousel = null;
        }
        
        // Add a small delay before re-enabling pointer events to prevent accidental clicks
        setTimeout(() => {
            const allCarousels = document.querySelectorAll('.carousel');
            allCarousels.forEach(carousel => {
                carousel.style.pointerEvents = '';
            });
        }, 100);
    }
}