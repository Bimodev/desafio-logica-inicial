let nome = prompt("Qual é o seu nome de herói? ");
let xp = 1;
let nivel;

for (let i = 1; i <=8000; i += 1000) {
    

    if (xp <= 1000) {
        nivel = "Ferro";
        xp +=1000;
    } else if (xp <= 2000) {
        nivel = "Bronze";
        xp +=3000;
    } else if (xp <= 5000) {
        nivel = "Prata";
        xp +=1000;
    } else if (xp <= 7000) {
        nivel = "Ouro";
        xp +=2000;
    } else if (xp <= 8000) {
        nivel = "Platina";
        xp +=1000;
    } else if (xp <= 9000) {
        nivel = "Ascendente";
        xp +=1000;
    } else if (xp <= 10000) {
        nivel = "Imortal";
        xp +=1000;
    } else {
        nivel = "Radiante";
    }

    console.log("O Herói de nome " + nome + " está no nível de " + nivel);
}
