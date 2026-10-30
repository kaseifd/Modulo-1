displayCard(people[0])

window.addEventListener("keydown", (event) => {
  if (event.key == "Enter") searchPersonByIndex()
})


function getHTML(id) {
  return document.getElementById(id)

}


function searchPersonByIndex() {
  let inputValue = getHTML("index-input").value
  people[inputValue] ? displayCard(people[inputValue]) : error("Error. El usuario no existe", "search-error")

}


// REVISAR ESTA FUNCION PORUQE AUNQUE EL IF SEA TRUE ESTA HACIENDO EL ELSE
function searchPersonByName() {
  let inputValue = getHTML("index-input").value
  let foundUser = false
  getHTML("people-container").innerHTML = ``
  
  for (let i = 0; i < people.length; i++) {
    if (people[i].name.toLowerCase().includes(inputValue) ) {
      displayCard(people[i])
      foundUser = true
      console.log(foundUser)
    }
  }

  if (!foundUser){
    error("Error. El usuario no existe", "search-error") 
          console.log(foundUser)

  }
}


function error(message, id) {
  getHTML(id).innerText = message

}


function displayCard(person) {
  getHTML("people-container").innerHTML += `
  <div class="person-card" id="card-${(person.name).toLowerCase()}" style="background-color:${person.eyeColor}">
  <img src="${person.image}" alt="">
  <div class="person-card-content">
  <h2>${person.name}</h2>
  <p>Edad: ${person.age}</p>
  <p>Email: ${person.email}</p>
      <p>Dirección: ${person.address}</p>
      <p>Color de ojos: ${person.eyeColorES}</p>
      </div>
      </div>
      `
}



function searchPerson() {
  let inputValue = getHTML("index-input").value

  if (parseInt(inputValue)) {
    searchPersonByIndex()
    
  } else {
    searchPersonByName()
  }  

}