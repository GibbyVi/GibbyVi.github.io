document.querySelectorAll('.toggle-btn').forEach(button => {
    button.addEventListener('click', () => {
        const sidebar = button.parentElement;
        sidebar.classList.toggle('expanded');
    });
});