function calcularDescuento() {
    let precio = parseFloat(document.getElementById("precioInput").value) || 0;
    let total = precio * 0.85; // 15% de descuento
    document.getElementById("resultado").innerHTML = `Precio original: $${precio} | Con 15% desc: <strong>$${total.toFixed(2)}</strong>`;
}