class Carro{
    constructor(nome, tipo){
        this.nome=nome
        if(tipo ==1){
            this.tipo = "Esportivo"
            this.valmax = 300
        }else if(tipo == 2){
            this.tipo == "Utilitário"
            this.velmax = 100
        }else if (tipo == 3){
            this.tipo == "Passeio"
            this.velmax = 160
        } else {
            this.tipo = "Militar"
            this.valmax = 180
        }
    }
    info(){
        console.log(`Nome: ${this.nome}.`)
        console.log(`Nome: ${this.tipo}.`)
        console.log(`Nome: ${this.velmax}.`)
        console.log(`----------------------------`)
    }
}

let c1 = new Carro("Rapidão", 1) // Foram criadas 3 instâncias da classe Carro
let c2 = new Carro("Super Luxo", 2)
let c3 = new Carro("Bombadão", 4)
let c4 = new Carro("Carrego tudo", 3)

console.log(c1.nome)
console.log(c1.tipo)
console.log(c2.velmax)
console.log(c4.nome)

c1.info()

// Rever aula e finalizar