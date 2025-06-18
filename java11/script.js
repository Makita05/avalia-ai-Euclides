const btn = document.getElementById ("escreva")
const msg = document.getElementById("carac")

btn.addEventListener('input', function(){
    msg.innerText=btn.value.length;
})