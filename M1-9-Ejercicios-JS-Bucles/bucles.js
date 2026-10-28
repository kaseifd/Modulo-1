let contenedorHTML = document.getElementById("ejercicios-bucles")

// Ejercicio 1

// let age = parseInt(prompt("Introduce tu edad:"))

// for (let i = 0; i < age; i++) {
//     contenedorHTML.innerHTML += `<p>Feliz cumpleaños</p>`
// }



// Ejercicio 2

// let num = parseInt(prompt("Introduce un número:"))
// let result = 0

// for (let i = 1; i <= num; i++) {
//     result += i
// }

// alert(result)



// Ejercicio 3

// for (let i = 10; i <= 20; i++) {
//     contenedorHTML.innerHTML += `<p>${i}</p>`
// }



// Ejercicio 4

// let suma = 0
// for (let i = 1; i <= 10; i++) {
//     let value = parseFloat(prompt(`Introduce un número (${[i]}/10)`))
//     suma += value
// } 

// contenedorHTML.innerHTML = `<p>La media es ${suma/10}</p>`
// console.log(suma)



// Ejercicio 5 

// let value = Infinity

// while (value !== 0) {
//     value = parseInt(prompt(`Introduce un número:`))
//     let suma = 0

//     for (let i = 1; i <= value; i++) {
//         suma += i
//     }

//     if (value !== 0) {
//         contenedorHTML.innerHTML += `<p>La suma es ${suma}</p>`
//     }
// }



// Ejercicio 6

// let columnNumHTML = document.getElementById("number-column")
// let columnFactorialHTML = document.getElementById("factorial-column")

// let factorial = 1

// for(let i = 1; i <= 10; i++) {
//     factorial *= i
//     columnNumHTML.innerHTML += `<p class="number-column-num">Factorial de ${[i]}:</p>`
//     columnFactorialHTML.innerHTML += `<p class="factorial-column-num">${factorial}</p>`
// }



// Ejercicio 7

let num
let suma = 0

for (let i = 0; num !== 0; i++) {
    num = parseFloat(prompt("Introduce un número"))
    suma += num
    console.log(suma)

    if (num < 0) {
        alert("Se ignoran los signos negativos")
        num = num * (-1)
        suma += num
        console.log(num)

    }
}

alert(`La suma es: ${suma}`)














