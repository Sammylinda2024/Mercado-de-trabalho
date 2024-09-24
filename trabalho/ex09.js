//Gilberto é um famoso vendedor de esfirras na região. Porém,
// apesar de todos gostarem de suas esfirras, ele só sabe dar o troco com duas notas,
// ou seja, nem sempre é possível receber o troco certo. Para facilitar a vida de Gil,
// escreva um programa para ele que determine se é possível ou não devolver o troco exato utilizando duas notas.
//As notas disponíveis são: 2, 5, 10, 20, 50 e 100.

function podeDarTroco(troco) {
    const notas = [2, 5, 10, 20, 50, 100];
    
    // Verifica todas as combinações de duas notas
    for (let i = 0; i < notas.length; i++) {
        for (let j = i; j < notas.length; j++) { // Começamos com j = i para evitar duplicatas
            const soma = notas[i] + notas[j];
            if (soma === troco) {
                return true; // Se encontramos uma combinação que soma o troco, retornamos verdadeiro
            }
        }
    }
    
    return false; // Se nenhuma combinação funciona, retornamos falso
}

// Exemplo de uso
const troco = 7; // Troco que precisamos devolver
if (podeDarTroco(troco)) {
    console.log(`É possível dar o troco de ${troco} com duas notas.`);
} else {
    console.log(`Não é possível dar o troco de ${troco} com duas notas.`);
}