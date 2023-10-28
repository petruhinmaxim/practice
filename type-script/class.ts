class Car {
    public name: string
    protected price:number
    private age: number

    constructor(name:string, price:number, age:number) {
        this.name = name,
        this.price = price
        this.age = age
    }

    getInfo():string {
        return `${this.name} ${this.price}`
    }
}

const car  = new Car(`BMW`, 10000, 2000)
car.name

class Bus extends Car {
    constructor (name: string, price: number, age: number) {
        super(name, price, age)
    }
    price = 1000
}

const bus = new Bus("aud", 12000, 2020).getInfo


// modificators:
// public - visible everywhara
// protected visible in cless and extends classes
// privete - only in class