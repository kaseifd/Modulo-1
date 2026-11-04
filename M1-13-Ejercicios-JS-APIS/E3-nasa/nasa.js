let pictureContainerHTML = document.getElementById("pictures-container")

function formatDate(date) {
    return date.substring(2, 4) + date.substring(5, 7) + date.substring(8, 10)
}




function searchDate() {
    let date = document.getElementById("input-date").value
    fetch(`https://science.nasa.gov/wp-json/wp/v2/apod-basic/${formatDate(date)}`)
        .then(response => response.json()).then(data => {
            displayPicture(data)
        })
}


function displayPicture(data) {
    pictureContainerHTML.innerHTML = `
    <div class="picture">
        <img class="picture-photo" src="${data.hdurl}" alt="${data.alt}">
        <div class="picture-title-container">
            <h2 class="picture-title inter-bold" >${data.title}</h2>
        </div>
        <div class="picture-info">
            <div class="picture-description-container"> 
                <p class="picture-description inter-light">${data.explanation}</p>
            </div>
            <div class="picture-data-container">
                <div class="picture-date-container">
                    <p class="picture-date inter-light">Date: ${data.date}</p>
                </div>  
            </div>
            
        </div>
    </div>
    `
    
}

// for (let i = 0; i < nasaAPI.length; i++) {
//         if (inputValue == nasaAPI[i].date) {
//             pictureContainerHTML.innerHTML = `
//             <div id="picture-${[i + 1]}" class="picture">
//                 <img class="picture-photo" src="${nasaAPI[i].hdurl}" alt="${nasaAPI[i].alt}">
//                 <div class="picture-title-container">
//                     <h2 class="picture-title inter-bold" >${nasaAPI[i].title}</h2>
//                 </div>
//                 <div class="picture-info">
//                     <div class="picture-description-container"> 
//                         <p class="picture-description inter-light">${nasaAPI[i].explanation}</p>
//                     </div>
//                     <div class="picture-data-container">
//                         <div class="picture-date-container">
//                             <p class="picture-date inter-light">Date: ${nasaAPI[i].date}</p>
//                         </div>  
//                     </div>
                    
//                 </div>
//             </div>
//             `
//             dayFound = true

//         } else if (!dayFound) {
//             pictureContainerHTML.innerHTML = `<p>No hay datos para ese día.</p>`
//         }

//     }