//Criando um objeto "caminhao"
 
 let caminhao = {
    marca: "volkswagen", // Propriedade:chave é 'maraca', valor é "Volkswagen"
    modelo:"constellation", // propriedade: chave é 'modelo', valor é "constellation"
    ano:2024,               // propriedade: chave é 'ano' , valor é 2024
    cor: "prata",           // Prooriedade: chave é 'cor' , valor é "prata"

// metodo: define uma funçao associada ao objeto 
ligar: function() {
    console.log("O caminhao esta ligado.");
}
 };

 // Acessando propriedades do objeto 
 console.log(caminhao.marca);   // Saída:Volkswagen
 console.log(caminhao["ano"]);  // Saida:2024

 // Chamando o metodo do objeto
 caminhao.ligar(); // saida: O caminhao está ligado.


