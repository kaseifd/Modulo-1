let pictureContainerHTML = document.getElementById("pictures-container")
let nasaAPI
let date = new Date();

let today = String(date.getFullYear()).slice(-2) +
    String(date.getMonth() + 1).padStart(2, '0') +
    String(date.getDate()).padStart(2, '0');





fetch(`https://science.nasa.gov/wp-json/wp/v2/apod-basic?date_from=950616&date_to=${today}`)
    .then((response) => { return response.json() })
    .then((data) => {
        nasaAPI = data
        console.log(nasaAPI);
    })





// let today = String(date.getFullYear()).slice(-2) +
//     String(date.getMonth() + 1).padStart(2, '0') +
//     String(date.getDate()).padStart(2, '0');






function search() {
    let inputValue = document.getElementById("index-input").value
    let dayFound = false

    for (let i = 0; i < nasaAPI.length; i++) {
        if (inputValue == nasaAPI[i].date) {
            pictureContainerHTML.innerHTML = `
            <div id="picture-${[i + 1]}" class="picture">
                <img class="picture-photo" src="${nasaAPI[i].hdurl}" alt="${nasaAPI[i].alt}">
                <div class="picture-title-container">
                    <h2 class="picture-title inter-bold" >${nasaAPI[i].title}</h2>
                </div>
                <div class="picture-info">
                    <div class="picture-description-container"> 
                        <p class="picture-description inter-light">${nasaAPI[i].explanation}</p>
                    </div>
                    <div class="picture-data-container">
                        <div class="picture-date-container">
                            <p class="picture-date inter-light">Date: ${nasaAPI[i].date}</p>
                        </div>  
                    </div>
                    
                </div>
            </div>
            `
            dayFound = true

        } else if (!dayFound) {
            pictureContainerHTML.innerHTML = `<p>No hay datos para ese día.</p>`
        }

    }
}