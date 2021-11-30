/*JS functions file for hangar animation(CV Project)*/

var boxST01 = document.getElementById('boxST01');
var door01 = document.getElementById('door01');
var door02 = document.getElementById('door02');
var door03 = document.getElementById('door03');
var door04 = document.getElementById('door04');
var door05 = document.getElementById('door05');
var door06 = document.getElementById('door06');
var interrupter = false;

/*
Those two functions animate the subTitle01 block during opening and closing doors.
pannelUp(): animates the pannel to the top.
pannelDown(): animates the pannel to the point of origin (middle).
The transition property whom apply to transform property is necessary to correct the pannel position during animation.
6s is the total animation time.
*/
var pannelUp = ()=>{
    boxST01.style.top = '0';
    boxST01.style.transform = 'translate(-50%,0)';
    boxST01.style.transition = 'top 6s ease-in-out, transform 6s ease-in-out';
}

var pannelDown = ()=>{
    boxST01.style.top = '50%';
    boxST01.style.transform = 'translate(-50%,-50%)';
    // boxST01.style.transition = 'top 6s ease-in-out, transform 6s linear ease-in-out';
}

/* 
Opening effect for 2 seconds simultaneously on centered inner doors.
The doors move above the two next doors, respectively on the left and the right side.
Centered inner doors and the two next doors are now aligned.
*/
var openDoors01 = ()=>{
    door03.style.left = '16.666667%';
    door03.style.transition = 'left 2s ease-in-out';
    door04.style.right = '16.666667%';
    door04.style.transition = 'right 2s ease-in-out';
}

/*
Opening effect for 2 seconds simultaneously on centered inner doors and doors below.
The four doors move above the two last doors, respectively on the left and the right side.
All doors are now aligned.
*/
var openDoors02 = ()=>{
    door03.style.left = '0';
    door03.style.transition = 'left 2s ease-in-out';
    door04.style.right = '0';
    door04.style.transition = 'right 2s ease-in-out';
    door02.style.left = '0';
    door02.style.transition = 'left 2s ease-in-out';
    door05.style.right = '0';
    door05.style.transition = 'right 2s ease-in-out';
}

/*
Last Step: All doors are open.It seems to be 'disappeared' from the viewport.
*/
var openDoors03 = ()=>{
    door03.style.left = '-17%';
    door03.style.transition = 'left 2s ease-in-out';
    door04.style.right = '-17%';
    door04.style.transition = 'right 2s ease-in-out';
    door02.style.left = '-17%';
    door02.style.transition = 'left 2s ease-in-out';
    door05.style.right = '-17%';
    door05.style.transition = 'right 2s ease-in-out';
    door01.style.left = '-17%';
    door01.style.transition = 'left 2s ease-in-out';
    door06.style.right = '-17%';
    door06.style.transition = 'right 2s ease-in-out';
}

/*
Functions closeDoorsXX use the same properties than openDoorsXX functions in a different order.
Those functions make all the doors close.
*/
var closeDoors01 = ()=>{
    door03.style.left = '0';
    door03.style.transition = 'left 2s ease-in-out';
    door04.style.right = '0';
    door04.style.transition = 'right 2s ease-in-out';
    door02.style.left = '0';
    door02.style.transition = 'left 2s ease-in-out';
    door05.style.right = '0';
    door05.style.transition = 'right 2s ease-in-out';
    door01.style.left = '0';
    door01.style.transition = 'left 2s ease-in-out';
    door06.style.right = '0';
    door06.style.transition = 'right 2s ease-in-out';
}

var closeDoors02 = ()=>{
    door03.style.left = '16.666667%';
    door03.style.transition = 'left 2s ease-in-out';
    door04.style.right = '16.666667%';
    door04.style.transition = 'right 2s ease-in-out';
    door02.style.left = '16.666667%';
    door02.style.transition = 'left 2s ease-in-out';
    door05.style.right = '16.666667%';
    door05.style.transition = 'right 2s ease-in-out';
}

var closeDoors03 = ()=>{
    door03.style.left = '33.333334%';
    door03.style.transition = 'left 2s ease-in-out';
    door04.style.right = '33.333334%';
    door04.style.transition = 'right 2s ease-in-out';
}

/*
To make doors appear at the begining of animation (by closing doors)
Use with setTimeout() and 1ms in activateDoors() function below (read the activateDoors() commentary to know more about it)
*/
var appear = ()=>{
    door01.style.display = 'block';
    door02.style.display = 'block';
    door03.style.display = 'block';
    door04.style.display = 'block';
    door05.style.display = 'block';
    door06.style.display = 'block';
}

/*
To avoid overflow effect at the end of animation (by opening doors).
disappear() function makes all the blocks disappeared
*/
var disappear = ()=>{
    door01.style.display = 'none';
    door02.style.display = 'none';
    door03.style.display = 'none';
    door04.style.display = 'none';
    door05.style.display = 'none';
    door06.style.display = 'none';
}

/*
This function makes all the animation coming true.
It calls the different functions in a certain order with a delay time given by the setTimeout function.
It has two parts in an if/else statement.Each part is activated thanks to the boolean value of interrupter variable.
*/
var activateDoors = (event)=>{
    if(interrupter == false){
        pannelUp();
        openDoors01();
        setTimeout(openDoors02, 2000);
        setTimeout(openDoors03, 4000);
        setTimeout(disappear, 6000);
    }else{
        pannelDown();
        appear();
        /*
        A short time is necessary to make blocks appear first (thanks to appear() function, line above) and have the closing effect after
        That's why closeDoors01() is called with 1ms.
        Without this 1ms delay, appear() and closeDoors01() functions are called simultaneously, and there is no first closing of 2s effect on the doors
        */
        setTimeout(closeDoors01, 1);
        setTimeout(closeDoors02, 2000);
        setTimeout(closeDoors03, 4000);
    }
    interrupter = !interrupter;
}