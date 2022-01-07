/*JS functions file for scrolling animation on training section (CV Project)*/

/*Scrolling animation on ARTICLE#training element thanks to ScrolingMagic js library*/

/*Declaration of a controller to use scroll magic scene and associated properties and methods */
var controller = new ScrollMagic.Controller();

/*Scene method to define parameters for scrolling animation*/
var trainingScene = new ScrollMagic.Scene({
    triggerElement:'#training',
    triggerHook: 0.18,
})
.setClassToggle('.training-item', 'change')
// Add some indicators to visualize beginning and end of animation
// .addIndicators()
.addTo(controller);

//Example for multiple scenes on multiple elements
// for (let index = 1; index <= 6; index++) {
//     var trainingScene = new ScrollMagic.Scene({
//         duration: '15%',
//         triggerElement:'#trngItem0'+index,
//     })
//     .setClassToggle('#trngItem0'+index, 'change')
//     .addIndicators()
//     .addTo(controller);

//     trainingScene.triggerHook(0.24);
// }
