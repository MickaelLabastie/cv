var controller = new ScrollMagic.Controller();

for (let index = 1; index <= 6; index++) {
    var trainingScene = new ScrollMagic.Scene({
        duration: 95,
        triggerElement:'#trngItem0'+index,
    })
    .setClassToggle('#trngItem0'+index, 'change')
    .addIndicators()
    .addTo(controller);

    trainingScene.triggerHook(0.2);
}


