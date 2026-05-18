// ============================================================
// Loja de Itens – Menu Persistente
// ============================================================
//
// INSTRUÇÕES e REGRAS:
// Uma loja vende itens de um catálogo.
// O menu principal repete até o usuário escolher "Sair".
// O usuário começa com nenhum item e 200 reais.
// O usuário deve poder:
//   Visualizar o catálogo
//   Comprar itens do catálogo
//   Vender itens do inventário
//   Visualizar seus itens
// O valor de revenda de itens deve ser 70% do preço original, arredondado.
// Após o usuário escolher "Sair", exiba um resumo do cliente: nome, dinheiro restante e itens no inventário.
//
// ============================================================

let lerTeclado = require("readline-sync");

// ============================================================
// CATÁLOGO DA LOJA - Altere a vontade, mantendo a estrutura { id, nome, preco, estoque }
// ============================================================

const catalogo = [
  { id: 1, nome: "Espada de Ferro", preco: 80, estoque: 2 },
  { id: 2, nome: "Escudo de Madeira", preco: 50, estoque: 5 },
  { id: 3, nome: "Poção de Cura", preco: 30, estoque: 10 },
  { id: 4, nome: "Arco Longo", preco: 65, estoque: 3 },
  { id: 5, nome: "Botas Velozes", preco: 45, estoque: 4 },
  { id: 6, nome: "Batata", preco: 15, estoque: 20 },
  { id: 7, nome: "Cajado Mágico", preco: 95, estoque: 1 },
  { id: 8, nome: "Armadura de Couro", preco: 85, estoque: 2 },
];

// ============================================================
// ESTADO DO CLIENTE - não altere a estrutura
// ============================================================

const cliente = {
  nome: lerTeclado.question("Digite seu nome: "),
  moedas: 200,
  inventario: [],
};

// ============================================================
// INÍCIO
// ============================================================

// → Seu código aqui:
let escolher = 0;
do {
  console.log(`
  Bem vindo, ${cliente.nome}! 
╔════════════════════════════╗
║        LOJA LOJINHA        ║    
╚════════════════════════════╝
1) Vizualizar catalogo
2) Comprar itens do catalogo   
3) Vender itens do inventário
4) Visualizar seus itens
0) Sair      
    `);
  escolher = lerTeclado.questionInt("Digite uma opcao para executar: ");
  switch (escolher) {
    case 1:
      console.table(catalogo);
      break;
    case 2:
      let comprar = lerTeclado.questionInt(
        "Qual item do catalogo deseja comprar? ",
      );
      while (comprar != 0) {
        if (comprar > catalogo.length || comprar < 0) {
          console.log("Escolha uma opcao valida!");
          break;
        } else {
          if (
            cliente.moedas >= catalogo[comprar - 1].preco &&
            catalogo[comprar - 1].estoque > 0
          ) {
            cliente.moedas -= catalogo[comprar - 1].preco;
            catalogo[comprar - 1].estoque--;
            cliente.inventario.push(catalogo[comprar - 1].nome);
            console.log(
              `Total de moedas restantes: ${cliente.moedas}, Total de estoque do ${catalogo[comprar - 1].nome} é ${catalogo[comprar - 1].estoque}`,
            );
          } else {
            console.log("Moedas insuficiente ou estoque vazio");
          }
          comprar = lerTeclado.questionInt(
            "Qual item do catalogo deseja comprar? ",
          );
        }
      }
      break;
    case 3:
      console.log("ITENS PARA VENDER");
      console.table(cliente.inventario);
      let vender = lerTeclado.questionInt("Qual item deseja vender? ");
      while (vender != 0) {
        if (vender > 0 && vender <= cliente.inventario.length) {
          let indice = vender - 1;
          let nomeItem = cliente.inventario[indice];
          for (let i = 0; i < catalogo.length; i++) {
            if (nomeItem == catalogo[i].nome) {
              cliente.moedas += Math.round(catalogo[i].preco * 0.7);
              catalogo[i].estoque++;
            }
          }
          cliente.inventario.splice(indice, 1);
          console.log("Item vendido com sucesso!");
        } else {
          console.log("Escolha invalida.");
        }
        console.log(`Suas moedas ${cliente.moedas}`);
        console.log(`Seu inventário ${cliente.inventario}`);
        console.table(cliente.inventario);
        vender = lerTeclado.questionInt("Qual item deseja vender? ");
      }
      break;
    case 4:
      console.table(cliente.inventario);
      break;
    case 0:
      console.log(`
========= RESUMO FINAL =========
Nome: ${cliente.nome}
Moedas restantes: ${cliente.moedas}
Itens no inventario:
`);
      console.table(cliente.inventario);
      break;
    default:
      console.log("Escolha uma opcao valida!");
      break;
  }
} while (escolher != 0);
