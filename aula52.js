const caixa = document.querySelector('#caixa');

let cores=['azul', 'verde', 'vermelho', ['claro', 'escuro', 'médio']]
let cursos=["HTML", "CSS", "JavaScript", cores];

// cursos[0]="C++"

cursos.push("C++"); // Adiciona no final da lista
cursos.push('Python'); // Adiciona no final da lista
cursos.pop(); // Elimina o último elemento (Python)
cursos.unshift('Python'); // Adiciona Python no início
cursos.shift(); // Elimina Python do início

console.log(cursos[3][3][2]); // Conceito de matrizes

cursos.map((el)=>{
    let p = document.createElement("p");
    p.innerHTML=el;
    caixa.appendChild(p)
})
