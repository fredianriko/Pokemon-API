

// consume the api
const apiData = {
    url: 'https://pokeapi.co/api/v2/',
    type: 'pokemon', 
    id: '1',
} 


const {url, type, id} = apiData
const apiUrl = `${url}${type}/${id}`


fetch(apiUrl)
    .then((data) => data.json())
    .then((pokemon) => generateHtml(pokemon))
    
 

const generateHtml = (data) => {


    const html = `
        <div class="name">${data.name}</div> 
        <img src=${data.sprites.front_default}> 

        <div class="details">
            <span>Height: ${data.height}</span> 
            <span>Weight: ${data.weight}</span> 
        </div>
    `
    const pokemonDiv = document.querySelector('.pokemon') //selector for element in index.html
    pokemonDiv.innerHTML = html //adding the above html to div in index.html
}

