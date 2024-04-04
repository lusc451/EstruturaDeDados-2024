function calcularFatorial(n) {
    let res = 1;

    for (let i = n; i > 1; i--) {
        res *= i;
    }

    return res;
}

console.log("O fatorial de 6 é: ", calcularFatorial(6));
console.log("O fatorial de 5 é: ", calcularFatorial(5));
console.log("O fatorial de 4 é: ", calcularFatorial(4));
console.log("O fatorial de 3 é: ", calcularFatorial(3));
console.log("O fatorial de 2 é: ", calcularFatorial(2));
console.log("O fatorial de 1 é: ", calcularFatorial(1));
console.log("O fatorial de 0 é: ", calcularFatorial(0));