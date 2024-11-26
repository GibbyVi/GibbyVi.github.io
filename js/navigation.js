// navigation.js
document.addEventListener('DOMContentLoaded', function () {
    const leftSidebar = document.getElementById('sidebar-left');
    const rightSidebar = document.getElementById('sidebar-right');
    
    // Crear los botones para alternar las barras laterales
    const leftSidebarToggle = document.createElement('div');
    leftSidebarToggle.classList.add('sidebar-toggle-btn');
    leftSidebarToggle.textContent = '≡';  // Icono para abrir/cerrar barra lateral izquierda
    document.body.appendChild(leftSidebarToggle);

    const rightSidebarToggle = document.createElement('div');
    rightSidebarToggle.classList.add('sidebar-toggle-btn', 'right');
    rightSidebarToggle.textContent = '≡';  // Icono para abrir/cerrar barra lateral derecha
    document.body.appendChild(rightSidebarToggle);

    // Agregar eventos para alternar las barras laterales
    leftSidebarToggle.addEventListener('click', function() {
        leftSidebar.classList.toggle('active');
    });

    rightSidebarToggle.addEventListener('click', function() {
        rightSidebar.classList.toggle('active');
    });
});