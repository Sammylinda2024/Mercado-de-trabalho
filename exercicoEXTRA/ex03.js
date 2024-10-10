//Questão 3: "Liz é uma estudante que está aprendendo JavaScript e precisa organizar suas tarefas diárias. Ela decidiu usar um vetor para guardar suas tarefas.
//As tarefas são descritas apenas por um texto e armazenadas em um vetor da seguinte forma:
//const tarefas = [""Estudar JavaScript"", ""Fazer exercícios"", ""Ler um livro""];
//Adicione ao código:
//Listar Tarefas: Crie uma função chamada listarTarefas que exiba no console todas as tarefas que Liz tem. A saída deve ser parecida com esta:
//1. Estudar JavaScript 
//2. Fazer exercícios 
//3. Ler um livro
//Adicionar Tarefas: Implemente uma função chamada adicionarTarefa que permita a Liz adicionar uma nova tarefa ao vetor. A função deve receber um parâmetro, que é a descrição da nova tarefa. Após adicionar, chame a função listarTarefas para mostrar a lista atualizada.
//Remover Tarefas: Crie uma função chamada removerTarefa que permita a Liz remover uma tarefa da lista. A função deve receber o índice da tarefa a ser removida (por exemplo, 0 para a primeira tarefa) e atualizar o vetor. Após remover, chame a função listarTarefas para mostrar a lista atualizada.
//Dicas para Respostas:
//Na função listarTarefas, utilize um loop for para percorrer o vetor e imprimir cada tarefa com seu respectivo índice.
//Na função adicionarTarefa, use o método push para adicionar a nova tarefa ao vetor.
//Na função removerTarefa, utilize o método splice para remover a tarefa no índice especificado."


const tarefas = ["Estudar JavaScript", "Fazer exercicios", "Ler um livro"];

function listarTarefas() {
  for (let i = 0; i < tarefas.length; i++) {
    console.log(`${i + 1}. ${tarefas[i]}`);
  }
}

function adicionarTarefa(novaTarefa) {
  tarefas.push(novaTarefa);
  console.log("Tarefa adicionada com sucesso!");
  listarTarefas();
}

function removerTarefa(indice) {
  tarefas.splice(indice, 1);
  console.log("Tarefa removida com sucesso!");
  listarTarefas();
}
console.log(" Lista de tarefas inicial")
listarTarefas();

console.log("\nAdicionando uma nova tarefa 'aula de musica'")
adicionarTarefa("aula de musica");

console.log("\nRemovendo a primeira tarefa");
removerTarefa(0);
 
 
