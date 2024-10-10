/**Questão 1: Elaborar um programa que adicione números a um vetor. O programa deve impedir a inclusão de números repetidos. 
 * Exibir a lista de números a cada inclusão. */

//criar variável
let numeros = [];

function adicionarNumero(novoNumero){
if(!numeros.includes(novoNumero)){
    numeros.push(novoNumero);
    console.log('numero adicionado', novoNumero);
} else{
    console.log('numero repetido. Nao foi adicionado:',novoNumero);
}
    console.log('lista atual de numeros:', numeros);
}
// exemplo de uso:
adicionarNumero(2);
adicionarNumero(7);
adicionarNumero(9);
adicionarNumero(13)
adicionarNumero(9);



