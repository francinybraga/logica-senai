// ============================================================
//   DESAFIOS (para quem já terminou a atividade 03) – Input e Output em JavaScript
// ============================================================
// Instruções: resolva cada exercício no espaço indicado.
// Lembre-se de instalar o pacote antes de executar:
//     npm install readline-sync
// Lembre-se de criar uma variável para utilizar o readline-sync
//     let lerTeclado = require('readline-sync');
// Para executar:
//     node <nomeDoArquivo>.js
// ============================================================


// ------------------------------------------------------------
// DESAFIO 1 – Cadastro completo
// ------------------------------------------------------------
// a) Peça ao usuário os seguintes dados:
//    nome, idade, profissão, cidade, se gosta de JavaScript, lista de comida favoritos e lista de pessoa(s) com que mora (nome e idade).
//    pense em qual tipo de dado cada resposta representa para armazena-los corretamente.
// b) Crie um objeto "cadastro" com todas essas propriedades.
// c) Exiba o objeto com console.table().
// d) Exiba também uma mensagem usando template literal com todos os dados, ex:
//    "Nome: <nome>. Idade: <idade> anos. Profissão: <profissão> em <cidade>. Gosta de JS: <sim/não> ...."

// → Seu código aqui:
let lerTeclado = require('readline-sync')

// let cadastro = 
// { 
//     nome: lerTeclado.question("Digite seu nome:"),     
//     idade: lerTeclado.questionInt("Digite sua idade:"),
//     cidade: lerTeclado.question("Digite sua cidade:"),
//     profissao:lerTeclado.question("Digite sua profissão:"),
//     javascript: lerTeclado.keyInYN("Você gosta de JavaScript? (s/n)"),
//     comidasFavoritas: 
//     [
//         lerTeclado.question("Digite sua comida favorita:"),
//         lerTeclado.question("Digite sua comida favorita:"),
//         lerTeclado.question("Digite sua comida favorita:")
//     ],
//     pessoasMorada:
//     {  
//         nomeDoResidente: lerTeclado.question("Digite o nome da pessoa que você mora junto:"),
//         idadeDoResidente: lerTeclado.questionInt("Digite a idade da pessoa que você mora junto:")
//     }
// }
// console.table(cadastro)
// console.log(`Nome: ${cadastro.nome}. Idade: ${cadastro.idade} anos. Profissão: ${cadastro.profissao} em ${cadastro.cidade}. Gosta de JS: ${cadastro.javascript}`)
            




console.log("_______________________________");


// ------------------------------------------------------------
// DESAFIO 2 – Dois amigos
// ------------------------------------------------------------
// a) Peça os dados de 2 pessoas diferentes (nome, idade e cidade de cada uma).
// b) Crie um objeto para cada pessoa com essas propriedades.
// c) Crie uma array chamada "amigos" contendo os dois objetos.
// d) Exiba a array com console.table().
// e) Exiba somente o nome e a idade do 2º usuário.
// f) Exiba somente o endereço completo do 2º usuário.
// g) Exiba somente o nome e a rua do 1º usuário.

// → Seu código aqui:
// const dados1 = 
// {
//     nome:lerTeclado.question("Digite seu nome:"),
//     idade:lerTeclado.questionInt("Digite sua idade:"),
//     cidade: 
//     {
//         cidade:lerTeclado.question("Digite sua cidade:"),
//         rua:lerTeclado.question("Digite sua rua:"),
//         numero:lerTeclado.question("Digite o numero da residência:")
//     }
// }
// const dados2 = 
// {
//     nome:lerTeclado.question("Digite seu nome:"),
//     idade:lerTeclado.questionInt("Digite sua idade:"),
//     cidade: 
//     {
//         cidade:lerTeclado.question("Digite sua cidade:"),
//         rua:lerTeclado.question("Digite sua rua:"),
//         numero:lerTeclado.question("Digite o numero da residência:")
//     }
// }

// let amigos=[dados1,dados2]
// console.table(amigos)
// console.log(amigos[1].nome, amigos[1].idade)
// console.log(amigos[2].cidade)
// console.log(amigos[0].nome,amigos[0].cidade.rua)


console.log("_______________________________");


// ------------------------------------------------------------
// DESAFIO 3 – Pedido de restaurante
// ------------------------------------------------------------
// a) Informe ao usuário (com console.info) que ele vai montar um pedido.
// b) Exiba um menu (quanto mais estilizado melhor!) com as opções de entrada, prato principal, sobremesa e bebidas.
// b) Peça ao usuário que escolha:
//    - Uma entrada
//    - Um prato principal
//    - Uma sobremesa
//    - Duas bebidas (uma de cada vez)
// c) Crie um objeto "pedido" com as propriedades: entrada, pratoPrincipal, sobremesa e listaBebidas.
// d) Exiba o pedido com console.table().
// e) Exiba também no console a mensagem:
//    "Seu pedido: Entrada: <entrada>, Prato Principal: <pratoPrincipal>, Sobremesa: <sobremesa>, Bebida 1: <bebida1>, Bebida 2: <bebida2>. Bom apetite!"

// → Seu código aqui:
// console.info("Você irá montar um pedido!")
// console.log (
    
//   `===============================================================
//                                  MENU
//     ==============================================================
//     ENTRADAS                PRATO PRIN             SOBREMESA
//     SALADA:R$ 50,00       MACARRAO:R$ 50,00     YOGURTE:R$ 50,00
//     FRUTAS:R$ 50,00       CARNE:R$ 50,00        SORVETE:R$ 50,00
//     BLA          AA           BB
//     BLA          AA           BB
//     BLA          AA           BB
    
//     BEBIDAS
//     COCA:R$ 50,00
//     SUCO:R$ 50,00
//     CAIPIRINHA:R$ 50,00
    
//     ===============================================================
//     APROVEITE O AMBIENTE E DOE PARA O GARÇOM!
//     ===============================================================`);


//  let entrada = lerTeclado.question("Qual a entrada?")
//  let pratoPrincipal= lerTeclado.question("Qual o prato principal?")
//  let sobremesa = lerTeclado.question("Qual a sobremesa?")
//  let bebida = [
//       bebida1 =  lerTeclado.question("Qual a bebida?"),
//       bebida2 = lerTeclado.question("Qual a bebida?")]

// let pedido = 
// {
//     entrada: entrada,
//     pratoPrincipal: pratoPrincipal,
//     sobremesa: sobremesa,
//     bebida: [bebida1,bebida2]
// }

// console.table(pedido)
// console.log(`Seu pedido: Entrada: ${pedido.entrada}, Prato Principal: ${pedido.pratoPrincipal}, Sobremesa: ${pedido.sobremesa}, Bebida 1: ${pedido.bebida[0]}, Bebida 2: ${pedido.bebida[1]}. Bom apetite!`)
  
    



console.log("_______________________________");


// ------------------------------------------------------------
// DESAFIO 4 – Perfil de jogador
// ------------------------------------------------------------
// a) Peça ao usuário: apelido, jogo favorito e horas totais jogadas (aproximadas)
// b) Pergunte se ele joga em time (sim/não).
// c) Crie um objeto "perfil" com todas as propriedades:
//    apelido, jogoFavorito, horasTotaisJogadas, jogaEmTime.
// d) Exiba o perfil com console.table().
// e) Use console.warn() para exibir: "Lembre-se que jogar não é problema, o problema é colocar o jogo como prioridade."

// → Seu código aqui:
// let perfil = {
//   apelido: lerTeclado.question("Digite seu apelido:"),
//   jogoFavorito: lerTeclado.question("Digite seu jogo favorito:"),
//   horasTotaisJogadas: lerTeclado.questionInt("Horas aproximadas:"),
//   jogaEmTime: lerTeclado.keyInYN("Joga em time?(s/n)")
// }
// console.table(perfil)
// console.warn("Lembre-se que jogar não é problema, o problema é colocar o jogo como prioridade.")


console.log("_______________________________");


// ------------------------------------------------------------
// DESAFIO 5 – Comparador de dados
// ------------------------------------------------------------
// a) Peça o nome e a cidade favorita de 3 pessoas diferentes.
// b) Crie um objeto para cada pessoa com as propriedades: nome e cidadeFavorita.
// c) Exiba um dos objetos com console.table().
// d) Crie uma array "viajantes" com os 3 objetos.
// e) Exiba a array com console.table().
// f) Exiba com console.info() quantos viajantes estão na lista (use .length).
// g) Exiba com console.log() a cidade favorita do 2º viajante.
// h) Exiba com console.log() o nome do 1º viajante.

// → Seu código aqui:
// let pessoa = [{
//   nome:lerTeclado.question("Digite seu nome: "),
//   cidade: lerTeclado.question("Digite sua cidade favorita: ")
// },{
//   nome:lerTeclado.question("Digite seu nome: "),
//   cidade: lerTeclado.question("Digite sua cidade favorita: ")
// },{
//   nome:lerTeclado.question("Digite seu nome: "),
//   cidade: lerTeclado.question("Digite sua cidade favorita: ")
// }]
// console.table(pessoa[0])
// let viajante = [pessoa[0],pessoa[1],pessoa[2]]
// console.table(viajante)

console.log("_______________________________");