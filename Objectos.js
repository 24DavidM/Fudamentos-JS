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



