function verificarEdad() {
    let edad = parseInt(document.getElementById("edadInput").value) || 0;
    let mensaje = edad >= 18 ? "Eres mayor de edad." : "Eres menor de edad.";
    document.getElementById("resultado").innerHTML = `Tienes ${edad} años. <strong>${mensaje}</strong>`;
}