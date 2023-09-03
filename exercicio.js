const btn_soma=document.querySelector('#btn_soma')
const btn_subtracao=document.querySelector('#btn_subtracao')
const btn_multiplicacao=document.querySelector('#btn_multiplicacao')
const btn_divisao=document.querySelector('#btn_divisao')
const res=document.querySelector('#res')

const op=[ // Foram criadas três funções dentro do array
    ()=>{
        const val=[document.getElementById('valor1').value,document.getElementById('valor2').value] // vírgula porque está recebendo dois valores, e é um array. Posição [0] e posição [1]
        res.value=Number(val[0])+Number(val[1])
    },
    ()=>{
        const val=[document.getElementById('valor1').value,document.getElementById('valor2').value]
        res.value=Number(val[0])-Number(val[1])
    },
    ()=>{
        const val=[document.getElementById('valor1').value,document.getElementById('valor2').value]
        res.value=Number(val[0])*Number(val[1])
    },
    ()=>{
        const val=[document.getElementById('valor1').value,document.getElementById('valor2').value]
        res.value=Number(val[0])/Number(val[1])
    }
]

btn_soma.addEventListener('click',op[0])
btn_subtracao.addEventListener('click',op[1])
btn_multiplicacao.addEventListener('click',op[2])
btn_divisao.addEventListener('click',op[3])

// Poderia também ser:
/*
btn_soma.addEventListener('click',()=>{op[0]()})
btn_subtracao.addEventListener('click',()=>{op[1]()})
btn_multiplicacao.addEventListener('click',()=>{op[2]()})
btn_divisao.addEventListener('click',()=>{op[3]()})
*/

