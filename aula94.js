// import getTodosCursos, {cursos} from './cursos3.js'

// Renomeando módulos

import getTodosCursos from "./cursos3.js"; // não usou chaves porque foi exportado como "export defaut"
// import { cursos as c, getCurso as gc } from "./cursos3.js";
import * as n_cursos from "./cursos3.js"; // Aqui, o asterisco (*) pega tudo que é exportado no módulo

// console.log(c)
// console.log(getTodosCursos())
// console.log(gc[0])
console.log(n_cursos.cursos)
console.log(n_cursos.getCurso(1))
console.log(n_cursos.default())