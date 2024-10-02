//Manipulação de Objetos
//Podemos adicionar, modificar ou excluir propriedades de um objeto
//a qualquer momento.

let pessoa =  {
    nome: "Ana",
    idade: 30
};

// Adiciona nova propridade
pessoa.cidade = "Rio de Janeiro";
console.log(pessoa.cidade); // Saída Rio de janeiro 

// Modificar propriedade existente
pessoa.idade = 31;
console.log(pessoa.idade); // Saida:31

// Excluir propriedade
delete pessoa .cidade;
console.log(pessoa.cidade); //Saída: underfined

