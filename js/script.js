const countDate = new Date('jan 1, 2021 00:00:00').getTime();


function newYear() {
    const now = new Date().getTime();
    gap = countDate - now;

    const sec = 1000;
    const min = 1000 * 60;
    const hour = min * 60;
    const day = hour * 24;

    const d = Math.floor(gap / (day))
    const h = Math.floor((gap % (day)) / (hour))
    const m = Math.floor((gap % (hour)) / (min))
    const s = Math.floor((gap % (min)) / (sec))

    document.getElementById('day').innerText = d;
    document.getElementById('hour').innerText = h;
    document.getElementById('min').innerText = m;
    document.getElementById('sec').innerText = s;
}

setInterval(() => {
    newYear();
}, 1000)


const countDate2 = new Date('jan 1, 2021 00:00:00').getTime();


function newYear2() {
    const now = new Date().getTime();
    gap = countDate - now;

    const sec = 1000;
    const min = 1000 * 60;
    const hour = min * 60;
    const day = hour * 24;

    const d = Math.floor(gap / (day))
    const h = Math.floor((gap % (day)) / (hour))
    const m = Math.floor((gap % (hour)) / (min))
    const s = Math.floor((gap % (min)) / (sec))

    document.getElementById('day2').innerText = d;
    document.getElementById('hour2').innerText = h;
    document.getElementById('min2').innerText = m;
    document.getElementById('sec2').innerText = s;
}

setInterval(() => {
    newYear2();
}, 1000)