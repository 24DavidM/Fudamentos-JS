//ARRAYS

const products = ["Play","Pc","Monitor","Teclado"]
const prices = [1000,2000,3000,4000]

products.forEach((producto,index) =>{console.log(index+1,producto)})


// FUNCION FORMA 1

const newProductsOne = products.map((producto)=>{
    return producto.toUpperCase()
})

// FUNCION FORMA 2

const newProductsTwo = products.map((producto)=>(
    producto.toUpperCase()
))

// FUNCION FORMA 3

const newProductsThree = products.map((producto)=> producto.toUpperCase())

console.log(newProductsOne)
console.log(newProductsTwo)
console.log(newProductsThree)

//FILTRAR 

const items = products.filter(producto => producto !== "Pc")
console.log(items)

// CONCATENEAR

const newItems = [...products,...prices]
console.log(newItems)

//BUSCAR

const findItem = products.find(producto => producto === "Pc")
findItem ? console.log(`Producto encontrado: ${findItem}`) : console.log("Producto no encontrado :(")


// Agrega un elemento al final del array
products.push()
// Agrega un elemento al principio del array.
products.unshift()


//Elimina el último elemento del array y lo devuelve.
products.pop()
//Elimina el primer elemento del array y lo devuelve.


products.shift()


products.includes("Mouse") ? console.log("Existe") : console.log("No existe")

products.length === 3 ? console.log("50% Descuento") : console.log("No hay descuento")

const newItemsSlice = products.slice(0,2)
console.log(newItemsSlice)

// const prices = [1000,2000,3000,4000]
const subTotal = prices.reduce((total, precio)=>total+precio,0)
console.log(subTotal)