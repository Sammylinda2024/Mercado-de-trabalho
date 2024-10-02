// Cria um array com 10 números
let numeros = [23, 55, 78, 10, 67, 45, 82, 33, 99, 50];

// Variável para armazenar a contagem de números maiores que 50
let contagem = 0;

// Itera pelo array e conta os números maiores que 50
for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] > 50) {
    contagem++;
  }
}

// Exibe a quantidade de números maiores que 50
console.log("Quantidade de números maiores que 50:", contagem);
