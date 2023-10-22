const data=new Date() // Foi instanciado um objeto da classe Date
const div_data=document.getElementById('div_data')
const div_relogio=document.getElementById('div_relogio')

let dia=data.getDate()
dia=dia<10?"0"+dia:dia //* se dia for menor que 10, adicione um zero concatenado com o respectivo dia, caso contrário, adicione somente o dia respectivo (maior que 10)

let mes=data.getMonth()
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