function verificarNumero() {
    let num = parseFloat(document.getElementById("positivoInput").value) || 0;
    let res = num > 0 ? "POSITIVO" : num < 0 ? "NEGATIVO" : "CERO";
    document.getElementById("resultado").innerHTML = `El número ${num} es <strong>${res}</strong>`;
}