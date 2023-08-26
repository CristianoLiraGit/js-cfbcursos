// Funções parametrizadas
/* 
// apague o asterisco barra para testar o bloco abaixo
function soma(p1) {
    console.log(p1)
}

soma('Cristiano') // Posso passar qualquer parâmetro, e o parâmetro vai ser armazenado em p1 na função e retornado na tela
soma(2000)
soma(5.2)
*/ 
// apague o asterisco barra para testar o bloco acima

// function soma(n1, n2) {
//     console.log(n1 + n2)
// }

// soma('Cristiano')
// soma(2000)
// soma(5.2) 

// *-*-*-*-*-*-*-*-*-*-*-*-*-*

// function soma(n1=0, n2=0){
//     // console.log(n1+n2)
//     return n1 + n2
// }
// // soma(10)
// console.log(soma(10, 10))

// *-*-*-*-*-*-*-*-*-*-*-*-*-*
/*
let valor_padrao = 0

function soma(n1=valor_padrao, n2=valor_padrao){
    let res 
    res=n1+n2
    return res
}
let resultado = soma(10, 10)
console.log(resultado)
*/
// *-*-*-*-*-*-*-*-*-*-*-*-*-*

function add(v){
    // return valor+v
    valor+=v
}
let valor = 0
console.log(valor)

// valor=add(5)
add(5)
console.log(valor)

// valor=add(10)
add(10)
console.log(valor)    
