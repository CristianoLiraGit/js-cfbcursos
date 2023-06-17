/*
function soma(...valores) {
    let tam=valores.length  // Tenho que saber o tamanho, a quantidade de elementos. 
    let res=0
    for (let i=0; i<tam; i++) {
        res+=valores[i]
    }
    return res
}

console.log(soma(10, 2, 5, 8, 7))
*/

// O código acima pode ser simplificado com o for of...

function soma(...valores) {
    // let tam=valores.length (não preciso mais controlar o tamanho)
    let res=0
    for (let v of valores) {
        res+=v
    }
    return res
}

console.log(soma(10, 2, 5, 8, 7))