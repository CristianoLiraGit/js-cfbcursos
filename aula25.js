// Funções arrow são um tipo de função anônima

// const soma = function(v1, v2) {return v1 + v2}

// Ao transformar o modelo acima em arrow function, basta retirar o nome function e depois dos parâmetros, utilizar uma seta "=>". Veja:

// const soma = (v1, v2) => {return v1 + v2}
// console.log(soma(10, 5))

// Se a função só tiver um parâmetro, não precisa colocar os parênteses:

const nome = n => {return n}
console.log(nome('Cristiano'))

// É importante salientar que no padrão arrow function, não precisa usar return