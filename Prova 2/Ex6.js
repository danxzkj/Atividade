let shows = [2, 0, 3, 1, 4];
let totalshows= 0;

for(let i = 0; i < shows.length; i++){
    totalshows += shows[i];
}

console.log("Exercício 06");
console.log("Total de shows assistidos: ",  totalshows);
if(totalshows > 8){
    console.log("Você é super fã!")
}else{
    console.log("Aproveite mais os shows!,")
}