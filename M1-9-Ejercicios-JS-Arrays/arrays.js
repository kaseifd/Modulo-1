let contenedorHTML = document.getElementById("ejercicios-arrays")

// Ejercicio 1

// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// for (let i = 0; i < array.length; i++) {
//     contenedorHTML.innerHTML += `<p>${array[i]}</p>`
// }



// Ejercicio 2

// let array = []

// for (let i = 1; i <= 3; i++) {
//     let userValue = prompt("Introduce un texto:")
//     array.push(userValue)
// }

// contenedorHTML.innerHTML += `
//                             <p>${array[1]}</p>
//                             <p>${array[2]}</p>
//                             <p>${array[0]}</p>
//                             `


// Ejercicio 3

// let array = []

// for (let i = 20; i >= 11; i--) {
//     array.push(i)
// }

// for (let i = 0; i < array.length; i++) {
//     contenedorHTML.innerHTML += `<p>${array[i]}</p>`
// }



// Ejercicio 4

// let array = []

// for (let i = 1; i <= 10; i++) {
//     array.push(prompt(`Introduce 10 valores (${i}/10):`))  
// }

// for (let i = 0; i < array.length; i++) {
//     contenedorHTML.innerHTML += `<p>${array[i]}</p>`
// }



// Ejercicio 5 

// let months = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"]

// let userOption = parseInt(prompt("Introduce un número del 1 (Enero) al 12 (Diciembre)"))
// if (userOption > 12 || userOption < 1) {
//     alert("Número no válido")

// } else {
//     for (let i = 0; i < months.length; i++) {
//         if (userOption - 1 == i) {
//             console.log(months[i].substring(0, 1))
//             let capitalLetter = months[i].substring(0, 1).toUpperCase()
//             contenedorHTML.innerHTML = `<p>${capitalLetter}${months[i].substring(1, months[i].length)}</p>`
//         }
//     }
// }



// Ejercicio 6

let valuesList = []
let value

for (let i = 1; i <= 3; i++) {
    value = parseInt(prompt("Introduce un número:"))
            console.log(value)

    if (value) {
        valuesList.push(value)
        console.log(valuesList)

    } else {
        alert("Tienen que ser números")
        i = i - 1
    }
}

if (valuesList[0] < valuesList[1] && valuesList[0] < valuesList[2]) {
      alert(`${valuesList[0]} es el más pequeño`)  

} else if (valuesList[1] < valuesList[0] && valuesList[1] < valuesList[2]){
    alert(`${valuesList[1]} es el más pequeño`)

} else {
    alert(`${valuesList[2]} es el más pequeño`)
}
    







