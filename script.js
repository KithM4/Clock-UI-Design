const hourHand = document.querySelector(".hour");
const minuteHand = document.querySelector(".minute");
const secondHand = document.querySelector(".second");

const updateTime = () => {
  let date = new Date();

  let hours = date.getHours() % 12;
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  const hourMinSec = document.getElementById("hourMinSec");
  hourMinSec.textContent = `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

  let secondDeg = (seconds / 60) * 360;
  let minuteDeg = (minutes / 60) * 360 + (seconds / 60) * 6;
  let hourDeg = (hours / 12) * 360 + (minutes / 60) * 30;

  secondHand.style.transform = `rotate(${secondDeg}deg)`;
  minuteHand.style.transform = `rotate(${minuteDeg}deg)`;
  hourHand.style.transform = `rotate(${hourDeg}deg)`;
};

setInterval(updateTime, 1000);
updateTime();
