/*

1. Crie uma função recursiva que receba um número inteiro positivo N e calcule o somatório dos números de 1 a N.

2. Faça uma funcão recursiva que receba um número inteiro positivo par N e imprima utilizando
o console.log(), todos os números pares de 0 até N em ordem decrescente.

*/



//Exercicio 1
function soma(n){
    if(n == 1){
        return 1;
    }else{
        return n + soma(n -1);
    }
}

console.log("A somatória dos numeros de 1 a 5 é: ", soma(5));

//Exercicio 2
let par = [];
function numPar(n){
    
    if(n == 0){
        par.push(n);
        return par;

    }else if(n % 2 == 0){
        par.push(n);
        return n = numPar(n - 1);

    }else{
        return n = numPar(n - 1);
    }
    
}
// console.log(numPar(8));
console.log("Os números pares em ordem decrescente de 6 até 0 são: ", numPar(6));