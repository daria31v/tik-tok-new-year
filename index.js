
// import { Notify } from 'notiflix/build/notiflix-notify-aio';

// import NewsApiService from './new-api-service';

const refs = {
    timerContainer: document.querySelector('.timer'),
    
    fieldEl: document.querySelector('.field'),
    daysEl: document.querySelector('.days'),
    hoursEl: document.querySelector('.hours'),
    minutesEl: document.querySelector('.minutes'),
    secondsEl: document.querySelector('.seconds'),
    giftBtn: document.querySelector('.btn'),
} 

const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

refs.giftBtn.addEventListener('click', onStart);

function onStart() {
    setInterval(timerCount, 1000)
};

const timerCount = (() => {
    const newYear = new Date('Jan 1 2023 00:00:00')      
    const startTime = Date.now();
    let lefUntil = newYear - startTime;
    const timeOnDisplay = convertMs(lefUntil);
                                              
    refs.daysEl.textContent = addLeadingZero(timeOnDisplay.days);
    refs.hoursEl.textContent = addLeadingZero(timeOnDisplay.hours);
    refs.minutesEl.textContent = addLeadingZero(timeOnDisplay.minutes);
    refs.secondsEl.textContent = addLeadingZero(timeOnDisplay.seconds);

    if (startTime === newYear) {
        alert ('🎄 З НОВИМ РОКОМ!!! ГОЙДА ДІСТАВАТИ ПОДАРУНКИ!!!')
    }

});

function convertMs(lefUntil) {
    const days = Math.floor(lefUntil / day);
    console.log(days)

    const hours = Math.floor((lefUntil % day) / hour);
    console.log(hours)

    const minutes = Math.floor(((lefUntil % day) % hour) / minute);
    console.log(minutes)
    const seconds = Math.floor((((lefUntil % day) % hour) % minute) / second);
    console.log(seconds)
    return { days, hours, minutes, seconds };
};
    
function addLeadingZero(value) {
    return value.toString().padStart(2, "0")
};