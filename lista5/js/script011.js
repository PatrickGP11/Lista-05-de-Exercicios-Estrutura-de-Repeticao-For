let cont = 0;

for (let i = 1; i <= 10; i++) {
    let idade = parseInt(prompt(`Digite a idade ${i}:`));

    if (idade >= 18) cont++;
}

console.log("Maiores de idade:", cont);
