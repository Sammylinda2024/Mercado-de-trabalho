let numeros = [5, 8, 12, 20, 7, 15, 3];

// Variável para armazenar a soma
let soma = 0;

// Itera pelo array e soma cada valor ao total
for (let i = 0; i < numeros.length; i++) {
  soma += numeros[i];
}
// Exibe o resultado da soma
console.log("A soma de todos os valores no array é:", soma);