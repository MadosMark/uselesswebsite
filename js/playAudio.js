const audio1 = document.getElementById("audio1")
const audio2 = document.getElementById("audio2")
const audio3 = document.getElementById("audio3")
const audio4 = document.getElementById("audio4")
const audio5 = document.getElementById("audio5")

window.addEventListener('load', (event) => {  
  setTimeout(() => {
    audio1.play()
  }, 500);

  setTimeout(() => {
    audio2.play()
  }, 1000);

  setTimeout(() => {
    audio3.play()
  }, 2000);

  setTimeout(() => {
    audio4.play()
  }, 3000);

  setTimeout(() => {
    audio5.play()
  }, 4000);
});
