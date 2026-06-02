// ============================================================
// DESAFIOS (para quem já terminou a atividade 14) – Funções Simples
// ============================================================
// Continue SEM usar parâmetros e SEM return.
// O foco é pensar em funções pequenas e bem nomeadas.
// ============================================================

const readline = require("readline-sync");

// ------------------------------------------------------------
// DESAFIO 1 – Relógio digital
// ------------------------------------------------------------
// a) Crie uma função 'mostrarHora' que:
//    - Pega a hora atual - busque por uma função pronta do Javascript para isso.
//    - Formata como "HH:MM:SS".
//    - Exibe: "Hora atual: <HH:MM:SS>"
// b) Crie uma função 'mostrarData' que exibe:
//    "Data atual: <DD/MM/AAAA>"
// c) Crie uma função 'agora' que chama mostrarData() e mostrarHora() em sequência.
// d) Chame agora() três vezes (com um intervalo de 5 segundos entre as chamadas).

// → Seu código aqui:
// function mostrarHora() {
//     const agora = new Date()
//     const hora = agora.getHours()
//     const minutos = agora.getMinutes()
//     const segunods = agora.getSeconds()
//     console.log(`Hora atual: ${hora}:${minutos}:${segunods}`)
// }
// mostrarHora()
// function mostrarData() {
//     const data = new Date()
//     const dia = String(data.getDate()).padStart(2,"0")
//     const mes = String(data.getMonth() + 1).padStart(2,"0")
//     const ano = data.getFullYear()
//     console.log(`Data atual: ${dia}/${mes}/${ano}`)
// }
// mostrarData()
// function agora(){
//     mostrarData()
//     mostrarHora()
// }
// let contador = 0
// const intervalo = setInterval(() => {
//     contador ++
//     agora()
//     if(contador === 3){
//         clearInterval(intervalo)
//     }
// }, 5000)
//uma função para repetir 3 vezes a cada 5 segundos.
console.log("_______________________________");

// ------------------------------------------------------------
// DESAFIO 2 – Gerador de cartões
// ------------------------------------------------------------
// Vamos imprimir vários "cartões" estilizados no console.
//
// a) Utilizando os arrays:
const nomes = ["Ana", "Bruno", "Carla", "Diego", "Eva"];
const cargos = ["Dev Junior", "Dev Pleno", "Tech Lead", "QA", "Designer"];
//
// b) Crie a função 'imprimirCartao' que:
//    - Sorteia um índice para cada array.
//    - Exibe um "cartão" com os valores sorteados, no formato:
//      ═══════════════════════════════
//      |   <NOME>
//      |   <cargo>
//      ═══════════════════════════════
//      (não precisa alinhar caracteres com perfeição — apenas estilo)
// c) Chame imprimirCartao() 5 vezes.

// → Seu código aqui:
// function imprimirCartao() {
//     const indice = Math.floor(Math.random() * nomes.length)
//     const cargoInd = Math.floor(Math.random() * cargos.length)
// console.log(`
//     ═══════════════════════════════
//     |   ${nomes[indice]}
//     |   ${cargos[cargoInd]}
//     ═══════════════════════════════`)
// }
// let contador = 0
// const intervalo = setInterval(() => {
//     contador ++
//     imprimirCartao()
//     if(contador === 5){
//         clearInterval(intervalo)
//     }
// })
console.log("_______________________________");

// ------------------------------------------------------------
// DESAFIO 3 – Sistema de notícias
// ------------------------------------------------------------
// a) Utilizando o array:
const noticias = [
  {
    titulo: "Tecnologia X é lançada",
    texto: "Empresa Y revoluciona o mercado...",
  },
  { titulo: "Economia em alta", texto: "Bolsa fecha o dia em alta de 2%..." },
  { titulo: "Esporte: time campeão", texto: "O time A conquistou o título..." },
  { titulo: "Cultura: novo filme", texto: "Estreia no cinema o longa Z..." },
];
// b) Crie 1 função 'manchete', que exibe:
//        |── MANCHETE ─────────────────
//        | <título>
//        |----------------------------
//        | <texto>
// c) Crie a função 'exibirJornal' que chama todas as manchetes em sequência,
//    com uma linha em branco entre cada uma.
// d) Chame exibirJornal().
// Observação: A função 'exibirJornal' deve sempre exibir todas as manchetes,
//    mesmo que mais manchetes forem adicionadas posteriormente

// → Seu código aqui:
// function manchete(noticias) {
//   console.log(`
//     |── MANCHETE ─────────────────
//     | ${noticias.titulo}
//     |----------------------------
//     | ${noticias.texto}
//         `);
// }
// manchete(noticias[0]);
// function exibirJornal() {
//     for(let i = 0; i < noticias.length; i++) {
//         console.log(`
//     |── MANCHETE ─────────────────
//     | ${noticias[i].titulo}
//     |----------------------------
//     | ${noticias[i].texto}
//             `)
//     }
// }
// também funciona mas o correto é a de baixo!
// function exibirJornal() {
//   for (let i = 0; i < noticias.length; i++) {
//     manchete(noticias[i]);
//   }
// }

// exibirJornal();
console.log("_______________________________");

// ------------------------------------------------------------
// DESAFIO 4 – Mini caixa eletrônico
// ------------------------------------------------------------
// Crie um caixa eletrônico
// O saldo deve ficar em uma variável global.
//
// a) Declare saldo = 1000;
// b) Crie as funções:
//    - 'verSaldo'     → exibe o saldo atual formatado como "R$ x,xx".
//    - 'depositar'    → pergunta o valor e SOMA ao saldo.
//                        Exibe o novo saldo.
//    - 'sacar'        → pergunta o valor; se houver saldo, SUBTRAI;
//                        senão, exibe "Saldo insuficiente!".
//    - 'extrato'      → exibe um cabeçalho estilizado com a data atual e chama verSaldo().
//    - 'exibirMenu'   → exibe as opções:
//                        1 – Ver saldo
//                        2 – Depositar
//                        3 – Sacar
//                        4 – Extrato
//                        0 – Sair
// c) Usando do...while e switch/case, ligue cada opção à sua função.
// d) Encerre quando o usuário escolher 0.
// e) Ao sair, exiba "Finalizando e Saindo... Obrigado por acessar!".

// → Seu código aqui:
let saldo = 1000;
function verSaldo() {
    console.log(`
---------------------
Aqui está seu saldo!
---------------------
R$ ${Number(saldo.toFixed(2))}`)
}
function depositar() {
  let depositar = readline.questionFloat(`Qual valor deseja depositar?\n`);
  if (depositar <= 0) {
    console.log("Valor indisponivel");
  } else {
    saldo += depositar;
    console.log(`
----------------------
Saldo atual: ${Number(saldo.toFixed(2))}`);
  }
}
function sacar() {
  let sacar = readline.questionFloat(`Qual valor deseja sacar?\n`);
  if (sacar > saldo || sacar <= 0) {
    console.log("Valor indisponivel. Verifique seu saldo.");
  } else {
    saldo -= sacar;
    console.log(`
---------------------
Aqui está seu saldo!
---------------------
Saldo atual: R$ ${Number(saldo.toFixed(2))}`);
  }
}
function extrato() {
  const data = new Date();
  console.log(`
---------------------   
Saldo Atual: 
${Number(saldo.toFixed(2))}
---------------------
Data atual: 
${data}`);
  }
function menu(){
    console.log(`
1 – Ver saldo
2 – Depositar
3 – Sacar
4 – Extrato
0 – Sair`)
}
let opcao = null
do {
    menu()
    opcao = readline.questionInt(`Digite qual opcao deseja:\n`)
    switch(opcao){
        case 1:
            verSaldo()
            break
        case 2:
            depositar()
            break
        case 3:
            sacar()
            break
        case 4:
            extrato()
            break
        default:
            console.log(`Escolha uma opcao valida.`)
            break
    }
} while(opcao !== 0)





















console.log("_______________________________");
