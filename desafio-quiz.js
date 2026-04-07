// ============================================================
//   DESAFIO QUIZ – Estruturas de Controle (Switch / Case)
// ============================================================
// Regras: sem loops e sem funções.
// Use apenas switch/case e/ou if/else e operadores.
// ============================================================
//
// Crie um quiz de 5 perguntas sobre alguma tema de sua escolha (tecnologia, filmes, curiosidades, jogos, etc).
// Cada pergunta deve possuir 4 alternativas (1 a 4); apenas uma deve ser considerada correta.
//
// Fluxo geral:
//   a) Pergunte o nome do jogador e armazene em um objeto "jogador".
//   b) Exiba uma mensagem de boas-vindas com o nome, explicando sobre o que se trata o quiz.
//   c) Adicione "pontos" ao objeto, iniciando em 0.
//
// Para cada uma das 5 perguntas, repita este padrão:
//   1. Exiba o enunciado e as 4 alternativas com console.log().
//   2. Leia a resposta do jogador (questionInt()).
//   3. Use switch/case para avaliar a resposta:
//      - No case correto: exiba "Correto!" e some 1 ponto a "pontos".
//      - Nos demais cases: exiba "Errado! A resposta certa era a opção X."
//      - No default: exiba "Opção inválida, nenhum ponto atribuído."
//
// Ao final:
//   d) Exiba o total: "Você fez X de 5 pontos."
//   e) Use switch/case (ou if/else) para exibir um resultado final com frases como as abaixo
//      Dica: você pode modificar o retorno para se adequar ao tema escolhido
//      - 5 pontos        → "Perfeito! Você é um expert!"
//      - 4 pontos        → "Muito bem! Quase lá!"
//      - 3 pontos        → "Bom trabalho, mas pode melhorar."
//      - 1 ou 2 pontos   → "Nheee!"
//      - 0 pontos        → "VIX, tente novamente!"
//   f) Exiba o objeto "resultado" com console.table():
//      { jogador, pontos, total: 5, aprovado: pontos >= 3 }
//
// Desafio extra:
//  Ao final, exiba para cada pergunta do quiz:
//    Pergunta: Qx.
//    Resposta do jogador para pergunta X: <respostaJogadorQx>
//    Resposta correta da pergunta X: <respostaCorretaQx>
//
// ============================================================

// → Seu código aqui:
let lerTeclado = require('readline-sync')
let jogador = {
    nome: lerTeclado.question("Digite seu username: ")
}
console.log(`Seja bem-vindo ${jogador.nome}, esse será um quiz de conhecimentos de jogos.`)
jogador.pontos = 0
console.log("=======================================")
console.log('Em Resident Evil 4, qual é o nome do protagonista principal?')
console.log('1) Chris Redfield')
console.log('2) Leon S. Kennedy')
console.log('3) Ethan Winters')
console.log('4) Jill Valentine')
console.log("=======================================")
let resposta = lerTeclado.questionInt("Digite a alternativa correta: ")
let pergunta 
let correta1 =2
switch(resposta){
    case 1:
        console.log("Errado! A resposta certa era a opção: 2) Leon S. Kennedy.")
        break
    case 2:
        jogador.pontos +=1
        console.log(`Correto! você tem ${jogador.pontos} pontos`)
        break
    case 3:
        console.log("Errado! A resposta certa era a opção: 2) Leon S. Kennedy.")
        break
    case 4:
        console.log("Errado! A resposta certa era a opção: 2) Leon S. Kennedy.")
        break
    default:
        console.log("Digite uma alternativa válida. Nenhum ponto atribuído.")
        break
}
console.log("=======================================")
let correta2 = 3
console.log('Qual é o nome da garota que acompanha Joel no primeiro jogo?')
console.log('1) Abby')
console.log('2) Riley')
console.log('3) Ellie')
console.log('4) Tess')
console.log("=======================================")
let resposta2 = lerTeclado.questionInt("Digite a alternativa correta: ")
switch(resposta2){
    case 1:
        console.log("Errado! A resposta certa era a opção: 3) Ellie.")
        break
    case 2:
        console.log("Errado! A resposta certa era a opção: 3) Ellie.")
        break
    case 3:
        jogador.pontos +=1
        console.log(`Correto! você tem ${jogador.pontos} pontos`)
        break
    case 4:
        console.log("Errado! A resposta certa era a opção: 3) Ellie.")
        break
    default:
        console.log("Digite uma alternativa válida. Nenhum ponto atribuído.")
        break
}
console.log("=======================================")
let correta3 = 2
console.log('Qual é o nome do androide que trabalha como investigador junto à polícia?')
console.log('1) Markus')
console.log('2) Connor')
console.log('3) Kara')
console.log('4) Simon')
console.log("=======================================")
let resposta3 = lerTeclado.questionInt("Digite a alternativa correta: ")
switch(resposta3){
    case 1:
        console.log("Errado! A resposta certa era a opção: 2) Connor.")
        break
    case 2:
        jogador.pontos +=1
        console.log(`Correto! você tem ${jogador.pontos} pontos`)
        break
    case 3:
        console.log("Errado! A resposta certa era a opção: 2) Connor.")
        break
    case 4:
        console.log("Errado! A resposta certa era a opção: 2) Connor.")
        break
    default:
        console.log("Digite uma alternativa válida. Nenhum ponto atribuído.")
        break
}
console.log("=======================================")
let correta4 = 3
console.log('Qual é o nome do filho de Kratos na saga nórdica?')
console.log('1) Baldur')
console.log('2) Loki')
console.log('3) Atreus')
console.log('4) Thor')
console.log("=======================================")
let resposta4 = lerTeclado.questionInt("Digite a alternativa correta: ")
switch(resposta4){
    case 1:
        console.log("Errado! A resposta certa era a opção: 3) Atreus.")
        break
    case 2:
        console.log("Errado! A resposta certa era a opção: 3) Atreus.")
        break
    case 3:
        jogador.pontos +=1
        console.log(`Correto! você tem ${jogador.pontos} pontos`)
        break
    case 4:
        console.log("Errado! A resposta certa era a opção: 3) Atreus.")
        break
    default:
        console.log("Digite uma alternativa válida. Nenhum ponto atribuído.")
        break
}
console.log("=======================================")
let correta5 = 2
console.log('Qual desses jogos é conhecido por seu modo battle royale extremamente popular?')
console.log('1) Minecraft')
console.log('2) Fortnite')
console.log('3) The Sims')
console.log('4) Cyberpunk 2077')
console.log("=======================================")
let resposta5 = lerTeclado.questionInt("Digite a alternativa correta: ")
switch(resposta5){
    case 1:
        console.log("Errado! A resposta certa era a opção: 2) Fortnite.")
        break
    case 2:
        jogador.pontos +=1
        console.log(`Correto! você tem ${jogador.pontos} pontos`)
        break
    case 3:
        console.log("Errado! A resposta certa era a opção: 2) Fortnite.")
        break
    case 4:
        console.log("Errado! A resposta certa era a opção: 2) Fortnite.")
        break
    default:
        console.log("Digite uma alternativa válida. Nenhum ponto atribuído.")
        break
}
console.log("=======================================")
console.log(`${jogador.nome}, você fez um total de ${jogador.pontos} pontos, de 5 pontos!`)
console.log("=======================================")
if(jogador.pontos === 5){
    console.log("Perfeito! Você é um expert!")
} else if(jogador.pontos === 4){ 
    console.log("Muito bem! Quase lá!")
} else if (jogador.pontos === 3){
    console.log("Bom trabalho, mas pode melhorar.")
} else if(jogador.pontos === 2 || jogador.pontos === 1){
    console.log("Nheee!")
} else if( jogador.pontos === 0){
    console.log("VIX, tente novamente!")
}
let resultado = {
    NOME: jogador.nome,
    TOTAL: 5,
    PONTOS_REALIZADOS: jogador.pontos,
    APROVADO: jogador.pontos >= 3 ? 'APROVADO' : ' REPROVADO'
}
console.log("=======================================")
console.table(resultado)
console.log(`
Pergunta (1) 
Resposta do jogador: ${resposta}
Correta: ${correta1}`)
console.log(`
Pergunta (2)
Resposta do jogador: ${resposta2}
Correta: ${correta2}`)
console.log(`
Pergunta (3) 
Resposta do jogador: ${resposta3}
Correta: ${correta3}`)
console.log(`
Pergunta (4) 
Resposta do jogador: ${resposta4}
Correta: ${correta4}`)
console.log(`
Pergunta (5) 
Resposta do jogador: ${resposta5}
Correta: ${correta5}`)
console.log("=======================================")