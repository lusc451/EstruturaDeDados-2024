function calcularFatorial(n) {
    let res = 1;

    for (let i = n; i > 1; i--) {
        res *= i;
    }

    return res;
}

console.log("O fatorial de 5 é: ", calcularFatorial(5));