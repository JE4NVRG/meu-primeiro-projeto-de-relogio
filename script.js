let digitalElement = document.querySelector ('.digital');
let sElement = document.querySelector ('.p_s');
let mElement = document.querySelector ('.p_m');
let hElement = document.querySelector ('.p_h');

function updadeClock() {
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let second = now.getSeconds();

    digitalElement.innerHTML =`${fixZero(hours)}:${fixZero(minutes)}:${fixZero(second)}`;

    //parte de cima configuracao do relogio digital.

    let sDeg = ((360 /60) * second) - 90;
    let mDeg = ((360 / 60) * minutes)- 90;
    let hDeg = ((360 / 12) * hours) - 90;
    sElement.style.transform = `rotate(${sDeg}deg)`;
    mElement.style.transform = `rotate(${mDeg}deg)`;
    hElement.style.transform = `rotate(${hDeg}deg)`;
}

function fixZero(time){
 return time < 10 ? `0${time}` : time;
    
}

setInterval(updadeClock, 1000);
updadeClock();