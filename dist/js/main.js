// Select DOM Items
const hamburgerBtn = document.querySelector('.hamburger-btn');
const menu = document.querySelector('.menu');
const menuLeftSide = document.querySelector('.menu-sideleft');
const menuNav = document.querySelector('.menu-nav');
const navItems = document.querySelectorAll('.nav-item');

// Set Initial State of Menu

let menuIsVisible = false;

hamburgerBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    // if state of menuIsVisibe isnt false (!), then...
    if(!menuIsVisible) {
        hamburgerBtn.classList.add('close');
        menu.classList.add('show');
        menuLeftSide.classList.add('show');
        menuNav.classList.add('show');
        navItems.forEach(item => item.classList.add('show'));
        // Set Menu State
        menuIsVisible = true;
        
    } else {
        hamburgerBtn.classList.remove('close');
        menu.classList.remove('show');
        menuLeftSide.classList.remove('show');
        menuNav.classList.remove('show');
        navItems.forEach(item => item.classList.remove('show'));
        // Set Menu State
        menuIsVisible = false;
    }
}