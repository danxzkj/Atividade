let curtidas = [12, 25, 8, 32, 16, 20];
let i = 0;
let maiorcurtida = curtidas[0];

while (i < curtidas.length) {
    if (curtidas[1] > maiorcurtida) {
        maiorcurtida = curtidas[i];
    }
    i++
}

console.log("Exercício 05");
console.log("O Maior numero de curtidas: ", maiorcurtida);
console.log("-------------------------")