    function calcular(calc) {
    var num1=Number(document.getElementById('num1').value)
    var num2=Number(document.getElementById('num2').value)

    var resultado;

    if(calc == "soma"){
        
        resultado=num1+num2;
    
    } else if (calc == "subtrair"){

        resultado = num1-num2;
    } else if (calc == "dividir"){

        resultado = num1/num2;
    } else if (calc == "multiplicar"){

        resultado = num1*num2;
    }

    window.alert(resultado);
}
