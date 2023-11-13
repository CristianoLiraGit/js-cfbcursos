const endpoint='url da api'
fetch(endpoint)
.then(res=>res.json())
.then(dados=>{
    console.log(dados) // não há dados porque não configurei uma api
})