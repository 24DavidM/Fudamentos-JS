// Variables
// Contenedores

//ES6

//LET - CONST
//var - x HOSTING


var CI = 123
let sueldo1 = 500


// TIPOS DE DATOS - COMPUETOS

let numOrden = 123 //int
let modulo = "Mis Ordenes" //string
let status = true //bolean
let tipoPago = "E" //char
let precioFinal  = 155.99 // FLOAT
let sueldo //undefined


//TIPOS DE DATOS - COMPUESTO

let Ordenes = ["Balon", "Camiseta", "Zapatos"]
let detalleOrden={
    id:1,
    estado:true,
    precio: 150.99,
    items: ["Pc","Monitor","Teclado"]
}


//TAREA DESAFIO JSON vs Objecto
console.log(detalleOrden)

//STRINGS

let nombreCompleto = "David Muela - Estudiante"
nombreCompleto.length  //para validar PASSWORD 
nombreCompleto.toUpperCase() //Guardar en bases de datos
nombreCompleto.toLowerCase() //Guardar en bases de datos

nombreCompleto.trim() //Eliminar espaciados
console.log(nombreCompleto.includes("Estudiante")) //VALIDAR si es el rol 


console.log("Hola" + nombreCompleto)
console.log(`Hola ${nombreCompleto}`)


//Numeros

let cuotas = "36"
console.log(cuotas+1)
console.log(+cuotas+1)

console.log(4* 3**2)

//BOOLEANOS

let saldoUsuario = 1000
let saldoTarjeta = "1000"

//COMPARACION DEL VALOR
console.log(saldoTarjeta == saldoUsuario)

//ES6 - COMPARACION DEL VALOR Y TIPO 
console.log(saldoTarjeta ===saldoUsuario)

//CONDICIONALES

let carritoCompras = ["Hola","Hola"]
if (carritoCompras.length === 0){
    console.log("Carrito Vacio")
}else{
    console.log(`Carrito: ${carritoCompras}`)
}

// ES6 - Operador Ternario

carritoCompras.length === 0 ? console.log("Carrito Vacio") : console.log("Carrito lleno")


//FUNCIONES 

// BLOQUES DE CODIGO REUTILIZABLERS

// FUNCION DECLARADA 

function validarUsuario (){
    console.log("usuario validado")
}

//FUNCION EXPRESADA

const validarRol = function(){
    console.log("Rol valido")
}

// ES6 - FUNCION FLECHA

const validarMail = () =>{
    console.log("Mail valido")
}

// OBJECTOS

let user = {
    name: "David",
    lastName:"Muela",
    address:{
        city:"Quito",
        country:"Ecuador"
    },
    friends: ["Juan","Pedro","Luis"],
    age: 20,
    isActive:true,
    password: "123"
}

user.avatar = "https://avatar.com"

// ELIMIAR UN OBJECTO DE OBJECTO
delete user.password

console.log(user)
console.log(user.password)


// ES6 - Destructuracion de objectos

const {name, lastName, address:direccion,age,avatar} = user
console.log(name)
console.log(lastName)
console.log(direccion.country)

const otherInformation = {
    status : "active",
    phone : "0939564049",
    friends: ["Juan","Pedro","Luis"],
    sendMail(){
        console.log(`Send mail to ${otherInformation.friends[0]}`)
    }
}

console.log(otherInformation.sendMail())


//ES6 - Operador de propagación - spread operator (....)
const allInformation = {
    ...user,
    ...otherInformation
}

console.log(allInformation)

console.log(Object.keys(user).includes(""))

// FUNCTION - CALLBACK

function mostrarBienvenido (nombre){
    console.log(`Bienvenido ${nombre}`)
}

function registrarUsuario(callback){
    const user = "David"
    callback(user)
}

registrarUsuario(mostrarBienvenido)


//ARRAYS

const products = ["Play","Pc","Monitor","Teclado"]
const prices = [1000,2000,3000,4000]

products.forEach((producto,index) =>{console.log(index+1,producto)})


const newProductsOne = products.map((producto)=>{
    return producto.toUpperCase()
})



const newProductsTwo = products.map((producto)=>(
    producto.toUpperCase()
))


const newProductsThree = products.map((producto)=> producto.toUpperCase())

console.log(newProductsOne)
console.log(newProductsTwo)
console.log(newProductsThree)
