//Leia um valor inteiro X (1 <= X <= 1000). 
//Em seguida mostre os ímpares de 1 até X,
// um valor por linha, inclusive o X, se for o caso

 // Lê o valor inteiro X
 const prompt = require('prompt-sync')(); // Importa a biblioteca para leitura do console
 let X = parseInt(prompt('Digite um valor inteiro (1 <= X <= 1000): '));

 // Verifica se X está dentro do intervalo permitido
 if (X < 1 || X > 1000) {
     console.log("O valor deve estar entre 1 e 1000.");
     return;
 }

 // Mostra os ímpares de 1 até X
 for (let i = 1; i <= X; i++) {
     if (i % 2 !== 0) { // Verifica se o número é ímpar
         console.log(i);
     }
 }

