// Aula sobre desestruturação

let a, b, c, d

[a, b, c, d]=[10, 20, 30, 40]

console.log(a)
console.log(b)
console.log(c)
console.log(d)

let cor1, cor2, cor3, cor4
[cor1,cor2,cor3,cor4]=['Amarelo', 'Verde', 'Azul', 'Branco']
console.log(cor1, cor2, cor3, cor4)

// *-*-*-*-*-*-*-*-*-*-*--*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-

let e, f, g, h

({e,f,g,h}={e:"roxo", f:"lilás", g:'preto', h:'vermelho'}) // objetos
console.log(e, f, g, h)

// *-*-*-*-*-*-*-*-*-*-*--*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-

let numeros = [10, 20, 30, 40]

let[i, j, k, l]=numeros

console.log(i, j, k, l)

// *-*-*-*-*-*-*-*-*-*-*--*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-

let m = 10;
let n = 20;

[m,n]=[n,m] //  inverteu os valores das variáveis

console.log(n, m)

// *-*-*-*-*-*-*-*-*-*-*--*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-

let num=()=>{
    return [50, 60, 70, 80]
}

let[o, p, q, r]=num()

console.log(o, p, q, r)
