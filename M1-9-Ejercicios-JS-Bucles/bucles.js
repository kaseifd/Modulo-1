let contenedorHTML = document.getElementById("ejercicios-bucles")
let columnLeftHTML = document.getElementById("left-column")
let columnRightHTML = document.getElementById("right-column")

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

// Poner este estilo en div id="ejercicios-bucles": style="display: flex;"

// let factorial = 1

// for(let i = 1; i <= 10; i++) {
//     factorial *= i
//     columnLeftHTML.innerHTML += `<p class="left-column-content">Factorial de ${[i]}:</p>`
//     columnRightHTML.innerHTML += `<p class="right-column-content">${factorial}</p>`
// }



// Ejercicio 7

// let num
// let suma = 0

// for (let i = 0; num !== 0; i++) {
//     num = parseFloat(prompt("Introduce un número"))

//     if (num < 0) {
//         alert("Se ignoran los signos negativos")
//         num = num * (-1)
//     }

//     suma += num

// }

// alert(`La suma es: ${suma}`)



// Ejercicio 8

// let parOImpar = "valor-inicio"
// let paresNum

// contenedorHTML.style.display = "flex"

// while (parOImpar !== "p" && parOImpar !== "i") {
//     if (parOImpar !== "valor-inicio") alert("Ese valor no es correcto")
//     parOImpar = prompt("Escribe P para ver los números pares del 1 al 100. Escribe I para ver los números impares del 1 al 100").toLowerCase()
// }



// for (let i = 1; i <= 100; i++) {
//     paresNum = i % 2 == 0
//     if (parOImpar == "p" && paresNum == true) {
//         contenedorHTML.innerHTML += `<p>${i},</p>`

//     } else if (parOImpar == "i" && paresNum == false){
//         contenedorHTML.innerHTML += `<p>${i},</p>`
//     }         
// }



// Ejercicio 9

// Poner este estilo en div id="ejercicios-bucles": style="display: flex;"

// for (let i = 1; i <= 12; i++) {
//     columnLeftHTML.innerHTML += `<p class="left-column-content">${[i]} | </p>`

//     if (i % 2 == 0) {
//         columnRightHTML.innerHTML += `<p class="right-column-content">Cubo: ${[i * i * i]}</p>`

//     } else {
//         columnRightHTML.innerHTML += `<p class="right-column-content">Cuadrado: ${[i * i]}</p>`
//     }
// }



// Ejercicio 10

// for (let i = 1; i <= 100; i++) {
//     contenedorHTML.innerHTML += `<p>${i % 5 !== 0 ? i : "."}</p>`
// }



// Ejercicio 11 

// let num
// let oppositeNum = ""

// while (num != "0") {
//     num = prompt("Introduce un número entero positivo. Te lo voy a voltear.")
//     oppositeNum = ""

//     if (parseInt(num) && parseInt(num) > 0 && !num.includes(",") && !num.includes(".")) {
//         for (let i = num.length - 1; i >= 0; i--) {
//             oppositeNum += num[i]
//         }

//         alert(oppositeNum)
//     }

// }



// Ejercicio 12





// Ejercicio 13

// Ejercicio 14

// Ejercicio 15


