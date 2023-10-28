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
        if(this.current <= this.last) return {done:false, value: {name: this.current++, age: 13}}
        else return {done:true}
    }
}
  }

  for(let item of psevdoMass) {
    console.log(item)
  }


  //map and set
//   Методы и свойства:
// new Map() – создаёт коллекцию.
// map.set(key, value) – записывает по ключу key значение value.
// map.get(key) – возвращает значение по ключу или undefined, если ключ key отсутствует.
// map.has(key) – возвращает true, если ключ key присутствует в коллекции, иначе false.
// map.delete(key) – удаляет элемент (пару «ключ/значение») по ключу key.
// map.clear() – очищает коллекцию от всех элементов.
// map.size – возвращает текущее количество элементов.

let john ={name: "john"}
let pet ={name: "pet"}
let nameMap = new Map().set(john, {age:21}).set(pet, {age:12})
nameMap.forEach((key, value) => {
    console.log(value)
    console.log(key)
})

const nameIter = nameMap.entries() //используется в цикле for of

let objForMap = {
    name: "pet",
    age: 34,
    sity: "NY"
}

let mapFromObj = new Map(Object.entries(objForMap)) //enties возвращает пары ключ значение в виде массива, а new Map работает с массивами
console.log(mapFromObj)

let reversObj = Object.fromEntries(mapFromObj.entries()) //entries не обязателен
console.log(reversObj)

// new Set(iterable) – создаёт Set, и если в качестве аргумента был предоставлен итерируемый объект (обычно это массив), то копирует его значения в новый Set.
// set.add(value) – добавляет значение (если оно уже есть, то ничего не делает), возвращает тот же объект set.
// set.delete(value) – удаляет значение, возвращает true, если value было в множестве на момент вызова, иначе false.
// set.has(value) – возвращает true, если значение присутствует в множестве, иначе false.
// set.clear() – удаляет все имеющиеся значения.
// set.size – возвращает количество элементов в множестве.
// обратно совместим с map. Есть методы keys() values() entiries(), принимающие 3 аргумента (key и value дублируются)


let weekMap = new WeakMap
let objForKey = {name: "Pet"}
weekMap.set(objForKey, {age:24})
console.log(weekMap.has(objForKey))
objForKey = null
console.log(weekMap.has(objForKey))
// ключи только объекты. Если удаяется ссылка на объект, то он улаляется из weakMap
// есть только методы: set has get delete
// не являете перебираемым


let prices = {
    apple: 23,
    orange: 13,
    pineApple: 22
}

for (let key in prices) {
    console.log(key)
}

for (let [key, value] of Object.entries(prices)) {
    console.log(key)
    console.log(`_${value}`)
}

let convObj = Object.fromEntries(
    Object.entries(prices).map(([key, value]) => [key, value * 2] )
    )
console.log(convObj)


// присваивание массива
const userForSplit = {
    name: "pet"
};

[userForSplit.age, userForSplit.address] = "24, NY".split(" ")
console.log(userForSplit)

let guest = "pet";
let admon = "vas";

[guest, admon] = [admon, guest]
console.log(admon)

let [name1, name2, ...titles] = ["Julius", "Caesar", "Consul", "of the Roman Republic"]; //остаточные параметры
console.log(titles)

// присваивание объекта
let options = {
    up: "upKey",
    down: "downKey"
}
let {down:d, up} = options
console.log(up)
console.log(d)

let options2 = {
    title: "Menu"
  };
  
  let {width: w = 100, height: h = 200, title} = options2;
  console.log(`${w} ${h} ${title}`)
  
  let options3 = {
    title: "My menu",
    items: ["Item1", "Item2"]
  };
  
  function showMenu({
    title = "Untitled",
    width: w = 100,  // width присваиваем в w
    height: h = 200, // height присваиваем в h
    items: [item1, item2] // первый элемент items присваивается в item1, второй в item2
  }) {
    console.log( `${title} ${w} ${h}` ); // My Menu 100 200
    console.log( item1 ); // Item1
    console.log( item2 ); // Item2
  }
  
  showMenu(options3);

//Date
let date = new Date() //new Date(year, month, date, hours, minutes, seconds, ms)
console.log(date)
console.log(date.getTime()) //timeStemp 
console.log(date.getTimezoneOffset()) //in minutes

// по аналогии есть геттеры
// setFullYear(year, [month], [date])
// setMonth(month, [date])
// setDate(date)
// setHours(hour, [min], [sec], [ms])
// setMinutes(min, [sec], [ms])
// setSeconds(sec, [ms])
// setMilliseconds(ms)
// setTime(milliseconds) (устанавливает дату в виде целого количества миллисекунд, прошедших с 01.01.1970 UTC)

let dateForCorrect = new Date(2016, 1, 28);
dateForCorrect.setDate(date.getDate() + 2);

console.log( dateForCorrect ); // 1 Mar 2016

const dateNow = Date.now()
console.log(dateNow)

let dateParse = new Date( Date.parse('2012-01-26T13:51:50.417-07:00') ); // формат 2012-01-26T13:51:50.417-07:00'

console.log(dateParse);

//Json

let userForJson = {
    [Symbol("Id")]: 15,
    satHi() {
        console.log("Hellow")
    },
    age: undefined,
    name: "Pet"
}
console.log(userForJson)

const userJson = JSON.stringify(userForJson)
console.log(userJson)

let room = {
    number: 42,
    toJSON() {return this.number +1}
}

let meeting = {
    date: "tooday",
    room: room,
    time: 12
}

room.plase = meeting
// JSON.stringify(meeting) error crossLink

console.log(JSON.stringify(meeting, ["date", "time"]))

console.log(JSON.stringify(meeting, function replacer(key, value) {
    return (key == "plase")? undefined : value;
}))

let str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';

let meetup = JSON.parse(str, function(key, value) {
  if (key == 'date') return new Date(value);
  return value;
});

console.log( meetup.date.getDate() );


