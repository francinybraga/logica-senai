
// ============================================================
//   ATIVIDADE 01.1 – Variáveis e Tipos Primitivos em JavaScript
// ============================================================
// Instruções: resolva cada exercício no espaço indicado.
// Use console.log() para exibir os resultados.
// ============================================================

// ------------------------------------------------------------
// EXERCÍCIO 1 – Apresentação criativa
// ------------------------------------------------------------
// Crie variáveis para nome, idade e hobby favorito.
// Monte uma frase usando template literal que se apresente e diga o que gosta de fazer.

// → Seu código aqui:
const nome1 = "Franciny Thais";
let idade1 = 23;
let hobbyFavorito = "Jogar video game";
 
console.log (`Olá, eu me chamo ${nome1}, tenho ${idade1} anos e no meu tempo livre eu gosto de ${hobbyFavorito}.`);

console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 2 – Frase sobre clima
// ------------------------------------------------------------
// Crie variáveis para cidade e temperatura atual (número).
// Use template literal para criar uma frase como:
// "Hoje em <cidade> está fazendo <temperatura>°C, perfeito para ..."

// → Seu código aqui:
let cidade1 = "Jaraguá do Sul";
let temperatura1 = 24;
console.log (`Hoje em ${cidade1} está fazendo ${temperatura1}°C, perfeito para estudar JavaScript.`);

console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 3 – Tipos primitivos em frases
// ------------------------------------------------------------
// Crie uma variável de cada tipo primitivo: string, number, boolean, undefined, null.
// Para cada uma, exiba uma frase usando template literal que diga o valor e o tipo.

// → Seu código aqui:
let pais = "Brasil";
let salario = 50000.00;
let chovendo1 = false;
let semValor;
let contaUsuario = null;
console.log (`O melhor país para se viver é o ${pais}. O tipo da variável é:`, typeof pais);
console.log (`Meu sonho de salário é chegar aos $${salario} dolares por mês. O tipo da variável dela é:`, typeof salario);
console.log (`Irá chover este final de semana? ${chovendo1}. O tipo da variável é:`, typeof chovendo1);
console.log (`Esta frase não tem resposta ${semValor}; O tipo da variável é:`, typeof semValor);
console.log (`Aguardando este usuário criar uma conta: ${contaUsuario}. O tipo da variável é:`, typeof contaUsuario);


console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 4 – Mini história
// ------------------------------------------------------------
// Crie variáveis para personagem, idade, cidade e missão.
// Monte uma frase usando template literal contando uma mini história com esses dados.

// → Seu código aqui:
const nome2 = "Kratos";
const nome3 = "Atreus";
let local1 = "Midgard";
let local2 = "nove reinos";
let raca1 = "Gigante";
let raca2 = "deus da guerra";
let missão1 = "jogar as cinzas de Faye do pico mais alto dos noves reinos";


console.log (`${nome2}, o ${raca2}, carrega o peso de um passado violento e de arrependimento.\n ${nome3}, é um ${raca1}, filho de ${nome2} e Faye.\n Em ${local1}, após a morte de Faye, partem em uma missão para realizar seu último desejo.\n Que consiste em ${missão1}, e descobrem uma profecia dos ${raca1}.\n Levando-os para uma aventura cheia de mistérios pelos ${local2}.`)


console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 5 – Mensagem motivacional
// ------------------------------------------------------------
// Crie uma variável com seu nome e outra com um objetivo para este ano.
// Use template literal para criar uma mensagem motivacional personalizada.

// → Seu código aqui:
const nome5 = "Franciny Thais"
let objetivo1 = "aprender a programar"
console.log(`${nome5}, se você não ${objetivo1} este ano, vai trabalhar em mercado pelo resto da vida.`)

console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 6 – Menu
// ------------------------------------------------------------
// Utilizando apenas console.log(), reproduza o menu que esta na imagem "exemplo-menu-atividade-01-2" anexa junto a esta atividade

// → Seu código aqui:
console.log("==================================");
console.log ("         Sistema do usuário");
console.log("==================================");
console.log("1 - Ver Perfil");
console.log("2 - Editar Perfil");
console.log("3 - Configuração");
console.log("4 - Notificação");
console.log("5 - Relatórios");
console.log("6 - Ajuda");
console.log("7 - Sobre o Sistema");
console.log("0 - Sair");
console.log("==================================");
console.log("Digite o número da opção desejada");
console.log("==================================");

console.log (
    
`==================================
         Sistema do usuário
==================================

1 - Ver Perfil
2 - Editar Perfil
3 - Configuração
4 - Notificação
5 - Relatórios
6 - Ajuda
7 - Sobre o Sistema
0 - Sair
==================================
Digite o número da opção desejada
==================================`);





console.log("_______________________________");
