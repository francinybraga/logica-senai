// ============================================================
//   ATIVIDADE 02-2 – Objetos em JavaScript
// ============================================================
// Instruções: resolva cada exercício no espaço indicado.
// Use console.log() para exibir os resultados.
// ============================================================


// ------------------------------------------------------------
// EXERCÍCIO 1 – Criando objetos
// ------------------------------------------------------------
// a) Crie um objeto "aluno" com as propriedades: nome, idade, curso.
// b) Exiba o nome do aluno usando notação ponto.

// → Seu código aqui:
let aluno = {
    nome6: "Franciny",
    idade: 23,
    curso: "DSAS"
}
console.log(aluno.nome)


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 2 – Aninhamento e acesso
// ------------------------------------------------------------
// a) Adicione uma propriedade "endereco" ao objeto com cidade e rua.
// b) Exiba a cidade

// → Seu código aqui:
aluno.endereço = {
    cidade: "Jaraguá do Sul",
    rua: "Walter Marquart"
}
console.log (aluno.endereço.cidade)

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 3 – Habilidades (array dentro do objeto)
// ------------------------------------------------------------
// a) Adicione uma propriedade "habilidades" (array) ao objeto "aluno".
// b) Exiba a primeira habilidade.

// → Seu código aqui:
aluno.habilidades = {
    desenhar: "desenhar com gravite",
    programar: "JavaScipt",
    dormir: "12 horas"
}
console.log (aluno.habilidades.desenhar)

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 4 – Notas e média
// ------------------------------------------------------------
// a) Adicione uma propriedade "notas", sendo esse um array de números.
// b) Exiba em uma única frase, o nome do aluno e suas notas.

// → Seu código aqui:
aluno.notas = {
    nota1: 8,
    nota2:9,
    nota3: 10}
console.log (aluno.nome6,aluno.notas)
console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 5 – Objetos aninhados e alteração
// ------------------------------------------------------------
// a) Adicione uma propriedade "responsavel" que é um objeto com nome e parentesco (mãe ou pai ou irmão, etc).
// b) Exiba o nome do responsável.
// c) Altere o nome do responsável e mostre que o objeto foi atualizado.

// → Seu código aqui:
aluno.responsavel = {responsavel1: "Maria"}
console.log(aluno.responsavel)
aluno ["responsavel"] = "Joao"
console.log (aluno.responsavel)




console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 6 – Lista de alunos (array de objetos)
// ------------------------------------------------------------
// a) Crie um array "listaDeAlunos" e adicione o objeto "aluno".
// b) Crie outros dois objetos com dados de outros alunos.
// c) Adicione os outros alunos na lista de alunos.
// c) Exiba o nome do segundo aluno da lista.

// → Seu código aqui:
let listaDeAluno = [aluno]
let aluno2 = {
    nome: "Ana",
    idade: 22,
    curso: "MDT"
}
let aluno3 = {
    nome: "Julia",
    idade: 21,
    curso: "STI"
}
listaDeAluno.push(aluno2)
listaDeAluno.push(aluno3)

console.log(listaDeAluno[1].nome)



console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 7 – Objetos e Arrays
// ------------------------------------------------------------
// a) Crie um array "listaDeAlunos" que contenha 3 alunos. Cada aluno deve ser um objeto (não uma variável que contem um objeto).
// b) Cada objeto aluno deve conter nome(string), idade(number) e notas(array de numbers).
// c) Exiba o nome e as notas de cada aluno.


// → Seu código aqui:
let listaDeAluno3 = [
    {
        nome:"joao",
        idade: 23,
        notas: [7,8,9],
    }, 
    {   nome:"joana",
        idade: 22,
        notas: [1,2,3],


    },
    {   nome:"john",
        idade: 21,
        notas: [4,5,6],

    }
]
 console.log(listaDeAluno3[0].nome, listaDeAluno3[0].notas)
 console.log(listaDeAluno3[1].nome, listaDeAluno3[1].notas)
console.log(listaDeAluno3[2].nome, listaDeAluno3[2].notas)




console.log("_______________________________");

