// Main JavaScript file - imports and initialization
import { initializeCarousel } from './carousel.js';
import { initializeCardExpansion } from './cardExpansion.js';

document.addEventListener('DOMContentLoaded', () => {
    initializeCarousel();
    initializeCardExpansion();
});