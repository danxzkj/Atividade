let alturadacriança = 1.35;

let podemontanharussa = false;
let poderodagigante = false;
let podebatebate = false;

if(alturadacriança >= 1.5){
    podemontanharussa = true
}

if(alturadacriança >= 1.2){
    poderodagigante = true
}

if(alturadacriança >= 1.1){
    podebatebate = true
}

console.log("Pode brincar na montanha russa? " + (podemontanharussa ? 'sim' : 'não'));
console.log("Pode brincar na roda-girante? " + (poderodagigante ? 'sim' : 'não'));
console.log("Pode brincar no bate bate? " + (podebatebate ? 'sim' : 'nao'))