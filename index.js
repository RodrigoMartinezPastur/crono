let hr = 0;
let min = 0;
let sec = 0;
let mili = 0;
let interval;

function start() {
  interval = setInterval(watch, 10);
}
function parar() {
  clearInterval(interval);
}

function reiniciar() {
  clearInterval(interval);
  sec = 0;
  mili = 0;
  document.getElementById("mirar").innerText = "0:0:00";
}

function watch() {
  mili++;
  if (mili == 60) {
    sec++;
    mili = 0;
    if (sec == 60) {
      sec = 0;
      min++;
      if (min == 60) {
        min = 0;
        hr++;
      }
    }
  }
  document.getElementById("mirar").innerText =
    hr + ":" + min + ":" + sec + ":" + mili;
}
