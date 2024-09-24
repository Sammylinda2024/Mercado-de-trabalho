//Faça um programa que mostre os números pares entre 1 e 100, inclusive.

//Entrada
//Neste problema extremamente simples de repetição não há entrada.

//Saida
//Imprima todos os números pares entre 1 e 100, inclusive se for o caso, um em cada linha.

 var numero = 1

 while(numero <=100){
    if (numero %2 !== 1 ){
        console.log(numero)
    }
    numero++
 }