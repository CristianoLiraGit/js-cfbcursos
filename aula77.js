const data=new Date() // Foi instanciado um objeto da classe Date
const div_data=document.getElementById('div_data')

let dia=data.getDate()
dia=dia<10?"0"+dia:dia // se dia for menor que 10, adicione um zero concatenado com o respectivo dia, caso contrário, adicione somente o dia respectivo (maior que 10)

let mes=data.getMonth()
mes=mes<10?"0"+mes:mes

const data_r=`${dia}/${mes}/${data.getFullYear()}`

console.log(data)
// Posso usar o console diretamente, sem precisar instanciar:
console.log(new Date())

console.log(Date.now()) // Timestamp

console.log(`O dia do mês é ${data.getDate()}.`)

console.log(data.toDateString())

div_data.innerHTML=data_r



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