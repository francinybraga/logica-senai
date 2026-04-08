let lerTeclado = require ('readline-sync')
let nome = lerTeclado.question("Nome do viajante:")
if(nome === "" || nome === " "){
    console.log("Nome invalido, programa encerrado.")
} else if (!isNaN(nome)){
    console.log("Digite um nome. Programa encerrado.")   
}else {
    let idade = lerTeclado.questionInt("Idade do viajante:");
    if(idade < 0 || idade > 110){
        console.log("Digite uma idade válida. Programa encerrado.")
        } else {
        let orcamento = lerTeclado.questionInt(`Escolha um Orcamento: 1 - Economico 2 - Moderado 3 - Luxo:`)
        let norcamento = ""
        if(orcamento === 1){
            console.log("Economica")
            norcamento = "Economica"
        } else if(orcamento === 2){
            console.log("Moderado")
            norcamento = "Moderado"
        } else if (orcamento === 3){
            console.log("Luxo")
            norcamento = "Luxo"
        } else if (orcamento < 0 || orcamento >= 4) {
            console.log("Opção inválida. Encerrando o formulário.") 
        }
        let resp1
        switch(orcamento){
            case 1:
                console.log('Você prefere :')
                console.log('1) Praia e mar')
                console.log('2) Floresta e ecoturismo')
                resp1 = lerTeclado.questionInt('Escolha uma das opcoes acima: ')
                break
            case 2:
                console.log('Você quer :')
                console.log('1) Neve de verdade')
                console.log('2) Frio sem neve')
                resp1 = lerTeclado.questionInt('Escolha uma das opcoes acima: ')
                break
            case 3: 
                console.log('Você prefere explorar :')
                console.log('1) Cultura, museus e arquitetura histórica')
                console.log('2) Natureza, trilhas e parques nacionais')
                resp1 = lerTeclado.questionInt('Escolha uma das opcoes acima: ')
                break
            default:
                console.log('Opção inválida. Encerrando o formulário.')
                break
        }

        let resp2 
        let resp3
        if(resp1 === 1){
            console.log("Qual voce prefere:")
            console.log("1) Praia e mar")
            console.log("2) Floresta e ecoturismo")
            resp2 = lerTeclado.questionInt("Escolha:")
        } else if(resp1 === 2){
            console.log("Qual voce prefere:")
            console.log("1) Neve de verdade")
            console.log("2) Frio sem neve")
            resp2 = lerTeclado.questionInt("Escolha:")
        } else if(resp1 === 3){
            console.log("Qual voce prefere:")
            console.log("1) Cultura, museus e arquitetura histórica")
            console.log("2) Natureza, trilhas e parques nacionais")
            resp2 = lerTeclado.questionInt("Escolha:")
        } else {
        console.log("Opção inválida. Encerrando o formulário.")
        if(resp1 === 1 && resp2 === 1){
            console.log("Como voce prefere sua viagem:")
            console.log("1) Animada — praias badaladas e muito agito")
            console.log("2) Tranquila — sossego e natureza preservada")
            resp3 = lerTeclado.questionInt("Escolha:")
        }   else if (resp1 === 2 && resp2 === 1){
            console.log("Qual o seu objetivo:")
            console.log("1) Praticar esportes de inverno")
            console.log("2) Contemplar a paisagem nevada e relaxar")
            resp3 = lerTeclado.questionInt("Escolha:")
        }   else if( resp1 === 3 && resp2 ===1){
            console.log("Qual região voce prefere:")
            console.log("1) Europa")
            console.log("2) America do sul")
            resp3 = lerTeclado.questionInt("Escolha:")
        } else {
        console.log("Opção inválida. Encerrando o formulário.")
    }
    }
        
        if(resp1 === 1 && resp2 === 1){
            console.log("Como voce prefere sua viagem:")
            console.log("1) Animada — praias badaladas e muito agito")
            console.log("2) Tranquila — sossego e natureza preservada")
            resp3 = lerTeclado.questionInt("Escolha:")
        }   else if (resp1 === 2 && resp2 === 1){
            console.log("Qual o seu objetivo:")
            console.log("1) Praticar esportes de inverno")
            console.log("2) Contemplar a paisagem nevada e relaxar")
            resp3 = lerTeclado.questionInt("Escolha:")
        }   else if( resp1 === 3 && resp2 ===1){
            console.log("Qual região voce prefere:")
            console.log("1) Europa")
            console.log("2) America do sul")
            resp3 = lerTeclado.questionInt("Escolha:")
        } else {
        console.log("Opção inválida. Encerrando o formulário.")
    }
        let destino = ""

        if(resp1 === 1 && resp2 === 1 && resp3 === 1){
                destino = "Cancún (México) ou Fortaleza (Brasil)"
        }else if(resp1 === 1 && resp2 === 1 && resp3 === 2){
                destino = "Maldivas ou Fernando de Noronha (Brasil)"
        }else if(resp1 === 1 && resp2 === 2){
                destino = "Amazônia (Brasil) ou Costa Rica"
        }else if(resp1 === 2 && resp2 === 1 && resp3 === 1){
                destino = "Aspen (EUA) ou Bariloche (Argentina)"
        }else if(resp1 === 2 && resp2 === 1 && resp3 === 2){
                destino = "Ushuaia (Argentina) ou Lapônia (Finlândia)"
        }else if(resp1 === 2 && resp2 === 2 ){
                destino = "Serra Gaúcha (Brasil) ou Patagônia Chilena"
        }else if(resp1 === 3 && resp2 === 1 && resp3 === 1){
                destino = "Lisboa, Barcelona ou Roma"
        }else if(resp1 === 3 && resp2 === 1 && resp3 === 2){
                destino = "Buenos Aires, Cusco ou Cartagena"
        }else if(resp1 === 3 && resp2 === 2){
                destino = "Chapada dos Veadeiros ou Torres del Paine"
    }

        if(destino === "Cancún (México) ou Fortaleza (Brasil)" || destino === "Maldivas ou Fernando de Noronha (Brasil)" || destino === "Amazônia (Brasil) ou Costa Rica" ||
        destino === "Aspen (EUA) ou Bariloche (Argentina)" || destino === "Ushuaia (Argentina) ou Lapônia (Finlândia)" || destino === "Serra Gaúcha (Brasil) ou Patagônia Chilena"
        || destino === "Lisboa, Barcelona ou Roma" || destino === "Buenos Aires, Cusco ou Cartagena" || destino === "Chapada dos Veadeiros ou Torres del Paine"){
            console.log(`
            ===============================================
            |   RECOMENDAÇÃO DA AGÊNCIA VOYAGER           |
            ===============================================
            |   Viajante : ${nome}                |
            |   Idade    : ${idade} anos          |
            |   Orçamento: ${norcamento}                   |
            |   Destino  : ${destino}                     |
            ===============================================
            `)

        switch(orcamento){
            case 1:
                console.log("Econômico → Dica: procure voos com antecedência e use hostels ou Airbnb!")
                break
            case 2:
                console.log("Moderado → Dica: hotéis 3 estrelas e pacotes combinados são ótimas opções!")
                break
            case 3:
                console.log("Luxo → Dica: resorts all-inclusive e voos executivos são a sua praia!")
                break
            }
        }
    }
}