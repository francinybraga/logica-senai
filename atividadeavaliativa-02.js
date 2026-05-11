let readline = require('readline-sync')
let n1 = 0
let n2 = 0
let n3 = 0
let conta = 0
let resultado = 0
let continuar = null
do {
    console.log(`
    ======== CALCULADORA =========
    1) SOMAR +
    2) SUBTRAIR -
    3) DIVIDIR /
    4) MULTIPLICAR *
    5) SAIR
    ==============================
    `)
    opcao = readline.questionFloat("Digite uma opcao: ")
    if (opcao > 5 || opcao < 1) {
        console.log("Digite um numero valido, encerrando.")
        break
    }
    switch (opcao) {
        case 1:
            console.log("Digite 0 para parar.")
            n1 = readline.questionFloat("Digite um numero para somar: ")
            if (n1 === 0) {
                console.log(`encerrando...`)
                break
            }
            n2 = readline.questionFloat("Digite outro numero: ")
            if (n2 === 0) {
                console.log(`encerrando...`)
                break
            }
            conta = n1 + n2
            console.log(`${n1} + ${n2} = ${conta}`)
            continuar = readline.keyInYN("Deseja continuar?")
            if (continuar === false) {
                console.log(`Saindo... resultado: ${conta}`)
            }
            resultado = conta
            do {
                console.info("Para parar digite 0.")
                n3 = readline.questionFloat("Digite outro numero para somar: ")
                if (n3 === 0) {
                    console.log("Parando...")
                    break
                }
                resultado = resultado + n3
                console.log(`Resultado Final = ${resultado - n3} + ${n3} = ${resultado}`)
                continuar = readline.keyInYN("Deseja continuar?")
                if (continuar === false) {
                    console.log(`Saindo... resultado: ${resultado}`)
                }
            } while (continuar)
            break
        case 2:
            console.log("Digite 0 para parar.")
            n1 = readline.questionFloat("Digite um numero para subtrair: ")
            if (n1 === 0) {
                console.log(`opcao invalida, saindo...`)
                break
            }
            n2 = readline.questionFloat("Digite outro numero: ")
            if (n2 === 0) {
                console.log(`opcao invalida, saindo...`)
                break
            }
            conta = n1 - n2
            console.log(`${n1} - ${n2} = ${conta}`)
            continuar = readline.keyInYN("Deseja continuar?")
            if (continuar === false) {
                console.log(`Saindo... resultado: ${conta}`)
            }
            resultado = conta
            do {
                console.info("Para parar digite 0.")
                n3 = readline.questionFloat("Digite outro numero para subtrair: ")
                if (n3 === 0) {
                    console.log("Parando...")
                    break
                }
                resultado = resultado - n3
                console.log(`Resultado Final = ${resultado}`)
                continuar = readline.keyInYN("Deseja continuar?")
                if (continuar === false) {
                    console.log(`Saindo... resultado: ${resultado}`)
                }
            } while (continuar)
            break
        case 3:
            console.log("Dividir")
            console.log("Digite 0 para parar.")
            n1 = readline.questionFloat("Digite um numero para dividir: ")
            if (n1 === 0) {
                console.log(`opcao invalida, saindo...`)
                break
            }
            n2 = readline.questionFloat("Digite outro numero: ")
            if (n2 === 0) {
                console.log(`opcao invalida, saindo...`)
                break
            }
            conta = n1 / n2
            console.log(`${n1} / ${n2} = ${Number(conta.toFixed(1))}`)
            continuar = readline.keyInYN("Deseja continuar?")
            if (continuar === false) {
                console.log(`Saindo... resultado: ${conta}`)
            }
            resultado = conta
            do {
                console.info("Para parar digite 0.")
                n3 = readline.questionFloat("Digite outro numero para dividir: ")
                if (n3 === 0) {
                    console.log("Parando...")
                    break
                }
                resultado = resultado / n3
                console.log(`Resultado Final = ${resultado}`)
                continuar = readline.keyInYN("Deseja continuar?")
                if (continuar === false) {
                    console.log(`Saindo... resultado: ${resultado}`)
                }
            } while (continuar)
            break
        case 4:
            console.log("Digite 0 para parar.")
            n1 = readline.questionFloat("Digite um numero para multiplicar: ")
            if (n1 === 0) {
                console.log(`opcao invalida, saindo...`)
                break
            }
            n2 = readline.questionFloat("Digite outro numero: ")
            if (n2 === 0) {
                console.log(`opcao invalida, saindo...`)
                break
            }
            conta = n1 * n2
            console.log(`${n1} * ${n2} = ${conta}`)
            continuar = readline.keyInYN("Deseja continuar?")
            if (continuar === false) {
                console.log(`Saindo... resultado: ${conta}`)
            }
            resultado = conta
            do {
                console.info("Para parar digite 0.")
                n3 = readline.questionFloat("Digite outro numero para multiplicar: ")
                if (n3 === 0) {
                    console.log("Parando...")
                    break
                }
                resultado = resultado * n3
                console.log(`Resultado Final = ${resultado}`)
                continuar = readline.keyInYN("Deseja continuar?")
                if (continuar === false) {
                    console.log(`Saindo... resultado: ${resultado}`)
                }
            } while (continuar)
            break
        case 5:
            console.log("Saindo... até breve.")
            break
        default:
            console.log("Numero invalido, saindo...")
            break
    }
} while (opcao != 0)