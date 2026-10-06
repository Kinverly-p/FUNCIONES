function verificarVocal() {
    let letra = (document.getElementById("vocalInput").value || "").toLowerCase();
    if ("aeiouáéíóú".includes(letra)) {
        document.getElementById("resultado").innerHTML = `La letra '${letra.toUpperCase()}' es una <strong>VOCAL</strong>`;
    } else {
        document.getElementById("resultado").innerHTML = `La letra '${letra.toUpperCase()}' es una <strong>CONSONANTE</strong>`;
    }
}