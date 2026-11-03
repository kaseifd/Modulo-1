let planetsContainer = document.getElementById("planets-container")
let planetsDropdown = document.getElementById("planets-dropdown")

let planets = []
let planetsPages = []
let pageCounter = 1

// fetch(`https://swapi.dev/api/planets/?page=${pageCounter}`)
//     .then((response) => { return response.json() })
//     .then((data) => {
//         planets = data.results
//         console.log(planets);
//         displayDropdown()
//         console.log(pageCounter);

//     })





function getData() {
    fetch(`https://swapi.dev/api/planets/?page=${pageCounter}`)
        .then((response) => { return response.json() })
        .then((data) => {
            planetsPages.push(data.results)

            if (data.next !== null) {
                pageCounter++
                getData()

            } else {
                displayDropdown()
                selectPlanet()

            }
        })
}


function planetsPagesToPlanets() {
    for (let j = 0; j < planetsPages.length; j++) {
        for (let i = 0; i < planetsPages[j].length; i++) {
            planets.push(planetsPages[j][i])
        }
    }
}

let dropdownValue
function displayDropdown() {
    planetsPagesToPlanets()

    for (let i = 0; i < planets.length; i++) {
        planetsDropdown.innerHTML += `
            <option value="${planets[i].name}">${planets[i].name}</option>
            `
    }

    
    
}


getData()
selectPlanet()






function selectPlanet() {
    dropdownValue = planetsDropdown.value
    console.log(dropdownValue);
    for (let i = 0; i < planets.length; i++) {
        if (dropdownValue == planets[i].name) {
            console.log("hola");


        } else {
            console.log("error");
            
        }

    }

}
