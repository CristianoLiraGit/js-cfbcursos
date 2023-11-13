const endpoint='https://replit.com/@cristianosclira/Nodejs#index.js'
fetch(endpoint)
.then(res=>res.json())
.then(dados=>{
    console.log(dados) // não há dados porque não configurei uma api
})