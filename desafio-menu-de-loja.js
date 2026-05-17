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

console.log("╔════════════════════════════╗");
console.log("║        LOJA LOJINHA        ║");
console.log("╚════════════════════════════╝");

// → Seu código aqui:
let escolha = lerTeclado.questionInt(
  "1) Visualizar o catalogo | 2) Comprar itens do catalogo | 3) Vender itens do inventário | 4) Visualizar seus itens ",
);
switch (escolha) {
  case 1:
    console.log(`
      ==========================================
      ID | NOME               | PRECO | ESTOQUE
      ==========================================
      1  | Espada de Ferro    | 80    | 2
      2  | Escudo de Madeira  | 50    | 5 
      3  | Poção de Cura      | 30    | 10
      4  | Arco Longo         | 65    | 3
      5  | Botas Velozes      | 45    | 4
      6  | Batata             | 15    | 20  
      7  | Cajado Mágico      | 95    | 1
      8  | Armadura de Couro  | 85    | 2
      `);
    break;
  case 2:
    console.log(`
      ==========================================
      ID | NOME               | PRECO | ESTOQUE
      ==========================================
      1  | Espada de Ferro    | 80    | 2
      2  | Escudo de Madeira  | 50    | 5 
      3  | Poção de Cura      | 30    | 10
      4  | Arco Longo         | 65    | 3
      5  | Botas Velozes      | 45    | 4
      6  | Batata             | 15    | 20  
      7  | Cajado Mágico      | 95    | 1
      8  | Armadura de Couro  | 85    | 2
      `);
    let comprar = lerTeclado.questionInt(
      "Digite o id do produto que deseja comprar: ",
    );
    if (comprar > 8 || comprar < 1) {
      console.log("Numero invalido. Preste atenção! ");
    } else {
      for (let i = 0; i < catalogo.length; i++) {
        if (catalogo[i].id === comprar) {
          if (cliente.moedas < catalogo[i].preco) {
            console.log("Moedas insuficiente!");
          }
          if (catalogo[i].estoque === 0) {
            console.log("Estoque insuficiente!");
          }
          catalogo[i].estoque -= 1;
          cliente.moedas -= catalogo[i].preco;
          cliente.inventario.push(catalogo[i]);
          console.log(`Estoque atual: ${catalogo[i].estoque}`)
          console.log(`Moedas atual: ${cliente.moedas}`)
        }
      }
      
    
    console.log(cliente);
    
    }
    break;
  case 3:
    break;
  case 4:
    break;
  case 5:
    break;
  case 6:
    break;
}
