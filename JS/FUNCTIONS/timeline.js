/*JS functions file for timeline animations (CV Project)*/

var open_buttons = document.querySelectorAll('.openBtn');
var close_buttons = document.querySelectorAll('.closeBtn');
var button;


var openDetails = function(){
    var selector = this.parentElement.id+'Details';
    var targetElement = document.getElementById(selector);
    targetElement.classList = 'detailsOn';
    targetElement.nextElementSibling.style.display = 'flex';
    for (let index = 0; index < open_buttons.length; index++) {
        button = open_buttons[index];
        button.style.pointerEvents = 'none';
    }
}

var closeDetails = function(){
    var selector = this.previousElementSibling.id;
    var targetElement = document.getElementById(selector);
    targetElement.classList = 'detailsOff';
    for (let index = 0; index < open_buttons.length; index++) {
        button = open_buttons[index];
        button.style.pointerEvents = 'auto';
    }
    this.style.display = 'none';
}

for(let index = 0;index < open_buttons.length;index++){
    var open_button = open_buttons[index];
    var close_button = close_buttons[index];
    open_button.addEventListener('click', openDetails);
    close_button.addEventListener('click', closeDetails);
}

