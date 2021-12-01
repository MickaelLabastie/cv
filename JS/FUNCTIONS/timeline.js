var timeline = document.querySelector('.timeline');
var timelineItems = document.querySelectorAll('.timeline-item');
var itemsDetails = document.querySelectorAll('.none');
var laValette = document.getElementById('laValette');
var toulon = document.getElementById('toulon');
var lorient = document.getElementById('lorient');
var brest = document.getElementById('brest');
var laGarde = document.getElementById('laGarde');
var laValetteDetails = document.getElementById('laValetteDetails');
var toulonDetails = document.getElementById('toulonDetails');
var lorientDetails = document.getElementById('lorientDetails');
var brestDetails = document.getElementById('brestDetails');
var laGardeDetails = document.getElementById('laGardeDetails');
var button = false;

var changeBgd = ()=>{
    if(button == false){
        timeline.style.background = 'url(\'../../ASSETS/Pictures/afpa.png\') no-repeat center / cover';
    }else{
        timeline.style.background = 'none';
        timeline.style.backgroundColor = 'rgba(0,0,0,0.7)';  
    }
    button = !button;
}

