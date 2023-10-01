// Herança
// Ocorre quando uma classe filha herda as propriedades de uma classe pai

class Carro { // Classe pai
    constructor(nome, portas){
        this.nome=nome
        this.portas=portas
        this.ligado=false
        this.vel=0
        this.cor=undefined
    }
    ligar=function(){
        this.ligado=true
    }
    desligar=function(){
        this.ligado=false
    }
    setCor=function(cor){
        this.cor=cor
    }
}

class Militar extends Carro{ // Classe filho. O comando extends faz a classe herdar os elementos da classe carro
    constructor(nome, portas, blindagem, municao){
        super(nome, portas) // Invoca algo específico da classe  pai
        this.blindagem=blindagem
        this.municao=municao
    }
    atirar=function(){
        if(this.municao>0){
            this.municao--
        }
    }
}

class Utilitario extends Carro{
    constructor(nome, portas, lugares){
        super(nome, portas)
        this.lugares=lugares
    }
}

const c1 = new Carro('Normal', 4) // Passei no nome e as portas como parâmetro
c1.ligar()
c1.setCor("Preto")

const c2 = new Militar('Lutador', 1, 100, 50) // Não foi passado nome nem quantidade de portas nos parâmetros

console.log(`Nome: ${c1.nome}`)
console.log(`Portas: ${c1.portas}`)
console.log(`Ligado: ${(c1.ligado?"Sim":"Não")}`)
console.log(`Velocidade: ${c1.vel}`)
console.log(`Cor: ${c1.cor}`)
console.log("-------------------------------------")

// Propriedades do carro 2 militar

console.log(`Nome: ${c2.nome}`)
console.log(`Portas: ${c2.portas}`)
console.log(`Ligado: ${(c2.ligado?"Sim":"Não")}`)
console.log(`Blindagem: ${c2.blindagem}`)
console.log(`Munição: ${c2.municao}`)
console.log(`Velocidade: ${c2.vel}`)
console.log(`Cor: ${c2.cor}`)
console.log("-------------------------------------")

// Propriedades do carro utilitário

c3 = new Carro('Spin', 4)

console.log(`Nome: ${c3.nome}.`)
console.log(`Portas: ${c3.portas}.`)

console.log("-------------------------------------")