function mostrarNombre() {
    let nombre = document.getElementById("nombreInput").value || "Invitado";
    document.getElementById("resultado").innerHTML = `Hola, <strong>${nombre}</strong>. ¡Qué gusto tenerte aquí!`;
}