
const pageButtons = document.querySelectorAll("[data-page]");
const pages = document.querySelectorAll(".page");
const navLinks = document.querySelectorAll(".nav-link");

const menu = document.getElementById("menu");
const menuToggle = document.getElementById("menuToggle");

// SWITCH BETWEEN HOME AND PERSONAL INFORMATION
function showPage(pageId) {

    pages.forEach(page => {
        page.classList.toggle("active", page.id === pageId);
    });

    navLinks.forEach(link => {
        link.classList.toggle(
            "active",
            link.dataset.page === pageId
        );
    });

    menu.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

// NAVIGATION BUTTONS
pageButtons.forEach(button => {

    button.addEventListener("click", event => {

        const pageId = button.dataset.page;

        if (pageId) {
            event.preventDefault();
            showPage(pageId);
        }

    });

});

// MOBILE MENU
menuToggle.addEventListener("click", () => {

    const isOpen = menu.classList.toggle("open");

    menuToggle.setAttribute(
        "aria-expanded",
        String(isOpen)
    );

});

// AUTOMATIC YEAR
document.getElementById("year").textContent =
    new Date().getFullYear();

// ANIMATED TEXT
const words = [
    "coding",
    "web design",
    "learning",
    "creating"
];

const typedWord = document.getElementById("typedWord");

let wordIndex = 0;

setInterval(() => {

    wordIndex = (wordIndex + 1) % words.length;

    typedWord.textContent = words[wordIndex];

}, 2200);
