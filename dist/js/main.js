document.addEventListener('contextmenu', e => {
    e.preventDefault();
});

var projects = document.querySelectorAll(".project-toggle");
projects.forEach(btn =>
    btn.addEventListener('click', e => {
        e.preventDefault();
        let projectId = btn.getAttribute('id');
        let modal = document.getElementById('modal' + projectId);
        modal.style.display = "block";
        modal.classList.add('active');
    })
);

$('.close').on('click', () => {
    let modal = document.querySelector('.modal.active');
    modal.style.display = "none";
    modal.classList.remove('active');
});

$(window).on('click', (e) => {
    let modal = document.querySelector('.modal.active');
    if (e.target == modal) {
        modal.style.display = "none";
        modal.classList.remove('active');
    }
});

const menu = document.querySelector('.menu');
const menuBtn = document.querySelector('.menu-btn');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const navItems = document.querySelectorAll('.nav-item');

let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    if (!showMenu) {
        menuBtn.classList.add('close');
        menu.classList.add('show');
        menuNav.classList.add('show');
        menuBranding.classList.add('show');
        navItems.forEach(item => item.classList.add('show'));
        showMenu = true;
    } else {
        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        menuBranding.classList.remove('show');
        navItems.forEach(item => item.classList.remove('show'));
        showMenu = false;
    }
}