let numero = parseInt(prompt("Digite sua idade: "));
if (numero<16) {
    alert("Nao pode votar");
}else if(numero<18 || numero>70){
    alert("Voto opcional")
}else{
    alert("Voto obrigatorio")
}