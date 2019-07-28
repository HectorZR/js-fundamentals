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

let ids = [1,2,3,4,5,6,7]
// let promesas = ids.map(id => {
//     return obtenerPersonaje(id)
// })

let promesas = ids.map(id => obtenerPersonaje(id))

Promise
    .all(promesas)
    .then(personaje => console.log(personaje))
    .catch(onError)
// obtenerPersonaje(1)
//     .then(personaje => {
//         console.log('El personaje 1 es: ', personaje.name)

//         return obtenerPersonaje(2)
//     })
//     .then(personaje => {
//         console.log('El personaje 2 es: ', personaje.name)

//         return obtenerPersonaje(3)
//     })
//     .then(personaje => {
//         console.log('El personaje 3 es: ', personaje.name)

//         return obtenerPersonaje(4)
//     })
//     .then(personaje => {
//         console.log('El personaje 4 es: ', personaje.name)

//         return obtenerPersonaje(5)
//     })
//     .then(personaje => {
//         console.log('El personaje 5 es: ', personaje.name)
//     })
//     .catch(id => console.error('No fue encontrado el personaje con el id: ', id))

// // obtenerPersonaje(1, (character) => {
// //     console.log(`Hola, yo soy ${character.name}`)
// // })