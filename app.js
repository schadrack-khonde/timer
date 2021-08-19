  const day = document.getElementById('days');
  const hour = document.getElementById('hours');
  const minute = document.getElementById('minutes');
  const second = document.getElementById('seconds');

  

  const updateDate = ()=> {
    let  fullDate = new Date();
    let days = fullDate.getDate();
    let hours = fullDate.getHours();
    let minutes = fullDate.getMinutes();
    let seconds = fullDate.getSeconds();
    day.textContent = days;
    hour.textContent = hours;
    minute.textContent = minutes;
    second.textContent = seconds;

  }
  
  setInterval(updateDate, 1 );