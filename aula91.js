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

computador['monitor']='22pol' //! Outras formas de adicionar propriedades
computador.placaVideo='rtx'
// delete(computador.hd)

// console.log(computador['monitor']) 

const c1=Object.assign({},computador) // Clonando o objeto computador usando o assign
c1.info()

const o1={obj1:'1'}
const o2={obj2:'2'}
const o3={obj3:'3'}
const o4=Object.assign(o1, o2, o3)
console.log(o4) // Ver o console

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