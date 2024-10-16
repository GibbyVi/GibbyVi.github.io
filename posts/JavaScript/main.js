document.querySelectorAll('.theme-btn').forEach(button => {
    button.addEventListener('click', () => {
        document.body.setAttribute('data-theme', button.getAttribute('data-theme'));
    });
});

const sidebar = document.getElementById('sidebar');
const toggleBtn = document.getElementById('toggle-btn');

toggleBtn.addEventListener('click', () => {
    if (sidebar.style.width === '50px') {
        sidebar.style.width = '250px';
        document.querySelector('.content').style.marginLeft = '250px';
    } else {
        sidebar.style.width = '50px';
        document.querySelector('.content').style.marginLeft = '50px';
    }
});