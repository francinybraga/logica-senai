// ============================================================
//   ATIVIDADE 04 – Operadores Aritméticos em JavaScript
// ============================================================
// Instruções: resolva cada exercício no espaço indicado.
// Use console.log() para exibir os resultados.
// Lembre-se de instalar o pacote antes de executar:
//     npm install readline-sync
// Para executar:
//     node atividade-04.js
//
// Dica: Ao terminar um exercício, comente-o. Assim os dados
//       não serão solicitados novamente.
// ============================================================

let lerTeclado = require('readline-sync')
// ------------------------------------------------------------
// EXERCÍCIO 1 – Operações básicas
// ------------------------------------------------------------
// Declare duas variáveis: "num1" com valor 18 e "num2" com valor 5.
// Calcule e exiba no console, usando template literal, o cálculo e o resultado:
//    Exemplo: console.log(`Cálculo: ${num1} + ${num2} = ${num1 + num2}`);
// a) A soma dos dois números.
// b) A subtração (num1 - num2).
// c) A multiplicação.
// d) A divisão (use toFixed() para limitar o resultado a 2 casas decimais).
// e) O resto da divisão (módulo %).
// f) num1 elevado a num2 (potência).

// → Seu código aqui:
let num1 = 18
let num2 = 5
let divisao = num1/num2
console.log(`Cálculo: ${num1} + ${num2} = ${num1 + num2}`)
console.log("soma =", num1+num2)
console.log("subração =", num1-num2)
console.log("multiplicação =", num1*num2)
console.log("divisão =", divisao.toFixed(2))



console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 2 – Área e perímetro
// ------------------------------------------------------------
// a) Declare as variáveis "largura" (valor 8) e "altura" (valor 5).
// b) Calcule a área do retângulo (largura * altura) e armazene em "area".
// c) Calcule o perímetro (2 * largura + 2 * altura) e armazene em "perimetro".
// d) Exiba no console usando template literal:
//    "Retângulo | Largura: <largura> | Altura: <altura> | Área: <area> | Perímetro: <perimetro>"

// → Seu código aqui:
let largura = 8
let altura = 5
let area = largura*altura
let perimetro = 2 * largura + 2 * altura
console.log(`Retângulo | Largura: ${largura} | Altura: ${altura} | Área: ${area} | Perímetro: ${perimetro}`)


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 3 – Calculando desconto
// ------------------------------------------------------------
// a) Declare a variável "precoOriginal" com o valor 250.
// b) Declare a variável "percentualDesconto" com o valor 15 (representa 15%).
// c) Calcule o valor do desconto e armazene em "valorDesconto".
//    Dica: valorDesconto = precoOriginal * (percentualDesconto / 100)
// d) Calcule o preço final (precoOriginal - valorDesconto) e armazene em "precoFinal".
// e) Exiba no console usando template literal:
//    "Preço original: R$ <precoOriginal> | Desconto: R$ <valorDesconto> | Preço final: R$ <precoFinal>"
//    Use toFixed(2) nos valores em reais.

// → Seu código aqui:
let precoOriginal = 250
let percentualDesconto = 15
let valorDesconto = precoOriginal * (percentualDesconto/100)
let precoFinal = precoOriginal - valorDesconto
console.log(`Preço original: R$ ${precoOriginal} | Desconto: R$ ${valorDesconto} | Preço final: R$ ${precoFinal}`)


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 4 – Operadores de atribuição composta
// ------------------------------------------------------------
// a) Declare uma variável "pontos" com o valor 100.
// b) Some 50 pontos usando +=. Exiba o resultado.
// c) Subtraia 30 pontos usando -=. Exiba o resultado.
// d) Multiplique por 2 usando *=. Exiba o resultado.
// e) Divida por 4 usando /=. Exiba o resultado.
// f) Para cada operação, use template literal:
//    "Pontos após <tipo da operação>: <valor>"

// → Seu código aqui:
let pontos = 100
pontos += 50
console.log(`Pontos após soma: ${pontos += 50}`)
pontos -= 20
console.log(`Pontos após subtração: ${pontos -= 50}`)
pontos*=2
console.log(`Pontos após multiplicação: ${pontos *= 50}`)
pontos/=4
console.log(`Pontos após divisão: ${pontos /= 50}`)





console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 5 – Incremento e decremento
// ------------------------------------------------------------
// a) Declare uma variável "vidas" com valor 3.
// b) Exiba o valor atual com console.log().
// c) Use ++ para incrementar "vidas" duas vezes, exibindo após cada incremento.
// d) Use -- para decrementar "vidas" uma vez, exibindo o resultado.
// e) Declare uma variável "nivel" com valor 1.
// f) Incremente "nivel" três vezes usando ++nivel (prefixo) e exiba cada resultado.

// → Seu código aqui:
let vida = 3
console.log(vida)
vida++
console.log(vida)
vida++
console.log(vida)
vida--
console.log(vida)
let nivel =1
++nivel
console.log(nivel)
++nivel
console.log(nivel)
++nivel
console.log(nivel)




console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 6 – Funções matemáticas (Math)
// ------------------------------------------------------------
// a) Declare "nota" com o valor 7.3.
// b) Exiba o resultado de Math.round(nota), Math.floor(nota) e Math.ceil(nota).
//    Use template literal para identificar cada um.
// c) Declare "temperatura" com o valor -12.5.
// d) Exiba o valor absoluto usando Math.abs(temperatura).
// e) Use Math.max() para encontrar o maior entre: 42, 17, 89, 5, 63. Exiba o resultado.
// f) Use Math.min() para encontrar o menor entre 42, 17, 89, 5, 63. Exiba o resultado.

// → Seu código aqui:
let nota = 7.3
console.log(`Math.round`, Math.round(nota))
console.log(`Math.floor`,Math.floor(nota))
console.log(`Math.ceil`,Math.ceil(nota))
let temperatura = -12.5
console.log(Math.abs(temperatura))
console.log(Math.max(42, 17, 89, 5, 63))
console.log(Math.min(42, 17, 89, 5, 63))


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 7 – Média de notas
// ------------------------------------------------------------
// a) Peça ao usuário 3 notas (use questionFloat()).
// b) Calcule a média aritmética das 3 notas.
// c) Exiba no console:
//    "Nota 1: <n1> | Nota 2: <n2> | Nota 3: <n3>"
//    "Média: <media>" (com 2 casas decimais usando toFixed(2))

// → Seu código aqui:
// let nota1 = lerTeclado.questionFloat("Digite a primeira nota:")
// let nota2 = lerTeclado.questionFloat("Digite a segunda nota:")
// let nota3 = lerTeclado.questionFloat("Digite a terceira nota:")
// let mediaNotas = (nota1+nota2+nota3)/3
// console.log(`Nota 1: ${nota1} | Nota 2: ${nota2} | Nota 3: ${nota3}`)
// console.log(`Média: ${mediaNotas.toFixed(2)}`)

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 8 – Calculadora de troco
// ------------------------------------------------------------
// a) Peça ao usuário o valor total da compra (questionFloat()).
// b) Peça ao usuário o valor entregue pelo cliente (informando que deve ser maior que o valor da compra) (questionFloat()).
// c) Calcule o troco (valorEntregue - totalCompra).
// d) Exiba no console:
//    "Total da compra:  R$ <total>"
//    "Valor entregue:   R$ <entregue>"
//    "Troco:            R$ <troco>"
//    Use toFixed(2) em todos os valores.

// → Seu código aqui:
// let valorTotalCompras = lerTeclado.questionFloat("Digite o valor total das compras:")
// let valorEntregue = lerTeclado.questionFloat("Digite o valor entregue pelo cliente (OBS:deve ser maior que o valor das compras):")
// let troco = valorTotalCompras - valorEntregue
// console.log(`
// Total da compra:  R$ ${valorTotalCompras.toFixed(2)}
// Valor entregue:   R$ ${valorEntregue.toFixed(2)}
// Troco:            R$ ${Math.abs(troco.toFixed(2))}
// `)



console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 9 – Valor total de listas
// ------------------------------------------------------------
// a) Dada uma lista de preços, calcule e exiba o total.
let precos = [29.90, 49.99, 15.75, 99.90];
// b) Dada uma lista de notas, calcule e exiba a média.
let notas = [7.5, 8.2, 6.5, 9.0];
// c) Dada uma lista de idades, exiba a maior e a menor idade utilizando das funções Math().
let idades = [15, 22, 30, 18, 25];

// → Seu código aqui:
let calculo = precos[0] + precos[1] + precos[2] + precos [3]
console.log(calculo.toFixed(2))
let calculo2 = (notas[0] + notas[1] + notas [2] + notas[3])/4
console.log(calculo2)
console.log(Math.max(idades[0], idades[1], idades[2], idades[3], idades[4]), Math.min(idades[0], idades[1], idades[2], idades[3], idades[4]))

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 10 – Trabalhando com objetos
// ------------------------------------------------------------
// Dado o objeto turma:
let turma = {
  aluno1: {
    nome: "João",
    notas: []
  },
  aluno2: {
    nome: "Maria",
    notas: []
  },
  aluno3: {
    nome: "Pedro",
    notas: []
  }
}
// a) Sem alterar o objeto (utilize somente push), peça para o usuário 3 notas para cada aluno, indicando a quem pertencerá cada nota
// b) Calcule a média de notas de cada aluno e exiba no console, indicando a quem pertence cada média
// c) Exiba a média geral da turma
// d) Exiba a nota mais alta e a mais baixa de cada aluno
// e) Exiba a nota mais alta e a mais baixa da turma

// → Seu código aqui:
turma.aluno1.notas.push(lerTeclado.question("Digite a 1º nota do primeiro aluno:"))
turma.aluno1.notas.push(lerTeclado.question("Digite a 2º nota do primeiro aluno:"))
turma.aluno1.notas.push(lerTeclado.question("Digite a 3º nota do primeiro aluno:"))
turma.aluno2.notas.push(lerTeclado.question("Digite a 1º nota do segundo aluno:"))
turma.aluno2.notas.push(lerTeclado.question("Digite a 2º nota do segundo aluno:"))
turma.aluno2.notas.push(lerTeclado.question("Digite a 3º nota do segundo aluno:"))
turma.aluno3.notas.push(lerTeclado.question("Digite a 1º nota do terceiro aluno:"))
turma.aluno3.notas.push(lerTeclado.question("Digite a 2º nota do terceiro aluno:"))
turma.aluno3.notas.push(lerTeclado.question("Digite a 3º nota do terceiro aluno:"))
let media1 = (turma.aluno1.notas[0]+ turma.aluno1.notas[1]+ turma.aluno1.notas[2])/3
console.log(media1)





console.log("_______________________________");