let ataques = [20, 35, 40, 15];
let vidafortaleza = 300;

for (let i = 0; i < ataques.length; i++) {
 vidafortaleza = vidafortaleza - ataques[i];
}

if (vidafortaleza > 0){
    console.log("Fortaleza resistiu com " + vidafortaleza + " pontos de vida!");
}else{
    console.log("Fortaleza foi destruida")
}