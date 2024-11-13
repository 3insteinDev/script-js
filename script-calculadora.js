const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


const niveis = {
    0: "Ferro",         
    10: "Bronze",       
    21: "Prata",         
    51: "Ouro",          
    81: "Diamante",      
    91: "Lendário",      
    101: "Imortal"       
};

function calcularRank(vitorias, derrotas) {
    const saldoVitorias = vitorias - derrotas;
    let nivel = "Ferro"; 

    for (const limite in niveis) {
        if (vitorias >= limite) {
            nivel = niveis[limite];
        }
    }

    console.log(`O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}`);
}

rl.question("Digite o número de vitórias: ", (vit) => {
    rl.question("Digite o número de derrotas: ", (der) => {
        calcularRank(parseInt(vit, 10), parseInt(der, 10));
        rl.close();
    });
});
