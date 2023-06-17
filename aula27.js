/* // 1º exemplo
function* cores() {
    yield 'Vermelho' // Pontos de parada (yield)
    yield 'Verde'
    yield 'Azul'
}

const itc = cores()
console.log(itc.next().value)
console.log(itc.next().value)
console.log(itc.next().value)
*/

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
/* // 2º exemplo
function* perguntas() {
    const nome = yield 'Qual o seu nome?'
    const esporte = yield 'Qual o seu esporte favorito?'
    return `Seu nome é ${nome} e seu esporte favorito é ${esporte}.`
}
const itp = perguntas()
console.log(itp.next().value)
console.log(itp.next('Cristiano').value)
console.log(itp.next('Natação').value)
*/

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// 3º exemplo
// function* contador(){
//     let i = 0
//     while(true){   // Criou um loop infinito
//         yield i++
//     }
// }

// const itc = contador()
// console.log(itc.next().value)
// console.log(itc.next().value)
// console.log(itc.next().value) // Quantas vezes a função for chamada, o loop infinito vai imprimindo em sequência

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// function* contador(){
//     let i = 0
//     while(true){   // Criou um loop infinito
//         yield i++
//     }
// }

// const itc = contador()
// for(let i = 0; i < 10; i++){
//     console.log(itc.next().value)
// }

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

function* contador(){
    let i = 0
    while(true){   // Criou um loop infinito
        yield i++
        if(i > 5)
            break // Se o i for maior que 5, pare (break)
    }
}
const itc = contador()
for(let c  of itc){  // Para cada índice do iterador, imprima o índice
    console.log(c)
}
