// ============================================================
//   ATIVIDADE 01 – Variáveis e Tipos Primitivos em JavaScript
// ============================================================
// Instruções: resolva cada exercício no espaço indicado.
// Use console.log() para exibir os resultados.
// ============================================================


// ------------------------------------------------------------
// EXERCÍCIO 1 – Declaração de variáveis
// ------------------------------------------------------------
// a) Declare uma variável com "var" chamada "meuNome" e atribua o seu nome.
// b) Declare uma variável com "var" chamada "naoUsarVar" e no valor, atribua a explicação de porque não é recomendado utilizar 'var'.
// c) Declare uma variável com "let" chamada "minhaIdade" e atribua a sua idade.
// d) Declare uma variável com "const" chamada "ANO_NASCIMENTO" e atribua o ano em que você nasceu.
// e) Exiba as quatro variáveis no console.

// → Seu código aqui:
const meuNome = "Franciny";
let naoUsarVar = "não é recomendado usar var porque é antigo";
let idade = 23;
const ANO_NASCIMENTO = 2002;

console.log (meuNome, naoUsarVar, idade, ANO_NASCIMENTO);




console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 2 – Strings e template literals
// ------------------------------------------------------------
// a) Declare uma variável "cidade" com o nome da cidade onde você mora.
// b) Declare uma variável "pais" com o nome do seu país.
// c) Usando um template literal, crie a frase:
//    "Eu moro em <cidade>, no <pais>." e armazene em "fraseMoradia".
// d) Exiba "fraseMoradia" e seu tipo (typeof) no console.

// → Seu código aqui:

let cidade = "Jaraguá do Sul, SC";
let pais = "Brasil";
let fraseMoradia = (`Eu moro em ${cidade}, no ${pais}`);
console.log (fraseMoradia);
console.log (typeof fraseMoradia);


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 3 – Boolean
// ------------------------------------------------------------
// a) Declare "maiorDeIdade" como true se você tem 18 anos ou mais, false caso contrário.
// b) Declare "temCNH" com um valor booleano que represente se você tem carteira de motorista.
// c) Exiba as duas variáveis e seus tipos (typeof).

// → Seu código aqui:

let maiorDeIdade = true; 
let temCNH = false;
console.log (maiorDeIdade, temCNH);
console.log (typeof maiorDeIdade);
console.log (typeof temCNH);


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 4 – Undefined e Null
// ------------------------------------------------------------
// a) Declare uma variável "apelido" sem atribuir nenhum valor.
// b) Declare uma variável "enderecoAtual" e atribua null intencionalmente.
// c) Exiba as duas variáveis e seus respectivos tipos (typeof).
// d) Explique (em um comentário) por que typeof null retorna "object".

// → Seu código aqui:
let apelido;
let enderecoAtual = null;
console.log (apelido, enderecoAtual)
console.log (typeof apelido)
console.log (typeof enderecoAtual) //Null retorna "object" porque é o tipo de dado dele, assim como true e false são boolean.



console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 5 – Identificando tipos (typeof)
// ------------------------------------------------------------
// Para cada valor abaixo, use typeof e exiba o resultado no console.
// Tente adivinhar o resultado ANTES de executar!

// 42
// "texto"
// true
// undefined
// null
// 3.14

let number = 42;
let strings = "texto";
let boolean = true;
let erroVazio = undefined;
let dadoAguardo = null;
let decimal = 3.14;


console.log (typeof number)
console.log (typeof strings)
console.log (typeof boolean)
console.log (typeof erroVazio)
console.log (typeof dadoAguardo)
console.log (typeof decimal)
console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 6 – DESAFIO: Mini perfil
// ------------------------------------------------------------
// Usando tudo que aprendeu, crie variáveis para armazenar:
//   • nome, idade, altura (número decimal), cidade, estudandoJS (boolean)
// Em seguida, exiba no console uma mensagem completa usando template literal:
//   "Olá! Meu nome é <nome>, tenho <idade> anos, moro em <cidade>,
//    meço <altura>m e estou estudando JavaScript: <estudandoJS>."

// → Seu código aqui:

const MEUNOME2 = "Franciny Thais";
let idade2 = 23;
let altura2 = 1.71;
let cidade2 = "Jaraguá do Sul";
let estudandoJS2 = true;

console.log (`Olá! Meu nome é ${MEUNOME2}, tenho ${idade2} anos, moro em ${cidade2}, meço ${altura2}m e estou estudando JavaScript: ${estudandoJS2}.`)


console.log("_______________________________");