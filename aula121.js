const f_texto=document.querySelector('#f_texto')
const p_texto=document.querySelector('#p_texto')
const btn_texto=document.querySelector('#btn_texto')

btn_texto.addEventListener('click', (evt)=>{

})
// Duas variáveis foram criadas
let num = 10
let curso = "JavaScript"
// chaves e valores foram adicionados no localStorage
//? window.localStorage.setItem('chave', valor) 
//! Não é obrigatório colocar o window no começo
localStorage.setItem('numero', num)
localStorage.setItem("nome","Cristiano")
localStorage.setItem("canal",  "CFB Cursos")
localStorage.setItem("curso", curso)
// alert(localStorage.length)
// alert(localStorage.getItem(localStorage.key(0)))
// alert(localStorage.getItem("nome"))
// alert(localStorage.getItem("canal"))
// alert(localStorage.getItem("curso"))
//! Remover as chaves locais criadas:
//? localStorage.clear()

sessionStorage.setItem('nome', 'Cristiano')
sessionStorage.setItem("canal",  "CFB Cursos")
sessionStorage.setItem("curso", curso)


