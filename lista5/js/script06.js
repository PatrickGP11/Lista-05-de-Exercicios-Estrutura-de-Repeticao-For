let maior = -Infinity;
let menor = Infinity;

for (let i = 1; i <= 10; i++) {
    let n = parseInt(prompt(`Digite o ${i}º número:`));
    
    if (n > maior) maior = n;
    if (n < menor) menor = n;
}

console.log("Maior =", maior);
console.log("Menor =", menor);
