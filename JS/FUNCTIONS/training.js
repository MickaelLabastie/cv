var controller = new ScrollMagic.Controller();

/*CF GSAP*/
// var trainingTween = new TweenMax.to('#trngItem01', 0.6, {
//     width: '50%',
//     border: '2px solid #FFF',
//     borderRadius: '10px',
//     backgroundColor: '#000'
// });

var trainingScene01 = new ScrollMagic.Scene({
    duration: 100,
    triggerElement: '#trngItem01',
})
.setClassToggle('#trngItem01', 'change')
.addIndicators()
.addTo(controller);

var trainingScene02 = new ScrollMagic.Scene({
    duration: 100,
    triggerElement: '#trngItem02',
})
.setClassToggle('#trngItem02', 'change')
.addIndicators()
.addTo(controller);

trainingScene01.triggerHook(0.2);
trainingScene02.triggerHook(0.2);

/*.setTween(trainingTween)*/


