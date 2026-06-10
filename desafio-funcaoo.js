// ============================================================
//   DESAFIOS (para quem já terminou a atividade 15)
//   Funções com Parâmetros e Retornos
// ============================================================


// ------------------------------------------------------------
// DESAFIO 1 – Validador de senhas
// ------------------------------------------------------------
// Crie um conjunto de funções para validar uma senha.
//
// a) 'temTamanhoMinimo(senha, min)'  → true/false (senha.length >= min).
// b) 'temNumero(senha)'              → true se houver algum dígito (0-9).
// c) 'temMaiuscula(senha)'           → true se houver alguma letra maiúscula.
// d) 'temEspecial(senha)'            → true se houver !@#$%&*?
// e) 'validarSenha(senha)'           → retorna um OBJETO com:
//        { valida, motivos }
//    'motivos' é um VETOR de strings com tudo que falta. Ex:
//        { valida: false, motivos: ["Mínimo de 8 caracteres", "Deve conter número"] }
// f) Pergunte uma senha ao usuário e exiba o resultado da validação.

// → Seu código aqui:
let readline = require('readline-sync')
// function temTamanhoMinimo(senha, min) { 
//     return senha.length >= min  

// }
// function temNumero(senha) {
//     return /\d/.test(senha);
// }
// function temMaiuscula(senha) {

//     for (let letra of senha) {
//         if (letra >= 'A' && letra <= 'Z') {
//             return true;
//         }
//     }
//     return false;
// }
// function temEspecial(senha) {
//     return /[!@#$%&*?]/.test(senha);
// }
// function valida(senha){
//     if(temTamanhoMinimo(senha,8) && temNumero(senha) && temMaiuscula(senha) && temEspecial(senha)) return true
//     return false
// }
// function bterMotivos(senha){
//     let motivo = ''

//     if(!temTamanhoMinimo(senha,8)) motivo += 'Tamanho minimo não atingido. '
//     if(!temNumero(senha)) motivo += 'Não tem número. '
//     if(!temMaiuscula(senha)) motivo += 'Não tem maiúscula. '
//     if (!temEspecial(senha)) motivo += 'Não tem especial. '

//     return motivo

// }
// function validarSenha(senha) {
//      return {
//         valida: valida(senha),
//         motivo: bterMotivos(senha)
//     }

// }
// let senha = readline.question(
//     'Digite uma senha (com números, letra maiúscula, caracteres especial): '
// );

// if (valida(senha)) {
//     console.log('Senha criada');
// } else {
//     console.log('Senha inválida.');
//     console.log(bterMotivos(senha));
// }
// validarSenha(senha)
console.log("_______________________________");


// ------------------------------------------------------------
// DESAFIO 2 – Conversor de unidades
// ------------------------------------------------------------
// Crie uma "biblioteca" de funções de conversão.
//
// a) 'celsiusParaFahrenheit(c)'  → C * 1.8 + 32
// b) 'fahrenheitParaCelsius(f)'  → (F - 32) / 1.8
// c) 'kmParaMilhas(km)'          → km * 0.621371
// d) 'milhasParaKm(mi)'          → mi / 0.621371
// e) 'kgParaLibras(kg)'          → kg * 2.20462
// f) 'librasParaKg(lb)'          → lb / 2.20462
// g) Crie 'converter(valor, dePara)' que recebe a unidade de origem
//    e a unidade de destino e RETORNA o valor convertido, chamando a função correta.
// h) Faça um menu (do...while) onde o usuário digita o valor, e a unidade para qual deseja converter
//    e mostre o resultado formatado com toFixed(2).

// → Seu código aqui:
// function celsiusParaFahrenheit(c) {
//     return c * 1.8 + 32
// }

// function fahrenheitParaCelsius(f) {
//     return (f - 32) / 1.8
// }

// function kmParaMilhas(km) {
//     return km * 0.621371
// }

// function milhasParaKm(mi) {
//     return mi / 0.621371
// }

// function kgParaLibras(kg) {
//     return kg * 2.20462
// }

// function librasParaKg(lb) {
//     return lb / 2.20462
// }

// function converter(valor, dePara) {
//     if (dePara === celsiusParaFahrenheit) {
//         return celsiusParaFahrenheit(valor)
//     }
//     if (dePara === fahrenheitParaCelsius) {
//         return fahrenheitParaCelsius(valor)
//     }
//     if (dePara === kmParaMilhas) {
//         return kmParaMilhas(valor)
//     }
//     if (dePara === milhasParaKm) {
//         return milhasParaKm(valor)
//     }
//     if (dePara === kgParaLibras) {
//         return kgParaLibras(valor)
//     }
//     if (dePara === librasParaKg) {
//         return librasParaKg(valor)
//     }
// }
// function menu() {
//     console.log(`
//     1) Celsus para Fahrenheit
//     2) Fahrenheit para Celsus
//     3) KM para Milhas
//     4) Milhas para KM
//     5) KG para Libra
//     6) Libra para Kg
//     0) Sair
//     `)
// }
// let opcao = null
// do {
//     menu()
//     opcao = readline.questionInt('Digite a opcao: ')
//     let valorConverter = readline.questionFloat('Digite o valor para converter: ')
//     if (opcao > 7 && opcao < 0) {
//         console.log('Digite um opcao valida. ')
//     } else {
//         switch (opcao) {
//             case 1:
//                 console.log(`${valorConverter} Celsius para Fahrenheit = ${converter(valorConverter, celsiusParaFahrenheit).toFixed(2)} Fahrenheit`)
//                 break
//             case 2:
//                 console.log(Number(converter(valorConverter, fahrenheitParaCelsius).toFixed(2)))
//                 break
//             case 3:
//                 console.log(converter(valorConverter, kmParaMilhas).toFixed(2))
//                 break
//             case 4:
//                 console.log(converter(valorConverter, milhasParaKm).toFixed(2))
//                 break
//             case 5:
//                 console.log(converter(valorConverter, kgParaLibras).toFixed(2))
//                 break
//             case 6:
//                 console.log(converter(valorConverter, librasParaKg).toFixed(2))
//                 break
//             default:
//                 console.log('Digite uma opcao valida.')
//                 break
//         }
//     }
// } while (opcao != 0)







console.log("_______________________________");


// ------------------------------------------------------------
// DESAFIO 3 – Quizz
// ------------------------------------------------------------
// a) Declare uma lista com 5 objetos, contendo cada objeto:
//    pergunta: "..."
//    jaRespondida: false
//    acertou: false
// b) Crie a função 'exibirPergunta' que exibe a pergunta de forma estilizada.
// c) Crie a função 'verificarResposta' que verifica se a resposta está correta.
// d) Crie a função 'iniciarQuiz' que chama as perguntas em sequência.
// e) Crie a função 'mostrarResultado' que exibe o resultado atual.
// f) Crie a função 'iniciarQuiz' para iniciar o quiz.

// → Seu código aqui:
let question = [
    {
        resposta: readline.questionInt('Em que ano foi realizado a primeria Copa do Mundo? '),
        acertou: false ? 'Parabén, acertou' : 'errou'
    },
    {
        resposta: readline.question('Qual pais venceu mais Copas do Mundo ate hoje? ').toLowerCase(),
        acertou: false ? 'Parabén, acertou' : 'errou'
    },
    {
        resposta: readline.question('Em que pais aconteceu a Copa de 2014? ').toLowerCase(),
        acertou: false ? 'Parabén, acertou' : 'errou'
    },
    {
        resposta: readline.question('Qual o maior artilheiro da Copa do Mundo em 2002? ').toLowerCase(),
        acertou: false ? 'Parabén, acertou' : 'errou'
    },
    {
        resposta: readline.question('Qual selecao venceu a Copa do Mundo em 2022? ').toLowerCase(),
        acertou: false ? 'Parabén, acertou' : 'errou'
    }
]

function exibirPergunta() {
    console.log(`
=================================================
        PERGUNTAS SOBRE A COPA DO MUNDO     
=================================================
1) Em que ano foi realizado a primeria Copa do Mundo?
2) Qual pais venceu mais Copas do Mundo ate hoje?
3) Em que pais aconteceu a Copa de 2014?
4) Qual o maior artilheiro da Copa do Mundo em 2002?
5) Qual selecao venceu a Copa do Mundo em 2022?
    `)
}
function verificarResposta() {
    if (question[0].resposta === 1930) question[0].acertou = true ? 'acertou' : 'errou' 
    if (question[1].resposta === 'brasil') question[1].acertou = true ? 'acertou' : 'errou'
    if (question[2].resposta === 'brasil') question[2].acertou = true ? 'acertou' : 'errou'
    if (question[3].resposta === 'ronaldo') question[3].acertou = true ? 'acertou' : 'errou'
    if (question[4].resposta === 'argentina') question[4].acertou = true ? 'acertou' : 'errou'

}
function iniciarQuiz() {
    for (let i = 1; i < question.length; i++) {
        console.log(`Pergunta numero ${i}: ${question[i].resposta}`)
    }
}
function mostrarResultado() {
    console.log(`
${question[0].resposta}
${question[0].acertou}

${question[1].resposta}
${question[1].acertou}

${question[2].resposta}
${question[2].acertou}

${question[3].resposta}
${question[3].acertou}

${question[4].resposta}
${question[4].acertou}

`)
}
exibirPergunta()
iniciarQuiz()
verificarResposta()
mostrarResultado()

console.log("_______________________________");


// ------------------------------------------------------------
// DESAFIO 4 – Banco de funcionários
// ------------------------------------------------------------
//
// a) Estrutura do funcionário:
//        { id, nome, cargo, salario, ativo }
// b) Crie funções:
//    - 'criarFuncionario(lista, nome, cargo, salario)' → adiciona um novo objeto (funcionário) em uma lista de funcionários.
//    - 'buscarPorId(lista, id)'                        → retorna o objeto ou null.
//    - 'atualizarSalario(lista, id, novoSalario)'      → true/false (atualizou ou não).
//    - 'desligar(lista, id)'                           → marca ativo = false; true/false.
//    - 'reintegrar(lista, id)'                         → marca ativo = true; true/false.
//    - 'totalFolha(lista)'                             → soma dos salários dos ATIVOS.
//    - 'mediaSalarial(lista)'                          → média dos salários dos ATIVOS.
//    - 'maiorSalario(lista)'                           → retorna o funcionário ATIVO
//                                                        com maior salário.
// c) Construa um menu (do...while + switch) que permita usar todas as funções.
// d) Após cada operação, exiba a lista atualizada com console.table().

// → Seu código aqui:
let funcionário = []
function criarFuncionario(lista, nome, cargo, salario) {
    
}

console.log("_______________________________");


// ------------------------------------------------------------
// DESAFIO 5 – Jogo de adivinhação modularizado
// ------------------------------------------------------------
// Recrie o "jogo da adivinhação", agora SEPARADO em funções.
//
// a) 'sortearNumero(min, max)'              → retorna um inteiro aleatório no intervalo.
// b) 'pedirPalpite(min, max)'               → pergunta e retorna um inteiro válido
//                                              (refaz a pergunta se estiver fora).
// c) 'compararPalpite(palpite, alvo)'       → retorna "maior", "menor" ou "acertou".
// d) 'classificarTentativas(qtd)'           → retorna uma string:
//                                              1     → "Sorte de principiante!"
//                                              2-3   → "Excelente!"
//                                              4-6   → "Bom!"
//                                              7-10  → "Regular."
//                                              >10   → "Continue tentando!"
// e) 'jogar(min, max)'                      → executa o jogo completo:
//                                              sorteia, faz o loop de palpites,
//                                              e RETORNA a quantidade de tentativas.
// f) No programa principal, pergunte se o usuário quer jogar de novo (keyInYN()).
//    Mantenha um vetor 'historico' com todas as partidas:
//        { partida, tentativas, classificacao }
//    Ao final, exiba console.table(historico).

// → Seu código aqui:


console.log("_______________________________");