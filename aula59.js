// Molde da classe Pessoa ↓↓↓
class Pessoa{
    constructor(nome, idade){
        this.nome=nome
        this.idade=idade
    }
    
    getNome(){
        return this.nome
    }

    getIdade(){
        return this.idade
    }

    setNome(nome){
        this.nome=nome
    }

    setIdade(idade){
        this.idade=idade
    }

    info(){
        console.log(`Nome: ${this.nome}.`) // Aqui é só para não ter que ficar chamando console.log em nome e idade...
        console.log(`Idade: ${this.idade}.`) // ..., chama nome e idade com apenas um comando: o info(), função criada
        console.log(`----------------------------`) 
    }
}
// Molde da classe Pessoa (fim) ↑↑↑

let pessoas = []

const btn_add=document.querySelector('#btn_add')
const res=document.querySelector('.res')

// Função para criar pessoas e adicionar no array pessoas
const addPessoa = ()=>{
    res.innerHTML="" //! Sem esse comando, a div vai adicionar o que já tem, mais o que for digitado no input
    pessoas.map((p)=>{ // o "p" poderia ser um "i" ou outra letra qualquer. É o índice do array pessoas
        const div = document.createElement('div')
        div.setAttribute('class', 'pessoa')
        div.innerHTML = `Nome: ${p.getNome()}<br/>Idade: ${p.getIdade()}`
        res.appendChild(div)
    })
}

btn_add.addEventListener('click',(evt)=>{
    const nome = document.querySelector("#f_nome")
    const idade = document.querySelector("#f_idade")
    const p = new Pessoa(nome.value, idade.value) // Criando nova instância
    pessoas.push(p)
    nome.value=""
    idade.value=""
    nome.focus() // Posiciona o cursor no campo nome após apagar os campos
    console.log(pessoas)
    addPessoa()
})

