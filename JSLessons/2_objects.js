let userConstr = new Object()
userConstr.name = "Petia"
userConstr.age = 42
let userLiteral = {
    age: 43,
    name: "Petia",
    "school year": 1990,
    street: undefined,
    sister: {
        age: 34,
        name: "NINA"
    }
}

console.log(userConstr)
console.log(userLiteral)

// доступ по заранее неизвестному имени свойства или, состоящего из двух слов
let key = "school year"
console.log(userLiteral[key])

// оператор in определеяет есть ли ключ в объекте. 

console.log(userLiteral.street)
let street = "street"
console.log(street in userLiteral)

for (let key in userConstr) {
    console.log(key)
}

console.log(typeof userConstr.name ==  "bollean")

// object copyring
let userLiteralCopy = {}
for (let key in userLiteral) {
    userLiteralCopy[key] = userLiteral[key]
}
console.log(userLiteralCopy)

let userLiteralCopyMeth = Object.assign({}, userLiteralCopy)
console.log(userLiteralCopyMeth)
// if the object includes another object, then the links will be copied

function recursionObjCopy (obj) {
    let objCopy = {}
    const recours = (obj, objCopy)=> {
        for (let key in obj) {
                objCopy[key] = obj[key]
                if(typeof obj[key]  == "object") {
                    recours (obj[key], objCopy[key])
                }
        }
    }
    recours(obj, objCopy)
    return objCopy
}
let recourseCopy = recursionObjCopy(userLiteral)

console.log(recourseCopy)
console.log(recourseCopy.sister)




function User (name) {
    this.name = name
    age:36
    console.log(new.target)
    return 32
}

const userVas = new User("vas")
const userVas2 = User("vas2")
const userKir = User("kir")
const userPet = new function() {
    this.name = "pet"
}

console.log(userPet, userVas)
console.log(userKir)
console.log(userVas2)


//symbols - special type/ unique identificator. Have discription

let userId = Symbol("userId")
// console.log(userId) ошибка
console.log(userId.description)

let userWithSymbol  = {
    name: "petia",
    age: 35,
    userId:12
}
console.log(userWithSymbol)

userWithSymbol[userId] = 123

console.log(userWithSymbol)

userWithSymbol.userId = 1
userWithSymbol[userId] = 2
console.log(userWithSymbol)

// Object.assign copy Symbol fiels. For in not

let globalSymdol = Symbol.for("userId") //record to global symbol register
let globalSymdolCopy = Symbol.for("userId")
console.log(globalSymdol == userId)
console.log(globalSymdol == globalSymdolCopy)
console.log(globalSymdol.description)
console.log(userId.description)


// comparison of objects

let userComp = {
    name: 'vas',
    age: 24,
    [Symbol.toPrimitive](hint) {
        return hint == "string"? `name = ${this.name}` : `${this.age}`
    }
}

console.log(userComp)
console.log("___")
console.log("test" + userComp)
console.log(+userComp)
console.log(String(userComp))