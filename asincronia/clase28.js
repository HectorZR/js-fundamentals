class Persona {
    constructor(nombre, apellido, altura) {
        this.nombre = nombre
        this.apellido = apellido
        this.altura = altura
    }

    saludar(fn) {
        const { nombre, apellido } = this
        console.log(`Hola, me llamo ${nombre} ${apellido}`)

        if(fn) {
            fn(nombre, apellido)
        }
    }

    soyAlto() {
        return this.altura > 1.8
    }
}

class Desarrollador extends Persona {
    constructor(nombre, apellido, altura) {
        super(nombre, apellido, altura)
    }

    saludar(fn) {
        const { nombre, apellido } = this
        console.log(`Hola, me llamo ${nombre} ${apellido}`)

        if(fn) {
            fn(nombre, apellido, true)
        }
    }
}

function responderSaludo(nombre, apellido, esDev = false) {
    console.log(`Buen dia ${nombre} ${apellido}`)

    if (esDev) {
        console.log('No sabia que eres desarrollador')
    }
}

var hector = new Persona('hector', 'zurga', 1.75)
var ariana = new Persona('ariana', 'ariana', 1.65)
var arturo = new Desarrollador('arturo', 'arturo', 1.85)

hector.saludar()
ariana.saludar(responderSaludo)
arturo.saludar(responderSaludo)