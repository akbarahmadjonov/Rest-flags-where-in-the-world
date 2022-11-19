let elBody = document.querySelector('body');
let elBtn = document.querySelector('.dark');

elBtn.addEventListener('click', function () {
    elBody.classList.toggle('mode');
})