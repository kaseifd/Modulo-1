fetch("https://pokeapi.co/api/v2/type/")
    .then(res => res.json())
    .then((data) => {
        displayDropdown(data)
    })


function displayDropdown(data) {
    data.results.forEach(type => {
        document.getElementById("dropdown").innerHTML += `<option value="${type.url}">${type.name}</option>
        `
    })
}


function getPokemonsByType() {
    let typeUrl = document.getElementById("dropdown").value
    document.getElementById("pokemons-container").innerHTML = ``

    fetch(typeUrl).then(response => response.json()).then(data => {
        for (let i = 0; i < 3; i++) {
            let randomNumber = parseInt(Math.random() * data.pokemon.length)
            document.getElementById("pokemons-container").innerHTML += `
            <div class="pokemon-card">
                <h2>${data.pokemon[randomNumber].pokemon.name}</h2>
            </div>
            `
        }
    })
}