let residentsContainer = document.getElementById("residents-container")
let planetsDropdown = document.getElementById("planets-dropdown")
let dropdownValue

let planets = []
let planetsPages = []
let pageCounter = 1

let charactersPages = []
let characters = []

getPlanetsData()

function getPlanetsData() {
    fetch(`https://swapi.dev/api/planets/?page=${pageCounter}`)
        .then((response) => {return response.json()})
        .then((data) => {
            planetsPages.push(data.results)

            if (data.next !== null) {
                pageCounter++
                getPlanetsData()   

            } else { 
                pagesToArray(planetsPages, planets)
                displayDropdown()
                pageCounter = 1
            }
        })
}

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

function selectPlanet() {
    let planetIndex = planetsDropdown.value
    let selectedPlanet = planets[planetIndex]
    
    residentsContainer.innerHTML = ""

    selectedPlanet.residents.forEach(residentUrl => {
        fetch(residentUrl).then(res => res.json().then(data => {
            displayResident(data)
        }))
    });

}

function displayResident(resident) {
    residentsContainer.innerHTML += `
    <div class="resident-card">
        <h2 class="resident-name">${resident.name}</h2>
    </div>
    `
}