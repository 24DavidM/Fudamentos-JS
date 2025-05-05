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


