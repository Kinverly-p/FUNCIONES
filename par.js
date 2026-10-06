function verificarPar() {
    let num = parseInt(document.getElementById("parInput").value) || 0;
    let tipo = (num % 2 === 0) ? "PAR" : "IMPAR";
    document.getElementById("resultado").innerHTML = `El número ${num} es <strong>${tipo}</strong>`;
}