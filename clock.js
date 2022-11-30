const hourEl = document.querySelector(".hours");
const minEl = document.querySelector(".mins");
const secondEl = document.querySelector(".seconds");


function updateClock () {
   const now = new Date();
   
   const getHour = now.getHours();
   const getMinute = now.getMinutes();
   const getSecond = now.getSeconds();

   const hourDeg = (getHour /12) * 360;
   const minuteDeg = (getMinute / 60)*360;
   const secondDeg = (getSecond / 360) *360;

   minEl.style.transform = `rotate(${minuteDeg}deg)`;
   hourEl.style.transform = `rotate(${hourDeg}deg)`;
   secondEl.style.transform = `rotate(${secondDeg}deg)`;
  
}

setInterval(updateClock,1000);

