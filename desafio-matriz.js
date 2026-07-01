// ============================================================
//   DESAFIOS – Matriz
// ============================================================

// ------------------------------------------------------------
// DESAFIO 1 – Jogo da velha simplificado
// ------------------------------------------------------------
// a) Declare um tabuleiro 3x3 vazio (preencha os espaços vazios com "-") e exiba-o.
// b) Faça 5 jogadas alternando entre "X" e "O":
//    - Peça a linha e a coluna.
//    - Se a posição já estiver ocupada, exiba aviso e peça novamente.
//    - Após cada jogada, exiba o tabuleiro com console.table().
// c) Não precisa verificar vencedor — apenas alternar X e O.

// → Seu código aqui:
const { IncomingMessage } = require("http");
const readline = require("readline");
let lerTeclado = require("readline-sync");
// let jogador = "X";
// let tabuleiro = [
//   ["-", "-", "-"],
//   ["-", "-", "-"],
//   ["-", "-", "-"],
// ];
// console.table(tabuleiro);
// for (let i = 0; i < 5; i++) {
//   let linha = lerTeclado.questionInt("Digite a linha: ");
//   if (linha < 3 && linha > 0) {
//     let coluna = lerTeclado.questionInt("Digite a coluna: ");
//     if (coluna < 3 && coluna > 0) {
//       if (tabuleiro[linha][coluna] === "-") {
//         tabuleiro[linha][coluna] = jogador;
//         console.table(tabuleiro);
//         if (jogador === "X") {
//           jogador = "O";
//         } else {
//           jogador = "X";
//         }
//       } else {
//         console.log("Posicao ocupada");
//         i--;
//       }
//     } else {
//       console.log("Digite um numero valido.");
//       i--
//     }
//   } else {
//     console.log("Digite um numero valido.");
//     i--
//   }
// }

console.log("_______________________________");

// ------------------------------------------------------------
// DESAFIO 2 – Batalha naval simplificada
// ------------------------------------------------------------
// a) Crie um tabuleiro 5x5 (matriz de objetos):
//    cada célula = { temNavio: false, atingida: false }
// b) Posicione 5 navios em coordenadas aleatórias utilizando Mat
// h.random()
//    Garanta que não haja repetição de posição.
// c) Usando while, peça ao usuário tiros (linha e coluna).
//    - Se acertar:  exiba "Acertou!" (e marque atingida = true).
//    - Se errar:    exiba "Água..."
//    - Não permita atirar 2x na mesma posição.
// d) Após cada tiro, mostre o "mapa":
//    "~" = água, "O" = navio não atingido, "X" = navio atingido.
// e) Pare quando todos os 5 navios forem atingidos.
// f) Exiba o número total de tiros usados.

// → Seu código aqui:
// let tabuleiro = [];
// for (let i = 0; i < 5; i++) {
//   let linha = [];
//   for (let j = 0; j < 5; j++) {
//     linha.push({ temNavio: false, atingida: false });
//   }
//   tabuleiro.push(linha);
// }
// for (let k = 0; k < 5; k++) {
//   let linha = Math.floor(Math.random() * 5);
//   let coluna = Math.floor(Math.random() * 5);
//   if (tabuleiro[linha][coluna].temNavio == true) {
//     k--;
//   } else {
//     tabuleiro[linha][coluna].temNavio = true;
//   }
// }
// let acertou = 0;
// let totalNavios = 5;
// let tentativa = 0
// do {
//   let linha = lerTeclado.questionInt("Digite a linha: ");
//   if (linha > 4 || linha < 0) {
//     console.log("tente outra posição");
//   } else {
//     let coluna = lerTeclado.questionInt("Digite a coluna: ");
//     if (coluna > 4 || coluna < 0) {
//       console.log("tente outra posicao");
//     } else {
//       let celula = tabuleiro[linha][coluna];
//       if (celula.atingida == false) {
//         celula.atingida = true;
//         if (celula.temNavio) {
//           console.log("Acertou!");
//           acertou++;
//           tentativa++
//           console.log(`
// Total de acertos: ${acertou}
// Total de tentativas: ${tentativa}
//             `)
//         } else {
//           console.log("Àgua...");
//           tentativa++
//           console.log(`
// Total de tentativas: ${tentativa}`
//           )
//         }
//         console.table(tabuleiro);
//       } else {
//         console.log("tente outra posicao");
//       }
//     }
//   }
// } while (acertou < totalNavios);
// console.log(`Parabéns, voce acertou em ${tentativa} tentativas.`)
// console.log("_______________________________");

// ------------------------------------------------------------
// DESAFIO 3 – Boletim escolar com console.table
// ------------------------------------------------------------
// a) Utilizando:
const turma = [
  { nome: "Ana", notas: [8.0, 7.5, 9.0, 6.5] },
  { nome: "Bruno", notas: [4.0, 5.5, 6.0, 5.0] },
  { nome: "Carla", notas: [9.5, 9.0, 9.5, 10] },
  { nome: "Diego", notas: [7.0, 6.5, 7.0, 8.5] },
  { nome: "Eva", notas: [3.5, 4.0, 5.0, 4.5] },
];
// b) Construa um vetor 'boletim' onde cada item seja:
//    { nome, b1, b2, b3, b4, media, situacao }
//    - situacao: "Aprovado" (>=7), "Recuperação" (>=5 e <7), "Reprovado" (<5)
// c) Exiba o boletim com console.table().
// d) Exiba também:
//    - Aluno(a) com a maior média.
//    - Aluno(a) com a menor média.
//    - Média geral da turma.
//    - Quantidade de aprovados, recuperação e reprovados.

// → Seu código aqui:
// let boletim = [];
// for (let i = 0; i < turma.length; i++) {
//   boletim.push = {
//     nome: turma[i].nome,
//     b1: turma[i].notas[0],
//     b2: turma[i].notas[1],
//     b3: turma[i].notas[2],
//     b4: turma[i].notas[3],
//     media: null,
//     situação: null,
//   };
//   console.log(boletim);
// }
// let maior = Infinity;
// let menor = Infinity;
// let alunoMaior = null;
// let alunoMenor = null;
// for (aluno of turma) {
//   let soma = 0;
//   for (nota of aluno.notas) {
//     soma += Number(nota);
//   }
//   let media = soma / aluno.notas.length;
//   aluno.media = media;

//   if (alunoMaior === null || media > alunoMaior.media) {
//     alunoMaior = aluno;
//   }

//   if (alunoMenor === null || media < alunoMenor.media) {
//     alunoMenor = aluno;
//   }
//   if (media > maior) {
//     maior = media;
//   }
//   if (media < menor) {
//     menor = media;
//   }
//   if (media >= 7) {
//     boletim.situação = "Aprovado";
//   } else if (media >= 5) {
//     boletim.situação = "Recuperação";
//   } else {
//     boletim.situação = "Reprovado";
//   }
// }
// console.log("Maior média:", alunoMaior.nome, alunoMaior.media);
// console.log("Menor média:", alunoMenor.nome, alunoMenor.media);
console.log("_______________________________");

// ------------------------------------------------------------
// DESAFIO 4 – Cinema com sessões
// ------------------------------------------------------------
// Sistema simplificado de reserva para 3 SESSÕES diferentes,
// cada uma com sua matriz própria de poltronas (4 fileiras x 6 poltronas).
//
// a) Crie uma estrutura:
//  sessoes = [
//    { filme: "Ação X",   sala: matriz4x6 com "L" },
//    { filme: "Drama Y",  sala: matriz4x6 com "L" },
//    { filme: "Comédia Z", sala: matriz4x6 com "L" },
//  ]
// b) Usando do...while, exiba o menu:
//    1 – Listar sessões e ocupação (% ocupada de cada uma)
//    2 – Mostrar mapa de uma sessão (peça o índice 0..2)
//    3 – Reservar poltrona (peça sessão, fileira e poltrona)
//    4 – Cancelar reserva  (peça sessão, fileira e poltrona)
//    0 – Sair
// c) Valide TODOS os inputs e nunca quebre o programa.

// → Seu código aqui:
function criarSala() {
  let matriz = [];
  for (let i = 0; i < 4; i++) {
    let linha = [];
    for (let j = 0; j < 6; j++) {
      linha.push("L");
    }
    matriz.push(linha);
  }
  return matriz;
}
let sessoes = [
  { filme: "Ação X", sala: criarSala() },
  { filme: "Drama Y", sala: criarSala() },
  { filme: "Comédia Z", sala: criarSala() },
];
function menu() {
  console.log(`
   1 – Listar sessões e ocupação (% ocupada de cada uma)
   2 – Mostrar mapa de uma sessão (peça o índice 0..2)
   3 – Reservar poltrona (peça sessão, fileira e poltrona)
   4 – Cancelar reserva  (peça sessão, fileira e poltrona)
   0 – Sair`);
}
function listarSessao() {
  for (let i = 0; i < sessoes.length; i++) {
    console.log(`        NOME DA SESÃO: ${sessoes[i].filme}`);
    console.table(sessoes[i].sala);
  }
}
function mostrarSessao(indice) {
  if (!sessoes[indice]) {
    console.log(`
==================================
      Sessão inexistente.
==================================`);
  } else {
    console.log(`        NOME DA SESÃO: ${sessoes[indice].filme}`);
    console.table(sessoes[indice].sala);
  }
}
function pedirSessao() {
  let pedir = lerTeclado.questionInt("qual sesso deseja ver? ");
  mostrarSessao(pedir - 1);
}
function comprarPoltrona(indice) {
    console.log(indice);
    console.log(sessoes[indice]);
    if (!sessoes[indice]) {
    console.log("Sessão inválida.");
    return;
  }
    if (indice < 0 || indice >= sessoes.length) {
    console.log("Sessão inválida.");
    return;
  }
  let linha = lerTeclado.questionInt("Escolha a linha: ");
  if (linha < 0 || linha >= sessoes[indice].sala.length) {
    console.log("Posicao invalida.");
    return;
  } else {
    let coluna = lerTeclado.questionInt("Escolha a coluna: ");
    if (coluna < 0 || coluna >= sessoes[indice].sala[0].length) {
      console.log("Posicao invalida.");
      return;
    } else {
      if (sessoes[indice].sala[linha][coluna] === "X") {
        console.log("Poltrona ocupada.");
      } else {
        sessoes[indice].sala[linha][coluna] = "X";
        console.log('Compra realizada com sucesso.')
      }
    }
  }
}
let opcao = null;
do {
  menu();
  opcao = lerTeclado.questionInt("Digite uma opcao: ");
  if (opcao > 0 && opcao < 5) {
    switch (opcao) {
      case 1:
        listarSessao();
        break;
      case 2:
        let escolha = lerTeclado.questionInt(
          "Digite o numero da sessão que deseja ver:(1 a 3) ",
        );
        if (escolha > 0 || escolha < 4) {
          mostrarSessao(escolha - 1);
        } else {
          console.log("Escolha uma opcao valida.");
        }
        break;
      case 3:
          let sessao = lerTeclado.questionInt(
    "Escolha a sessão (1 a 3): "
        );
        comprarPoltrona(sessoes - 1);
        break;
      case 4:
        break;
      default:
        console.log("Escolha uma opcao valida.");
    }
  } else {
    console.log("Escolha uma opcao valida.");
  }
} while (opcao != 0);
console.table(matriz);

console.log("_______________________________");
