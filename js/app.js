const menu = document.querySelector('.menu');
const hmb = document.querySelector('.hmb-lines');
const one = document.querySelector('.one');
const two = document.querySelector('.two');
const three = document.querySelector('.three');
const link = document.querySelectorAll('.li');
const overlay = document.querySelector('.overlay');
const infoIcon = document.querySelector('.info');
const info = document.querySelector('.info-wrapper');
const infoToolTip = document.querySelector('.info-tooltip');
const close = document.querySelector('.close');
const infoMenu = document.querySelector('.info-menu');
const closeStory = document.querySelector('.closeStory');
const infoStory = document.querySelector('.currentStory');

// ! Helper Functions.

function infoClose () {
    info.classList.remove('info-icon-active');
    infoMenu.classList.remove('info-menu-active');
}

function infoIconOpen () {
    info.classList.add('info-icon-active');
    infoMenu.classList.add('info-menu-active');
}

function showTooltip () {
    infoToolTip.classList.add('info-tooltip-active');
}

function hideTooltip () {
    infoToolTip.classList.remove('info-tooltip-active');
}

function hmbLines () {
    one.classList.toggle('one-active');
    two.classList.toggle('two-active');
    three.classList.toggle('three-active');
    hmb.classList.toggle('hmb-lines-active');
}

function menuOpen () {
    menu.classList.toggle('menu-active');
    menu.classList.toggle('menu-delay');
    overlay.classList.toggle('overlay-active');
}

function hmbMenu () {
    hmbLines();
    menuOpen();
}

function lineEnter () {
    one.style.width = "100%";
    two.style.width = "50%";
    three.style.width = "70%";
}

function lineOut () {
    one.style.width = "70%";
    two.style.width = "100%";
    three.style.width = "100%";
}

// ! Open Info on load.
window.onload = function() {
    setTimeout(() => {
        infoIconOpen();
    }, 400);
}

// ! Events.


hmb.addEventListener('click', () => {
    hmbMenu();
});

info.addEventListener('mouseover', () => {
    showTooltip();
});

info.addEventListener('mouseout', () => {
    hideTooltip();
});

info.addEventListener('click', () => {
    infoIconOpen();
});

close.addEventListener('click', () => {
    infoClose();
});

closeStory.addEventListener('click', () => {
    infoStory.style.display = 'none';
});