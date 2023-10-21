//Пример асинхронных шагов
function main() {
    console.log("1")
    delay()
    console.log("2")
    console.log("3")
    console.log("4")
}

function delay() {
    setTimeout(() => {
        console.log("Hellow");
    }, 1000);
}

//паттерн, подводящий к идее асинхронного кода. 
const fetchTodos = (callback, resourse) => {
    const request = new XMLHttpRequest()

    request.addEventListener("readystatechange", () => {
        console.log(request, request.readyState)
        if (request.readyState == 4) {
            if (request.status == 200) {
                const response = JSON.parse(request.responseText)
                callback(undefined, response)
            }
            else {
                callback("Не удалось получить данные", undefined)
            }
        }
    }
    )
    request.open("GET", resourse);
    request.send()
}

// для множества вложенных вызовов наступает callBackHell
// fetchTodos((error, data) => {
//     console.log(data)
//     fetchTodos((error, data) => {
//         console.log(data)
//         fetchTodos((error, data) => {
//             console.log(data)
//         },
//             "vasia.json")
//     }, "sasha.json"
//     )
// }, "petia.json")

//в качестве решения появились промисы

const getSomething = () => {
    return new Promise((resolve, reject) => {
        resolve("данные") // разрешает промис
        reject("Ошибка") // в случае ошибки
    })
}

getSomething().then(
    (data) => {
        console.log(data)
    },
    (error) => {
        console.log(error)
    }
)

//альтернативная запись

getSomething().then(
    (data) => {
        console.log(data)
    }).catch((error) => {
        console.log(error)
    })


const fetchUsers = (resourse) => {
    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest()

        request.addEventListener("readystatechange", () => {
            if (request.readyState == 4) {
                if (request.status == 200) {
                    const response = JSON.parse(request.responseText)
                    resolve(response)
                }
                else {
                    reject("Ошибка")
                }
            }
        }
        )
        request.open("GET", resourse);
        request.send()
    })
}

fetchUsers("sasha.json")
    .then((response) => {
        console.log(response)
        return fetchUsers("petia.json")
    })
    .then((response) => {
        console.log(response)
        return fetchUsers("vasia.json")
    })
    .then((response) => {
        console.log(response)
    })
    .catch((error) => {
        console.log(error)
    })


// в языке сразу есть конструкция, возвращающая promisr. Промис отклоняется только тогда, когда происходит ошибка сети

fetch("petia.json")
    .then((response) => {
        console.log("fetch", response)
        return response.json()
    })
    .then((data) => {
        console.log(data)
    })
    .catch((error) => console.log(error))

// async и await позволяет разделить всю кодовую базу на отдельные асинхронные вызовы

const fetchUsersAs = async () => {
    const res = await fetch("sasha.json")  //await останавливает работу функции и больше не нужно передавать cakkback 
    const data = await res.json()
    return data
}

const users = fetchUsersAs()
console.log("async", users) //возвращает promice. Если добавить await, то заблокирует. как следствие есть инструмент then
fetchUsersAs()
    .then((data) => {
        console.log("then", data)
    })