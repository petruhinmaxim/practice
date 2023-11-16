//recursion
let company = {
  sales: [{
    name: 'John',
    salary: 1000
  }, {
    name: 'Alice',
    salary: 600
  }],

  development: {
    sites: [{
      name: 'Peter',
      salary: 2000
    }, {
      name: 'Alex',
      salary: 1800
    }],

    internals: [{
      name: 'Jack',
      salary: 1300
    }]
  }
};

const sumSalary = function (data) {
  if (Array.isArray(data)) {
    return data.reduce((prevValue, currenrValue) => prevValue + currenrValue.salary, 0)
  }
  else {
    let sum = 0
    for (let subData of Object.values(data)) {
      sum += sumSalary(subData)
    }
    return sum
  }
}

console.log(sumSalary(company))

// Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n.
//   С использованием цикла.
// Через рекурсию, т.к. sumTo(n) = n + sumTo(n-1) for n > 1.
// С использованием формулы арифметической прогрессии.

const cycleSum = n => {
  let sum = 0
  for (let i = 0; i <= n; i++) sum += i
  return sum
}

const recursiveSum = (n) => {
  if (n == 1) return 1
  else {
    return n += recursiveSum(n - 1)
  }
}

const formulaSum = n => n * (n + 1) / 2

console.log(cycleSum(5))
console.log(recursiveSum(5))
console.log(formulaSum(5))

const factorial = n => {
  if (n == 1) return n
  else {
    return n * factorial(n - 1)
  }
}

const refactorFactorial = n => n != 1 ? n * refactorFactorial(n - 1) : n

console.log(factorial(3))
console.log(refactorFactorial(3))


let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

const showElements = list => {
  console.log(list.value)
  if (list.next != null) showElements(list.next)
}

const convertShowElements = list => {
  if (list.next != null) convertShowElements(list.next)
  console.log(list.value)
}

showElements(list)
convertShowElements(list)

function Counter() {
  let count = 0;

  this.up = function () {
    return ++count;
  };
  this.down = function () {
    return --count;
  };
}

let counter = new Counter();

console.log(counter.up())

let sum = function (x) {
  return function (y) {
    return x + y
  }
}

console.log(sum(1)(2))


const inbetween = (a, b) => {
  return function (x) {
    return x > a && x < b
  }
}

let users = [
  { name: "John", age: 20, surname: "Johnson" },
  { name: "Pete", age: 18, surname: "Peterson" },
  { name: "Ann", age: 19, surname: "Hathaway" }
];

const sortBy = function (fieldName) {
  return function (a, b) {
    return a[fieldName] > b[fieldName] ? 1 : -1;
  }
}

const sortUser = users.sort(sortBy("name"))
for (let user of sortUser) {
  console.log(user)
}


let repeatCount = 0;
let delay = 500;

let timerId = setTimeout(
  function tick() {
    repeatCount++;
    if (repeatCount == 2) delay = 1000
    console.log(Date.now());
    timerId = setTimeout(
      tick, delay, repeatCount
    )
    if (repeatCount == 4) clearTimeout(timerId)
  }, delay, repeatCount
)

const intervalId = setInterval(() => {
  console.log("interval")
}, 1000);

setTimeout(() => clearInterval(intervalId), 3005)

const tickTimerId = setTimeout(() => {
  console.log("tick")
});
console.log("tack")
console.log("tack")
console.log("tack")
clearInterval(tickTimerId)

const a = 1
