function factorial(num) {
  return num == 1 ? num : num * factorial(--num);
}
console.log("factorial(5) :>> ", factorial(4));

function fibonachi(num) {
  return;
}

function fibonacci(n) {
  if (n <= 0) {
    return "Введите положительное целое число";
  }

  let a = 0,
    b = 1;
  for (let i = 3; i < n; i++) {
    let temp = a + b;
    a = b;
    b = temp;
  }

  return n === 1 ? 0 : b;
}

// Пример использования:
let result = fibonacci(77);
console.log(`Число Фибоначчи с номером равно ${result}`);

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

// const showListInCercle = (params) => {
//   while (true) {
//     console.log(params.value);
//     if (params.next == null) break;
//     params = params.next;
//   }
// };

const showListInCercle = (params) => {
  while (params.next) {
    console.log(params.value);
    params = params.next;
  }
};

const showListInRec = (params) => {
  console.log(params.value);
  if (params.next) showListInRec(params.next);
};

showListInCercle(list);
showListInRec(list);

function makeWorker() {
  let name = "Pete";

  return function () {
    console.log(name);
  };
}

let name = "John";

makeWorker()();

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