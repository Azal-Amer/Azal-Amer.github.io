// Card expansion functionality
export function initializeCardExpansion() {
    const projectCards = document.querySelectorAll('.project-card');
    const carousel = document.querySelector('.carousel');
    
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
            expandCard(card);
        });
    });

    overlay.addEventListener('click', closeExpandedCard);

    function expandCard(card) {
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

        // Trigger reflow to ensure the transition works
        expandedCard.offsetHeight;

        overlay.classList.add('active');
        expandedCard.classList.add('active');
        carousel.style.pointerEvents = 'none';
    }

    function closeExpandedCard() {
        overlay.classList.remove('active');
        expandedCard.classList.remove('active');
        carousel.style.pointerEvents = 'auto';
    }
}