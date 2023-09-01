

/*  =========== Stop Watch Start */

// var prompt1 = prompt("Enter hours")
// var prompt2 = prompt("Enter minutes").slice(0,2)
// var prompt3 = prompt("Enter seconds")

var hrs = document.getElementById("hrs")
var mins = document.getElementById("mins")
var secs = document.getElementById("secs")
var ms = document.getElementById("ms")

var hours = 23;
var minutes = 59;
var seconds = 59;
var milliseconds = 99;
var interval;   // for stopping setInterval()
var startBtn = document.getElementById("start")

function start() {
    interval = setInterval(startTimer, 20)
    startBtn.disabled = true;
    startBtn.style.backgroundColor = "#d3d3d3"
    startBtn.style.color = "#000"
}
function startTimer() {
    milliseconds--;
    console.log(milliseconds)

    ms.innerHTML = milliseconds;
    if (milliseconds == 0) {
        seconds--;
        secs.innerHTML = seconds;
        milliseconds = 59;
        ms.innerHTML = milliseconds;
    }
    else if (seconds == 0) {
        minutes--;
        mins.innerHTML = minutes;
        seconds = 59;
        seconds.innerHTML = seconds
    }
    else if (minutes == 0) {
        hours--;
        hrs.innerHTML = hours;
        minutes = 59;
        mins.innerHTML = minutes;
    }
}
function stop() {
    clearInterval(interval)
    startBtn.disabled = false;
    startBtn.style.backgroundColor = "#ff0000"
    startBtn.style.color = "#fff"
    
}
function reset() {
    clearInterval(interval)
    startBtn.disabled = false;
    hours = 23;
    minutes = 59;
    seconds = 59;
    milliseconds = 99;

    hrs.innerHTML = "23";
    mins.innerHTML = "59";
    secs.innerHTML = "59";
    ms.innerHTML = "99";

}

/*  =========== Stop Watch Start */


// var a = document.getElementById('a')
// var b = document.getElementById('b')
// var c = document.getElementById('c')
// var d = document.getElementById('d')

// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)

// a.value = "00"
// b.value = "00"
// c.value = "00"
// d.value = "00"
// // if (a.value.length)

// function set() {
    
// }
























































































