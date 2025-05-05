
// FUNCTION - CALLBACK

function mostrarBienvenido (nombre){
    console.log(`Bienvenido ${nombre}`)
}

function registrarUsuario(callback){
    const user = "David"
    callback(user)
}

registrarUsuario(mostrarBienvenido)

