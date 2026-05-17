// ============================================================
//   ATIVIDADE 12 – Estruturas de Dados: Vetor (Array)
// ============================================================

// Dica: Faça os exercícios utilizando funções de array,
//       mas também tente resolver os desafios sem essas funções

// ------------------------------------------------------------
// EXERCÍCIO 1 – Lendo e exibindo um vetor
// ------------------------------------------------------------
// a) Declare um vetor com 5 cidades de sua escolha.
// b) Exiba a lista de cidades utilizando for().
// c) Exiba a primeira e a última cidade; a última utilizando .length.
// d) Exiba a quantidade total de cidades.

// → Seu código aqui:
// let cidades = ["Sao Paulo", "Manaus", "Curitiba", "Belem", "Bahia"]
// for (const cidade of cidades) {
//   console.log(`Lista de cidades: ${cidade}`)
// }
// console.log(`Primeira cidade da lista: ${cidades[0]}`)
// console.log(`Ultima cidade da lista: ${cidades[cidades.length - 1]}`)
// console.log(`Total de cidades: ${cidades.length}`)

console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 2 – Soma e média
// ------------------------------------------------------------
// a) Utilizando o vetor:
const numeros = [12, 7, 25, 3, 18, 9, 31, 14];
// b) Calcule a SOMA de todos os números.
// c) Calcule a MÉDIA (soma / quantidade).
// d) Exiba: "Soma: <soma> | Média: <média>" (use toFixed(2) na média).

// → Seu código aqui:
// let soma = 0
// for(const numero of numeros){
//   soma += numero
// }
// console.log(soma)
// let media = soma / numeros.length
// console.log(`Soma: ${soma} | Média: ${Number(media.toFixed(2))}`)

console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 3 – Maior e menor
// ------------------------------------------------------------
// a) Utilizando o vetor:
const temperaturas = [22.5, 19.0, 27.3, 18.7, 30.1, 25.4, 21.8];
// b) Encontre a MAIOR e a MENOR temperatura.
// c) Exiba: "Maior: <maior>°C | Menor: <menor>°C"

// → Seu código aqui:
// let maior = temperaturas[0]
// let menor = temperaturas[0]
// for(let i = 1; i < temperaturas.length; i++){
//   if(temperaturas[i] > maior){
//     maior = temperaturas[i]
//   }
//   if (temperaturas[i] < menor){
//     menor = temperaturas[i]
//   }
// }
// console.log(`Temperatura maior: ${maior}`)
// console.log(`Temperatura menor: ${menor}`)
console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 4 – Pares e ímpares
// ------------------------------------------------------------
// a) Utilizando o vetor:
const listaNumeros = [4, 7, 10, 13, 16, 19, 22, 25, 28];
// b) Conte quantos números são pares e quantos são ímpares.
// c) Crie dois vetores: paresVetor[] e imparesVetor[], e adicione os números em cada um.
// d) Exiba:
//    "Pares (<qtd>): <paresVetor>"
//    "Ímpares (<qtd>): <imparesVetor>"

// → Seu código aqui:
// let paresVetor = []
// let imparesVetor = []
// let qtd = 0
// let qti =0
// for (const numero of listaNumeros){
//   if(numero % 2 === 0){
//     paresVetor.push(numero)
//     qtd++
//   } else {
//     imparesVetor.push(numero)
//     qti++
//   }
// }
// console.log(`
// Pares quantidades: ${qtd}
// valores: ${paresVetor}
// Ímpares quantidade: ${qti}
// valores :${imparesVetor}`)

console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 5 – Inversão de vetor
// ------------------------------------------------------------
// a) Utilizando o vetor:
// b) Usando for(), crie um novo vetor 'vetorInvertido' com os elementos em ordem reversa.
// c) Exiba ambos os vetores:
//    "Original:  <original>"
//    "Invertido: <invertido>"
// d) Inverta o vetorOriginal, mas utilizando função de array,
//    salve o resultado em vetorInvertido2 e exiba o resultado.

// → Seu código aqui:
// const vetorOriginal = ["A", "B", "C", "D", "E"];
// let invertido = []
// let primeiro = vetorOriginal[0]
// for (let i = vetorOriginal.length - 1; i >= 0; i--) {
//   invertido.push(vetorOriginal[i])
// }
// console.log(invertido)
// vetorOriginal.reverse()
// console.log(vetorOriginal)

console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 6 – Cadastro dinâmico
// ------------------------------------------------------------
// a) Crie um vetor vazio para produtos;
// b) Pergunte ao usuário quantos produtos deseja cadastrar.
// c) Usando for(), peça o nome de cada produto e adicione ao vetor.
// d) Ao final, também utilizando for() exiba o vetor completo e a mensagem:
//    "<qtd> produtos cadastrados."

// → Seu código aqui:
let readline = require("readline-sync");
// let produtos = []
// let qtd = 0
// let nome = ""
// let cadastro = readline.questionInt("Quantos produtos deseja cadastrar: ")
// for(let i = 0; i < cadastro; i++ ){
//   let nome = readline.question("Digite o nome do produto: ")
//   produtos.push(nome)
//   qtd++
// }
// console.log(produtos)
// console.log(`${qtd} produtos cadastrados.`)

console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 7 – Busca em vetor
// ------------------------------------------------------------
// a) Utilizando o vetor:
const alunos = ["Ana", "Bruno", "Carla", "Diego", "Eva"];
// b) Pergunte ao usuário o nome de um aluno.
// c) Usando for e break, verifique se o nome existe na lista.
//    - Se existir: "<nome> está matriculado(a) (índice <i>)."
//    - Se não:     "<nome> não foi encontrado(a)."

// → Seu código aqui:
// let nome = readline.question("Digite o nome de um aluno: ")
// let encontrado = false
// for(let i=0; i < alunos.length; i++){
//   if(alunos[i] === nome){
//   console.log(`${nome} está matriculado(a) no indice ${i + 1}.`)
//     encontrado = true
//     break
// }
// }
// if (encontrado === false){
//   console.log(`${nome} não foi encontrado(a).`)
// }

console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 8 – Vetor de objetos
// ------------------------------------------------------------
// a) Utilizando o vetor:
const livros = [
  { titulo: "Dom Casmurro", paginas: 256 },
  { titulo: "O Cortiço", paginas: 304 },
  { titulo: "Memórias Póstumas", paginas: 208 },
  { titulo: "Capitães da Areia", paginas: 280 },
];
// b) Exiba a lista com console.table().
// c) Usando for, calcule:
//    - Total de páginas de todos os livros.
//    - Média de páginas por livro.
// d) Exiba o título do livro com MAIS páginas.

// → Seu código aqui:
// console.table(livros)
// let soma = 0
// let qant = 0
// for(const pagina of livros){
//   soma += pagina.paginas
//   qant++
// }
// console.log(soma)
// let media = soma / qant
// console.log(media)
// let mais = livros[0].paginas
// for(let i = 1; i < livros.length; i++){
//   if(livros[i].paginas > mais ){
//     mais = livros[i]
//   }
// }
// console.log(`O livro com mais paginas é ${mais.titulo}`)
console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 9 – Filtro com push
// ------------------------------------------------------------
// a) Utilizando o vetor:
const idades = [12, 17, 21, 15, 30, 45, 9, 67, 19, 8];
// b) Usando for, separe o vetor acima em dois vetores:
//    - menores[]: pessoas com idade < 18
//    - adultos[]: pessoas com idade >= 18
// c) Exiba:
//    "Menores (<qtd>): <menores>"
//    "Adultos (<qtd>): <adultos>"

// → Seu código aqui:
// let menores = []
// let maiores = []
// for(let i= 0; i < idades.length; i++){
//   if(idades[i] < 18){
//     menores.push(idades[i])
//   } else if(idades[i] > 18){
//     maiores.push(idades[i])
//   }
// }
// for(const idade of idades){
//   if(idade < 18){
//     menores.push(idade)
//   } else if(idade > 18 ){
//     maiores.push(idade)
//   }
// }
// duas maneiras de fazer com for e for of
// console.log(`
// Menores ${menores.length}: ${menores}
// Adultos ${maiores.length}: ${maiores}`)

console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 10 – Menu de notas
// ------------------------------------------------------------
// a) Crie um vetor vazio para notas;
// b) Usando do...while e switch, exiba o menu:
//    1 - Adicionar nota
//    2 - Listar notas
//    3 - Estatísticas
//    4 - Remover última
//    5 - Limpar todas
//    0 - Sair
// c) Realize as funções escolhidas até o usuário escolher 0.
// d) Ao sair: "Encerrando. Total de notas registradas: <qtd>"

// → Seu código aqui:
// let notas = [];
// let nota = [];
// let funcao = "";
// let qant = 0;
// do {
//   console.log(`
//    1 - Adicionar nota
//    2 - Listar notas
//    3 - Estatísticas
//    4 - Remover última
//    5 - Limpar todas
//    0 - Sair
//     `);
//   funcao = readline.questionInt("Escolha uma das opcoes acima: ");
//   switch (funcao) {
//     case 1:
//       console.log("PARA PARAR DE ADICIONAR NOTAS DIGITE 0!");
//       do {
//         nota = readline.questionFloat("Digite para adicionar notas. ");

//         if (nota != 0) {
//           notas.push(nota);
//           qant++;
//         }
//         console.log("LISTA DE NOTAS");
//         console.log(notas);
//       } while (nota != 0);
//       break;
//     case 2:
//       console.log(`Essas são as notas ${notas}`);
//       break;
//     case 3:
//       let maior = notas[0];
//       let menor = notas[0];
//       for (let i = 0; i < notas.length; i++) {
//         if (notas[i] > maior) {
//           maior = notas[i];
//         } else if (notas[i] < menor) {
//           menor = notas[i];
//         }
//       }
//       console.log(`
//         A maior nota é ${maior}.
//         A menor nota é ${menor}`);
//       let soma = 0;
//       for (const noota of notas) {
//         soma += noota;
//       }
//       console.log(`A soma de todas as notas é ${soma}`);
//       break;
//     case 4:
//       notas.pop();
//       console.log(notas);
//       break;
//     case 5:
//       notas = [];
//       console.log(notas);
//       break;
//     case 0:
//       console.log(`SAINDO. ATÉ BREVE! ${notas}. Quantidade de notas ${qant}`);
//       break;
//     default:
//       console.log("Escolha uma opcao valida.");
//       break;
//   }
// } while (funcao != 0);

console.log("_______________________________");
