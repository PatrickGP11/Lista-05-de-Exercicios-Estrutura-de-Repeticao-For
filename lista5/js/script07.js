let soma = 0;

for (let i = 1; i <= 5; i++) {
    let n = parseFloat(prompt(`Digite o ${i}º número:`));
    soma += n;
}

let media = soma / 5;
console.log("Média =", media);
