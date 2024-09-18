function calcularAumentoSalarial(salarioAtual){
    let novoSalario

    if (salarioAtual <=500){
        novoSalario = salarioAtual * 1.15; // aumento de 15%
    } else if (salarioAtual <=1000){
        novoSalario = salarioAtual * 1.25; // aumento de 12,5%
    } else{
        novoSalario = salarioAtual * 1.10; // aumento de 10%
    }
    
    return novoSalario.toFixed(2); // Retorna o novo salario com 2 casas decimais 
}

let salarioAtual = parseFloat(prompt("Digite o seu salario atual"))
let salarioReajustado = calcularAumentoSalarial(salarioAtual);
console.log(`o novo salário é: R$ ${salarioReajustado}`);