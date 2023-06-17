// let f = function(v1, v2){
//     return v1 + v2
// }

// console.log(f(10, 5 ))


let f = function(...valores){  // Utilizando parâmetros rest (valores de quantidades indefinidas)
    let res = 0
    for(v of valores) {
        res += v
    }
    return res
}

console.log(f(10, 5 ))

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

// Função contrutor

const f = new Function("v1", "v2", "v3", "return v1 + v2 + v3")

        console.log(f(10, 5, 15))

// É um tipo de função anônima mais simplificado

// rever a parte final da aula