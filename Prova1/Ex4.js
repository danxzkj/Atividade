let numeros = [5, 6, 6, 5, 4]
let soma = 0;

for (let i = 0; i < numeros.length; i++) {
    console.log(soma);
    console.log('numero', numeros[i]);
    soma = soma + numeros[i]
}

console.log(soma)