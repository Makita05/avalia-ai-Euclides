const btnVermelho = document.getElementById("vermelho");
const btnVerde = document.getElementById("verde");
const btnCiano = document.getElementById("ciano");

btnVermelho.addEventListener('click', function (){
    document.body.style.backgroundColor = 'red'; 
})

btnVerde.addEventListener('click', function () {
    document.body.style.backgroundColor = 'green';
})

btnCiano.addEventListener('click', function () {
    document.body.style.backgroundColor = 'cyan';
})