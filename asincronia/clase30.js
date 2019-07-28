const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'

function obtenerPersonaje(id, callback) {
    fetch(`${API_URL}${PEOPLE_URL.replace(':id', id)}`)
    .then(response => {
        response = response.json()
        // console.log('Response: ', response)
        return response
    })
    .then(character => {
        // console.log('Personaje: ', character)
        if (callback) {
            callback(character)
        }
    })
    .catch(error => console.error('Error: ', error))

    
}

obtenerPersonaje(1, (character) => {
    console.log(`Hola, yo soy ${character.name}`)

    obtenerPersonaje(2, (character) => {
        console.log(`Hola, yo soy ${character.name}`)

        obtenerPersonaje(3, (character) => {
            console.log(`Hola, yo soy ${character.name}`)

            obtenerPersonaje(4, (character) => {
                console.log(`Hola, yo soy ${character.name}`)

                obtenerPersonaje(5, (character) => {
                    console.log(`Hola, yo soy ${character.name}`)
                })
            })
        })
    })
})