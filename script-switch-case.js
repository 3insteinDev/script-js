const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function classificarHeroi(nome, xp) {
    let nivel;
    let faixa;

    if (xp < 1000) faixa = "ferro";
    else if (xp <= 2000) faixa = "bronze";
    else if (xp <= 5000) faixa = "prata";
    else if (xp <= 7000) faixa = "ouro";
    else if (xp <= 8000) faixa = "platina";
    else if (xp <= 9000) faixa = "ascendente";
    else if (xp <= 10000) faixa = "imortal";
    else faixa = "radiante";

    switch (faixa) {
        case "ferro":
            nivel = "Ferro";
            break;
        case "bronze":
            nivel = "Bronze";
            break;
        case "prata":
            nivel = "Prata";
            break;
        case "ouro":
            nivel = "Ouro";
            break;
        case "platina":
            nivel = "Platina";
            break;
        case "ascendente":
            nivel = "Ascendente";
            break;
        case "imortal":
            nivel = "Imortal";
            break;
        case "radiante":
            nivel = "Radiante";
            break;
    }

    console.log(`O Herói de nome ${nome} está no nível de ${nivel}`);
}

rl.question("Digite o nome do herói: ", (nome) => {
    rl.question("Digite a quantidade de experiência (XP) do herói: ", (xp) => {
        classificarHeroi(nome, parseInt(xp, 10));
        rl.close();
    });
});
