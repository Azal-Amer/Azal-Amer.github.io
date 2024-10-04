// Main JavaScript file - imports and initialization
import { initializeCarousels } from './carousel.js';
import { initializeCardExpansion } from './cardExpansion.js';

document.addEventListener('DOMContentLoaded', () => {
    initializeCarousels();
    initializeCardExpansion();
});