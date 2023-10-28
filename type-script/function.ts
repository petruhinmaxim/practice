type TypeChennelReturn = {
    name:string
}

function getChannel (name:string):TypeChennelReturn {
    return {name}
}

const getChennelName = (name:string):TypeChennelReturn => {
    return {name}
}

type TypeChannelFunction = (name:string) => TypeChennelReturn

const getChannelNameFunc: TypeChannelFunction = (name) => {
    return {name}
}


const getNumbers = (...numbers:number[]) => {
    return numbers
}

// functional overload
function getCar(name: string): string
function getCar(name: string, price:number): string

function getCar(name:string, price?:  number) {
    return price ? `Название ${name} Цена ${price}` : `Название ${name}`
}

const car1 = getCar("bmw", 12)
const car2 = getCar("bmw")



