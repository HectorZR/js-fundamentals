const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'

const onPeopleResponse = (name) => {
    console.log(`Hola, yo soy ${name}`)
}

function obtenerPersonaje(id) {
    fetch(`${API_URL}${PEOPLE_URL.replace(':id', id)}`)
    .then(response => {
        response = response.json()
        // console.log('Response: ', response)
        return response
    })
    .then(character => {
        // console.log('Personaje: ', character)
        onPeopleResponse(character.name)
    })
    .catch(error => console.error('Error: ', error))
}

obtenerPersonaje(1)
obtenerPersonaje(2)
obtenerPersonaje(3)