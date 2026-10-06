function mostrarFecha() {
    let fecha = new Date().toLocaleDateString('es-ES', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
    document.getElementById("resultado").innerHTML = `Fecha actual: <strong>${fecha}</strong>`;
}