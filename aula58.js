class Carro{
    canal="CFB Cursos"
    constructor(nome, tipo){
        this.nome=nome
        this.canal='YouTube'
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
    
    getNome(){
        return this.nome
    }
    getTipo(){
        return this.tipo
    }
    getVelMax(){
        return this.velmax
    }
    getInfo(){
        return [this.nome, this.tipo, this.velmax]
    }
    setNome(nome){ // O set altera o valor das propriedades
        this.nome=nome
    }
    setTipo(tipo){
        this.tipo=tipo
    }
    setVelMax(velmax){
        this.velmax=velmax
    }

    info(){
        console.log(`Nome: ${this.nome}.`)
        console.log(`Tipo: ${this.tipo}.`)
        console.log(`Vmax: ${this.velmax}.`)
        console.log(`Canal: ${this.canal}.`)
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

// Rever aula