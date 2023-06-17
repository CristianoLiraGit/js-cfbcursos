function mudarTexto() {
    let d1 = document.getElementById('d1')
    let d2 = document.getElementById('d2')
    let d3 = document.getElementById('d3')
    d1.innerHTML='CFB Cursos'
    d2.innerHTML='CFB Cursos'
    d3.innerHTML='CFB Cursos'
}

// function nome() {
//     console.log('CFB Cursos')
// }

// nome()

function name() {
    console.log('Curso de JS')   // Cria a função em um bloco; o for em outro bloco ({})
}
for(let i = 0; i < 10; i++){
    name()
}


function alerta() {
    window.alert('Alerta de teste')
}