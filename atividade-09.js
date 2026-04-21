// // ============================================================
// //   ATIVIDADE 09 – Estruturas de Controle (Repetição - For)
// // ============================================================

let readline = require("readline-sync");
// // ------------------------------------------------------------
// // EXERCÍCIO 1 – Contagem simples
// // ------------------------------------------------------------
// // a) Usando um for, exiba no console os números de 5 a 12, um por linha.
// //    O número exibido deve ser o mesmo utilizado para o contador do 'for' ( i )
// // b) Ao final, exiba: "Contagem concluída!"

// // → Seu código aqui:
// for (let i = 5; i <= 12; i++) {
//   console.log(`${i}`);
// }
// console.log(`Contagem concluída!`);

// console.log("_______________________________");

// // ------------------------------------------------------------
// // EXERCÍCIO 2 – Contagem decrescente
// // ------------------------------------------------------------
// // a) Usando um for, exiba os números de 10 até 3 em ordem decrescente.
// //    O número exibido deve ser o mesmo utilizado para o contador do 'for' ( i )
// // b) Ao final, exiba: "Lançamento! 🚀"

// // → Seu código aqui:
// for (let i = 10; i >= 3; i--) {
//   console.log(`${i}`);
// }
// console.log("Lançamento! 🚀");

// console.log("_______________________________");

// // ------------------------------------------------------------
// // EXERCÍCIO 3 – Números pares
// // ------------------------------------------------------------
// // a) Usando um for com passo 2, exiba todos os números pares de 0 a 30.
// // b) Ao final, exiba quantos números pares foram exibidos.

// // → Seu código aqui:
// let contador = 0;
// for (let i = 0; i <= 30; i += 2) {
//   console.log(i);
//   contador++;
// }
// console.log("Foram exibidos", contador, "numeros pares");

// console.log("_______________________________");

// // ------------------------------------------------------------
// // EXERCÍCIO 4 – Tabuada
// // ------------------------------------------------------------
// // a) Peça ao usuário um número inteiro (questionInt()).
// // b) Exiba a tabuada desse número de 1 a 10 no formato:
// //    "<número> x <i> = <resultado>"

// // → Seu código aqui:

// let a = readline.questionInt("Um numero: ");

// for (i = 1; i <= 10; i++) {
//   console.log(`${a} x ${i} = ${a * i}`);
// }

// console.log("_______________________________");

// // ------------------------------------------------------------
// // EXERCÍCIO 5 – Soma acumulada
// // ------------------------------------------------------------
// // a) Peça ao usuário um número inteiro positivo N (questionInt()).
// // b) Usando um for, calcule a soma de todos os inteiros de 1 até N.
// // c) Exiba: "A soma de 1 até <N> é <soma>"

// // → Seu código aqui:
// let b = readline.questionInt("Digite um numero: ");
// let soma = 0;
// for (let i = 0; i <= b; i++) {
//   soma += i;
// }
// console.log(`A soma de 1 até ${b} é ${soma}`);

// console.log("_______________________________");

// // ------------------------------------------------------------
// // EXERCÍCIO 6 – Fatorial
// // ------------------------------------------------------------
// // a) Peça ao usuário um número inteiro de 1 a 10 (questionInt()).
// // b) Calcule o fatorial desse número usando um for.
// //    Fatorial de N (N!) = 1 × 2 × 3 × ... × N
// //    Exemplo: 5! = 1 × 2 × 3 × 4 × 5 = 120
// // c) Exiba: "<N>! = <resultado>"

// // → Seu código aqui:
// let c = readline.questionInt("Digite um numero de 1 a 10: ");

// if (c < 1 || c > 10) {
//   console.log("Número inválido!");
// } else {
//   let resultado = 1;
//   let conta = "";

//   for (let i = 1; i <= c; i++) {
//     resultado *= i;
//     conta += i;

//     if (i < c) {
//       conta += " x ";
//     }
//   }

//   console.log(`${c}! = ${conta} = ${resultado}`);
// }
// console.log("_______________________________");

// // ------------------------------------------------------------
// // EXERCÍCIO 7 – Percorrendo um array
// // ------------------------------------------------------------
// // a) Utilizando o array:
// const cidades = [
//   "São Paulo",
//   "Rio de Janeiro",
//   "Curitiba",
//   "Salvador",
//   "Fortaleza",
// ];
// // b) Utilizando de um for, exiba cada cidade com seu índice no formato:
// //    "[<indice>] - <Cidade>"
// // c) Ao final, exiba: "Total de cidades: <quantidade>"

// // → Seu código aqui:
// for (let i = 0; i < cidades.length; i++) {
//   console.log(`${i} - ${cidades[i]}`);
// }
// console.log(`Total de cidades: ${cidades.length}`);

// console.log("_______________________________");

// // ------------------------------------------------------------
// // EXERCÍCIO 8 – Maior e menor valor
// // ------------------------------------------------------------
// // a) Declare o array:
// const temperaturas = [28, 15, 32, 9, 21, 37, 14, 25];
// // b) Usando um for, encontre o maior e o menor valor do array.
// // c) Exiba:
// //    "Maior temperatura: <maior>°C"
// //    "Menor temperatura: <menor>°C"

// // → Seu código aqui:
// let maior = temperaturas[0];
// let menor = temperaturas[0];
// for (let i = 0; i < temperaturas.length; i++) {
//   if (temperaturas[i] > maior) {
//     maior = temperaturas[i];
//   }

//   if (temperaturas[i] < menor) {
//     menor = temperaturas[i];
//   }
// }
// console.log(`
// Maior temperatura: ${maior}°C"
// Menor temperatura: ${menor}°C`);

// console.log("_______________________________");

// // ------------------------------------------------------------
// // EXERCÍCIO 9 – Contando com condição
// // ------------------------------------------------------------
// // a) Utilizando do array:
// const idades = [12, 25, 17, 34, 15, 42, 16, 29, 8, 19];
// // b) Usando um for, conte:
// //    - Quantas pessoas são menores de idade (< 18)
// //    - Quantas são maiores de idade (>= 18)
// // c) Exiba os dois totais.
// let menorIdade = [0];
// let maiorIdade = [0];
// for (let i = 0; i < idades.length; i++) {
//   if (idades[i] < 18) {
//     menorIdade = idades[i];
//   } else {
//     maiorIdade = idades[i];
//   }
// }
// console.log(`menores de idade= ${menorIdade}
//     maiores de idade= ${maiorIdade}`);

// // → Seu código aqui:

// console.log("_______________________________");

// // ------------------------------------------------------------
// // EXERCÍCIO 10 – Média com array
// // ------------------------------------------------------------
// // a) Utilizando do array:
// const salarios = [1800, 3200, 950, 4500, 2100, 1500, 7800, 2900];
// // b) Usando um for, calcule a média salarial.
// // c) Exiba a média no formato: "Média salarial: R$ <media>"
// // d) Usando outro for, exiba cada salário e se está acima ou abaixo da média:
// //    "R$ 1800,00 – Abaixo da média"
// //    "R$ 3200,00 – Acima da média"

// // → Seu código aqui:

// let soma1 = 0;
// for (let i = 0; i < salarios.length; i++) {
//   soma1 += salarios[i];
// }
// let media = soma1 / salarios.length;
// console.log(`Média salarial: R$ ${media}`);

// console.log("_______________________________");

// // ------------------------------------------------------------
// // EXERCÍCIO 11 – Ranking de notas
// // ------------------------------------------------------------
// // a) Peça ao usuário o nome de 3 alunos e suas três notas, um por vez.
// // b) Armazene cada aluno como um objeto com as propriedades 'nome' e 'notas'.
// // c) Guarde os 3 objetos em um array chamado 'turma'.
// // d) Calcule a média das notas da turma e armazene em uma variável 'media'.
// // e) Percorra o array e para cada aluno exiba no console:
// //    "<nome>: <nota> – <situação>"
// //    A situação deve ser:
// //      "Aprovado"    → nota >= 7
// //      "Recuperação" → nota >= 5 e < 7
// //      "Reprovado"   → nota < 5
// // f) Ao final, exiba a média da turma no formato:
// //    "Média da turma: <media>"
// // g) Exiba o array 'turma' com console.table().

// // → Seu código aqui:
// let aluno1 = {
//   nome: readline.question("Digite o nome do aluno: "),
//   nota1: readline.questionInt("Digite a primeira nota: "),
//   nota2: readline.questionInt("Digite a segunda nota: "),
//   nota3: readline.questionInt("Digite a terceira nota: "),
// };
// aluno1.media = (aluno1.nota1 + aluno1.nota2 + aluno1.nota3) / 3;
// let aluno2 = {
//   nome: readline.question("Digite o nome do aluno: "),
//   nota1: readline.questionInt("Digite a primeira nota: "),
//   nota2: readline.questionInt("Digite a segunda nota: "),
//   nota3: readline.questionInt("Digite a terceira nota: "),
// };
// aluno2.media = (aluno2.nota1 + aluno2.nota2 + aluno2.nota3) / 3;
// let aluno3 = {
//   nome: readline.question("Digite o nome do aluno: "),
//   nota1: readline.questionInt("Digite a primeira nota: "),
//   nota2: readline.questionInt("Digite a segunda nota: "),
//   nota3: readline.questionInt("Digite a terceira nota: "),
// };
// aluno3.media = (aluno3.nota1 + aluno3.nota2 + aluno3.nota3) / 3;

// let turmas = [aluno1, aluno2, aluno3];
// for (let i = 0; i < turmas.length; i++) {
//   let aluno = turmas[i];
//   let media = aluno.media;
//   if (media >= 7) {
//     console.log("Aprovado");
//   } else if (media >= 5) {
//     console.log("Recuperação");
//   } else {
//     console.log("Reprovado");
//   }
// }

// console.log("_______________________________");

// // ------------------------------------------------------------
// // EXERCÍCIO 12 – Coletando dados com for e input
// // ------------------------------------------------------------
// // a) Pergunte ao usuário quantos produtos quer cadastrar (questionInt()).
// // b) Usando um for, colete de cada produto:
// //    - nome (question())
// //    - preco (questionFloat())
// // c) Armazene cada produto como objeto em um array 'estoque'.
// // d) Após o cadastro, percorra o array e exiba cada produto no formato:
// //    "<nome>: R$ <preco>"
// // e) Exiba o produto mais caro e o mais barato.
// // f) Exiba o array com console.table().

// // → Seu código aqui:

let produtos = readline.questionInt("Quantos produtos quer cadastrar: ");
let estoque = [];

let caro;
let barato;

for (let i = 0; i < produtos; i++) {
  let nome = readline.question("Digite o nome do produto: ");
  let preco = readline.questionFloat("Digite o preco do produto: ");

  let produto = { nome, preco };
  estoque.push(produto);

  if (i === 0) {
    caro = produto;
    barato = produto;
  } else {
    if (produto.preco > caro.preco) {
      caro = produto;
    }
    if (produto.preco < barato.preco) {
      barato = produto;
    }
  }
}
for (let i = 0; i < estoque.length; i++) {
  console.log(`${estoque[i].nome}: R$ ${estoque[i].preco}`);
}
console.log(`Produto mais caro: ${caro.nome} - R$ ${caro.preco}`);
console.log(`Produto mais barato: ${barato.nome} - R$ ${barato.preco}`);
console.table(estoque);

console.log("_______________________________");
