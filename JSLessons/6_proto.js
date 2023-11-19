//   С помощью свойства __proto__ задайте прототипы так, чтобы поиск любого свойства
// выполнялся по следующему пути: pockets → bed → table → head.
// Например, pockets.pen должно возвращать значение 3 (найденное в table), а bed.glasses – значение 1 (найденное в head).
// Ответьте на вопрос: как быстрее получить значение glasses – через pockets.glasses или через head.glasses?
// При необходимости составьте цепочки поиска и сравните их.

let head = {
  glasses: 1,
};

let table = {
  pen: 3,
  __proto__: head,
};

let bed = {
  sheet: 1,
  pillow: 2,
  __proto__: table,
};

let pockets = {
  money: 2000,
  __proto__: bed,
};

console.log(pockets.pen);
console.log(bed.glasses);

let hamster = {
  stomach: [],

  eat(food) {
    this.stomach.push(food);
  },
};

let speedy = {
  stomach: [],
  __proto__: hamster,
};

let lazy = {
  stomach: [],
  __proto__: hamster,
};

// Этот хомяк нашёл еду
speedy.eat("apple");
console.log(speedy.stomach); // apple

// У этого хомяка тоже есть еда. Почему? Исправьте
console.log(lazy.stomach); // apple

Function.prototype.defer = function (delay) {
  setTimeout(() => {
    console.log("Work");
    this();
  }, delay);
};

function f() {
  console.log("Hello!");
}

f.defer(1000); // выведет "Hello!" через 1 секунду

function sum(a, b) {
  console.log(a + b);
}

Function.prototype.deferSum = function (delay) {
  let f = this;
  return function (...args) {
    setTimeout(() => f.apply(null, args), delay);
  };
};

sum.deferSum(1000)(1, 2); // выведет 3 через 1 секунду.

let dictionary = Object.create(null, {
    toString: { // определяем свойство toString
      value() { // значение -- это функция
        return Object.keys(this).join();
      }
    }
  });




// добавляем немного данных
dictionary.apple = "Apple";
dictionary.__proto__ = "test"; // здесь __proto__ -- это обычный ключ

// только apple и __proto__ выведены в цикле
for (let key in dictionary) {
  console.log(key); // "apple", затем "__proto__"
}

// ваш метод toString в действии
console.log(dictionary); // "apple,__proto__"
