const button = document.querySelector('button');
const buttonId = document.getElementById('buttonId')

button.addEventListener('click', event => {
    location.href = "secondPage.html";
});

button.addEventListener("mouseover", event => {
    event.target.style.boxShadow = '0 0 0 10000px red';
    event.target.style.transition = "ease-in 0.3s";
    color = "red";
})

button.addEventListener("mouseleave", event => {
    event.target.style.boxShadow = '';
    event.target.style.transition = '';
    color = '';
})
