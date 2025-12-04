let n = parseInt(prompt("Digite um número:"));
let soma = 0;

for (let i = 1; i <= n; i++) {
    if (i % 3 === 0) soma += i;
}

console.log("Soma dos múltiplos de 3 =", soma);
