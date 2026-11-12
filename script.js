
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
