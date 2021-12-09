var controller = new ScrollMagic.Controller();
var trainingTween = new TweenMax.to('#trngItem01', 0.1, {
    width: '50%',
    border: '2px solid #FFF',
    borderRadius: '10px',
    backgroundColor: '#000'
});
var trainingScene = new ScrollMagic.Scene({
    triggerElement: '.training',
    triggerHook: 0.2
})
.setTween(trainingTween).addIndicators().addTo(controller);
