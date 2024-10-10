document.getElementById('year').textContent = new Date().getFullYear();

document.addEventListener('DOMContentLoaded', function () {
    const navItem = document.querySelectorAll('.nav-item');
    navItem.forEach((item, index) => {
        setTimeout(() => {
            item.classList.add('show');
        }, 100 * index);
    })
});
