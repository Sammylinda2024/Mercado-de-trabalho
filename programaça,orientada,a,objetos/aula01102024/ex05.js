//Analogia para facilitar:
//Pense em pares chave-valor como campos de um formulário:
//Chave: O nome do campo do formulário (por exemplo, Nome,
   // Idade).
    //Valor: A informação que você preenche para cada campo (por
    //exemplo, Ana, 30).
    //Ou imagine um dicionário:
    //A chave seria a palavra.
   // O valor seria a definição dessa palavra.

   // Objeto com pares chave-valor 
   let pessoa = {
    nome:"joao", // chave:'nome', valor:"joao"
    idade:25,  // chave: ' idade', valor:25
    cidade:"sao paulo" // chave: 'cidade', valor: "sao paulo"
   };

   // Acessando os valores usando as chaves
   console.log(pessoa.nome); // saída: joão
   console.log(pessoa["idade"]); // saida:25