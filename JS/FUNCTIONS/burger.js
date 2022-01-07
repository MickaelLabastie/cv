/*JS function file for burger menu animation (CV Project)*/

var burger = document.querySelector('.burger');
var bar = document.querySelector('.bar');
var nav = document.getElementById('navigation');
var navLinks = document.getElementsByClassName('navLink');

/*
The function menuBurger displays style (open / close) for two elements:
- burger 
- menu on the right
*/
var menuBurger = () => {
    bar.classList.toggle('change');
    nav.classList.toggle('pop');
}

/*
Event listener for click event on burger.
Each click on burger opens/closes the menu.
*/
burger.addEventListener('click', menuBurger);

/*
Event listener for each links in menu.
When we click on links the menu is closed and burger style is reinitialized.
*/
for (let index = 0; index < navLinks.length; index++) {
    let element = navLinks[index];
    element.addEventListener('click', menuBurger);
}
