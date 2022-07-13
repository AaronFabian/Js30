// function setTime() {
//   const now = new Date();
//   const second = now.getSeconds();
//   console.log(second);

//   const secondDegrees = (second / 60) * 360 + 90;

//   const secondHand = document.querySelector('.second-hand');
//   secondHand.style.transform = `rotate(${secondDegrees}deg)`;

//   // ==============================
//   const minHand = document.querySelector('.min-hand');
//   const minute = now.getMinutes();
//   const minDegrees = (minute / 60) * 360 + 90;
//   minHand.style.transform = `rotate(${minDegrees}deg)`;

//   // =============================
//   const hourHand = document.querySelector('.hour-hand');
//   const hour = now.getHours();
//   console.log(`Hours = ${hour}`);
//   const hourDegrees = (hour / 12) * 360 + 90;
//   hourHand.style.transform = `rotate(${hourDegrees}deg)`;
// }

// setInterval(setTime, 1000);

function setTime() {
  const now = new Date();

  const secondHand = document.querySelector('.second-hand');
  const second = now.getSeconds();
  const secondDegrees = (second / 60) * 360 + 90;
  secondHand.style.transform = `rotate(${secondDegrees}deg)`;

  const minHand = document.querySelector('.min-hand');
  const minute = now.getMinutes();
  const minuteDegrees = (minute / 60) * 360 + 90;
  minHand.style.transform = `rotate(${minuteDegrees}deg)`;

  const hourHand = document.querySelector('.hour-hand');
  const hour = now.getHours();
  const hourDegrees = (hour / 12) * 360 + 90;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
  console.log(`This is second : ${second}`);
  console.log(`This is minutes : ${minute}`);
  console.log(`This is hour : ${hour}`);
}

setInterval(setTime, 1000);

// +=+=+=+=+=+=+=+=+=+=+=+=+=
function setTestLabs() {
  const now = new Date();
  const funt = now.getMilliseconds();
  console.log(`Ms = ${now}`);
}

setInterval(setTestLabs, 1000);
// ============================
