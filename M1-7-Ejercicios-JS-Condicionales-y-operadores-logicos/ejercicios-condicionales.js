// Ejercicio 1

// let num1 = parseInt(prompt("Introduce el primer número:"))
// let num2 = parseInt(prompt("Introduce el segundo número:"))

// let bigNum
// let smallNum

// if (num1 > num2) {
//     bigNum = num1
//     smallNum = num2

// } else {
//     bigNum = num2
//     smallNum = num1

// }

// alert(`
//     Suma: ${num1 + num2}
//     Resta: ${num1 - num2}
//     Multiplicación: ${num1 * num2}
//     Media: ${(num1 + num2) / 2}
//     El número más grande es ${bigNum}
//     El número más pequeño es ${smallNum}
// `)



// Ejercicio 2

// let age = prompt("Introduce tu edad:")

// if (age <= 8) {
//     alert("Pasa al tobogán")

// } else {
//     alert("Eres demasiado mayor para usar el tobogán")
// }



// Ejercicio 3

// let num1 = parseInt(prompt("Introduce el primer número:"))
// let num2 = parseInt(prompt("Introduce el segundo número:"))
// let num3 = parseInt(prompt("Introduce el tercer número:"))

// if (num1 + num2 === num3) {
//     alert(`${num1} + ${num2} = ${num3}`)
    
// } else {
//     alert(`${num1} + ${num2} no es igual a ${num3}`)

// }



// Ejercicio 4

// let num1 = parseInt(prompt("Introduce el primer número:"))
// let num2 = parseInt(prompt("Introduce el segundo número:"))
// let num3 = parseInt(prompt("Introduce el tercer número:"))

// if (num1 == num2 - 20) {
//     alert(`${num1} es 20 menos que ${num2}` )
// }

// if (num2 == num1 - 20) {
//     alert(`${num2} es 20 menos que ${num1}` )
// }

// if (num1 == num3 - 20) {
//     alert(`${num1} es 20 menos que ${num3}` )
// }

// if (num3 == num1 - 20) {
//     alert(`${num3} es 20 menos que ${num1}` )
// }

// if (num2 == num3 - 20) {
//     alert(`${num2} es 20 menos que ${num3}` )
// }

// if (num3 == num2 - 20) {
//     alert(`${num3} es 20 menos que ${num2}` )
// }



// Ejercicio 5

// let day = prompt("Escribe un día de la semana:")

//     // Solución 1
// switch (day) {
//     case "lunes": 
//     case "martes": 
//     case "miercoles": 
//     case "jueves": 
//     case "viernes": 
//         alert("Hoy es " + day);
//         break;
//     case "sabado":
//     case "domingo": 
//         alert("Es fin de semana");
//         break;

//     default: 
//         alert("No existe ese día");
//         break;
// }

// // Solución 2

// if (day === "sabado" || day === "domingo") {
//     alert("Es fin de semana");
   
// } else {
//     alert("Hoy es " + day);
// }



// Ejercicio 6

// let num1 = parseFloat(prompt("Introduce un número:"))

// if (num1 < 1) {
//     alert("No se puede calcular")
    
// } else {
//     alert(`
//         Cuadrado: ${num1*num1}
//         Cubo: ${num1*num1*num1}
//     `)
// }



// Ejercicio 7

// let numerador = parseInt(prompt("Introduce el numerador:"))
// let denominador = parseInt(prompt("Introduce el denominador:"))

// if (denominador !== 0) {
//     alert(numerador/denominador)
// }

// if (denominador == 0) {
//     alert("No se puede dividir por 0")
// }



// Ejercicio 8
// let num1 = parseInt(prompt("Introduce el primer número:"))
// let num2 = parseInt(prompt("Introduce el segundo número:"))

// if (num1 == num2) {
//     alert("Ambos son iguales")
    
// } else {
//     alert(num1 < num2 ? `${num1} es menor que ${num2}` : `${num1} es mayor que ${num2}`)
// }



// Ejercicio 9
// let temp = parseFloat(prompt("Introduce la temperatura:"))

// if (temp > 40) {
//     alert("Vete a otro sitio")  
// }

// if (temp <= 40 && temp > 30) {
//     alert("Enciende el aire acondicionado")  
// }

// if (temp <= 30 && temp > 20) {
//     alert("No hagas nada")  
// }

// if (temp <= 20 && temp >= 10) {
//     alert("Enciende la calefacción")  
// }

// if (temp < 10) {
//     alert("Vete a otro sitio")  
// }



// Ejercicio 10

// let num1 = parseInt(prompt("Introduce el primer número:"))
// let num2 = parseInt(prompt("Introduce el segundo número:"))
// let biggerNumber = num1 > num2 ? num1 : num2
// let smallerNumber = num1 < num2 ? num1 : num2

// if (num1 == num2) {
//     alert("0")
// }

// if (num1 % 6 == num2 % 6) {
//     alert(smallerNumber)
    
// } else {
//     alert(biggerNumber)
// }



// Ejercicio 11

// let num1 = prompt("Introduce un número entre 25 y 75")
// let num2 = prompt("Introduce otro número entre 25 y 75")

// let firstDigitNum1 = num1[0]
// let secondDigitNum1 = num1[1]
// let firstDigitNum2 = num2[0]
// let secondDigitNum2 = num2[1]

// if (num1 < 25 || num1 > 75 || num2 < 25 || num2 > 75) {
//     alert("Número incorrecto. Inténtalo de nuevo.")

// } else {
// if (firstDigitNum1 == firstDigitNum2  || 
//     firstDigitNum1 == secondDigitNum2 || 
//     secondDigitNum1 == firstDigitNum2 || 
//     secondDigitNum1 == secondDigitNum2
// ) {
//     alert("Hay coincidencia.")
    
// } else {
//     alert("Nada coincide.")
// }

// }



// Ejercicio 12 

// let raceResult = parseInt(prompt("¿En qué puesto quedaste?"))

// a

// if (raceResult == 1) {
//     alert("Ganaste")

// } else {
//     alert("Lo importante es participar")

// }


// b 

// if (raceResult == 1) {
//     alert("Medalla de oro")

// } else if (raceResult == 2) {
//     alert("Medalla de plata")

// } else if (raceResult == 3) {
//     alert("Medalla de bronce")

// } else {
//     alert("Lo importante es participar")
// }


// c

// switch (raceResult) {
//     case 1:
//         alert("Medalla de oro")
//         break;

//     case 2:
//         alert("Medalla de plata")
//         break;

//     case 3:
//         alert("Medalla de bronce")
//         break;

//     default:
//         alert("Lo importante es participar")
//         break;
// }


// d

// if (raceResult == 1 || raceResult == 2 || raceResult == 3) {
//     alert("Sube al podium")

// } else {
//     alert("Se acabó la carrera")
// }


// Ejercicio 13

// let sentence = prompt("Introduce una frase:")

// if (sentence.length % 2 == 0) {
//    alert(sentence.substring(sentence.length / 2 - 1, sentence.length / 2 + 1)) 

    
// } else {
//    alert(sentence.substring(parseInt(sentence.length / 2), parseInt(sentence.length / 2) + 1)) 
// }



// Ejercicio 14 

// alert("Hoy es " + Date())



// Ejercicio 15

// let numIceCream = parseInt(prompt("¿Cuántos helados quieres?"))
// const price = 2
// let totalPayment = numIceCream * price

// if (numIceCream > 10) {
//     numIceCream++
//     alert(numIceCream + " helados por "+ totalPayment + " €")

// } else {
//     alert(numIceCream + " helados por "+ totalPayment + " €")
// }



// Ejercicio 16

// Solución 1

// let choice = prompt("¿Qué quieres comer? Pollo, pasta o sushi").toLowerCase()

// if (choice == "pollo") {
//     alert("Va a tardar 1 hora en hacerse")

// } else if (choice == "pasta") {
//     alert("Me encanta la carbonara")

// } else if (choice == "sushi") {
//     alert("Conozco un buffet muy barato")

// } else {
//     alert("De eso no hay")

// }


// Solución 2

// switch (choice) {
//     case "pollo":
//         alert("Va a tardar 1 hora en hacerse")
//         break;

//     case "pasta":
//         alert("Me encanta la carbonara")
//         break;

//     case "sushi":
//         alert("Conozco un buffet muy barato")
//         break;

//     default:
//         alert("De eso no hay")
//         break;
// }
    


// Ejercicio 17 

// let num1 = parseInt(prompt("Introduce el primer número:"))
// let num2 = parseInt(prompt("Introduce el segundo número:"))
// let num3 = parseInt(prompt("Introduce el tercer número:"))

// let biggerNumber

// if (num1 > num2 && num1 > num3) {
//     biggerNumber = num1
    
// } else if (num2 > num1 && num2 > num3) {
//     biggerNumber = num2

// } else {
//     biggerNumber = num3

// }

// alert(biggerNumber)



// Ejercicio 18 

// let num1 = parseInt(prompt("Introduce el primer número:"))
// let num2 = parseInt(prompt("Introduce el segundo número:"))
// let num3 = parseInt(prompt("Introduce el tercer número:"))

// let smallerNumber

// if (num1 < num2 && num1 < num3) {
//     smallerNumber = num1
    
// } else if (num2 < num1 && num2 < num3) {
//     smallerNumber = num2

// } else {
//     smallerNumber = num3

// }

// alert(smallerNumber)



// Ejercicio 19

// let grade1 = parseFloat(prompt("Introduce la nota del primer examen (Hasta 5):"))
// let grade2 = parseFloat(prompt("Introduce la nota del segundo examen (Hasta 5):")) 
// let grade3 = parseFloat(prompt("Introduce la nota del tercer examen(Hasta 5):")) 

// let bestGrade
// let finalGrade

// if (grade1 > 5 || grade2 > 5 || grade3 > 5) {
//     alert("Nota no válida. Introduce un número hasta 5")
    
// } else {
//     if (grade1 > grade2) {
//         bestGrade = grade1
//         finalGrade = grade1 + grade3

//     } else {
//         bestGrade = grade2
//         finalGrade = grade2 + grade3
//     }

//     if (finalGrade < 5) alert("Suspenso")
//     if (finalGrade >= 5 && finalGrade < 6) alert("Suficiente")
//     if (finalGrade >= 6 && finalGrade < 7) alert("Bien")
//     if (finalGrade >= 7 && finalGrade < 9) alert("Notable")
//     if (finalGrade >= 9 && finalGrade < 10) alert("Sobresaliente")
//     if (finalGrade == 10) alert("Matrícula")
// }



// Ejercicio 20

// let initialTempScale = prompt("Elige una escala de temperatura: Fahrenheit (F) / Celsius (C)") 

// let initialTemp
// let finalTemp
 
// if (initialTempScale == "C" || initialTempScale == "c") {
//     initialTemp = parseInt(prompt("Introduce una temperatura"))
//     finalTemp = initialTemp * 9 / 5 + 32
//     alert(`${initialTemp} °C son ${finalTemp} °F`)

//     } else if (initialTempScale == "F" || initialTempScale == "f"){
//         initialTemp = parseInt(prompt("Introduce una temperatura"))
//         finalTemp = (initialTemp - 32) * 5 / 9
//         alert(`${initialTemp} °F son ${finalTemp} °C`)
        
//     } else {
//         alert("La escala introducida no es correcta. Prueba de nuevo")
//     }



// Ejercicio 21 *

// let userName = prompt("Introduce tu nombre:")
// let price = parseInt(prompt("Introduce el precio de las ventas:")) 
// let extra = price * 5 / 100

// if (price > 500) {
//     alert(`
//         Nombre: ${userName}
//         Ventas: ${price} €
//         Extra: ${extra} €
//         Total: ${price+extra} €
//         `)
// } else {
//     alert(`
//         Nombre: ${userName}
//         Ventas: ${price} €
//         `)
// }



// Ejercicio 22

// let age = parseInt(prompt("¿Cuál es tu edad?"))
// let userName
// let surname
// let cityPickUp
// let daysNumber
// const pricePerDay = 25
// const pricePerWeek = 150
// let totalCost


// if (age >= 18) {
//     let hasDriveLicense = prompt("¿Tienes carnet de conducir?") == "si" ? true : false

//     if (hasDriveLicense) {
//         userName = prompt("Escribe tu nombre:")
//         surname = prompt("Escribe tu apellido:")
//         cityPickUp = prompt("Ciudad de recogida del coche:")
//         daysNumber = prompt("Número de días de alquiler:")

//         let weeksNumber = parseInt(daysNumber / 7) 
//         totalCost = weeksNumber * pricePerWeek + (daysNumber - 7 * weeksNumber) * pricePerDay

//         alert(`
//             Nombre: ${userName}
//             Apellido: ${surname}
//             Ciudad de recogida: ${cityPickUp}
//             Número de días: ${daysNumber} días (${weeksNumber} semana/s y ${daysNumber - 7 * weeksNumber} días)
//             Total: ${totalCost} €
//             `)


//     } else {
//         alert("No puedes alquilar un coche")
//     }
    
// } else {
//     alert("No puedes alquilar un coche")
// }



// Ejercicio 23

// let year = parseInt(prompt("Dame un año:"))

// if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
//     alert(`El año ${year} es bisiesto`)
    
// } else {
//     alert(`El año ${year} no es bisiesto`)
// }



// Ejercicio 24 

// let number = prompt("Introduce un número de 3 dígitos")
// let digit1 = number[0]
// let digit2 = number[1]
// let digit3 = number[2]

// if (number.length > 3 || number.length < 3) {
//     alert("El número tiene que ser de 3 dígitos.")

// } else {

//     if (digit1 % 2 == 0 && digit2 % 2 == 0 && digit3 % 2 == 0) {
//         alert("Todas las cifras son pares")
        
//     } else if (digit1 % 2 != 0 && digit2 % 2 != 0 && digit3 % 2 != 0) {
//         alert("Todas las cifras son impares")

//     } else {
//         alert("El número tiene cifras pares e impares")
    
//     }

// }



// Ejercicio 25

// let sentence = prompt("Dile algo a Bob:")

// if (sentence.includes("!?") || sentence.includes("?!")) {
//     alert("Bob dice: ¡Eh, tranquilízate! Yo sé lo que hago")


// } else if (sentence.includes("!")) {
//     alert("Bob dice: ¡Eh!, tranquilízate")

// } else if (sentence.includes("?")) {
//     alert("Bob dice: ¡Claro!")

// } else if (sentence == "") {
//     alert("Bob dice: Vale con que esas tenemos...")
    
// } else {
//     alert("Bob dice: Sin más")

// }



// Ejercicio 26 

// let computerChoice = Math.floor((Math.random() * 3) + 1);;
// let userChoice = prompt(`
//     1 - piedra
//     2 - papel
//     3 - tijeras
//     `)


// if (userChoice == 1 && computerChoice == 3 || 
//     userChoice == 2 && computerChoice == 1 || 
//     userChoice == 3 && computerChoice == 2
// ) {
//         alert(`
//             1 - piedra
//             2 - papel
//             3 - tijeras
//             El ordenador ha elegido: ${computerChoice}
//             Tú has elegido: ${userChoice}
//             Has ganado.
//             `)

// } else if (userChoice == computerChoice) {
//     alert((`
//             1 - piedra
//             2 - papel
//             3 - tijeras
//             El ordenador ha elegido: ${computerChoice}
//             Tú has elegido: ${userChoice}
//             Empate.
//             `))
    
// } else{
//     alert((`
//             1 - piedra
//             2 - papel
//             3 - tijeras
//             El ordenador ha elegido: ${computerChoice}
//             Tú has elegido: ${userChoice}
//             Has perdido.
//             `))

// }


// Ejercicio 27 *












































// OPERADORES LÓGICOS Y CONDICIONALES TERCIARIOS

// Ejercicio 6

// let grade1 = parseFloat(prompt("Introduce la nota del primer examen:"))
// let grade2 = parseFloat(prompt("Introduce la nota del segundo examen:")) 
// let grade3 = parseFloat(prompt("Introduce la nota del tercer examen:")) 

// let bestGrade = grade1 > grade2 ? grade1 : grade2
// let finalGrade = bestGrade + grade3

// if (grade1 > 5 || grade2 > 5 || grade3 > 5) {
//     alert("Nota no válida. Introduce un número hasta 5")
    
// } else {
//     if (grade1 > grade2) {
//         bestGrade = grade1
//         finalGrade = grade1 + grade3

//     } else {
//         bestGrade = grade2
//         finalGrade = grade2 + grade3
//     }

//     if (finalGrade < 5) alert("Suspenso")
//     if (finalGrade >= 5 && finalGrade < 6) alert("Suficiente")
//     if (finalGrade >= 6 && finalGrade < 7) alert("Bien")
//     if (finalGrade >= 7 && finalGrade < 9) alert("Notable")
//     if (finalGrade >= 9 && finalGrade < 10) alert("Sobresaliente")
//     if (finalGrade == 10) alert("Matrícula")
// }










