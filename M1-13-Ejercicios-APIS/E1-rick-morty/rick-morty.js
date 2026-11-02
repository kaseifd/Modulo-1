let charactersContainerHTML = document.getElementById("characters-container")
let charactersAPI

fetch('https://rickandmortyapi.com/api/character/?page=1')
    .then((response)=> {return response.json()})
    .then((data) => {charactersAPI = data.results
       displayCards()
    })
;

function displayCards(){
    for (let i = 0; i < charactersAPI.length; i++) {
        charactersContainerHTML.innerHTML += `
        <div id="character-${charactersAPI[i].id}" class="card">
            <img src="${charactersAPI[i].image}" alt="">
            <div class="character-name-container">
                <h2>${charactersAPI[i].name}</h2>
            </div>
        </div>
    `
    }
}


