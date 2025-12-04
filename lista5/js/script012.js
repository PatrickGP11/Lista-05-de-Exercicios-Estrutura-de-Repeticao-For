let n = parseInt(prompt("Digite um número:"));
let fat = 1;

for (let i = 1; i <= n; i++) {
    fat *= i;
}

console.log("Fatorial =", fat);
