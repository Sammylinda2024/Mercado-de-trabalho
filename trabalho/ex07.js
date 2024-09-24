//Faça um algoritmo para ler um número indeterminado de dados, contendo cada um, a idade de um indivíduo. O último dado,
 //que não entrará nos cálculos, contém o valor de idade negativa.
 // Calcular e imprimir a idade média deste grupo de indivíduos.

 function calcularIdadeMedia() {
    let totalIdades = 0; // Para somar as idades
    let contador = 0; // Para contar o número de idades válidas

    while (true) {
        let idade = parseInt(prompt("Digite a idade do indivíduo (ou um número negativo para encerrar):"));

        if (idade < 0) {
            // Se a idade digitada for negativa, sair do loop
            break;
        }

        // Adiciona a idade ao total e incrementa o contador
        totalIdades += idade;
        contador++;
    }

    // Calcular a média
    if (contador > 0) {
        let media = totalIdades / contador;
        console.log("A idade média é: " + media);
    } else {
        console.log("Nenhuma idade válida foi informada.");
    }
}