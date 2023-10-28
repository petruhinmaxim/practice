
let firstName: string = 'petia'
// firstName = 13 - ошибка
// tsc 1_main.ts  - consert to JS

let entity:unknown
entity = 1
entity = "df"

let entity1:any
entity = 1
entity = "df"

 
type TypeUser = {
    name:string
    age:number
}

type TypeAddress = {
    sity: string
    address: string
}

let user:TypeUser
let address: TypeAddress

user = {
    age:34,
    name: "petia",
}
address ={
    sity: "SPD",
    address: "moh"
}

let common: TypeUser & TypeAddress
common = {
    ...user, ...address
}


