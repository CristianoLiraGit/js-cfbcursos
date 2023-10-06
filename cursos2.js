const cursos = ["JavaScript", "HTML", "CSS", "Arduíno", "Raspberry", "C++", "Python", "Java", "C#"] // 1)
const cursos2 = ["Português", "Matemática", "RLM", "Física", "Química"] // 2)

const getTodosCursos=()=>{ // 1)
    return cursos
}

const getTodosCursos2=()=>{ // 2)
    return cursos2
}


export {cursos, getTodosCursos}

export default getTodosCursos2 // Com o export defaut, não precisa usar chaves no import

/*

export default function getTodosCursos(){
    return cursos
}

export {cursos}


*/