let hour = '0' + 0;
let minute = '0' + 0;
let second = '0' + 0;
let miliSecond = '0' + 0;
let interval;

const startButton = document.querySelector('.js-start-button');
const resetButton = document.querySelector('.js-reset-button');

startButton.addEventListener('click', () => {
    TimeStart();
});

resetButton.addEventListener('click', () => {
    resetTime();
});

let isStartTimer = false;

function TimeStart() {
    if (!isStartTimer) {
        interval = setInterval(() => {
            miliSecond++;
            miliSecond = miliSecond < 10 ? '0' + miliSecond : miliSecond;

            if (miliSecond == 100) {
                second++;
                second = second < 10 ? '0' + second : second;
                miliSecond = '0' + 0;
            }
            if (second == 60) {
                minute++;
                minute = minute < 10 ? '0' + minute : minute;
                second = '0' + 0;
            }
            if (minute == 60) {
                hour++;
                hour = hour < 10 ? '0' + second : second;
                minute = '0' + 0;
            }
            putTime();
        }, 10);
        isStartTimer = true;

        startButton.innerHTML = 'Stop';
        startButton.style.backgroundColor = '#a10800';
    } else {
        clearInterval(interval);

        isStartTimer = false;
        startButton.innerHTML = 'Start';
        startButton.style.backgroundColor = null;
    }
}

function resetTime() {
    clearInterval(interval);
    miliSecond = '0' + 0;
    second = '0' + 0;
    minute = '0' + 0;
    hour = '0' + 0;
    putTime();

    isStartTimer = false;
    startButton.innerHTML = 'Start';
    startButton.style.backgroundColor = null;
}

function putTime() {
    document.querySelector('.js-milisecond').innerText = miliSecond;
    document.querySelector('.js-second').innerText = second;
    document.querySelector('.js-minute').innerText = minute;
    document.querySelector('.js-hour').innerText = hour;
}
