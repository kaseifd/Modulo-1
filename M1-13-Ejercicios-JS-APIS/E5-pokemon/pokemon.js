fetch("https://pokeapi.co/api/v2/type/")
    .then(res => res.json())
    .then((data) => {
        data.results
    })


function displayDropdown(data, id) {

    
    document.getElementById(id).innerHTML += `        <option value="${}"></option>
`
}