function convertirMetros() {
    let metros = parseFloat(document.getElementById("metroInput").value) || 0;
    let cm = metros * 100;
    document.getElementById("resultado").innerHTML = `${metros} metro(s) equivalen a <strong>${cm} centímetros</strong>`;
}