

document.addEventListener("DOMContentLoaded", function () {

    const pages = document.querySelectorAll(".page");
    const navLinks = document.querySelectorAll("[data-page]");
    const menu = document.getElementById("menu");
    const menuToggle = document.getElementById("menuToggle");

    function showPage(pageId) {

        const targetPage = document.getElementById(pageId);

        if (!targetPage) return;

        pages.forEach(page => {
            page.classList.remove("active");
        });

        targetPage.classList.add("active");

        navLinks.forEach(link => {
            link.classList.toggle(
                "active",
                link.dataset.page === pageId
            );
        });

        if (menu) {
            menu.classList.remove("open");
        }

        if (menuToggle) {
            menuToggle.setAttribute("aria-expanded", "false");
        }

        window.scrollTo(0, 0);
    }

    navLinks.forEach(button => {
        button.addEventListener("click", function (event) {
            event.preventDefault();
            showPage(this.dataset.page);
        });
    });

    if (menuToggle && menu) {
        menuToggle.addEventListener("click", function () {
            menu.classList.toggle("open");
        });
    }

    document.getElementById("year").textContent =
        new Date().getFullYear();

    const words = [
        "coding",
        "web design",
        "learning",
        "creating"
    ];

    const typedWord = document.getElementById("typedWord");
    let index = 0;

    setInterval(() => {
        index = (index + 1) % words.length;
        typedWord.textContent = words[index];
    }, 2200);

});
function showPage(pageId, clickedButton) {

    // Hide all pages
    const pages = document.querySelectorAll('.page');

    pages.forEach(function(page) {
        page.classList.remove('active');
    });

    // Show selected page
    document.getElementById(pageId).classList.add('active');

    // Remove active navigation
    const buttons = document.querySelectorAll('.nav-btn');

    buttons.forEach(function(button) {
        button.classList.remove('active');
    });

    // Highlight clicked navigation
    if (clickedButton) {
        clickedButton.classList.add('active');
    }
}
