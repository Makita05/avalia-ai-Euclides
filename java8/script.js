const btnMostar = document.getElementById ("mostrar")
const btnEsconder = document.getElementById("esconder")
const btnMensagem = document.getElementById("mensagem")

btnMostar.addEventListener('click', function () {
    btnMensagem.style.display = "grid"
})

btnEsconder.addEventListener('click', function () {
    btnMensagem.style.display = "none"
})