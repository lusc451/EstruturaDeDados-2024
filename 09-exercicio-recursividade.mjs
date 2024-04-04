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