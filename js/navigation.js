document.addEventListener('DOMContentLoaded', () => {
    const title = document.getElementById('title');
    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', () => {
        if (window.scrollY > lastScrollY) {
            // Ocultar al bajar
            title.classList.add('hidden');
        } else {
            // Mostrar al subir
            title.classList.remove('hidden');
        }
        lastScrollY = window.scrollY;
    });
});