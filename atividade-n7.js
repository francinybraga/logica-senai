let readline = require('readline-sync')

let listaDeTarefas = []

function menu() {
    console.log(`
    ================
    LISTA DE TAREFAS
    ================
    1) Adicionar tarefa
    2) Vizualizar lista
    3) Vizualizar item
    4) Editar 
    5) Excluir
    6) Filtrar
    7) Encerrar
    0) Sair
    `)
}
let adicionar = true
let titulo = null
let descricao = null
function adicionarItemLista() {
    while (adicionar) {
        titulo = readline.question('Digite o nome do titulo: ')
        .toLowerCase()
        .trim()
        descricao = readline.question('Escreva a descrição da tarefa: ')
        .toLowerCase()
        .trim()
        listaDeTarefas.push({ titulo, descricao })
        adicionar = readline.keyInYN('Deseja adicionar outro item?')
    }
}

adicionarItemLista()

function vizualizarLista() {
    console.table(listaDeTarefas)
}

vizualizarLista()

function vizualizarItem() {
    vizualizarLista()
    let vizualizar = readline.questionInt('Qual item da lista deseja vizualizar?')
    console.log(listaDeTarefas[vizualizar])
}

vizualizarItem()

function editarTituloTarefa() {
    vizualizarLista()
    let editar = readline.questionInt('Qual titulo da lista deseja editar?')
    let novoNome = readline.question('Escreva o novo titulo: ')
    listaDeTarefas[editar].titulo = novoNome
}

editarTituloTarefa()

function editarDescricaoTarefa() {
    vizualizarLista()
    let editar = readline.questionInt('Qual titulo da lista deseja editar?')
    let novoNome = readline.question('Escreva a nova descricao: ')
    listaDeTarefas[editar].descricao = novoNome
}

editarDescricaoTarefa()

function deletar() {
    vizualizarLista()
    let deleta = readline.questionInt('Qual item deseja deletar? ')
    listaDeTarefas.splice(deleta, 1)
    console.table(listaDeTarefas)
}
deletar()

function filtraItemLista() {
    let filtro = readline.question('Digite o filto das tarefas: ')
        .toLowerCase()
        .trim()
        let encontrado = [null]

    for (let i = 0; i < listaDeTarefas.length; i++) {
        if (listaDeTarefas[i].titulo.includes(filtro)) encontrado.push(listaDeTarefas[i].titulo)
    }
    if(encontrado === 0){
        console.log('parametro não encontrado')
    }
    console.log(encontrado)
}

filtraItemLista()
console.log(listaDeTarefas)