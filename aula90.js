const objetos=document.getElementById('objetos')

const computador={ // A chave indica que é um objeto
    cpu: 'i9',
    ram: '64gb', //! Aqui são as propriedades do objeto da classe computador
    hd: '2tb',
    info: function(){
        console.log(`CPU: ${this.cpu}`)
        console.log(`RAM: ${this.ram}`)
        console.log(`HD: ${this.hd}`)
    } 
}

const computadores = [
    {
        cpu:"i9",
        ram:"64gb",
        hd:"2tb"
    },
    {
        cpu:"i7",
        ram:"32gb",
        hd:"2tb"
    },
    {
        cpu:"i5",
        ram:"16gb",
        hd:"1tb"
    }
]

computadores.forEach((c)=>{
    const div=document.createElement('div')
    div.innerHTML=c.cpu+"<br/>"+c.ram+"<br/>"+c.hd
    div.setAttribute('class', 'computador')
    objetos.appendChild(div)
})

/*
computador.info()
console.log(computador)
console.log(computadores)
*/
//objetos.innerHTML=JSON.stringify(computador) // exibir no DOM o objeto computador convertido em JSON (todo separado)

objetos.innerHTML=JSON.stringify(computadores)