var timelineItems = document.querySelectorAll('.timeline-item');

var appear = function(){
        var selector = this.id+'Details';
        var targetElement = document.getElementById(selector);
        targetElement.classList = 'details';
        targetElement.addEventListener('click', function(){
            targetElement.classList = 'none';
        });
}

for(let index = 0;index < timelineItems.length;index++){
    const timelineItem = timelineItems[index];
    timelineItem.addEventListener('click', appear);
}
