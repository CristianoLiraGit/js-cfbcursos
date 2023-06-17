function canal() {
    console.log('CFB Cursos')
}

// canal()
// canal()
// canal()
// ou

for (let i = 0; i < 3; i++) {
    canal()
}

function aula() {
    return "Aula JS"
}

console.log(aula())

function aulaJS() {
    let n1 = 10
    let n2 = 2
    let res = n1*n2
    if (res%2==0) 
        return 'Par'
    else 
        return 'Ímpar'
}

let res = aulaJS()
console.log(res)