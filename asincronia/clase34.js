const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'

function obtenerPersonaje(id) {
    return new Promise((resolve, reject) => {

        fetch(`${API_URL}${PEOPLE_URL.replace(':id', id)}`)
            .then(response => {
                response = response.json()
                // console.log('Response: ', response)
                return response
            })
            .then(character => {
                // console.log('Personaje: ', character)
                resolve(character)
            })
            .catch(error => reject(id))

    })    
}

function onError(id) {
    console.error(`Sucedio un error con el personaje ${id}`)
}

async function obtenerPersonajes() {
    let ids = [1,2,3,4,5,6,7]
    let promesas = ids.map(id => obtenerPersonaje(id))
    
    try {
        let personajes = await Promise.all(promesas)
        console.log(personajes)
    } catch (id) {
        onError(id)
    }
}

obtenerPersonajes()