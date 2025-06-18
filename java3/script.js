function verificar() {
    idade = Number(document.getElementById("idade").value)
    if (idade>=18) {document.getElementById("resultado").textContent="voce e maior de idade"}else{
        document.getElementById("resultado").textContent="voce e menor de idade"
    }
}