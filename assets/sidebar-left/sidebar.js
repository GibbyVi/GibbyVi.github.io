document.addEventListener("DOMContentLoaded", () => {
    const sidebar = document.querySelector(".sidebar-left");
    const toggleButton = document.querySelector(".toggle-sidebar");

    toggleButton.addEventListener("click", () => {
        sidebar.classList.toggle("expanded");
    });
});