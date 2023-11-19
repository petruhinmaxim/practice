//recursion
let company = {
  sales: [
    {
      name: "John",
      salary: 1000,
    },
    {
      name: "Alice",
      salary: 600,
    },
  ],

  development: {
    sites: [
      {
        name: "Peter",
        salary: 2000,
      },
      {
        name: "Alex",
        salary: 1800,
      },
    ],

    internals: [
      {
        name: "Jack",
        salary: 1300,
      },
    ],
  },
};

const sumSalary = function (data) {
  if (Array.isArray(data)) {
    return data.reduce(
      (prevValue, currenrValue) => prevValue + currenrValue.salary,
      0
    );
  } else {
    let sum = 0;
    for (let subData of Object.values(data)) {
      sum += sumSalary(subData);
    }
    return sum;
  }
};

console.log(sumSalary(company));

// Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n.
//   С использованием цикла.
// Через рекурсию, т.к. sumTo(n) = n + sumTo(n-1) for n > 1.
// С использованием формулы арифметической прогрессии.

const cycleSum = (n) => {
  let sum = 0;
  for (let i = 0; i <= n; i++) sum += i;
  return sum;
};

const recursiveSum = (n) => {
  if (n == 1) return 1;
  else {
    return (n += recursiveSum(n - 1));
  }
};

const formulaSum = (n) => (n * (n + 1)) / 2;

console.log(cycleSum(5));
console.log(recursiveSum(5));
console.log(formulaSum(5));

const factorial = (n) => {
  if (n == 1) return n;
  else {
    return n * factorial(n - 1);
  }
};

const refactorFactorial = (n) => (n != 1 ? n * refactorFactorial(n - 1) : n);

console.log(factorial(3));
console.log(refactorFactorial(3));

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};

const showElements = (list) => {
  console.log(list.value);
  if (list.next != null) showElements(list.next);
};

const convertShowElements = (list) => {
  if (list.next != null) convertShowElements(list.next);
  console.log(list.value);
};

showElements(list);
convertShowElements(list);

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

console.log(counter.up());

let sum = function (x) {
  return function (y) {
    return x + y;
  };
};

console.log(sum(1)(2));

const inbetween = (a, b) => {
  return function (x) {
    return x > a && x < b;
  };
};

let users = [
  { name: "John", age: 20, surname: "Johnson" },
  { name: "Pete", age: 18, surname: "Peterson" },
  { name: "Ann", age: 19, surname: "Hathaway" },
];

const sortBy = function (fieldName) {
  return function (a, b) {
    return a[fieldName] > b[fieldName] ? 1 : -1;
  };
};

const sortUser = users.sort(sortBy("name"));
for (let user of sortUser) {
  console.log(user);
}

let repeatCount = 0;
let delay = 500;

// let timerId = setTimeout(
//   function tick() {
//     repeatCount++;
//     if (repeatCount == 2) delay = 1000;
//     console.log(Date.now());
//     timerId = setTimeout(tick, delay, repeatCount);
//     if (repeatCount == 4) clearTimeout(timerId);
//   },
//   delay,
//   repeatCount
// );

// const intervalId = setInterval(() => {
//   console.log("interval");
// }, 1000);

// setTimeout(() => clearInterval(intervalId), 3005);

// const tickTimerId = setTimeout(() => {
//   console.log("tick");
// });
// console.log("tack");
// console.log("tack");
// console.log("tack");
// clearInterval(tickTimerId);

// Напишите функцию printNumbers(from, to), которая выводит число каждую секунду, начиная от from и заканчивая to.
// Сделайте два варианта решения.
// Используя setInterval.
// Используя рекурсивный setTimeout.

function printNumbersInt(from, to) {
  let timerId = setInterval(() => {
    if (from <= to) console.log(from++);
    else clearInterval(timerId);
  }, 1000);
}

function printNumbersTime(from, to) {
  function setCount(from) {
    setTimeout(() => {
      console.log("setTime" + from);
      if (from < to) setCount(++from);
    }, 1000);
  }
  setCount(from);
}

// printNumbersInt(1, 3);
// printNumbersTime(1, 3);

//добавим первый запуск без задержки

function printNumbersIntFast(from, to) {
  let timerId;
  function go() {
    if (from <= to) console.log(from);
    if (from == to && timerId) clearInterval(timerId);
    from++;
  }
  go();
  if (from <= to) {
    timerId = setInterval(go, 1000);
  }
}

function printNumbersTime(from, to) {
  function go() {
    console.log("setTime" + from++);
    if (from <= to) {
      setTimeout(go, 1000);
    }
  }
  go();
}

// printNumbersIntFast(1, 2);
// printNumbersTime(1, 2);

// Создайте декоратор spy(func), который должен возвращать обёртку, которая сохраняет все вызовы функции в своём свойстве calls.
// Каждый вызов должен сохраняться как массив аргументов.
// Например:

function work(a, b) {
  console.log(a + b); // произвольная функция или метод
}

function spy(func) {
  function wrapper(...args) {
    wrapper.calls.push(args);
    return func(...args);
  }
  wrapper.calls = [];
  return wrapper;
}

work = spy(work);

work(1, 2); // 3

work(4, 5); // 9

console.log(work.calls);

for (let args of work.calls) {
  console.log("call:" + args.join()); // "call:1,2", "call:4,5"
}

// ____________

function f(...x) {
  console.log(x);
}

function delay1(func, delay) {
  function wrapper() {
    setTimeout(() => func.apply(this, arguments), delay);
  }
  return wrapper;
}

// создаём обёртки
let f1000 = delay1(f, 1000);
let f1500 = delay1(f, 1500);

f1000("test", "test3"); // показывает "test" после 1000 мс
f1500("test"); // показывает "test" после 1500 мс

function callAfter(...text) {
  console.log(text);
}

function wrapperDelay(func, ms) {
  let timeout;
  function wrapper() {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, arguments), ms);
  }
  return wrapper;
}

let first = wrapperDelay(callAfter, 1000);

setTimeout(() => first("a", "sdf"), 1200);
setTimeout(() => first("b", "sdfsd"), 2500);
setTimeout(() => first("c", "sdgr"), 500);



