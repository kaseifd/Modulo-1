import catalogo from "./catalogo.js";

let cardsContainerHTML = document.getElementById("cards-container")

showCards()

function showCards() {
    for (let i = 0; i < catalogo.peliculas.length; i++) {
        cardsContainerHTML.innerHTML += `
        <div class="film-card">
        <div class="film-card-content">
        <img class="film-cartel" src="${catalogo.peliculas[i].cartel}" alt="">
            <h2 class="film-title">${catalogo.peliculas[i].titulo}</h2>
            <p class="film-synopsis">${catalogo.peliculas[i].sinopsis}</p></div>

            
            <div class="button-bar"><a href="#" class="film-button">Alquilar </a></div>
            
        </div>`
    }
}