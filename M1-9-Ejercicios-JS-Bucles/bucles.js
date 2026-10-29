let contenedorHTML = document.getElementById("ejercicios-bucles")
let columnLeftHTML = document.getElementById("left-column")
let columnRightHTML = document.getElementById("right-column")
let pyramidContainerHTML = document.getElementById("pyramid-container")

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



// Ejercicio 16

// let date = prompt("Introduce una fecha (dd-mm-aaaa):")

// let dd = parseInt(date.substring(0,2))
// let mm = parseInt(date.substring(3, 5))
// let aaaa = parseInt(date.substring(6,11))

// let yearLeap = aaaa % 4 == 0 && (aaaa % 100 != 0 || aaaa % 400 == 0)
// console.log(yearLeap)

// let days31 = [1, 3, 5, 7, 8, 10, 12]
// let days30 = [4, 6, 9, 11]
// let days28 = 2
// let daysMonth



// for(let i = 0; i < days31.length; i++){
//     if (mm == days31[i]) {
//     daysMonth = 31

//     }
// }

// for(let i = 0; i < days30.length; i++){
//     if (mm == days30[i]) {
//     daysMonth = 30
// }
// }

// if (mm == 2 && yearLeap) {
//     daysMonth = 29

// } else if (mm == 2) {
//     daysMonth = 28
// }

// console.log(daysMonth)


// if (dd > daysMonth || mm > 12) {
//     alert("Año inválido")

// } else {
//     if (dd == 31 && daysMonth == 31 ||
//         dd == 30 && daysMonth == 30 ||
//         dd == 29 && daysMonth == 29 ||
//         dd == 28 && daysMonth == 28
//     ) {    
//         dd = 1
//         if (mm == 12) {
//             mm = 1
//             aaaa = aaaa + 1

//         } else {
//             mm = mm + 1
//         }

//     } else {
//         dd = dd + 1
//     }

//     alert(`La fecha del día siguiente es ${dd}-${mm}-${aaaa}`)
// }




// NO ESTÁ TERMINADO. PASA LOS DÍAS PERO NO TIENE EN CUENTA AÑOS BISIESTOS NI COMPRUEBA QUE LA FECHA SE CORRECTA

// let splitDate = date.split("-")
// // let correctDate = false

// // if (
// //     (splitDate[0] <= 30 && splitDate[1] % 2 == 0) ||
// //     (splitDate[0] <= 31 && splitDate[1] % 2 != 0) &&
// //     splitDate[1] <= 12 &&
// //     splitDate.length == 3
// // ) {
// //     correctDate = true

// // } else {
// //     alert("Año inválido")
// // }

// let arrayOfNumbers = []
// let stringsToNumbers
// for (i = 0; i < splitDate.length; i++) {
//     stringsToNumbers = parseInt(splitDate[i])
//     arrayOfNumbers.push(stringsToNumbers)
// }

// let dd = arrayOfNumbers[0]
// let mm = arrayOfNumbers[1]
// let aaaa = arrayOfNumbers[2]

// if (
//     (dd == 30 && mm % 2 == 0) || 
//     (dd == 31 && mm % 2 != 0) || 
//     (dd == 28 && mm == 2)
// ) {
//     dd = 1
//     mm += 1
//     alert(`La fecha del día siguiente es ${dd}-${mm}-${aaaa}`)

// } else if ((dd < 30 && mm % 2 == 0) || (dd < 31 && mm % 2 != 0)) {
//     dd += 1
//     alert(`La fecha del día siguiente es ${dd}-${mm}-${aaaa}`)

// } else if (dd == 31 && mm == 12) {
//     dd = 1
//     mm = 1
//     aaaa += 1
//     alert(`La fecha del día siguiente es ${dd}-${mm}-${aaaa}`)

// }



// Ejercicio 17

// let pyramidHeight = parseInt(prompt("Introduce la altura de tu pirámide:"))
// let symbol = prompt("Introduce un símbolo:")
// let level = ""

// if (pyramidHeight % 2 == 0) {
//     for (let i = 1; i <= pyramidHeight; i++) {
//         pyramidContainerHTML.innerHTML += `<p>${level += symbol + symbol}${i}</p>`
//     }

// } else {
//     for (let i = 1; i <= pyramidHeight; i++) {
//         pyramidContainerHTML.innerHTML += `<p>${level += symbol}${i}</p>`
//     }
// }



// Ejercicio largo


// Introduce la opción deseada:

let menu = `
        *****************
        Calculadora
        *****************
        1. Suma
        2. Resta
        3. Multiplicación
        4. Potencia
        5. División
        6. Raíz
        7. Salir
    `
let option
let num1
let num2
let optionSelected
let selectedSymbol
let result

do {
    option = parseInt(prompt(menu))

    if (option < 7) {
        num1 = parseInt(prompt("Introduce el primer número:"))
        num2 = parseInt(prompt("Introduce el segundo número:"))
    }

    switch (option) {
        case 1:
            optionSelected = "suma"
            selectedSymbol = "+"
            result = num1 + num2;
            break;
        case 2:
            optionSelected = "resta"
            selectedSymbol = "-"
            result = num1 - num2;
            break;
        case 3:
            optionSelected = "multiplicación"
            selectedSymbol = "x"
            result = num1 * num2;
            break;

        case 4:
            optionSelected = "potencia"
            selectedSymbol = "^"
            result = Math.pow(num1, num2)
            break;

        case 5:
            optionSelected = "división"
            selectedSymbol = "/"
            result = num1 / num2;
            break;

        case 6:
            optionSelected = "raíz"
            selectedSymbol = "√"
            result = Math.pow(num1, 1 / num2)
            break;
        case 7:
            alert("Calculadora cerrada")
            break;
        default:
            alert("No es una opción válida")
            break;
    }

    if (option < 7) {
        alert(`
            Operación seleccionada: ${optionSelected}
            ${num1}${selectedSymbol}${num2}=${result}
            `)
    }

} while (option != 7)