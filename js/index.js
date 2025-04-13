import { jsonHandler } from './dataHandler.js';
import { NewbookHandler } from './newBookHandler.js';

import { BookCardInteraction } from './detailHandler.js'

document.addEventListener('DOMContentLoaded', () => {
    new NewBookHandler('.add-book');
    new BookCardInteraction();
});

// for opening the search on mobile
const mobileWrapper = document.querySelector('.mobile-wrapper');
const searchMobile = mobileWrapper.querySelector('.search-mobile');

searchMobile.addEventListener('click', (e) => {
    const search = mobileWrapper.querySelector('.search-mobile-input');
    search.classList.toggle('active');
});

const searchInput = mobileWrapper.querySelector('.search-mobile-input');
if (searchInput) {
    searchInput.addEventListener('click', (e) => {
        e.stopPropagation();
    });
}

// for opening the naviagtion menu on mobile
const navMobile = document.querySelector('.navigation-mobile');

navMobile.addEventListener('click', () => {
    const nav = document.querySelector('.navigation');
    const search = mobileWrapper.querySelector('.search-mobile-input');
    nav.classList.toggle('open');
    if (search.classList.contains('active')) {
        search.classList.toggle('active');
    }
});

// for closing the navigation menu mobile
const closeButton = document.querySelector('.close-button');

closeButton.addEventListener('click', () => {
    const nav = document.querySelector('.navigation');
    nav.classList.toggle('open');
});