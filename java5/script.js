function verificar() {

    data = new Date() ;

    if(data.getHours() <= 12 && data.getHours() >= 6) {
        document.getElementById("resultado").textContent="bom dia!, são " + data.getHours()+" horas da manhã" ;

    } else if(data.getHours() > 12 && data.getHours() <= 18) {
        document.getElementById("resultado").textContent="boa tarde!, são " + data.getHours()+" horas da tarde" ;

    } else  {
        document.getElementById("resultado").textContent="boa noite!, são " + data.getHours()+" horas da noite" ;
    }

}