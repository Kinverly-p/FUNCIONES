function invertirTexto() {
    let texto = document.getElementById("invertirInput").value || "";
    let invertido = texto.split("").reverse().join("");
    document.getElementById("resultado").innerHTML = `Texto invertido: <strong>"${invertido}"</strong>`;
}