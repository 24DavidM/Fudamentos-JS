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

fetch('https://fakestoreapi.com/products')
    .then((e) =>  {e.json()})
    .then((data) =>(console.log(data)))
    .catch((r) => (console.log(r)))


const ObtenerProductos = async() =>{
    try{
        const r = await fetch ("https://fakestoreapi.com/products")
        const p = await r.json()
        console.log(p)
    }catch(error){
        console.log(error)
    }
}

///TEST
console.log("sfdsdsadsdsfefraweawdasdas")
ObtenerProductos()