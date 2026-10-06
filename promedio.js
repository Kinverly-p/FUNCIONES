function calcularPromedio() {
    let n1 = parseFloat(document.getElementById("prom1").value) || 0;
    let n2 = parseFloat(document.getElementById("prom2").value) || 0;
    let n3 = parseFloat(document.getElementById("prom3").value) || 0;
    let prom = (n1 + n2 + n3) / 3;
    document.getElementById("resultado").innerHTML = `El promedio es: <strong>${prom.toFixed(2)}</strong>`;
}