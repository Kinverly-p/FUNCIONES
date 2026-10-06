function calcularFactorial() {
    let n = parseInt(document.getElementById("factorialInput").value) || 0;
    let f = 1;
    for(let i = 1; i <= n; i++) { f *= i; }
    document.getElementById("resultado").innerHTML = `El factorial de ${n} es: <strong>${f}</strong>`;
}