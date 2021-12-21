var burger = document.querySelector('.burger');
var bar = document.querySelector('.bar');
var nav = document.getElementById('navigation');
var navLinks = document.getElementsByClassName('navLink');

var pop = () => {
    bar.classList.toggle('change');
    nav.classList.toggle('pop');
}

burger.addEventListener('click', pop);
    
for (let index = 0; index < navLinks.length; index++) {
    let element = navLinks[index];
    element.addEventListener('click', pop);
}
