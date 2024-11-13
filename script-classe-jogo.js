const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Função para criar um herói
function criarHeroi(nome, idade, tipo) {
  return {
    nome: nome,
    idade: idade,
    tipo: tipo,

    atacar: function() {
      let ataque;

      if (this.tipo === "mago") {
        ataque = "magia";
      } else if (this.tipo === "guerreiro") {
        ataque = "espada";
      } else if (this.tipo === "monge") {
        ataque = "artes marciais";
      } else if (this.tipo === "ninja") {
        ataque = "shuriken";
      } else {
        ataque = "ataque desconhecido";
      }

      console.log(`o ${this.tipo} atacou usando ${ataque}`);
    }
  };
}

function perguntar(pergunta) {
  return new Promise((resolve) => rl.question(pergunta, resolve));
}

async function obterDadosDoUsuario() {
  let nome = await perguntar("Digite o nome do herói: ");
  let idade = await perguntar("Digite a idade do herói: ");
  let tipo = await perguntar("Escolha o tipo do herói (mago, guerreiro, monge, ninja): ");
  
  while (!["mago", "guerreiro", "monge", "ninja"].includes(tipo.toLowerCase())) {
    tipo = await perguntar("Tipo inválido! Escolha entre 'mago', 'guerreiro', 'monge' ou 'ninja': ");
  }

  return { nome, idade, tipo: tipo.toLowerCase() };
}

async function criarHerois() {
  let continuar = true;

  while (continuar) {
    let dados = await obterDadosDoUsuario();

    let heroi = criarHeroi(dados.nome, dados.idade, dados.tipo);

    heroi.atacar();

    let resposta = await perguntar("Deseja criar outro herói? (sim/nao): ");
    continuar = resposta.toLowerCase() === "sim";
  }

  rl.close();
}

criarHerois();
