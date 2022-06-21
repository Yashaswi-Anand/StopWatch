const timer = document.getElementsByClassName('timer-style');
//console.log(timer);

// timer text
const mSecond = timer[0].children[2];
const second = timer[0].children[1];
const minute = timer[0].children[0];

// buttons 
const start = document.getElementsByName('start');
const stop = document.getElementsByName('stop');
const reset = document.getElementsByName('reset');

// declear a global variable to store the time
var interval;

// start button
start[0].addEventListener('click', function() {
    clearInterval(interval);
    interval = setInterval(function() {
        // running millisecond timer
        mSecond.innerHTML = parseInt(mSecond.innerHTML) + 1;
        mSecond.innerHTML = mSecond.innerHTML < 10 ? '0' + mSecond.innerHTML : mSecond.innerHTML;

        // running second timer
        if (mSecond.innerHTML == 99) {
            mSecond.innerHTML = 0;
            second.innerHTML = parseInt(second.innerHTML) + 1;
            second.innerHTML = second.innerHTML < 10 ? '0' + second.innerHTML : second.innerHTML;
        }
        //second.innerHTML = second.innerHTML < 10 ? '0' + second.innerHTML : second.innerHTML;

        // running minute timer
        if (second.innerHTML == 59) {
            second.innerHTML = 0;
            minute.innerHTML = parseInt(minute.innerHTML) + 1;
            minute.innerHTML = minute.innerHTML < 10 ? '0' + minute.innerHTML : minute.innerHTML;
        }
        
    });
});

// stop button
stop[0].addEventListener('click', function(){
    clearInterval(interval);
});

// reset button
reset[0].addEventListener('click', function(){
    clearInterval(interval);
    // mSecond.innerHTML = '00';
    // second.innerHTML = '00';
    // minute.innerHTML = '00';
    timer[0].children[0].innerHTML = '00';
    timer[0].children[1].innerHTML = '00';
    timer[0].children[2].innerHTML = '00';
});




