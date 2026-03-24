// ============================================================
//   ATIVIDADE 05 – Operadores Relacionais em JavaScript
// ============================================================
// Instruções: resolva cada exercício no espaço indicado.
// Use console.log() para exibir os resultados.
// Lembre-se de instalar o pacote antes de executar:
//     npm install readline-sync
// Para executar:
//     node atividade-05.js
let lerTeclado = require('readline-sync')
// Dica: Ao terminar um exercício, comente-o. Assim os dados
//       não serão solicitados novamente.
// ============================================================


// ------------------------------------------------------------
// EXERCÍCIO 1 – Comparando com == e ===
// ------------------------------------------------------------
// Para cada par de valores abaixo, declare duas variáveis e exiba:
//   a) O resultado de == usando template literal: "<a> == <b> → <resultado>"
//   b) O resultado de === usando template literal: "<a> === <b> → <resultado>"
//
// Pares de valores:
//   1) 10 e 10
//   2) 10 e "10"
//   3) 0 e false
//   4) null e undefined
//   5) "JS" e "JS"

// → Seu código aqui:
// let a = 10
// let b = 0
// let c = "10"
// let d = false
// let e = null
// let f = undefined
// let g = "JS"
// let aa = a === a
// let ac = a === c
// let bd = b === d
// let ef = e === f
// let gg =g === g
// console.log(`${a} === ${a} → ${aa}`)
// console.log(`${a} === ${c} → ${ac} `)
// console.log(`${b} === ${d} → ${bd}`)
// console.log(`${e} === ${f} → ${ef}`)
// console.log(`${g} === ${g} → ${gg}`)

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 2 – Comparando com != e !==
// ------------------------------------------------------------
// Para cada par de valores abaixo, exiba:
//   a) O resultado de != : "<a> != <b> → <resultado>"
//   b) O resultado de !== : "<a> !== <b> → <resultado>"
//
// Pares de valores:
//   1) 5 e 5
//   2) 5 e "5"
//   3) 7 e 3
//   4) true e 1

// → Seu código aqui:
// let a = 5
// let b = "5"
// let c = 7
// let d = 3
// let e = true 
// let f = 1
// let aa = a !== a
// let ab = a !== b
// let cd = c !== d
// let ef = e !== f
// console.log(`${a} !== ${a} → ${aa}`)
// console.log (`${a} !== ${b} → ${ab}`)
// console.log (`${c} !== ${d} → ${cd}`)
// console.log (`${e} !== ${f} → ${ef}`)





console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 3 – Maior, menor e igual
// ------------------------------------------------------------
// a) Declare "salarioA" com valor 3500 e "salarioB" com valor 4200.
// b) Calcule e armazene em variáveis (booleanas) os resultados de:
//    - salarioA > salarioB
//    - salarioA < salarioB
//    - salarioA >= salarioB
//    - salarioA <= salarioB
//    - salarioA === salarioB
// c) Exiba cada resultado com template literal e verificação ternária no formato:
//    "Salário A (R$ <a>) > Salário B (R$ <b>): <resultado>"

// → Seu código aqui:
// let salarioA = 3500
// let salarioB = 4200
// let aMaiB = salarioA > salarioB
// let aMenB = salarioA < salarioB
// let aMouI= salarioA >= salarioB
// let aMeoI = salarioA <= salarioB
// let aIb = salarioA === salarioB
// console.log(`Salário A (R$ ${salarioA}) > Salário B (R$ ${salarioB}): ${aMaiB}`)
// console.log(`Salário A (R$ ${salarioA}) < Salário B (R$ ${salarioB}): ${aMenB}`)
// console.log(`Salário A (R$ ${salarioA}) >= Salário B (R$ ${salarioB}): ${aMouI}`)
// console.log(`Salário A (R$ ${salarioA}) <= Salário B (R$ ${salarioB}): ${aMeoI}`)
// console.log(`Salário A (R$ ${salarioA}) === Salário B (R$ ${salarioB}): ${aIb}`)








console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 4 – Armazenando resultados em variáveis
// ------------------------------------------------------------
// a) Declare "estoque" com valor 0.
// b) Armazene em "temEstoque" o resultado de: estoque > 0
// c) Armazene em "estoqueZerado" o resultado de: estoque === 0
// d) Declare "temperatura" com valor 36.5.
// e) Armazene em "febre" o resultado de: temperatura >= 37.6
// f) Exiba cada variável usando template literal.

// → Seu código aqui:
// let estoque = 0
// let temEstoque = estoque > 0
// let estoqueZerado = estoque === 0
// let temperatura = 36.5
// let febre = temperatura >= 37.6
// console.log(`Estoque: ${estoque}`)
// console.log(`Tem em estoque: ${temEstoque ? 'Tem' : 'Não'}`)
// console.log(`Estoque Zerado: ${estoqueZerado ? 'Sim' : 'Não'}`)
// console.log(`Temperatura: ${temperatura}`)
// console.log(`Febre: ${febre ? 'Febril' : "Sem febre"}`)




console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 5 – Comparações com input do usuário
// ------------------------------------------------------------
// a) Peça ao usuário dois números.
// b) Armazene em variáveis o resultado das seguintes comparações:
//    - num1 > num2
//    - num1 < num2
//    - num1 === num2
//    - num1 >= num2
// c) Exiba cada resultado com template literal.

// → Seu código aqui:
// let num1 = lerTeclado.questionInt("Digite um número:")
// let num2 = lerTeclado.questionInt("Digite o segundo número:")
// let n1M2 = num1 > num2
// let n1Mn2 = num1 < num2
// let n1I2 = num1 === num2
// let n1MaiOI = num1 >= num2
// console.log(`${num1} > ${num2} → ${n1M2 ? 'Maior' : 'Menor'}`)
// console.log(`${num1} < ${num2} → ${n1Mn2 ? 'Menor' : 'Maior'}`)
// console.log(`${num1} === ${num2} → ${n1I2 ? 'Igual' : 'Não é igual'}`)
// console.log(`${num1} >= ${num2} → ${n1MaiOI ? 'Maior ou Igual' : 'Menor'}`)



console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 6 – Verificação de preço
// ------------------------------------------------------------
// a) Peça ao usuário o preço de um produto.
// b) Defina uma constante "precoMaximo" com valor 100.
// c) Armazene em "estaDentroDoOrcamento" o resultado de: preco <= precoMaximo.
// d) Armazene em "esteItemEhCaro" o resultado de: preco > precoMaximo.
// e) Exiba no console:
//    "Preço informado: R$ <preco>"
//    "Dentro do orçamento (≤ R$ <precoMaximo>)? : <estaDentroDoOrcamento ? "Sim" : "Não">"
//    "Item caro (> R$ <precoMaximo>)? : <esteItemEhCaro ? "Sim" : "Não">"

// → Seu código aqui:
// let preco = lerTeclado.questionInt("Digite o preço do produto:")
// const precoMaximo = 100
// let estaDentroDoOrcamento = preco <= precoMaximo
// let esteItemEhCaro = preco > precoMaximo
// console.log(`Preço informado: R$ ${preco}`)
// console.log(`Dentro do orçamento (${precoMaximo})? :${estaDentroDoOrcamento ? "Sim" : "Não"}`)
// console.log(`Item caro (${precoMaximo})? : ${esteItemEhCaro ? "Sim" : "Não"}`)


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 7 – Comparando notas
// ------------------------------------------------------------
// a) Peça ao usuário o nome e a idade de 2 pessoas e armazene como objetos dentro de uma lista "cadastro".
// b) Armazene os resultados das comparações:
//    - idadePessoa1 > idadePessoa2
//    - idadePessoa1 === idadePessoa2
//    - idadePessoa1 >= 18 (maior de idade)
//    - idadePessoa2 >= 18 (maior de idade)
// c) Exiba todos os resultados com template literal e verificação ternária.
//    Exemplo: `Idade da <nomePessoa1> é <idadePessoa1> e ela é ${idadePessoa1 >= 18 ? "maior de idade" : "menor de idade"}.`
// d) Similar ao exemplo acima, verifique e exiba qual pessoa é mais velha.

// → Seu código aqui:
// let cadastro =  [{ 
//     nome: lerTeclado.question("Digite o nome:"),
//     idade: lerTeclado.questionInt("Digite a idade:")
// },{
//     nome: lerTeclado.question("Digite o nome:"),
//     idade: lerTeclado.questionInt("Digite a idade:")
// }] 
// let pessoa1 = cadastro[0].idade
// let pessoa2 = cadastro[1].idade
// let maior = cadastro[0].idade > cadastro[1].idade
// let menor = cadastro[0].idade < cadastro[1].idade
// let igual = cadastro[0].idade === cadastro[1].idade
// let maiorIgual = cadastro[0].idade >= 18
// let maiorI2 = cadastro[1].idade >= 18 
// console.log(`Idade da ${cadastro[0].nome} é ${cadastro[0].idade} e ela é ${maiorIgual ? 'Maior de idade': 'Menor de idade'}.`)
// console.log(`Idade da ${cadastro[1].nome} é ${cadastro[1].idade} e ela é ${maiorI2 ? 'Maior de idade' : 'Menor de idade'}.`)
// console.log(`${maior ? cadastro[0].nome : cadastro[1].nome}`)

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 8 – Comparando notas (versão avançada)
// ------------------------------------------------------------
// a) Peça ao usuário o nome e três notas de 2 alunos e armazene como objetos dentro de uma lista "alunos".
// b) Calcule a média de cada aluno e armazene em "mediaAluno1" e "mediaAluno2".
// e) Verifique e exiba no console qual aluno obteve a maior média usando template literal e comparador ternário
// c) Compare e exiba no console, qual aluno obteve a primeira maior nota, a segunda e a terceira.
//    Exemplo: `Aluno com primeira maior nota: ${nota1aluno1 > nota1aluno2 ? nomeAluno1 : nomeAluno2}`
// → Seu código aqui:
// let aluno1 = {
//     nota1: lerTeclado.questionInt("digite a primeira nota: "),
//     nota2:lerTeclado.questionInt("digite a segunda nota: "),
//     nota3:lerTeclado.questionInt("digite a terceira nota: ")
// }
// let aluno2 = {
//     nota1: lerTeclado.questionInt("digite a primeira nota: "),
//     nota2:lerTeclado.questionInt("digite a segunda nota: "),
//     nota3:lerTeclado.questionInt("digite a terceira nota: ")
// }

// let mediaAluno1 = aluno1.nota1+aluno1.nota2+aluno1.nota3/3
// let mediaAluno2 = aluno2.nota1+aluno2.nota2+aluno2.nota3/3
// let notaMaior = mediaAluno1 > mediaAluno2 ? "Aluno1 média maior" : "Aluno2 média maior"
// console.log(`Qual aluno tem a nota maior? ${notaMaior}`)
// console.log(mediaAluno1.toFixed(1))
// console.log(mediaAluno2.toFixed(1))
// let nota1M = aluno1.nota1 > aluno2.nota1 ? "aluno1 com nota1 maior" : "aluno2 com nota1 maior"
// let nota2M = aluno1.nota2 > aluno2.nota2 ? "aluno1 com nota2 maior" : "aluno2 com nota2 maior"
// let nota3M = aluno1.nota3 > aluno2.nota3 ? "aluno1 com nota3 maior" : "aluno2 com nota3 maior"
// console.log(`Aluno com primeira maior nota: ${nota1M}`)
// console.log(`Aluno com segunda maior nota: ${nota2M}`)
// console.log(`Aluno com terceira maior nota: ${nota3M}`)



console.log("_______________________________");
