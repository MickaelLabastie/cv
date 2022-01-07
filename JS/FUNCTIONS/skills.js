/*JS functions file for skillsCard animations (CV Project)*/

var skillsCards = document.getElementsByClassName('skillsCard');
var progressBars = document.getElementsByClassName('progressBar');

/*
The object valSkills contains all the different values for each skill progress bar.
I can easily modify the object to update it so quickly!
*/
var valSkills = {

    valHtml: 70,
    valCss: 50,
    valJs: 50,
    valSass: 50,
    valBootstrap: 10,
    valVuejs: 0,
    valReact: 0,
    valVscode: 50,
    valSublimtext: 40,
    valGithub: 40,
    valFigma: 40,
    valPhp: 0,
    valMysql: 0,
    valSymfony: 0,
    valLaravel: 0

}

/*
The progress() function simultaneously modifies the values of:
-Text content in each span.counter element, to display the percentage
-Width style property for each div. element, to display loading bar effect
Thanks to setInterval() function those values change each 5ms.
We can see the progressive modifications as an animation.
When the count variable value is equal to the value defines in valSkills object (second parameter of the function)
we make the function ends with clearInterval()
*/
var progress = (index,valSkill) => {

    let count = 0;
    let timer = setInterval(() => {

        progressBars[index].childNodes[1].textContent = count+'%';
        progressBars[index].childNodes[3].style.width = count+'%';
        if(count === valSkill){
            clearInterval(timer);
        }
        count++;

    }, 5);

}

/*
The launchProgress() function start progress bar efffect thanks to progress() function
*/
var launchProgress = () => {
    for(let i = 0; i < progressBars.length;i++){
        progress(i,Object.values(valSkills)[i]);
    } 
}

/*
The reinitProgress() function reinitialise each progress bar
*/
var reinitProgress = () => {
    for(let i = 0; i < progressBars.length;i++){
        progress(i,0);
    } 
}

/*
We give to each skillsContainer an event listener on each mouse events (mouseenter and mouseleave)
to start progress bar effect when mouse enter on the skillcard, and reinitialised values when mouse leave it.
*/
for (let i = 0; i < skillsCards.length; i++) {

    const element = skillsCards[i];
    element.addEventListener('mouseenter', () => {
        setTimeout(launchProgress, 600);
    });
    element.addEventListener('mouseleave', reinitProgress);

}