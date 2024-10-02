let caminhao = {
    marca: 'Volkswagem',
    modelo :'Constellation',
    ano:2024,
    cor:'pata',
    cabine: [
        {tipo: ' simples',capacidade:2,teto:'fechado'},
        {tipo:'dupla',capacidade:5}
    ],
ligar: function(){
    console.log('o caminhao esta ligado');
},

desligar: function(){
    console.log(' o caminhao está desligado ');
}

};
console.log(caminhao.cabine[0].teto);
console.log(caminhao["ano"], caminhao["marca"]);

caminhao.ligar();