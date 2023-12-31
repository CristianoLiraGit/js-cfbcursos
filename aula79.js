const div_data=document.getElementById('div_data')
const div_relogio=document.getElementById('div_relogio')
const btn_ativar=document.getElementById('btn_ativar')
const btn_parar=document.getElementById('btn_parar')
const tmp_alarme=document.getElementById('tmp_alarme')
const hora_alarme=document.getElementById('hora_alarme')
const timer=document.getElementById('timer')

const som_alarme=new Audio('alarm.wav')
som_alarme.loop=-1 //! -1 define o loop como infinito

let ts_atual=null
let ts_alarme=null
let alarme_ativado=false
let alarme_tocando=false

btn_ativar.addEventListener('click', ()=>{
    ts_atual=Date.now()
    ts_alarme=ts_atual+(tmp_alarme.value*1000)
    alarme_ativado=true
    const dt_alarme=new Date(ts_alarme)
    //! formatar o zero na hora, minuto e segundo menor que 10:
    
    hora_alarme.innerHTML= `Hora do Alarme: ${dt_alarme.getHours()}:${dt_alarme.getMinutes()}:${dt_alarme.getSeconds()}`
    // let hora=data.getHours()
    // hora=hora<10?"0"+hora:hora
    
    // let minuto=data.getMinutes()
    // minuto=minuto<10?"0"+minuto:minuto
    
    // let segundo=data.getSeconds()
    // segundo=segundo<10?"0"+segundo:segundo
    
    // hora_alarme.innerHTML=`Hora do Alarme: ${hora}:${minuto}:${segundo}` //! Não deu certo!
    
})

btn_parar.addEventListener('click', ()=>{
    alarme_ativado=false
    alarme_tocando=false
    hora_alarme.innerHTML="Hora do Alarme"
    tmp_alarme.value=0
    timer.classList.remove('alarme')
    som_alarme.pause()
    som_alarme.currentTime=0
})

const data=new Date() // Foi instanciado um objeto da classe Date

let dia=data.getDate()
dia=dia<10?"0"+dia:dia //* se dia for menor que 10, adicione um zero concatenado com o respectivo dia, caso contrário, adicione somente o dia respectivo (maior que 10)

let mes=data.getMonth()+1 // Adicionei um porque o primeiro mês é zero
mes=mes<10?"0"+mes:mes

const data_r=`${dia}/${mes}/${data.getFullYear()}`

div_data.innerHTML=data_r

const relogio=()=>{
    const data=new Date()
    let hora=data.getHours()
    hora=hora<10?"0"+hora:hora //! Formatação para adicionar zero antes da hora menor que 10.
    let minuto=data.getMinutes()
    minuto=minuto<10?"0"+minuto:minuto //! Formatação para adicionar zero antes do minuto menor que 10.
    let segundo=data.getSeconds()
    segundo=segundo<10?"0"+segundo:segundo //! Formatação para adicionar zero antes do segundo menor que 10.
    const hora_completa=`${hora}:${minuto}:${segundo}`
    div_relogio.innerHTML=hora_completa
    if(alarme_ativado && !alarme_tocando){
        if(data.getTime() >= ts_alarme){
            alarme_tocando=true
            som_alarme.play()
            timer.classList.add('alarme')
        }
    }
}

const intervalo=setInterval(relogio,1000) //? Função que chama outra função a cada intervalo de tempo (1s)
relogio()

/*
getDate() = Dia do mês
detDay() = Dia da semana (número)
getFullYear() = Ano com 4 dígitos
getMilliseconds() = Milisegundos
getMinutes() = Minutos
getMonth() = Mês
getSeconds() = Segundos
getTime() = Timestamp (milisegundos desde 1 de janeiro de 1970, 00:00:00 UTC)
Date.now() = Timestamp (milisegundos desde 1 de janeiro de 1970, 00:00:00 UTC)
getTimezoneOffset() = Timezone da localidade
setDate() = Define um mês para a data
setMonth() = Define um mês para a data
setFullYear() = Define um ano para a data
setHours() = Define horas
setMinutes() = Define minutos
setSeconds() = Define segundos
setMilliseconds() = Define milisegundos
toDateString() = Retorna somente a data
*/

// terminar; //! fazer a formatação do zero na hora do alarme

// rever aula
