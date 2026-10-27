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



// Ejercicio 5 ****Revisar porque lo han entendido mal

let value = Infinity

while (value !== 0) {
    value = parseInt(prompt(`Introduce un número:`))
    let suma = 0

    for (let i = 1; i <= value; i++) {
        suma += i
    }

    if (value !== 0) {
        contenedorHTML.innerHTML += `<p>La suma es ${suma}</p>`
    }
}





