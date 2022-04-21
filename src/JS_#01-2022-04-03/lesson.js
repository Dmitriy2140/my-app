// 1. Примитивы
// 2. Объекты (object, array, function)

// - структура
// - методы и свойства
// - ссылочный тип данных

const a = {} // new Object() => 345 -> a
const b = {} // new Object() => 346 -> b

console.log(a === b) // false

const user = {
    name: "Bob",
    age: 23,
    isStudent: true,
    address: {
        city: "Bobrujsk"
    },
    friends: [
        {name: "Alex"},
        {name: "Ann"}
    ]
}

//const superUser = user // #789
//superUser.name = "Alex" // user.name
//console.log(user)

const anotherUser = {}

anotherUser.name = user.name
anotherUser.age = user.age

console.log(anotherUser) // copy(clone) of object user
console.log(anotherUser === user) // false

const copyUser = {...user} //spread оператор

console.log(copyUser === user) // false
console.log(copyUser.name === user.name) // true

const names = ["Bob", "Alex", "Donald"]
const copyNames = [...names]

console.log(copyUser.address === user.address) //true

user.address.city = "Tbilisy"
console.log(copyUser.address.city)

const deepCopyUser = {
    ...user,
    //name:  user.name
    //age: user.age
    //address: {
    //      city: "Bobrujsk"
    // },
    //friends: ["Alex", "Ann"]
    address: {...user.address}, //city: "Bobrujsk"
    //friends: ["Alex", "Ann"] //"Alex", "Ann"
    // или
    //friends: user.friends.map(f => ({...f}))
    friends: [{...user.friends[0]}, {...user.friends[1]}]
}

//. 1. Делаем копию
//. 2. Вносим изменения в копию
//. 3. Используем копию с внесенными изменениями

// JSON.stringify -> JSON.parse
// lodash -> cloneDeep

