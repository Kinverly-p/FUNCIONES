function calcularArea() {
    let base = parseFloat(document.getElementById("baseInput").value) || 0;
    let altura = parseFloat(document.getElementById("alturaInput").value) || 0;
    let area = (base * altura) / 2;
    document.getElementById("resultado").innerHTML = `El área del triángulo es: <strong>${area}</strong>`;
}