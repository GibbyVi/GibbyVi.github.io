document.addEventListener('DOMContentLoaded', () => {
    const leftSidebar = document.querySelector('.sidebar.left');
    const rightSidebar = document.querySelector('.sidebar.right');
    const mainContent = document.querySelector('main');
    const toggleButton = document.getElementById('toggleSidebar');
    let isExpanded = false;

    // Alternar estado de las barras laterales
    toggleButton.addEventListener('click', () => {
        isExpanded = !isExpanded;

        if (isExpanded) {
            leftSidebar.classList.add('expanded');
            rightSidebar.classList.add('expanded');
            mainContent.classList.add('expanded-left', 'expanded-right');
        } else {
            leftSidebar.classList.remove('expanded');
            rightSidebar.classList.remove('expanded');
            mainContent.classList.remove('expanded-left', 'expanded-right');
        }
    });

    // Hover dinámico
    leftSidebar.addEventListener('mouseenter', () => {
        if (!isExpanded) leftSidebar.classList.add('expanded');
    });

    leftSidebar.addEventListener('mouseleave', () => {
        if (!isExpanded) leftSidebar.classList.remove('expanded');
    });

    rightSidebar.addEventListener('mouseenter', () => {
        if (!isExpanded) rightSidebar.classList.add('expanded');
    });

    rightSidebar.addEventListener('mouseleave', () => {
        if (!isExpanded) rightSidebar.classList.remove('expanded');
    });
});