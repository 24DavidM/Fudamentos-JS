// PROMESAS

const conexionBBExterna = (datosConexion) =>{
    return new Promise ((resolve,reject) =>{
        setTimeout(()=>{
            datosConexion ? resolve("Conexion OK") : reject("Conexion ERROR")
        },3000)
    })
}


conexionBBExterna(false)
    .then(r=>console.log(r))
    .catch(e=>console.log(e))




async function conexionBBExternaMYSQL() {
    try{
        const r = await conexionBBExterna(true)
        console.log(r)

    }catch(e){
        console.log(e)
    }
    
}

// FORMA 1 LLAMAR

fetch('https://fakestoreapi.com/products')
    .then((e) =>  {return e.json()})
    .then((data) =>(console.log(data)))
    .catch((r) => (console.log(r)))


// FORMA 2 LLAMAR

const ObtenerProductos = async() =>{
    try{
        const r = await fetch ("https://fakestoreapi.com/products")
        const p = await r.json()
        console.log(p)
    }catch(error){
        console.log(error)
    }
}



fetch("https://jsonplaceholder.typicode.com/users/1")
    .then((e) => e.json())
    .then((data) => {
        let user = {
            name: data.name,
            email: data.email
        }
        guardarLocalStorage(user)
    })
    .catch((error)=>console.log(error))


const guardarLocalStorage = (data) => {
    localStorage.setItem('user',JSON.stringify(data))
}

// import login from "./Autenticar.js"

login(123)
console.log(LIKES)

//EXPORTAR VARIAS COSAS


//EXPORTAR VARIAS COSAS
import {login, LIKES} from './Autenticar.js'