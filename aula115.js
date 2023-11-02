let numeros=[10, 20, 30, 40, 50, 60, 70, 80, 90]
let[a,b,c,...d]=numeros // a=10, b=20, c=30 e o restante vai para d através do spread
console.log(a)
console.log(b)
console.log(c)
console.log(d)

let obj={nome:"Cristiano", canal:"CFBCursos", curso:"Javascript"}
let {nome, canal}=obj
console.log(nome)
console.log(canal)

const cores=()=>{
    return ["verde", "amarelo", "azul", "branco"]
}

let[c1, c2,,c3]=cores() // a dupla vírgula serve para pular a cor azul e adicionar a cor branca em c3
console.log(c1)
console.log(c2)
console.log(c3)

// *-*-*-*-*-*-*-*-*-*-*--*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-

let texto = "Curso de JavaScript"
let[p1, p2, p3]=texto.split(" ") //! Divide a string a partir dos espaços
console.log(p1)
console.log(p2)
console.log(p3)

// *-*-*-*-*-*-*-*-*-*-*--*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-

let name="Cristiano Barbosa de Lira"
nameSeparado = name.split(" ")
console.log(`Olá, sr(a) ${nameSeparado[nameSeparado.length-1]}.`) // Comando para retornar o último sobrenome (Lira)


