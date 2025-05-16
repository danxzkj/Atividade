let gols = [3, 3, 0, 5, 1];
let jogadores = ["Leo", "Sam", "Nina", "Gabi", "Caio"];

let maisgols = gols[0];
let artilheiro = jogadores[0];

for(let i = 1; i < gols.length; i++){
    if(gols[i] > maisgols){
        maisgols = gols[i];
        artilheiro = i;
    }
}

console.log("Exercício 09")
console.log('O artilharia foi ${jogadores[artilheiros]} com ${maisgols} gols');