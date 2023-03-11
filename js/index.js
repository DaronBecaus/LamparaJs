let acender = document.getElementById("acender");
acender.addEventListener("click", () => {
  document.getElementById("lampada").src = "img/pic_bulbon.gif";
});

let desligar = document.getElementById("desligar");
desligar.addEventListener("click", () => {
  document.getElementById("lampada").src = "img/pic_bulboff.gif";
});
