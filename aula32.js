// const cursosTodos=[document.getElementsByClassName('curso')] // Aqui tem-se um HTMLcollection
const cursosTodos=[...document.getElementsByClassName('curso')]
const cursosc1=[...document.getElementsByClassName('c1')]
const cursosc2=[...document.getElementsByClassName('c2')]

btn = document.getElementById('btn')

console.log(cursosTodos)
console.log(cursosc1)
console.log(cursosc2)

btn.addEventListener('click', ()=>{ // coloquei uma função dentro de outra: 
    cursosc2.map((el) => { /* Função para pegar elemento por elemento e adicionar a classe "destaque"*/
        el.classList.add('destaque')
    })
})

// Fazer uma função ligada a um botão para limpar a formatação, deixando a classe inicial
