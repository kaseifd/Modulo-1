let contenedor = document.getElementById("Ejercicios")

let planetCount = 3
let planet = []
window.addEventListener("keydown", (event) => {
  if (event.key == "Enter") search() 
  })







function search() {
  let planetToSearch = document.getElementById("my-input").value.toLowerCase()
  let planet = sistemaSolar[planetToSearch]

  if (planet) {
    contenedor.innerHTML += `
      <div>
        <h1>${planet.nombre}</h1>
        <img src="${planet.imagen}" alt="${planet.nombre}" />
        <p>Color: ${planet.color}</p>
        <p>Temperatura: ${planet.temperatura} °C</p>
      </div>`
  } else {
    contenedor.innerHTML = `<p>Planeta no encontrado</p>`
  }
}
