let resultado 
let rank
saldoVitoria(200,50)
if (resultado <= 10){
    rank = "Ferro"
}
else if(resultado > 10 && resultado<=20){
    rank = "Bronze"
}
else if(resultado >20 && resultado<= 50){
    rank = "Prata"
}
else if(resultado >50 && resultado<= 80){
    rank = "Ouro"
}
else if(resultado > 80 && resultado<= 90){
    rank = "Diamante"
}
else if(resultado > 90&& resultado<= 100){
    rank = "Lendário"
}
else{
    rank = "Imortal"
}

console.log("O Herói tem saldo de "+ resultado +" e esta no nivel de "+rank)

function saldoVitoria(vitoria,derrota){
    resultado = (vitoria - derrota)
return resultado
}
