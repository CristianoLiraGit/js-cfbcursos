const f_nome=document.querySelector('#f_nome');
const f_nota=document.querySelector('#f_nota');
const f_msg=document.querySelector('#f_msg');

document.querySelector("#btn_validar").addEventListener('click', (evt)=>{
    let msg=null

    if(!f_nota.checkValidity()){ // Validação nativa
        msg=f_nota.validationMessage
    }

    f_msg.innerHTML=msg
    evt.preventDefault() // Evita que a página seja recarregada (envio do formulário); pode ser colocado no início, bem como no final do bloco (caso haja outras instruções antes)
})

/*
Métodos de validação do DOM
• checkValidity()
setCustomValidity()

Propriedade de validação do DOM
• validity
• validaionMessage

Propriedades de validação

• customError: true, se uma mensagem de validação personalizada for definida.
• patternMismatch: true, se o valor de um elemento não corresponder ao seu atributo padrão.
• rangeOverflow: true, se o valor de um elemento form maior que seu atributo max.
• rangeUnderflow: true, se o valor de um elemento for menor que seu atributo min.
• stepMismatch: true, se o valor de um elemento for inválido por seu atributo step.
• tooLong: true, se o valor de um elemento exceder seu atributo maxLength.
• typeMismatch: true, se o valor de um elemento for inválido por seu atributo type.
• alueMissing: true, se um elemento (com um atributo obrigatório) não tiver valor.
• valid: true, se o valor de um elemento for válido.
*/