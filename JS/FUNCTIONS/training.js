var trngItem01 = document.getElementById('trngItem01');

var controller = new ScrollMagic.Controller();

for (let index = 1; index <= 6; index++) {
    var trainingScene = new ScrollMagic.Scene({
        duration: 100,
        triggerElement:'#trngItem0'+index,
    })
    .setClassToggle('#trngItem0'+index, 'change')
    // Add some indicators to visualize beginning and end of animation
    .addIndicators()
    .addTo(controller);

    trainingScene.triggerHook(0.24);
}
