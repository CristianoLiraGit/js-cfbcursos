// Esta aula ensina como criar uma classe através de função
function Pessoa(nome, idade){
    this.nome=nome,
    this.idade=idade,
    this.getNome=function(){
        return this.nome
    },
    this.getIdade=function(){
        return this.idade
    },
    this.setNome=function(nome){
        this.nome=nome
    },
    this.setIdade=function(idade){
        this.idade=idade
    },
    
    this.info=function(){
        console.log(`Nome: ${this.nome}.`)
        console.log(`Idade: ${this.idade}.`)
        console.log(`----------------------------`)
    }
        
}
let pessoas = []

const btn_add=document.querySelector('#btn_add')
const res=document.querySelector('.res')

// Função para criar pessoas e adicionar no array pessoas
const addPessoa = ()=>{
    res.innerHTML=""
    pessoas.map((p)=>{
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

