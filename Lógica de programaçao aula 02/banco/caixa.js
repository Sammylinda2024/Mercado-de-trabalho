saldoDisponivel = 1000;
valorDoSaque = prompt ("informe o valor do saque:");

if (valorDoSaque <= saldoDisponivel) {
    saldoDisponivel = saldoDisponivel - valorDoSaque
    document.write("voce está sacando r$", valorDoSaque,".");
} else {
    document.write("o valor solicitado é maior que o valor disponivél para saque!");
}

document.write("saldo disponivel: R$", saldoDisponivel);