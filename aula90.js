const objetos=document.getElementById('objetos')

const computador={ // A chave indica que é um objeto
    cpu: 'i9',
    ram: '64gb', //! Aqui são as propriedades do objeto da classe computador
    hd: '2tb' 
}

console.log(computador)

objetos.innerHTML=JSON.stringify(computador) // exibir no DOM o objeto computador convertido em JSON (todo separado)