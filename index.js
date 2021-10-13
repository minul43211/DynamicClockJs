var clock = setInterval(time, 1000);

function time() {
    var d = new Date;
    var b = d.toLocaleTimeString();
    document.getElementById('clock').innerHTML = b;
}

