function numeroAleatorio() {
    let min = parseInt(document.getElementById("minInput").value) || 1;
    let max = parseInt(document.getElementById("maxInput").value) || 10;
    let rand = Math.floor(Math.random() * (max - min + 1)) + min;
    document.getElementById("resultado").innerHTML = `Aleatorio entre ${min} y ${max}: <strong>${rand}</strong>`;
} 