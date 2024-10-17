document.getElementById('year').textContent = new Date().getFullYear();

document.addEventListener('DOMContentLoaded', function () {
    const navItem = document.querySelectorAll('.nav-item');
    navItem.forEach((item, index) => {
        setTimeout(() => {
            item.classList.add('show');
        }, 100 * index);
    })
});

const value = document.querySelector('#range_value');
const input = document.querySelector('#range');
value.textContent = input.value;
input.addEventListener ("input", (event) => (
    value.textContent = event.target.value
));