//Questão 2: Crie um programa que exiba em uma tabela e destaque todos os números primos que estão entre 0 e 200.

for (var i=0; i<=200; i++){
    var divisor=0;
   for (var j=0; j<=i; j++){
       if (i%j==0){
           divisor++;
          }       
   }   
   if (divisor==2){
       console.log(i)
   }
}