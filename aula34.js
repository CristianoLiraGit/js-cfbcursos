// function msg(){
//     alert('Clicou')
// }

// Mesma função acima com arrow function ↓↓↓↓

// const msg=()=>{
//     alert('Clicou')
// }

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// const c1=document.getElementById('c1')  // ou
// const c1=document.querySelector('#c1')

// const msg=()=>{
//     alert('Clicou')
// }

// c1.addEventListener('click', msg) // Adicionando um evento (addEventListener)...No caso, um evento de clique

// O addEventListener recebe duas coisas: qual evento vai ser trabalhado e o que será executado.

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// const c1=document.querySelector('#c1')

// const msg=()=>{
//     alert('Clicou')          // Posso dispensar esta função...
// }

// c1.addEventListener('click', ()=>{   // E criar a função dentro do próprio addEventListener. Funciona do mesmo jeito.
    // alert('Clicou')
// })

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// const c1=document.querySelector('#c1')
const cursos=[...document.querySelectorAll('.curso')]

cursos.map((el)=>{
    el.addEventListener('click', (evt)=>{
        const el=evt.target
        el.classList.add('destaque')
        console.log(`${el.innerHTML} foi clicado`)
    })
})

// const msg=()=>{
//     alert('Clicou')
// }

// c1.addEventListener('click', (evt)=> {
//     const el=evt.target
//     el.classList.add('destaque')
    // msg() // Outra forma de chamar a função
// })