// ============================================================
//   ATIVIDADE 03 – Input e Output em JavaScript
// ============================================================
// Instruções: resolva cada exercício no espaço indicado.
// Lembre-se de instalar o pacote antes de executar:
//     npm install readline-sync
// Lembre-se de criar uma variável para utilizar o readline-sync
//     let lerTeclado = require('readline-sync');
// Para executar:
//     node <nomeDoArquivo>.js
//
// Dica: Ao terminar um exercício, comente-o. Assim os dados não serão solicitados novamente.
// ============================================================


// ------------------------------------------------------------
// EXERCÍCIO 1 – Explorando os métodos do console
// ------------------------------------------------------------
// a) Use console.log() para exibir a mensagem: "Iniciando o programa..."
// b) Use console.info() para exibir uma mensagem informando sobre o que é a atividade atual.
// c) Use console.warn() para exibir um aviso de que o usuário sempre precisa iniciar o programa com node e o nome do arquivo.
// d) Use console.error() para exibir uma mensagem de erro aleatória de sua escolha.

// → Seu código aqui:
let lerTeclado = require('readline-sync')

// console.log("iniciando o programa...")
// console.info("informo que a atividade é sobre input e output")
// console.warn("aviso: você precisa iniciar o programa com node e o nome do arquivo")
// console.error("faça novamente, ocorreu um erro")


// console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 2 – Saudação personalizada
// ------------------------------------------------------------
// a) Peça ao usuário que digite seu nome usando question().
// b) Peça ao usuário que digite sua idade usando questionInt().
// c) Exiba no console uma saudação usando template literal, no formato:
//    "Olá, <nome>! Você tem <idade> anos."

// → Seu código aqui:


// const nome= lerTeclado.question("Digite seu nome:")
// const idade= lerTeclado.questionInt("Digite sua idade:")
// console.log(`Seja bem-vinda(o), ${nome}! Você tem ${idade} anos.`)



console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 3 – Ficha pessoal
// ------------------------------------------------------------
// a) Peça ao usuário os seguintes dados: nome, idade e cidade.
// b) Crie um objeto chamado "ficha" com as propriedades: nome, idade e cidade.
// c) Exiba o objeto com console.table().

// → Seu código aqui:


// const nome = lerTeclado.question("Digite seu nome:")
// const idade = lerTeclado.questionInt("Digite sua idade:")
// const cidade = lerTeclado.question("Digite sua cidade:")
// let ficha = {
//     nome: nome,
//     idade: idade,
//     cidade: cidade
// }
// console.table(ficha)




console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 4 – Perguntas de sim ou não
// ------------------------------------------------------------
// a) Faça duas perguntas de sim/não ao usuário usando keyInYN().
// b) Armazene as respostas em variáveis.
// c) Exiba as respostas no console usando template literal.

// → Seu código aqui:
// const programar = lerTeclado.keyInYN("Você gosta de programar? (s/n)")
// const aprender = lerTeclado.keyInYN("Você gosta de aprender? (s/n)")



// console.log(`${programar ? 'Gosta' : 'Não gosta'} de programar.`)
// console.log(`${aprender ? 'Gosta' : 'Não gosta'} de aprender.`)

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 5 – Lista de favoritos
// ------------------------------------------------------------
// a) Peça ao usuário que informe 3 comidas favoritas, uma por vez.
// b) Armazene as 3 respostas em uma array chamada "comidasFavoritas".
// c) Exiba a array com console.table().

// → Seu código aqui:

// let comida = lerTeclado.question("Digite sua comida favorita:")
// let comida1 = lerTeclado.question("Digite sua comida favorita:")
// let comida2 = lerTeclado.question("Digite sua comida favorita:")
// let comidasFavoritas = [comida,comida1,comida2]
// console.table(comidasFavoritas)


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 6 – Apresentação completa
// ------------------------------------------------------------
// a) Peça ao usuário: nome, profissão e cidade.
// b) Armazene estes dados em um objeto 'cadastroPessoal'
// c) Exiba no console uma frase completa com os dados, usando template literal:
//    "Me chamo <nome>. Profissão: <profissão> e moro na cidade de: <cidade>."
// d) Exiba a mesma informação com console.table().

// → Seu código aqui:
// const nome = lerTeclado.question("Digite seu nome:")
// let profissão = lerTeclado.question("Digite sua profissão atual?")
// let cidade = lerTeclado.question("Digite sua cidade natal:")
// let cadastroPessoal = {
//     nome: nome,
//     cidade: cidade,
//     profissão: profissão
// }
// console.log(`Me chamo ${nome}. Profissão: ${profissão} e moro na cidade de: ${cidade}.`)
// console.table(cadastroPessoal)


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 7 – Lista de objetos
// ------------------------------------------------------------
// a) Através do terminal, capture o dado de 3 usuários fictícios, cada um com as seguintes propriedades:
//    nome(string), idade(number) e endereço(objeto).
//    objeto endereço deve conter as propriedades: cidade(string), rua(string) e numero(number)
// b) Armazene cada usuário em um objeto.
// c) Armazee os objetos em um array 'listaDeUsuarios'
// d) Exiba o array com console.table().
// e) Exiba somente o nome e a idade do 2º usuário.
// f) Exiba somente o endereço completo do 3º usuário.
// g) Exiba somente o nome e a rua do 1º usuário.

// → Seu código aqui:


// let listaDeUsuário = [
//     {
//         nome: lerTeclado.question("Digite seu nome:"),
//         idade: lerTeclado.questionInt("Digite sua idade:"),
//         endereco: endereço = {
//             cidade: lerTeclado.question("Digite sua cidade:"),
//             rua: lerTeclado.question("Digite sua rua:"),
//             numero: lerTeclado.questionInt("Digite o numero da sua casa:")
//         }
//     },
//     {
//         nome: lerTeclado.question("Digite seu nome:"),
//         idade: lerTeclado.questionInt("Digite sua idade:"),
//         endereco: endereço = {
//             cidade: lerTeclado.question("Digite sua cidade:"),
//             rua: lerTeclado.question("Digite sua rua:"),
//             numero: lerTeclado.questionInt("Digite o numero da sua casa:")
//         }
//     },
//     {
//         nome: lerTeclado.question("Digite seu nome:"),
//         idade: lerTeclado.questionInt("Digite sua idade:"),
//         endereco: endereço = {
//             cidade: lerTeclado.question("Digite sua cidade:"),
//             rua: lerTeclado.question("Digite sua rua:"),
//             numero: lerTeclado.questionInt("Digite o numero da sua casa:")
//         }
//     }
// ]
// console.table(listaDeUsuário)
// console.log(listaDeUsuário[1].nome, listaDeUsuário[1].idade)
// console.log(listaDeUsuário[2].endereco)
// console.log(listaDeUsuário[0].nome, listaDeUsuário[0].endereco.rua)



console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 8 – Ranking de notas
// ------------------------------------------------------------
// a) Peça ao usuário o nome de 3 alunos e suas três notas, um por vez.
// b) Armazene cada aluno como um objeto com as propriedades 'nome' e 'notas'.
// c) Guarde os 3 objetos em um array chamado 'turma'.
// d) Exiba o array 'turma' com console.table().
// e) Exiba o nome e a 1ª nota do 2º aluno.
// f) Exiba o nome e a 2ª nota do 3º aluno.
// g) Exiba o nome e a 3ª nota do 1º aluno.

// → Seu código aqui:
// let aluno1 = {
//    nome :lerTeclado.question("Digite seu nome:"),
//    nota1 :lerTeclado.questionInt("Digite sua nota:"),
//    nota2 :lerTeclado.questionInt("Digite sua nota:"),
//    nota3 :lerTeclado.questionInt("Digite sua nota:")
// }
// let aluno2 = {
//    nome :lerTeclado.question("Digite seu nome:"),
//    nota1 :lerTeclado.questionInt("Digite sua nota:"),
//    nota2 :lerTeclado.questionInt("Digite sua nota:"),
//    nota3 :lerTeclado.questionInt("Digite sua nota:")
// }
// let aluno3 = {
//    nome :lerTeclado.question("Digite seu nome:"),
//    nota1 :lerTeclado.questionInt("Digite sua nota:"),
//    nota2 :lerTeclado.questionInt("Digite sua nota:"),
//    nota3 :lerTeclado.questionInt("Digite sua nota:")
// }
// let turma = [aluno1, aluno2, aluno3]
// console.table(turma)
// console.log(turma[1].nome,turma[1].nota1)




console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 9 – Cadastro de produto
// ------------------------------------------------------------
// a) Peça ao usuário os seguintes dados de um produto:
//    - nome (string)
//    - categoria (string)
//    - preço (float)
//    - quantidade em estoque (inteiro)
//    - está disponível para venda? (sim/não, usando keyInYN())
// b) Crie um objeto 'produto' com todas essas propriedades.
//    A propriedade de disponibilidade deve se chamar 'disponivel' e ser boolean (true/false).
// c) Exiba o objeto completo com console.table().
// d) Exiba no console uma frase resumo usando template literal:
//    "Produto: <nome> | Categoria: <categoria> | Estoque: <quantidade> un".

// → Seu código aqui:
// const produto = {
//     nome: lerTeclado.question("Digite o nome do produto:"),
//     categoria: lerTeclado.question("Digite a categoria do produto:"),
//     preco: lerTeclado.questionInt("Digite o preço:"),
//     quantidade_em_estoque: lerTeclado.questionInt("Digite a quantidade em estoque:"),
//     disponivel: lerTeclado.keyInYN("Está disponível para venda? (s/n):")
// }
// console.table (produto)
// console.log(`Produto: ${produto.nome} | Categoria: ${produto.categoria} | Estoque: ${produto.quantidade_em_estoque} un`)

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 10 – Farmacia
// ------------------------------------------------------------
// a) Peça ao usuário os seguintes dados de dois medicamento com as seguintes propriedades:
//    - nome (string)
//    - preco (float)
//    - emEstoque (boolean) - (sim/não, usando keyInYN())
// b) Crie uma lista "estoqueFarmacia" e insira os objetos criados com push().
// c) Exiba a lista com console.table().
// d) Exiba somente o nome e preço do 2 medicamento.
// e) Exiba somente o nome e se está em estoque o 1 medicamento.

// let medicamento1 = {
//     nome: lerTeclado.question("Digite o nome do medicamento:"),
//     preco: lerTeclado.questionInt("Digite o preço:"),
//     estoque: lerTeclado.keyInYN("Tem em estoque? (s/n)")
// }
// let medicamento2 = {
//     nome: lerTeclado.question("Digite o nome do medicamento:"),
//     preco: lerTeclado.questionInt("Digite o preço:"),
//     estoque: lerTeclado.keyInYN("Tem em estoque? (s/n)")
// }
// let estoqueFarmacia = []
// estoqueFarmacia.push(medicamento1)
// estoqueFarmacia.push(medicamento2)

// console.table(estoqueFarmacia)
// console.log(estoqueFarmacia[1].nome,estoqueFarmacia[1].preco)