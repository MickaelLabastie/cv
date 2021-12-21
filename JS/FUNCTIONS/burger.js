var burger = document.querySelector('.burger');
var bar = document.querySelector('.bar');
var nav = document.getElementById('navigation');

burger.addEventListener('click', () => {

    bar.classList.toggle('change');
    nav.classList.toggle('pop');

});
