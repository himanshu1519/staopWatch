let msec = 0,
    sec = 0,
    min = 0,
    hour = 0;
// we returning the value from HTML file just like Hour, Min, Sec or Msec
let appendMs = document.getElementById("msec"); 
let appendSec = document.getElementById("sec");
let appendMin = document.getElementById("min");
let appendHr = document.getElementById("hr");

// we returning the value from HTML file just like start button, stop button and reset button
let buttonStart = document.getElementById("start");
let buttonStop = document.getElementById("stop");
let buttonReset = document.getElementById("reset");

let interval;

function timer() {
    msec++;
    if (msec > 9) {   
        appendMs.innerHTML = msec; //with the use of this we are inserting the required content just like here Msec
    } else {
        appendMs.innerHTML = "0" + msec;
    }
    if (msec > 99) {  // here we are checking a condtion Msec is greter than 99 so Sec will we started
        sec++;
        msec = 0;
        msec++;
        if (sec > 9) {
            appendSec.innerHTML = sec; //with the use of this we are inserting the required content just like here Sec
        } else {
            appendSec.innerHTML = "0" + sec;
        }
        if (sec > 59) { // here we are checking a condtion Sec is greter than 59 so Min will we started
            sec = 0;
            min++;
            sec++;
            if (min > 9) {
                appendMin.innerHTML = min; //with the use of this we are inserting the required content just like here Min
            } else {
                appendMin.innerHTML = "0" + min;
            }
            if (min > 59) { // here we are checking a condtion Min is greter than 59 so Hour will we started
                min = 0;
                hour++;
                min++;
                if (hour > 9) {
                    appendHr.innerHTML = hour; //with the use of this we are inserting the required content just like here Hr
                } else {
                    appendHr.innerHTML = "0" + hour;
                }
            }
        }
    }
}
buttonStart.onclick = function () {    //when user click on event the onclick function will occurs as here Start the StopWtach
    interval = setInterval(timer);
};
buttonStop.onclick = function () {    //when user click on event the onclick function will occurs as here stop the StopWtach
    clearInterval(interval);
};

buttonReset.onclick = function () {      //when user click on event the onclick function will occurs as here Reset the StopWtach
    msec = 0;
    sec = 0;
    min = 0;
    hour = 0;
    appendMs.innerHTML = "00";
    appendSec.innerHTML = "00";
    appendMin.innerHTML = "00";
    appendHr.innerHTML = "00";
};