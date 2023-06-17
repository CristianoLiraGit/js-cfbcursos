// let n1 = [10, 20, 30]
// let n2 = [11, 22, 33, 44, 55]
// let n3 // Vai dar undefined porque não foram atribuídos valores

// console.log(`n1: ${n1}`)
// console.log(`n1: ${n2}-` + typeof(n2))
// console.log(`n1: ${n3}`)


// const jogador1 = {nome:'Cristiano', energia:100, vidas:3, magia:150}
// const jogador2 = {nome:'Natália', energia:150, vidas:5, velocidade:80}
// const jogador3 = {...jogador1,...jogador2}
// console.log(jogador3)
// console.log('Juntou as propriedades comuns e adicionou as incomuns')

const obj1 = document.getElementsByTagName('div') // html colection
const obj2 = [...document.getElementsByTagName('div')] // array → array tem nome, números e tudo mais...

// Ao pegar uma coleção de elementos (html colection jogador1) e espalhar com spread em um array (jogador2), teremos uma quantidade maior de opções de parâmetros a serem utilizados. Veja os exemplos abaixo: (digite obj1. e obj2. e confira)



console.log(obj1)
console.log(obj2)