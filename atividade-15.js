// ============================================================
// ATIVIDADE 15 – Funções com Parâmetros e Retornos
// ============================================================
//
// IMPORTANTE: a partir de agora, as funções devem RECEBER
// PARÂMETROS e RETORNAR valores sempre que fizer sentido.
// Evite ficar misturando console.log() dentro de funções.
//
// ============================================================


// ------------------------------------------------------------
// EXERCÍCIO 1 – Função com 1 parâmetro
// ------------------------------------------------------------
// a) Crie a função 'quadrado(n)' que retorna n elevado ao quadrado.
// b) Teste com 3, 7 e 10. Exiba cada resultado.

// → Seu código aqui:
// function quadrado(n) {
//     return n ** 2
// }
// console.log(quadrado(3))

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 2 – Função com 2 parâmetros
// ------------------------------------------------------------
// a) Crie a função 'somar(a, b)' que retorna a soma de 2 numeros quaisquer (numeros passados ao chamar a função).
// b) Crie 'subtrair(a, b)', 'multiplicar(a, b)' e 'dividir(a, b)'.
//    Em dividir, retorne a string "Erro: divisão por zero" se b === 0.
// c) Teste cada uma com diversos valores e exiba os resultados.

// → Seu código aqui:
// function somar(a, b) {
//     return a + b
// }
// function subtrair(a, b) {
//     return a - b
// }
// function multiplicar(a, b) {
//     return a * b
// }
// function dividir(a, b) {
//     if (b === 0) {
//         return `Erro: divisão por zero`
//     } else {
//         return a / b
//     }
// }
// console.log(somar(5,9))
// console.log(subtrair(5,9))
// console.log(multiplicar(5,9))
// console.log(dividir(90,9))
// console.log(dividir(5,0))



console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 3 – Funções booleanas
// ------------------------------------------------------------
// a) Crie 'ehPar(n)' que retorna true se n for par, senão false.
// b) Crie 'ehMaiorDeIdade(idade)' que retorna true se idade >= 18.
// c) Crie 'ehVogal(letra)' que retorna true se letra for vogal
//    (considere maiúsculas e minúsculas).
// d) Teste cada função e exiba os resultados.

// → Seu código aqui:
// function ehPar(n) {
//     if (n % 2 == 0) {
//         console.log(`${n} é par.`)
//         return true
//     } else {
//         return false
//     }
// }
// function ehMaiorDeIdade(idade) {
//     if (idade >= 18) {
//         console.log(`${idade} maior que 18.`)
//         return true
//     } else {
//         return false
//     }
// }
// function ehVogal(letra) {
//     if (letra == "a" || letra == "e" || letra == "i" || letra == "o" || letra == "u" ||
//         letra == "A" || letra == "E" || letra == "I" || letra == "O" || letra == "U"
//     ) {
//         console.log(`${letra} é uma vogal.`)
//         return true
//     } else {
//         return false
//     }
// }
// console.log(ehPar(6))
// console.log(ehMaiorDeIdade(18))
// console.log(ehVogal("a"))
console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 4 – Múltiplos returns (early return)
// ------------------------------------------------------------
// a) Crie a função 'classificarIMC(imc)' que retorna:
//    - "Abaixo do peso"   se imc < 18.5
//    - "Peso normal"      se imc < 25
//    - "Sobrepeso"        se imc < 30
//    - "Obesidade"        caso contrário
// b) Crie 'calcularIMC(peso, altura)' que retorna peso / (altura * altura).
// c) Pergunte peso e altura ao usuário.
// d) Combine as duas funções e exiba:
//    "IMC: <valor> – <classificação>"

// → Seu código aqui:
let readline = require('readline-sync')

// function classificarIMC(imc) {
//     if (imc < 18.5) {
//         return 'Abaixo do peso'
//     }
//     else if (imc < 25) {
//         return 'Peso normal'
//     }
//     else if (imc < 30) {
//         return 'Sobrepeso'
//     }
//     else {
//         return 'Obesidade'
//     }
// }
// let peso = null
// let altura = null
// function calcularIMC(peso, altura) {
//     peso = readline.questionFloat("Digite seu peso: ")
//     altura = readline.questionFloat("Digite sua altura: ")
//     imc = peso / (altura * altura)
//     return Number(imc).toFixed(2)
// }
// console.log(calcularIMC(peso, altura), classificarIMC(imc))
console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 5 – Parâmetros padrão (default)
// ------------------------------------------------------------
// a) Crie a função 'precoComDesconto(valor, desconto = 10)' que retorna
//    o valor após aplicar o desconto em PORCENTAGEM.
// b) Teste:
//    - precoComDesconto(100)     → retorno esperado: 90
//    - precoComDesconto(100, 25  → retorno esperado: 75
//    - precoComDesconto(250, 5)  → retorno esperado: 237.5
// c) Exiba cada resultado formatado com toFixed(2).

// → Seu código aqui:
// function precoComDesconto(valor, desconto = 10){
//     return  valor - (valor * desconto / 100)  
// }
// console.log(precoComDesconto(100).toFixed(2))
// console.log(precoComDesconto(100,25).toFixed(2))
// console.log(precoComDesconto(250,5).toFixed(2))
console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 6 – Funções que recebem vetores
// ------------------------------------------------------------
// a) Crie a função 'somarVetor(vet)' que retorna a soma dos elementos de um vetor.
// b) Crie 'mediaVetor(vet)' que retorna a média (REAPROVEITE somarVetor).
// c) Crie 'maiorDoVetor(vet)' que retorna o maior valor de um vetor.
// d) Crie 'menorDoVetor(vet)' que retorna o menor valor de um vetor.
// e) Teste com:
numeros = [12, 7, 25, 33, 18, 1, 31, 14];

// → Seu código aqui:
// function somarVetor(vet) {
//     let soma = 0
//     for (numero of vet) {
//         soma += numero
//     }
//     return soma
// }

// function mediaVetor(vet) {
//     return somarVetor(vet) / numeros.length
// }
// function maiorDoVetor(vet) {
//     let maior = numeros[0]
//     for (let i = 0; i < numeros.length; i++) {
//         if (numeros[i] > maior) {
//             maior = numeros[i]
//         }
//     }
//     return maior
// }

// function menorDoVetor(vet){
//     let menor = numeros[0]
//     for (let i = 0; i < numeros.length; i++) {
//         if (numeros[i] < menor) {
//             menor = numeros[i]
//         }
//     }
//     return menor
// }
// console.log(somarVetor(numeros))
// console.log(mediaVetor(numeros).toFixed(2))
// console.log(maiorDoVetor(numeros))
// console.log(menorDoVetor(numeros))


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 7 – Função que retorna objeto
// ------------------------------------------------------------
// a) Crie a função 'criarAluno(nome, idade, nota)' que retorna um objeto:
//    { nome, idade, nota, situacao }
//    onde 'situacao' é "Aprovado" se nota >= 7, senão "Reprovado".
// b) A verificação de aprovação deve ser feita por uma função específica para isso.
// c) Crie 3 alunos chamando a função e exiba-os com console.table([a1, a2, a3]).

// → Seu código aqui:
let alunos = []
function criarAluno(nome, idade, nota){
    return {
    nome: readline.question('Digite seu nome: '),
    idade: readline.questionInt('Digite sua idade: '),
    nota: readline.questionFloat('Digite sua nota: ')  }
}
function aprovacao(aluno){
    if(aluno.nota >= 7){
        return situacao = 'Aprovado'
    } else {
        return situacao = 'Reprovado'
    }

}
for(let i = 0; i < 3; i++){
    let aluno = criarAluno()
    aluno.situacao = aprovacao(aluno)
    alunos.push(aluno)
}
console.table(alunos)
console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 8 – Função que retorna vetor
// ------------------------------------------------------------
// a) Crie a função 'gerarPares(inicio, fim)' que retorna um vetor
//    com todos os números PARES entre 'inicio' e 'fim' (inclusive).
// b) Teste com gerarPares(1, 20) e exiba o vetor.
// c) Crie 'filtrarMaioresQue(vet, limite)' que retorna um novo vetor
//    apenas com os elementos maiores que 'limite'.
// d) Combine: gere pares de 1 a 50 e filtre os maiores que 30.

// → Seu código aqui:
function gerarPares(inicio, fim) {
    let pares = []
    for(let i = inicio; i <= fim; i++){
        if(i % 2 == 0){
            pares.push(i)
        }
    }
    return pares
}
function filtrarMaioresQue(vet, limite) {
    let n = []
    for(let i = 0; i < vet.length; i++){
        if(vet[i] > limite){
            n.push(vet[i])
        } 
    }
    return n
}
console.log(filtrarMaioresQue(gerarPares(1,50), 30))
console.log("_______________________________");