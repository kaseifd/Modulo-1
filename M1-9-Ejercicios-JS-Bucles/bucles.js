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

// let num = prompt("Dame un número de 3 dígitos:")
// let suma = 0

// if (num.length == 3) {
//     for (let i = 0; i < 3; i++) {
//         suma += parseInt(num[i])
//     }

//     alert(suma)

// } else {
//     alert("El número no tiene 3 dígitos")
// }



// Ejercicio 13

// let date = prompt("Introduce tu fecha de nacimiento (dd-mm-aaaa):")
// let dateToSum = date.replaceAll("-", "+")
// let splitDate = dateToSum.split("+")

// let firstDate = 0
// let secondDate = 0
// let luckyNumber = 0

// for (let i = 0; i < splitDate.length; i++) {
//     firstDate += parseInt(splitDate[i])
// }

// for (let i = 0; i < firstDate.toString().length; i++) {
//     secondDate += parseInt(firstDate.toString()[i])
// }

// for (let i = 0; i < secondDate.toString().length; i++) {
//     luckyNumber += parseInt(secondDate.toString()[i])
// }

// alert(`Tu lucky number es el ${luckyNumber}`)



// Ejercicio 14

// let num = parseInt(prompt("Introduce un número"))
// let line = ""

// for (i = 1; i <= num; i++) {
//     line += "*"
//     console.log(line)
// }



// Ejercicio 15

// let password = prompt("Introduce la contraseña")
// let passwordMinimumLength = password.length >= 8
// let passwordContentNumbers = ""
// let passwordContentFirstCapitalLetter = password[0] == password[0].toUpperCase()


// for (let i = 0; i <= 9; i++) {
//     if (password.includes([i])) {
//         passwordContentNumbers = true        
//     }
// }


// let passwordCorrect = 
//     passwordMinimumLength &&
//     passwordContentNumbers &&
//     passwordContentFirstCapitalLetter


// if (passwordCorrect) {
//     alert("La contraseña es correcta")

// } else {
//     alert("La contraseña es incorrecta")
// }


// if (password.length >= 8) {

// }
