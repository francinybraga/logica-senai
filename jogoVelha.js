let lerTeclado = require('readline-sync')
let tabuleiro = [
    ['-', '-', '-',],
    ['-', '-', '-',],
    ['-', '-', '-',]
]
let jogador = 'X'
// for (let i = 0; i < 5; i++) {
//     let linha = lerTeclado.questionInt("Digite a linha: ")
//     let coluna = lerTeclado.questionInt("Digite a coluna: ")
//     if (tabuleiro[linha][coluna] === '-') {
//         tabuleiro[linha][coluna] = jogador
//         console.table(tabuleiro)

//         if (jogador === "X") {
//             jogador = "O"
//             console.table(tabuleiro)
//         } else{
//             jogador = "X"
//             i--
//         }

//     }
//     else {
//         console.log("Digite outra posicao: ")
//         i--
//     }
// }
// console.table(tabuleiro) ESSE FOI O PROTOTIPO 1

console.table(tabuleiro)
for (let i = 0; i < 5; i++) {
    let linha = lerTeclado.questionInt("Digite a linha: ")
    if (linha >= 0 && linha < 3) {
        let coluna = lerTeclado.questionInt("Digite a coluna: ")
        if (coluna >= 0 && coluna < 3) {
            if (tabuleiro[linha][coluna] === '-') {
                tabuleiro[linha][coluna] = jogador
                console.table(tabuleiro)
                if (jogador === "X") {
                    jogador = "O"
                } else {
                    jogador = "X"
                    i--
                }
                console.table(tabuleiro)
                if (tabuleiro[0][0] == "X" && tabuleiro[0][1] == "X" && tabuleiro[0][2] == "X") {
                    console.log("Jogador 1 venceu! Parabens!")
                    break
                } else if (tabuleiro[1][0] == "X" && tabuleiro[1][1] == "X" && tabuleiro[1][2] == "X") {
                    console.log("Jogador 1 venceu! Parabens")
                    break
                }
                else if (tabuleiro[2][0] == "X" && tabuleiro[2][1] == "X" && tabuleiro[2][2] == "X") {
                    console.log("Jogador 1 venceu! Parabens!")
                    break
                }
                else if (tabuleiro[0][0] == "X" && tabuleiro[1][1] == "X" && tabuleiro[2][2] == "X") {
                    console.log("Jogador 1 venceu! Parabens!")
                    break
                }
                else if (tabuleiro[0][2] == "X" && tabuleiro[1][1] == "X" && tabuleiro[2][0] == "X") {
                    console.log("Jogador 1 venceu! Parabens!")
                    break
                }
                else if (tabuleiro[0][0] == "X" && tabuleiro[1][0] == "X" && tabuleiro[2][0] == "X") {
                    console.log("Jogador 1 venceu! Parabens!")
                    break
                }
                else if (tabuleiro[0][1] == "X" && tabuleiro[1][1] == "X" && tabuleiro[2][1] == "X") {
                    console.log("Jogador 1 venceu! Parabens!")
                    break
                }
                else if (tabuleiro[0][2] == "X" && tabuleiro[1][2] == "X" && tabuleiro[2][2] == "X") {
                    console.log("Jogador 1 venceu! Parabens!")
                    break
                }
                if (tabuleiro[0][0] == "O" && tabuleiro[0][1] == "O" && tabuleiro[0][2] == "O") {
                    console.log("Jogador 2 venceu! Parabens!")
                    break
                } else if (tabuleiro[1][0] == "O" && tabuleiro[1][1] == "O" && tabuleiro[1][2] == "O") {
                    console.log("Jogador 2 venceu! Parabens!")
                    break
                }
                else if (tabuleiro[2][0] == "O" && tabuleiro[2][1] == "O" && tabuleiro[2][2] == "O") {
                    console.log("Jogador 2 venceu! Parabens!")
                    break
                }
                else if (tabuleiro[0][0] == "O" && tabuleiro[1][1] == "O" && tabuleiro[2][2] == "O") {
                    console.log("Jogador 2 venceu! Parabens!")
                    break
                }
                else if (tabuleiro[0][2] == "O" && tabuleiro[1][1] == "O" && tabuleiro[2][0] == "O") {
                    console.log("Jogador 2 venceu! Parabens!")
                    break
                }
                else if (tabuleiro[0][0] == "O" && tabuleiro[1][0] == "O" && tabuleiro[2][0] == "O") {
                    console.log("Jogador 2 venceu! Parabens!")
                    break
                }
                else if (tabuleiro[0][1] == "O" && tabuleiro[1][1] == "O" && tabuleiro[2][1] == "O") {
                    console.log("Jogador 2 venceu! Parabens!")
                    break
                }
                else if (tabuleiro[0][2] == "O" && tabuleiro[1][2] == "O" && tabuleiro[2][2] == "O") {
                    console.log("Jogador 2 venceu! Parabens!")
                    break
                }
            }
            else {
                console.log("Digite outra posicao: ")
                i--
            }
        } else {
            console.log("Digite uma opcao valida.")
            i--
        }
    } else {
        console.log("Digite um numero valido.")
        i--
    } 
}
console.log("JOGUE NOVAMENTE!")
