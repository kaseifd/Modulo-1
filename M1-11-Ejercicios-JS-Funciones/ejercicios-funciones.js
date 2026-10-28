// Ejercicio 1a

// function decirHola() {
//     console.log("Hola")
// }

// function decirHola3Veces() {
//     decirHola()
//     decirHola()
//     decirHola()
// }

// decirHola3Veces()


// // Ejercicio 1b (lo hemos cambiado para hacer con un for 80 veces)

// function decirHola80Veces() {
//     for (let i = 1; i <= 80; i++) {
//     console.log("Hola")
    
//     } 
// }
    
// decirHola80Veces()



// // Ejercicio 2

// function decirHolaNVeces(n) {
//     for (let i = 1; i <= n; i++) {
//     console.log("Hola")
    
//     } 
// }

// decirHolaNVeces(5)
// decirHolaNVeces(3)



// // Ejercicio 3

// function suma(a, b) {
//     return a + b

// }

// console.log(suma(4, 3))



// // Ejercicio 4

// let num1 = parseInt(prompt("Introduce el primer número:"))
// let num2 = parseInt(prompt("Introduce el segundo número:"))


// function suma(a, b) {
//     return a + b

// }

// console.log(suma(num1, num2))



// Ejercicio 5

// let num1 = parseInt(prompt("Introduce el primer número:"))
// let num2 = parseInt(prompt("Introduce el segundo número:"))

// function biggestNum(a, b) {
//     return a > b
// }

// let firstIsBigger = biggestNum(num1, num2)

// if (firstIsBigger) {
//     console.log("El primer número es más grande")
    
// } else {
//     console.log("El segundo número es más grande")
    
// }



// Ejercicio 6

// let num1
// let num2

// while (num2 != 0) {
//     num1 = parseInt(prompt("Introduce el primer número:"))
//     num2 = parseInt(prompt("Introduce el segundo número:"))
//     alert(`La division es ${division(num1, num2)}`)
// }


// function division (a, b) {
//     return a / b
// }



// Ejercicio 7

// function esPar(a) {
//     return a % 2 == 0
// }

// let num = parseInt(prompt("Dame un número:"))

// if (esPar(num)) {
//     alert(`El número es par`)

// } else {
//         alert(`El número es impar`)

// }



// Ejercicio 8

// let num = parseInt(prompt("Introduce un número:"))

// alert(factorial(num))

// function factorial(a) {
//     let result = 1

//     for (let i = 1; i <= a; i++) {
//         result *= i
//     }

//     return result

// }



// Ejercicio 9 

// let num = -1

// while (num < 0) {
//     num = parseInt(prompt("Introduce un número positivo:")) 
// }

// alert(`Tu número tiene ${(numeroCifras(num))} cifras` )

// function numeroCifras(a) {
//     return a.toString().length
// }



// Ejercicio 10

// Circulo: (radio^2)*PI
// Triángulo: (base * altura) / 2
// Cuadrado: lado * lado

// let shape = prompt("Elige una figura para calcular su área (círculo, cuadrado o triángulo):")


// function calcularAreaCirculo(radio) {
//     const pi = 3.141592
//     return radio * radio * pi
    
// }

// function calcularAreaTriangulo(base, altura) {
//     return base * altura / 2
    
// }

// function calcularAreaCuadrado(lado) {
//     return lado * lado
    
// }

// if(shape == "circulo") {
//     let radio = parseFloat(prompt("Introduce el radio:"))
//     alert(`Área del círculo: ${parseInt(calcularAreaCirculo(radio))}`)
// } 
// if(shape == "cuadrado") {
//     let lado = parseFloat(prompt("Introduce el lado:"))   
//     alert(`Área del cuadrado: ${parseInt(calcularAreaCuadrado(lado))}`)
// }
// if(shape == "triangulo") {  
//     let base = parseFloat(prompt("Introduce la base:"))
//     let altura = parseFloat(prompt("Introduce la altura:"))
//     alert(`Área del triángulo: ${parseInt(calcularAreaTriangulo(base, altura))}`)
// }



// Ejercicio 11

// 0.86 libras es un 1 €
// 1.28611 $ es un 1 €
// 129.852 yenes es un 1 €

// let euros = parseFloat(prompt("¿Cuántos euros quieres convertir?"))
// let currency = (prompt("¿A libras, yenes o dólares?"))

// const euToPound = 0.86
// const euToDolar = 1.28611
// const euToYen = 175.84

// euToCurrency(euros, currency)

// function euToCurrency(euros, currency) {
//     let selectedCurrency
//     let selectedSymbol
//     if (currency == "dolar") {
//         selectedCurrency = euToDolar
//         selectedSymbol = "$"
//     }

//     if (currency == "yen") {
//         selectedCurrency = euToYen
//         selectedSymbol = "¥"
//     }

//     if (currency == "libra") {
//         selectedCurrency = euToPound
//         selectedSymbol = "£"
//     }
    
//     alert(euros * selectedCurrency)
// }



// Ejercicio 12

// let year

// function isLeap(year) {
//     return (year % 4 == 0 && year % 100 != 0) || year % 400 == 0 
// }

// while (year != 0) {
//     year = parseInt(prompt("Dame un año:"))
//     isLeap(year) ? alert(`El año ${year} es bisiesto`) : alert(`El año ${year} no es bisiesto`)
    
// }