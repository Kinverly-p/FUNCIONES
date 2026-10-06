function calcularSuma() {
    let n1 = parseFloat(document.getElementById("sumaN1").value) || 0;
    let n2 = parseFloat(document.getElementById("sumaN2").value) || 0;
    let suma = n1 + n2;
    document.getElementById("resultado").innerHTML = `La suma de ${n1} + ${n2} es: <strong>${suma}</strong>`;
}