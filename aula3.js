"use strict"

/*

if (true){
    var nome = "Bruno"
}

console.log(nome) // A variável foi declarada fora do escopo da condicional. Com o var, pode-se acessar a variável mesmo assim.

*/

/*

if (true){
    let nome = "Bruno"
}

console.log(nome) // A variável não pôde ser acessada fora do escopo porque foi atribuída com let (erro de referência).

*/

function teste(){
    let nome = 'Bruno'
    if (true){
        console.log(`Dentro do if do teste: ${nome}`)
    }
    console.log(`Fora do teste: ${nome}`)
}

teste()

console.log(`Fora do teste: ${nome}`) // Aqui a variável deu erro de referência porque está fora do escopo de onde a variável nome foi definida. O let faz o controle.

// Uma variável atribuída como const não pode ser alterada em outra parte qualquer do programa.