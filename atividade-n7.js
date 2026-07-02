let readline = require("readline-sync");

let listaDeTarefas = [];

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
    `);
}
let adicionar = true;
let titulo = null;
let descricao = null;

// function validacao(dados) {
//   if (/^(?=.*[\p{L}]{2,})[\p{L}0-9\s.,'$-]+$/u.test(dados)) {
//     console.log('Titulo cadastrado com sucesso.')
//   } else {
//     return false
//   }
//   if (dados === '' || dados == " ") {
//     console.log('Descricao invalida.')

//   } else {
//     return false
//   }
// }
function adicionarItemLista() {
  while (adicionar) {
    titulo = readline
      .question("Digite o nome do titulo: ")
      .toLowerCase()
      .trim();
    if (/^(?=.*[\p{L}]{2,})[\p{L}0-9\s.,'$-]+$/u.test(titulo)) {
      console.log('Titulo cadastrado com sucesso.')
      descricao = readline
        .question("Escreva a descricao da tarefa: ")
        .toLowerCase()
        .trim();
      if (!descricao === '' || !descricao == " " && descricao.length > 1) {
        console.log('descricao cadastrada com sucesso.')
        listaDeTarefas.push({ titulo, descricao });
        adicionar = readline.keyInYN("Deseja adicionar outro item?");
      } else {
        console.log('descricao com erro')
      }
    } else {
      console.log('titulo com erro')

    }
  }
}

// adicionarItemLista()
function vizualizarLista1() {
  for (let i = 0; i < listaDeTarefas.length; i++) {
    console.log(`
${i + 1}) ${listaDeTarefas[i].titulo}
            `);
  }
}

// vizualizarLista()

function vizualizarItem() {
  let vizualizar = readline.questionInt(
    `Qual item da lista deseja vizualizar? Temos ${listaDeTarefas.length} tarefas`,
  );
  console.log(listaDeTarefas[vizualizar]);
}

// vizualizarItem()

function editarTituloTarefa() {
  vizualizarLista1();
  let editar = readline.questionInt("Qual titulo da lista deseja editar?");
  let novoNome = readline.question("Escreva o novo titulo: ");
  listaDeTarefas[editar].titulo = novoNome;
}

// editarTituloTarefa()

function editarDescricaoTarefa() {
  vizualizarLista1();
  let editar = readline.questionInt("Qual titulo da lista deseja editar?");
  let novoNome = readline.question("Escreva a nova descricao: ");
  listaDeTarefas[editar].descricao = novoNome;
}

// editarDescricaoTarefa()

function deletar() {
  vizualizarLista1();
  let deleta = readline.questionInt("Qual item deseja deletar? ");
  listaDeTarefas.splice(deleta, 1);
  console.table(listaDeTarefas);
}
// deletar()

function filtraItemLista() {
  let filtro = readline
    .question("Digite o filto de pesquisa: ")
    .toLowerCase()
    .trim();
  let encontrado = [null];

  for (let i = 0; i < listaDeTarefas.length; i++) {
    if (listaDeTarefas[i].titulo.includes(filtro))
      encontrado.push(listaDeTarefas[i].titulo);
  }
  if (encontrado === 0) {
    console.log("parametro não encontrado");
  }
  console.log(encontrado);
}

// filtraItemLista()
// console.log(listaDeTarefas);
let opcao = null;
do {
  menu();
  opcao = readline.questionInt("Digite a opcao que deseja executar: ");
  switch (opcao) {
    case 1:
      adicionarItemLista();
      break;
    case 2:
      vizualizarLista1();
      break;
    case 3:
      vizualizarItem();
      break;
    case 4:
      let escolha = readline
        .question("Deseja editar o titulo da tarefa ou a descricao?")
        .toLowerCase()
        .trim();
      if (escolha == "tarefa") editarTituloTarefa();
      else if (escolha == "descricao" || escolha == 'descrição') editarDescricaoTarefa();
      else console.log("Digite uma opcao valida!");
      break;
    case 5:
      deletar()
      break;
    case 6:
      filtraItemLista()
      break;
    case 7:
      console.log("Saindo...");
      break;
    default:
      console.log("Digite um opcao valida!");
      menu();
  }
} while (opcao != 7);
