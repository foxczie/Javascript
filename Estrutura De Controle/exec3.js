// Desenvolva um programa que receba um ano e determine se ele é bissexto. Um ano é bissexto se for múltiplo de 4, mas não de 100, a menos que seja múltiplo de 400.
while(true){
    let ano = parseInt(prompt("Digite um ano: "));
    if (ano % 4 == 0 && ano % 100 != 0 || ano % 400 == 0 && ano % 100 == 0) alert("Bissexto")
    else alert("Nao e bissexto")
}