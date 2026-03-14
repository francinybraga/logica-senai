// ============================================================
//   DESAFIOS (para quem já terminou as atividades 02 e 02-2) – Arrays e Objetos em JavaScript
// ============================================================
// Instruções: resolva cada exercício no espaço indicado.
// Use console.log() para exibir os resultados.
// ============================================================


// ------------------------------------------------------------
// EXERCÍCIO 1 – Acessar e alterar elementos de array
// ------------------------------------------------------------
const frutas = ['maçã', 'banana', 'laranja', 'uva'];
// a) Acesse o primeiro e o terceiro elemento e exiba com console.log().
// b) Substitua o segundo elemento por 'abacaxi' usando atribuição direta.

// → Seu código aqui:
console.log (frutas [0], frutas [2]);
frutas.splice(1, 1, "abacaxi");
console.log (frutas)



console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 2 – Criar novos arrays por seleção
// ------------------------------------------------------------
const letras1 = ['a', 'b', 'c', 'd', 'e', 'f'];
// a) Crie um novo array contendo apenas o primeiro, o terceiro e o sexto elementos.
// b) Crie outro array que contenha os dois últimos elementos.
// Observação: Utilize o valor de um array dentro de outro, exemplo: array2[array1[3], array[5]]

// → Seu código aqui:
console.log (letras1[0], letras1[2], letras1[5]);
console.log (letras1[4], letras1[5]);


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 3 – Batata?
// ------------------------------------------------------------
const letras2 = ['a', 'b', 'c', 'd', 'e', 't'];
// a) Crie um novo array que retorne a palavra "batata" ao ser exibido no console.
console.log (letras2[1], letras2[0], letras2[5],letras2[0], letras2 [5],letras2[0])


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 4 – Objetos: acessar e adicionar propriedades
// ------------------------------------------------------------
const pessoa = { nome: 'Junin', idade: 22, cidade: 'Porto Alegre' };
// a) Acesse e exiba a propriedade 'nome' e 'cidade'.
// b) Adicione uma nova propriedade 'curso' com valor 'Programação' por atribuição direta.

// → Seu código aqui:
console.log(pessoa.nome,pessoa.cidade)
pessoa.curso="Programação"
console.log(pessoa)




console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 5 – Objetos aninhados e arrays dentro de objetos
// ------------------------------------------------------------
const perfild = {
  usuario: 'ana123',
  dados: { nome: 'Ana', idade: 19 },
  interesses: ['música', 'fotografia', 'viagens']
};
// a) Acesse o nome dentro de 'dados' e o segundo interesse.
// b) Altere o primeiro interesse para 'arte' por atribuição direta.

// → Seu código aqui:
console.log(perfild.dados.nome,perfild.interesses[1])
perfild.interesses[0]="arte"
console.log (perfild.interesses)

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 6 – Criar um catálogo (array de objetos e objeto indexado)
// ------------------------------------------------------------
// Crie um array 'produtos' contendo 3 produtos, onde cada produto é um objeto contendo id, nome e preço.
// Crie um objeto 'catalogo' onde as chaves são os ids dos produtos e os valores são o nome
// e os valores são os objetos de produto correspondentes (sem usar loops ou funções).

// → Seu código aqui:
  let produtos = [{
    id: 1234,
    nome: "celular",
    preço: 4500.00
  },
  {
    id: 456,
    nome: "carregador",
    preço: 100.00
  },
  {
  id: 789,
  nome: "fone",
  preço: 350.00
  }]

  let catalogo = { 
   1234: produtos[0],
   456: produtos[1],
   789: produtos[2]
  }
  console.log (
     catalogo[456],
     catalogo[1234],
     catalogo[789])
  

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 7 – Estrutura composta: tarefas simples
// ------------------------------------------------------------
// Defina um array de tarefas com 3 objetos: { id, titulo, concluida(boolean) }.
// a) Marque a tarefa de id 2 como concluída por atribuição direta.
// b) Crie um novo array contendo apenas as tarefas que não estão concluídas

// → Seu código aqui:
let tarefas= [{
  id:1,
  titulo: "verificar",
  concluida: false
},
{
  id:2,
  titulo: "fazer",
  concluida: false
},
{ 
  id:3,
  titulo: "planilha",
  concluida: false
}]
tarefas[1].concluida = true

let naoConcluidas=[
  tarefas[0],
  tarefas[2]
]


console.log(naoConcluidas)

console.log("_______________________________");