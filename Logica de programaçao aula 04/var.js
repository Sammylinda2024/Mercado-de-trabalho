var numero1=parsenInt(prompt("informe o primeiro numero"))
var numero2=parsenInt(prompt("Informe o segundo numero"))
var numero3=parsInt(prompt("informe o terceiro numero"))

if(numero1> numero2 && numero1 > numero3){
    console.log("maior numero: " +  numero1)
}
else if (numero2 > numero3){
    console.log("maior numero: "+ numero2)
}
else{
    console.log("maior numero:" + numero3)
}
