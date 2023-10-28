'use strict'


let massage // создание
massage = "Hellow" // присваивание

let shortMassege = "Hellow2"

let age = 24, name = "Petia", sity = "Омск"

console.log(massage, shortMassege, age, sity)

var oldMassege = "HellowOld"

let hellow = "Hellow"
let copyHellow = hellow

// num = 5 // ошибка отловлена useStrict
// console.log(num)

const berthday = "01.01.1900"
// berthday = '0101010'  ошибка тк нельзя переименовать

console.log(berthday)

const COLOR_RED = "#F00"; //практика именования 

let jsMassege = "Hellow"
jsMassege = 34

let inf = 1/0
console.log(inf)

console.log(typeof inf)
console.log(typeof inf + "низкий приоритет")

let apples = "4"
let oranges = "3"
let summ = +apples + oranges



//Условное ветвление
let userAge = 25;
let userMassege = userAge < 5 ? "Привет малын" :
    userAge <18 ? "Привет дружище" :
    "Привет старик";
console.log(userMassege)

let johnCar = "";
johnCar ||= "Мазда";
console.log(johnCar)

let greeting = "Привет"
greeting &&= greeting + ", пользователь"
console.log(greeting)

let noUser
console.log(noUser ?? "Аноним") //if value is not null or underfind
// important difference from || this is a reaction to false, 0 "" 

let i = 3
do {
    console.log(i)
    i--
}
while (i>1)


firstLabel : for(let i=0; i<10; i ++) {
console.log(i)
for(let j=0; j<10; j++) {
    if(i>3 && j>3) {
        console.log ("прерываем по метке")
        break firstLabel
    }
}
}


// оператор нулевого слияния










