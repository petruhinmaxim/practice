const user = {
    name: "Steave",
    secondName: "Kinev"
}

console.log(Object.getOwnPropertyDescriptor(user, "name"))

Object.defineProperty(user, "name", {
    configurable: true,
    writable: false,
    enumerable: false
})

user.name = "Mar"

console.log(Object.getOwnPropertyDescriptor(user, "name"))

for (let prop in user) {
    console.log(prop)
}

console.log(Object.getOwnPropertyDescriptors(user))


function User(name, birthday) {
    this.name = name;
    this.birthday = birthday;
    Object.defineProperty(this, "age", {
        get() {
            let todayYear = new Date().getFullYear();
            return todayYear - this.birthday.getFullYear();
        }
    });
}

const newUser = new User("steave", new Date(1992, 6, 1))

console.log(newUser)
console.log(newUser.age)


const confUser = Object.create({},
    {
        name: {
            value: "Misha",
            configurable: false,
            writable: false,
            enumerable: true
        },
        age: {
            value: 33,
            configurable: true,
            writable: true,
            enumerable: true
        }
    })

console.log(confUser.name)

confUser.name = "per"
console.log(confUser.name)


const jar = {}

Object.defineProperties(jar, {
    numberOfCoockies: {
        value: 0,
        writable: false,
        enumerable: false,
        configurable: true
    },
    coockies: {
        get() { return this.numberOfCoockies },
        set(value) {
            if (value > 0 && value < 10) {
                Object.defineProperty(jar, "numberOfCoockies", { value })
            }
            else console.log("Unvalid value")
        }
    }
})

console.log(jar.numberOfCoockies)

jar.numberOfCoockies = 17

console.log(jar.numberOfCoockies)

jar.coockies = 15
jar.coockies = 8

console.log(jar.numberOfCoockies)
console.log(jar.coockies)
