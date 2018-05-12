(function () {
  const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

  // get the date from slider date, pulled from events page 
  let getDate = document.getElementById('eventStartDate').innerText;

  // parse string into a date object 
  let countDown = Date.parse(getDate);

  let x;
  x = setInterval(function () {

    // declare now as current time, distance as time till event
    let now = new Date().getTime(),
      distance = countDown - now;

    // calculate current day
    let currentDay = distance / day;

    // declare days LI item to use in if statement, stop continual adding of classes
    let elementDay = document.getElementById('days-li');

    // if current day is today
    if (currentDay >= -1 && currentDay <= 0) {

      // To stop continuing adding CSS classes if already added
      if (elementDay.classList.contains('hide-countdown')) {
        return
      }
      else {
        // this will only run once if current day is today, adds CSS class to hide LI element                  
        elementDay.className += " hide-countdown";

        let elementHour = document.getElementById('hours-li');
        elementHour.className += " hide-countdown";

        let elementMin = document.getElementById('minutes-li');
        elementMin.className += " hide-countdown";

        let elementSec = document.getElementById('seconds-li');
        elementSec.className += " hide-countdown";

        // show 'Event is today' if day is today
        let elementEventText = document.getElementById('event-today-text');
        elementEventText.className += " display-text";
      }
    }

    // if current day is in past, set timers to 0
    else if (currentDay <= -1) {
      document.getElementById('days').innerText = '0',
        document.getElementById('hours').innerText = '0',
        document.getElementById('minutes').innerText = '0',
        document.getElementById('seconds').innerText = '0';
    }

    else {
      // For all other cases, continue to updated countdown
      document.getElementById('days').innerText = Math.floor(distance / (day)),
        document.getElementById('hours').innerText = Math.floor((distance % (day)) / (hour)),
        document.getElementById('minutes').innerText = Math.floor((distance % (hour)) / (minute)),
        document.getElementById('seconds').innerText = Math.floor((distance % (minute)) / second);
    }

  }, second)
})();