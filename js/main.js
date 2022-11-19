let elBody = document.querySelector('body');
let elBtn = document.querySelector('.dark');

elBtn.addEventListener('click', function () {
    elBody.classList.toggle('mode');
})

// Loader animation
const loading = document.querySelector('.loader');
const content = document.querySelector('body');
setTimeout(() => {
  loading.style.opacity = "0";
  content.style.opacity = "1";
}, 3000)