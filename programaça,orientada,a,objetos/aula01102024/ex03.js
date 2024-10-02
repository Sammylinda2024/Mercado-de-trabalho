function Carro(marca,modelo,ano,cor){
  this.marca = marca;
  this.modelo = modelo;  
  this.ano = ano;
  this.cor = cor;
  this.ligar = function() {
    console.log("O carro está ligado.");
  };
} 

// Criando uma nova instãncia de carro
let meuCarro = new Carro("volkswagen","gol",2016,"preto");
console.log(meuCarro.marca); // saida: volkwagen