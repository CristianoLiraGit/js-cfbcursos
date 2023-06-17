/* Método find */
const p_array=document.querySelector('#array')
const txt_pesquisar=document.querySelector('#txt_pesquisar')
const btnPesquisar=document.querySelector('#btnPesquisar')
const resultado=document.querySelector('#resultado')

const elementos_array=[10, 5, 8, 2, 9, 15, 20]
// const elementos_array=['html', 'css', 'javascript']
p_array.innerHTML='['+elementos_array+']'

/*
const pes=(e, i)=>{

} 

function pesq(e, i){

}
*/   // A mesma coisa essas funções ou como na arrow function abaixo

btnPesquisar.addEventListener('click', (evt)=>{ // Adicionando um evento de clique no botão pesquisar
    resultado.innerHTML='Valor não encontrado'
    const ret=elementos_array.find((e, i)=>{
        // if(e.toUpperCase()==txt_pesquisar.value.toUpperCase()){
        if(e==txt_pesquisar.value){
            resultado.innerHTML=`Valor encontrado: ${e} na posição ${i}`
            return e
        }
    })
})
