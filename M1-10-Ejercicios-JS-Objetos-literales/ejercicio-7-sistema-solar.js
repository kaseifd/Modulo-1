import sistemaSolar from "ejercicio-7-planetas.js"
console.log(sistemaSolar)

let html = document.getElementById("selected-planets")

for (let i = 1; i <= 3; i++) {
    let selectedPlanet = prompt(`Elige un planeta (${i}/3)`).toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');

    if (sistemaSolar[selectedPlanet]) {
        html.innerHTML
        
    }
    
}