/*

&& → e (and)
|| → ou (or)
! → não (not)

*/

let n1, n2, n3, n4
n1 = 10
n2 = 5
n3 = 15
n4 = 2

// console.log(n1 > n2)
// console.log(n4 > n2)

// console.log(n1 > n2) && (n3 > n4)
// console.log(n4 > n3) || (n1 > n3)

if((n1 > n2) && (n3 > n4)) {
    console.log('Verdadeiro')
} else {
    console.log('Falso')
}


if((n4 > n3) && (n1 > n3)) {
    console.log('Verdadeiro')
} else {
    console.log('Falso')
}


if(!(n1 > n2) && (n3 > n4)) {
    console.log('Verdadeiro')
} else {
    console.log('Falso')
}


if(!(n4 > n3) && (n1 > n3)) { // ! → negação
    console.log('Verdadeiro')
} else {
    console.log('Falso')
}

