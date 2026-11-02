let userContainerHTML = document.getElementById("user-container")
let randomUser

fetch('https://randomuser.me/api/')
    .then((response) => { return response.json() })
    .then((data) => {
        randomUser = data.results[0]
        displayUserCard()
    })
    ;

function displayUserCard() {
    userContainerHTML.innerHTML += `
        <div class="user-card">

            <div class="user-image">
                <img src="${randomUser.picture.large}" alt="">
            </div>

            <div class="user-content">
                <div class="user-name-container">
                    <h2>${randomUser.name.first} ${randomUser.name.last}</h2>
                </div>
                <div class="user-data-container">
                    <p><span>Email: </span>${randomUser.email}</p>
                    <div class="adress">
                        <p><span>Dirección:</span></p>
                        <p>${randomUser.location.street.name}, ${randomUser.location.street.number}</p>
                        <p>${randomUser.location.postcode}  
                        ${randomUser.location.city} </p>
                        <p>${randomUser.location.state} (${randomUser.location.country})</p>
                    </div>
                </div>
            </div>

        </div>
    `
}



