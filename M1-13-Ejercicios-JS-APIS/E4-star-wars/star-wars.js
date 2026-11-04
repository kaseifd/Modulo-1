let residentsContainer = document.getElementById("residents-container")
let planetsDropdown = document.getElementById("planets-dropdown")
let dropdownValue

let planets = []
let planetsPages = []
let pageCounter = 1

let charactersPages = []
let characters = []


function getPlanetsData() {
    fetch(`https://swapi.dev/api/planets/?page=${pageCounter}`)
        .then((response) => { return response.json() })
        .then((data) => {
            planetsPages.push(data.results)

            if (data.next !== null) {
                pageCounter++
                getPlanetsData()
                 

            } else { 
                pagesToArray(planetsPages, planets)
                displayDropdown()
                // pageCounter = 1

            }
        })
}



// function displayCharacters() {
//     for (let i = 0; i < planets.length; i++) {
//         residentsContainer.innerHTML += `
//             <div class="character">
//                 <h2 class="character-name">${.name}</h2>
//             </div>
//             `
//     }    
// }


function pagesToArray(pagesArray, finalArray) {
    for (let j = 0; j < pagesArray.length; j++) {
        for (let i = 0; i < pagesArray[j].length; i++) {
            finalArray.push(pagesArray[j][i])
        }
    }
}

function displayDropdown() {

    for (let i = 0; i < planets.length; i++) {
        planetsDropdown.innerHTML += `
            <option value="${i}">${planets[i].name}</option>
            `
    }
}


getPlanetsData()


function selectPlanet() {
    let planetIndex = planetsDropdown.value
    console.log(planets[planetIndex]);

    let selectedPlanet = planets[planetIndex]

}


function displayResidents(residents) {
    residents.forEach(residents => {
        planetsDropdown.innerHTML += 
    });
}