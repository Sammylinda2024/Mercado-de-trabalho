nota1=parseInt(prompt("informe a primeira nota"))
nota2=parseInt(prompt("Informe a segunda nota"))
nota3=parseInt(prompt("Imforme a terceira nota"))
nota4=parseInt(prompt("informe a quarta nota"))
media=parseInt(prompt(nota1+nota2+nota3+nota4))/4

if(media > 6){
    document.write("Aprovado")
} else{
   document.write("Reprovado")
}