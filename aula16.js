// console.log('Início do programa')
// for(let i = 0; i < 10; i++) {
//     console.log(`CFB Cursos - Posição: ${i}`)
// }

// console.log('Fim do programa')


// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// for (let i = 1; i < 11; i++) {
//     if(i % 2 == 0){
//         console.log(`${i} é par`)
//     } else {
//         console.log(`${i} é ímpar`)
//     }
// }
// console.log('Fim do programa')

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// let num = [10, 20, 30, 40, 50]

// for(let i = 0; i < num.length; i++) {
//     console.log(i)
// }

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// let num = [10, 20, 30, 40, 50]

// for(let i = 0; i < num.length; i++) {
//     console.log(`O ${num[i]} está na posição ${i}`)
// }

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// let num = [10, 20, 30, 40, 50] 

// for(n in num) {          // for in
//     console.log(num[n])
// }

// for(n of num) {         // for of → ele imprime os elementos, não os índices
//     console.log(n)      // As duas formas mostradas (for in e for of) dão o     mesmo resultado. REVER!!!
// }

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const objs = document.getElementsByTagName('div')

for (o of objs) {
    console.log(o.innerHTML= 'curso')
}

// for (o in objs) {
//     console.log(objs[o].innerHTML = 'Meu ovo')
// }