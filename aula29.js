// function aluno(nome, nota){
//     this.nome=nome
//     this.nota=nota

//     console.log(nome)
//     console.log(nota)
// }

// aluno('Cristiano', 10)


// function aluno(nome, nota){
//     this.nome=nome
//     this.nota=nota
// }

// aluno('Cristiano', 10)



// function aluno(nome, nota){
//     this.nome=nome // this.nome é como se fosse uma variável declarada para a função aluno, recebendo como valor o parâmetro nome
//     this.nota=nota // mesma coisa aqui. O this faz referência à função sempre. 

//     console.log(nome)
//     console.log(nota)
// }

// aluno('Cristiano', 100)


// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

// function aluno(nome, nota){
//     this.nome=nome 
//     this.nota=nota
    
//     this.dados_anonimo=function(){
//         setTimeout(function(){
//             this.nome='x'
//             this.nota=5
//             console.log(this.nome)
//             console.log(this.nota)
//         },2000)
        
//     }
// }
//     const al1=new aluno('cristiano', 100)
//     al1.dados_anonimo()

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

function aluno(nome, nota){
    this.nome=nome 
    this.nota=nota
    
    this.dados_arrow=function(){
        setTimeout(()=>{
            // this.nome='x'     // Pulei. Não entendi a aula.
            // this.nota=5
            console.log(this.nome)
            console.log(this.nota)
        },2000)
        
    }
}
    const al1=new aluno('cristiano', 100)
    al1.dados_anonimo()
    al1.dados_arrow()
