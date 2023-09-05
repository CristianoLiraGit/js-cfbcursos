// Coleção Map
// O padrão da coleção Map é chave/valor

const caixa=document.querySelector('#caixa');
let mapa=new Map();
mapa.set('curso', 'Javascript') // chave, valor
mapa.set(10, 'CFB Cursos')
mapa.set(1, 100)
mapa.set('canal', 100)

// mapa.delete(1)

console.log(mapa)

let pesquisa = 10
if(mapa.has(pesquisa)){
    caixa.innerHTML='A chave existe na coleção ' + mapa.get(pesquisa)
}else{
    caixa.innerHTML='A chave NÃO está na coleção'
}
res+="<br/> O tamanho da coleção é " + mapa.size
caixa.innerHTML=res
// caixa.innerHTML=mapa.get('curso')

mapa.forEach((el)=>{
    console.log(el)
})