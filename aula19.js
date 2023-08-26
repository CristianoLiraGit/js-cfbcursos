//      ***    Comando break    ***
// Geralmente dentro de uma condicional. Serve para para o loop.

// let n = 0
// let max = 1000

// while(n<max){
//     console.log(`CFB Cursos - ${n}`)
//     if (n > 10){
//         break // este comando para a execução do programa
//     }
//     n++
// }

// console.log('Fim do programa')

//      ***    Comando continue     ***
// Para somente determinada iteração, continuando o restante do programa. Exemplo:

// let n = 0
// let max = 1000
// let pares = 0

// for (let i = n; i < max; i++) {
//     console.log(`CFB Cursos - ${i}`)
//     if (i % 2 == 0) {
//         pares++
//     }
// }

// console.log(`O número de pares é ${pares}. Fim do programa `)
// console.log('Fim do programa')

//  *** Exemplificando o continue ***

let n = 0
let max = 1000
let pares = 0

for(let i=n; i<max; i++){
    if(i%2 !=0){
        continue // Para somente esta iteração quando o valor iterado é ímpar...
    }
    pares++ // ... e incrementa apenas o número par na próxima iteração.
}

console.log(`Quantidade de pares: ${pares}.`)

