//! Primeira parte da aula...
/*
const numero=document.getElementById('numero');

let resultado=false;
let tempo=3000;

setTimeout(()=>{
    resultado=true //? Depois dos 3 segundos, resultado vira true. Só que o código passou direto e não esperou os 3s.
},tempo)

if(resultado){
    numero.innerHTML="Deu tudo certo"
    numero.classList.remove('erro')
    numero.classList.add('ok')
}else{
    numero.innerHTML='Deu tudo errado'
    numero.classList.add('erro')
    numero.classList.remove('ok') //? Como o código passou direto, (e não foi mudado para true) a formatação vai ser a de baixo, ou seja, com a classe erro.
}

numero.innerHTML='Processando...'
*/

//! Segunda parte da aula: Aplicando uma promise

const numero=document.getElementById('numero')

let promise=new Promise((deu_certo, deu_errado)=>{ // Coloquei parâmetros com nomes sujestivos/explicativos (pode ser qualquer nome para os parâmetros)
    let resultado=false //! valor fixo como falso
    let tempo=3000
    setTimeout(()=>{
        if(resultado){
            deu_certo('Deu tudo certo')
        }else{
            deu_errado('Deu tudo errado')
        }
    },tempo)
})

promise.then((retorno)=>{  // Se deu certo, cai aqui
    numero.innerHTML=retorno
    numero.classList.remove('erro')
    numero.classList.add('ok')
}) 

promise.catch((retorno)=>{  // Se deu errado, cai aqui
    numero.innerHTML=retorno
    numero.classList.add("erro")
    numero.classList.remove('ok')
}) 

numero.innerHTML='Processando...'