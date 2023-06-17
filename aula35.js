const caixa1 = document.querySelector('#caixa1')
const caixa2 = document.querySelector('#caixa2')
const btn = document.querySelector('#btn_transferir')
const todosCursos = [...document.querySelectorAll('.curso')] // é necessário o spread para usar os loops modernos no JS

todosCursos.map((el) => {
    el.addEventListener('click', (evt) =>{
        const curso=evt.target
        curso.classList.toggle('selecionado') // O toggle tem a função de adicionar, neste caso, a classe .selecionado, caso o elemento não tenha a tal classe. No caso de já ter a classe .selecionado, o clique vai retirar a classe .selecionado.
    })
})

btn.addEventListener('click', () => {
    const cursosSelecionados=[...document.querySelectorAll('.selecionado')]
    // console.log(cursosSelecionados)
    cursosSelecionados.map((el) => {
        caixa2.appendChild(el) // .appendChild → método para adicionar um filho à div caixa2
    })
})
