console.log(isNaN(NaN)) //преобразует значение в число и проверяет является ли оно NaN:
console.log(isNaN("23"))

console.log(NaN == NaN)

console.log(isFinite("24"))
console.log(isFinite(Infinity)) //преобразует аргумент в число и возвращает true, если оно является обычным числом, т.е. не NaN/Infinity/-Infinity:

// Методы Number.isNaN и Number.isFinite – это более «строгие» версии функций isNaN и isFinite. 
// Они не преобразуют аргумент в число, а наоборот – первым делом проверяют,
// является ли аргумент числом (принадлежит ли он к типу number).

Object.is(NaN, NaN)
Object.is(-0, +0) // Во всех других случаях Object.is(a, b) идентичен a === b.

console.log(parseInt("123.3px"))
console.log(parseFloat("123.3px"))


console.log(Math.pow(2,4))


console.log(`Список гостей:
* гость 1
* гость 2
гость 3 ` +
`гость 4`)


let stringForIndexOf = "Hellow id. Where id id iid id"

const findId = (str, finderSubStr) => {
    let startIndex = 0
    const indexes = []
    while (true) {
        if (str.indexOf(finderSubStr, startIndex) == -1) break
        startIndex = str.indexOf(finderSubStr, startIndex) + 1
        indexes.push(startIndex - 1)
    }
    return indexes
}

function findIdFn(str, finderSubStr) {
    let pos = 0
    const indexes = []
    while ((pos = str.indexOf(finderSubStr, pos)) != -1) {
        indexes.push(pos)
        pos += 1
    }
    return indexes
}

console.log(findId(stringForIndexOf, "id"))
console.log(findIdFn(stringForIndexOf, "id"))

const fruitAr = ["Apple", "Orange", "Plum"]
let fruit = fruitAr.at(-1) //return from end of mass
console.log(fruit)

fruitAr.length = 0;
fruitAr.length = 3;
console.log(fruitAr[2]) 

//Arrays
const userNames = ["Pet", "San", "Oleg"]

userNames.push("John")
console.log(userNames.pop())

userNames.unshift("Jeck")
console.log(userNames.shift())

userNames.splice(0,2, "Sting")
console.log(userNames)

const newUserNames = userNames.concat(["kol", "vas"])
newUserNames.forEach( (item, index, array) => {
    console.log(`item = ${item} index = ${index} array = ${array}`)
}
)

newUserNames.indexOf("Jeck") //index or -1 криво работает с nan
newUserNames.includes("pet") // true\false


const users = [
    {name :"pet", age: 45},
    {name :"vas", age: 22},
    {name :"jon", age: 32},
]

const userPet = users.find((item, index, array) => {
    console.log(index)
    return item.age == 32
})
console.log(userPet)


const usersAge = users.filter(item => item.age > 23)
console.log(usersAge.length)

users.map(item => item.age += 10)
users.forEach (item => console.log(item))

users.map((item, index, array) => {
    item.age += 10
    if(index ==1)
    array.pop()
}
)
console.log("___")
users.forEach (item => console.log(item))

let arr = [1, 4, 2, 43, 12]
console.log(arr.sort())
console.log(arr.sort((a, b) => a - b))

function compareNumeric(a, b) {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
  }

  const strToArr = "Pet, Vas, Kol"
  const strArr = strToArr.split(",")
  console.log(strArr)
  const newStr = strArr.join("!!")
  console.log(newStr)


  console.log(arr.reduce((sum, item, index, array) => {
    return sum + item
  }, 10))

  const psevdoMass = {
    start: 2,
    end: 5
  }

  psevdoMass[Symbol.iterator] = function() {
    return {
    current: this.start,
    last: this.end,
    next() {
        if(this.current <= this.last) return {done:false, value: this.current++}
        else return {done:true}
    }
}
  }

  for(let item of psevdoMass) {
    console.log(item)
  }

