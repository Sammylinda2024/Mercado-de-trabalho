// Cria um array de números
let numeros = [5, 8, 12, 20, 7, 15, 3];

// Inicializa a variável 'maior' com o primeiro valor do array
let maior = numeros[0];

// Itera pelo array para encontrar o maior valor
for (let i = 1; i < numeros.length; i++) {
  if (numeros[i] > maior) {
    maior = numeros[i];
  }
}

// Exibe o maior valor encontrado no array
console.log("O maior valor presente no array é:", maior);
