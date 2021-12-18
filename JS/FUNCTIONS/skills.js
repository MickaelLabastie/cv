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
    valGithub: 50,
    valFigma: 50,
    valPhp: 0,
    valMysql: 0,
    valSymfony: 0,
    valLaravel: 0

}

/*
The progress() function simultaneously modifies the values of:
-Text content in each span element, to display the percentage
-Width style property for each div element, to display loading bar effect
Thanks to setInterval() function those values change each 50ms.
We can see the progressive modifications as an animation.
When the count variable value is equal to the value defines in valSkills object (in parameter of the function)
we end up with clearnIterval()
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

    }, 15);

}

/*
The launchProgress() function start progress bar efffect thnaks to progress() function
*/
var launchProgress = () => {
    for(let i = 0; i < progressBars.length;i++){
        progress(i,Object.values(valSkills)[i]);
    } 
}

var reinitProgress = () => {
    for(let i = 0; i < progressBars.length;i++){
        progress(i,0);
    } 
}

for (let i = 0; i < skillsCards.length; i++) {

    const element = skillsCards[i];
    element.addEventListener('mouseenter', () => {
        setTimeout(launchProgress, 600);
    });
    element.addEventListener('mouseleave', reinitProgress);

}