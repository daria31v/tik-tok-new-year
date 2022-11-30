import './src/css/styles.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';



// import NewsApiService from './new-api-service';


const refs = {
    btnEl: document.querySelector('[data-start]'),
    timerContainer: document.querySelector('.timer'),
    fieldEl: document.querySelector('.field'),
    daysEl: document.querySelector('[data-days]'),
    hoursEl: document.querySelector('[data-hours]'),
    minutesEl: document.querySelector('[data-minutes]'),
    secondsEl: document.querySelector('[data-seconds]'),
} 

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,

    onClose(selectedDates) {
        refs.btnEl.disabled = true;
        let newData = new Date(selectedDates[0]);
        const nowDate = Date.now();
       
        refs.userDate.disabled = true;
        refs.btnEl.disabled = false;   
        refs.btnEl.addEventListener('click', () => {
            let idInterval = null;
            refs.btnEl.disabled = true;
             
            idInterval = setInterval(() => {
                const currentTime = new Date();
          
                let timeMs = newData - currentTime;
                const timeOnDisplay = convertMs(timeMs);
                                              
                refs.daysEl.textContent = addLeadingZero(timeOnDisplay.days);
                refs.hoursEl.textContent = addLeadingZero(timeOnDisplay.hours);
                refs.minutesEl.textContent = addLeadingZero(timeOnDisplay.minutes);
                refs.secondsEl.textContent = addLeadingZero(timeOnDisplay.seconds);

                let endTime = refs.daysEl.textContent + refs.hoursEl.textContent + refs.minutesEl.textContent + refs.secondsEl.textContent;
                

                if (endTime === '00000000'){
                    refs.btnEl.disabled = false;
                    refs.userDate.disabled = false;
                    clearInterval(idInterval);
                    Notify.info("Time's up. Choose another date");
                    return;
                }

            }, 1000);
        });
    } 
}   
           


function convertMs(timeMs) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;


  // Remaining days
  const days = Math.floor(timeMs / day);
  // Remaining hours
  const hours = Math.floor((timeMs % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((timeMs % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((timeMs % day) % hour) % minute) / second);
    
    return { days, hours, minutes, seconds };
    
      
}

function addLeadingZero(value) {
    return value.toString().padStart(2, "0")
}

