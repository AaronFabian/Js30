// TANGKAP SI KEYBOARDnya
window.addEventListener('keydown', function (e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = this.document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  key.classList.add('playing'); //animasi playing !!
});

const keys = document.querySelectorAll('.key');
keys.forEach(key =>
  key.addEventListener('transitionend', function (e) {
    console.log(e);
    if (this !== 'transitionend') {
      console.log(`this adalah : ${this}`);
      this.classList.remove('playing');
    }
  })
);

// REPEAT !!
// window.addEventListener('keydown', function (e) {
//   const audio = document.querySelector(`audio[data-key="${e.code}"]`);

//   if (audio) {
//     audio.currentTime = 0;
//     audio.play();
//   }
// });

// const keys = document.querySelectorAll('.key');
// keys.forEach(key =>
//   key.addEventListener('transitionend', function (el) {
//     console.log(el);
//   })
// );
// ========End
// let a = true;
// const test = a ? 'benar' : 'salah';

// if (a) {

// }
