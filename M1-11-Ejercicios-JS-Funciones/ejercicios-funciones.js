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

let num1 = parseInt(prompt("Introduce el primer número:"))
let num2 = parseInt(prompt("Introduce el segundo número:"))

function biggestNum(a, b) {
    return a > b
}

let resultBiggestNum = biggestNum(num1, num2)

if (resultBiggestNum) {
    console.log("El primer número es más grande")
    
} else {
    console.log("El segundo número es más grande")
    
}





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



