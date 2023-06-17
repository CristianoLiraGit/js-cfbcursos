// A função map é muito utilizada para percorrer arrays. Essencial quando se que percorrer elemento por elemento de uma coleção, iterando toda a coleção.

// const cursos = ['HTML', 'CSS', 'JavaScript', 'PHP', 'React']
// cursos.map((el, i)=>{ // O map é semelhante ao for
//     console.log(`Curso: ${el} - Posição: ${i}`)
// })

const converterInt=(e) => parseInt(e)
const dobrar=(e) => e*2
let num = ['1', '2', '3', '4', '5'].map(dobrar)
console.log(num)