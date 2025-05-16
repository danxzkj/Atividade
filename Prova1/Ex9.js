let tempos = [312, 298, 345, 301, 289, 330, 310, 299];
let nomes = ["Atlas", "Optimus", "Nova", "Bolt", "Titan", "Zeus", "Echo", "Shadow"];

let menortempo = tempos[0];
let indicemenor = 0;

for(let i = 0; i <tempos.length; i++){
    if(tempos[i] < menortempo){
        menortempo = tempos[i];
        indicemenor;
    }
}

console.log("O robo campeao foi " + nomes[indicemenor] + " Com o menor tempo de " + menortempo + " segundos");
