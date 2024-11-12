const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function classificarHeroi(nome, xp) {
    let nivel = "Ferro";

    // O laço `for` será executado apenas uma vez
    for (let i = 0; i < 1; i++) {
        if (xp < 1000) nivel = "Ferro";
        else if (xp <= 2000) nivel = "Bronze";
        else if (xp <= 5000) nivel = "Prata";
        else if (xp <= 7000) nivel = "Ouro";
        else if (xp <= 8000) nivel = "Platina";
        else if (xp <= 9000) nivel = "Ascendente";
        else if (xp <= 10000) nivel = "Imortal";
        else nivel = "Radiante";
    }

    console.log(`O Herói de nome ${nome} está no nível de ${nivel}`);
}

rl.question("Digite o nome do herói: ", (nome) => {
    rl.question("Digite a quantidade de experiência (XP) do herói: ", (xp) => {
        classificarHeroi(nome, parseInt(xp, 10));
        rl.close();
    });
});