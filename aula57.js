class Pessoa{
    constructor(nome){
        this.nome=nome
    }
}

let p1 = new Pessoa("Cristiano") // Foram criadas 3 instâncias da classe pessoa
let p2 = new Pessoa("Natália")
let p3 = new Pessoa("Gordo")

console.log(p1.nome)
console.log(p2.nome)
console.log(p3.nome)