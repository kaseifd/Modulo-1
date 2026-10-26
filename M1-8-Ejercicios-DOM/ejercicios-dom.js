let contenedorHTML = document.getElementById("ejercicios-dom")

// Ejercicio 1

// contenedorHTML.innerHTML = "<h2>Título ejercicio 1 metido desde JS</h2> <p>Párrafo metido desde JS</p>"


// Ejercicio 2

// let myName = "Marta" 

// contenedorHTML.innerHTML = `<p>Hola, me llamo ${myName}</p>`

// Ejercicio 3

// let userName = prompt("Introduce tu nombre")
// let userAge = parseInt(prompt("Introduce tu edad"))

// Solución con if
// if (userAge < 18) {
//     contenedorHTML.innerHTML = `<p>Hola, ${userName}. Eres menor de edad</p>` 

// } else {
//     contenedorHTML.innerHTML = `<p>Hola, ${userName}. Eres mayor de edad</p>`
// }

// Solución con ternarios
// userAge < 18 ? contenedorHTML.innerHTML = `<p>Hola, ${userName}. Eres menor de edad</p>` : contenedorHTML.innerHTML = `<p>Hola, ${userName}. Eres mayor de edad</p>`

// Solución con switch
// switch (userAge < 18) {
//     case true:
//         contenedorHTML.innerHTML = `<p>Hola, ${userName}. Eres menor de edad</p>`
//         break;
    
//     case false: contenedorHTML.innerHTML = `<p>Hola, ${userName}. Eres mayor de edad</p>`
//         break;
// }



// Ejercicio 4

// let userName = prompt("Introduce tu nombre")
// let userAge = parseInt(prompt("Introduce tu edad"))

// if (userAge < 18) {
//     contenedorHTML.innerHTML = `<p>Hola, ${userName}. Eres menor de edad</p>`
//     contenedorHTML.style.color = "red" 

// } else {
//     contenedorHTML.innerHTML = `<p>Hola, ${userName}. Eres mayor de edad</p>`
//     contenedorHTML.style.color = "green" 

// }



// Ejercicio 5

// let num1 = parseFloat(prompt("Introduce el primer número:"))
// let num2 = parseFloat(prompt("Introduce el segundo número:"))

// contenedorHTML.innerHTML = `<p id = "suma">Suma: ${num1 + num2}</p> 
//                             <p id = "resta">Resta: ${num1 - num2}</p>
//                             <p id = "multiplicacion">Multiplicación: ${num1 * num2}</p>
//                             <p id = "division">División: ${num1 / num2}</p>
//                             <p id = "resto">Resto: ${num1 % num2}</p>`

// document.getElementById("suma").style.color = "green"
// document.getElementById("suma").style.background = "orange"

// document.getElementById("resta").style.color = "red"
// document.getElementById("resta").style.background = "black"

// document.getElementById("multiplicacion").style.color = "purple"
// document.getElementById("multiplicacion").style.background = "pink"

// document.getElementById("division").style.color = "yellow"
// document.getElementById("division").style.background = "brown"

// document.getElementById("resto").style.color = "black"
// document.getElementById("resto").style.background = "silver"



// Ejercicio 6

// let operation = prompt("¿Qué operación quieres realizar? (Suma, resta, multiplicación, división o resto)").toLowerCase()

// let num1 = parseFloat(prompt("Introduce el primer número:"))
// let num2 = parseFloat(prompt("Introduce el segundo número:"))


// if (operation == "suma") {
//     contenedorHTML.innerHTML = `<p>${num1} + ${num2} = ${num1 + num2}</p>`

// } else if (operation == "resta"){
//     contenedorHTML.innerHTML = `<p>${num1} - ${num2} = ${num1 - num2}</p>`

// } else if (operation == "multiplicacion") {
//     contenedorHTML.innerHTML = `<p>${num1} x ${num2} = ${num1 * num2}</p>`

// } else if (operation == "division") {
//     contenedorHTML.innerHTML = `<p>${num1} / ${num2} = ${num1 / num2}</p>`

// } else if (operation == "resto") {
//     contenedorHTML.innerHTML = `<p>${num1} % ${num2} = ${num1 % num2}</p>`
     
// } else {
//     alert("Lo has escrito mal")
// }



// Ejercicio 7 

// document.getElementById("header").innerHTML = `
//         <a href="#new-1">Noticia 1</a>
//         <a href="#new-2">Noticia 2</a>
//         <a href="#new-3">Noticia 3</a>
// `
// document.getElementById("main").innerHTML = `
//         <div id = "new-1">
//             <h2>Noticia 1</h2>
//             <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique ad vitae magnam sit. Perferendis officia cupiditate enim deserunt suscipit?</p>
//         </div>

//         <div id = "new-2">
//             <h2>Noticia 2</h2>
//             <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique ad vitae magnam sit. Perferendis officia cupiditate enim deserunt suscipit?</p>
//         </div>

//         <div id = "new-3">
//             <h2>Noticia 3</h2>
//             <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique ad vitae magnam sit. Perferendis officia cupiditate enim deserunt suscipit?</p>
//         </div>
// `
// document.getElementById("footer").innerHTML = `<a href="#header">Inicio</a>`



// Ejercicio 8

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

//         contenedorHTML.innerHTML = (`
//             <p>Nombre: ${userName}</p>
//             <p>Apellido: ${surname}</p>
//             <p>Ciudad de recogida: ${cityPickUp}</p>
//             <p>Número de días: ${daysNumber} días (${weeksNumber} semana/s y ${daysNumber - 7 * weeksNumber} días)</p>
//             <p>Total: ${totalCost} €</p>
//             `)


//     } else {
//         contenedorHTML.innerHTML = "<p>No puedes alquilar un coche</p>"
//     }
    
// } else {
//     contenedorHTML.innerHTML = "<p>No puedes alquilar un coche</p>"
// }