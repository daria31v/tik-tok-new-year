
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
    //  let idInterval = null;
        let idInterval = setInterval(() => {
            const newYear = new Date('Jan 1 2023 00:00:00')     
            console.log(newYear)    
            const startTime = Date.now()
            console.log(startTime)
        let lefUntil = newYear - startTime;
        const timeOnDisplay = convertMs(lefUntil);
                                                
        refs.daysEl.textContent = addLeadingZero(timeOnDisplay.days);
        refs.hoursEl.textContent = addLeadingZero(timeOnDisplay.hours);
        refs.minutesEl.textContent = addLeadingZero(timeOnDisplay.minutes);
        refs.secondsEl.textContent = addLeadingZero(timeOnDisplay.seconds);
       
        let endTime = refs.daysEl.textContent + refs.hoursEl.textContent + refs.minutesEl.textContent + refs.secondsEl.textContent;
                 console.log(endTime)   

        if (endTime === '00000000'){
        clearInterval(idInterval);
        alert ('🎄 З НОВИМ РОКОМ!!! ГОЙДА ДІСТАВАТИ ПОДАРУНКИ!!!');
        return
        }

    }, 1000);
};

function convertMs(lefUntil) {
    const days = Math.floor(lefUntil / day);
    const hours = Math.floor((lefUntil % day) / hour);
    const minutes = Math.floor(((lefUntil % day) % hour) / minute);
    const seconds = Math.floor((((lefUntil % day) % hour) % minute) / second);
    return { days, hours, minutes, seconds };
};
    
function addLeadingZero(value) {
    return value.toString().padStart(2, "0")
};