let plantesContainer = document.getElementById("planets-container")


let planets

fetch("https://swapi.dev/api/planets/")
    .then((response) => { return response.json() })
    .then((data) => {
        planets = data
        console.log(planets);
        })

