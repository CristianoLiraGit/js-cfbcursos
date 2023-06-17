const divTodas=[...document.getElementsByTagName('div')]
const cursosTodos=[...document.getElementsByClassName('curso')]
const cursosC1=[...document.getElementsByClassName('c1')]
const cursosC2=[...document.getElementsByClassName('c2')]
const cursoEspecial=document.getElementsByClassName('curso')[6]

const query_divTodas=document.querySelector('div') // Com o querySelector, é retornada a primeira div que for encontrada, diferentemente do querySelectorAll...

// const query_divTodasAll=document.querySelectorAll('div[class]') // Pode ser feito isso também: selecionar todas as divs que contenham o atributo class

// const query_divTodas=document.querySelector('div > p') // Pode ser feito isso também: selecionar todos os parágrafos que estão dentro de divs

const query_divTodasAll=[...document.querySelectorAll('div')] // Dentro dos parênteses, posso colocar: ('div', 'p') por exemplo)

const query_divCursos=[...document.querySelectorAll('.curso')] // Variável que armazena somente as divs que contêm a classe curso
const query_divId=document.querySelector('#c1')

console.log(query_divTodas) // Vai retornar a primeira div, container
console.log(query_divTodasAll) // Vai retornar uma coleção com todas as divs
console.log(query_divCursos)
console.log(query_divId)
// console.log(divTodas)
// console.log(cursosTodos)
// console.log(cursosC1)
// console.log(cursosC2)
// console.log(cursoEspecial)

// cursosC2.map((el)=>{
//     el.classList.add('destaque')
// })