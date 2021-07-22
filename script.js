// Selecionando os elementos necessario
let digitalElement = document.querySelector('.digital');
let sElement = document.querySelector('.p_s');
let mElement = document.querySelector('.p_m');
let hElement = document.querySelector('.p_h');

function updateClock(){
    //pegando a data atual
    let now = new Date();
    //pegando a hora atual
    let hour = now.getHours();
    //pegando os minutos atual
    let minute = now.getMinutes();
    //pegando os segundos
    let second = now.getSeconds();

    // mostrando a hora atual e na funcao(fixeZero)ele adicona o quando o time é menor que 10
    digitalElement.innerHTML = `${fixeZero(hour)}: ${fixeZero(minute)}: ${fixeZero(second)}`;

    let sDeg = ((360 / 60) * second ) - 90;
    let mDeg = ((360 / 60 ) * minute) - 90;
    let hDeg = ((360 / 12)  * hour) -90;

    sElement.style.transform = `rotate(${sDeg}deg)`
    mElement.style.transform = `rotate(${mDeg}deg)`
    hElement.style.transform = `rotate(${hDeg}deg)`

}

function fixeZero(time){
    

    return time < 10 ? `0${time}` : time;
}


setInterval(updateClock, 1000);
updateClock()


