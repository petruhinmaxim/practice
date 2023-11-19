// // Написать код debaunce отменяющий вызовы, если не прошло заданное колличество времени

// function call(x) {
//   console.log(x);
// }

// function debaunce(func, delay) {
//   let timerId;
//   return function wrapper() {
//     clearInterval(timerId);
//     timerId = setTimeout(() => {
//       func.apply(null, arguments);
//     }, delay);
//   };
// }

// const debWrapper = debaunce(call, 1000);
// debWrapper(1);

// setTimeout(() => {
//   debWrapper(1200);
// }, 1200);

// setTimeout(() => {
//   debWrapper(800);
// }, 800);

// setTimeout(() => {
//   debWrapper(3000);
// }, 3000);

// ///test lexicon envirnmet

// function test1() {
//   const test1 = "test1";
//   return function test2() {
//     test1.newField = "newField";

//     const test2 = "test2";
//     return function test3() {
//       console.log(test1);
//     };
//   };
// }

// test1()()();

// Написать код trotling вызывающий функцию не чащу указанного промежутка времени

function trotCall(x) {
  console.log(x);
}

function trotling(funk, timer) {
  let savedArgs;
  let saveThis;
  let isTrotling = false;
  let isTimeotCall = false;
  return function decorator() {
    if (isTrotling) {
      savedArgs = arguments;
      saveThis = this;
      return;
    }
    funk.apply(this, arguments);
    isTrotling = true;

    setTimeout(() => {
      isTrotling = false;
      if (savedArgs && isTimeotCall) {
        isTimeotCall = false;
        decorator.apply(saveThis, savedArgs);
      }
      saveThis = savedArgs = null;
      isTimeotCall = true;
    }, timer);
  };
}

const trotlWrap = trotling(trotCall, 110);

trotlWrap(1);
setTimeout(() => trotlWrap(2), 100);
setTimeout(() => trotlWrap(3), 150);
setTimeout(() => trotlWrap(4), 200);
setTimeout(() => trotlWrap(5), 250);
setTimeout(() => trotlWrap(6), 280);
setTimeout(() => trotlWrap(7), 300);
setTimeout(() => trotlWrap(8), 350);
setTimeout(() => trotlWrap(9), 400);
setTimeout(() => trotlWrap(10), 410);
setTimeout(() => trotlWrap(11), 420);
setTimeout(() => trotlWrap(12), 500);

function say() {
  console.log(this.name);
}
say.age = 32;

let sayVas = say.bind({ name: "Вася" });
let sayLet = say.bind({ name: "Genz" });

sayVas(); // Вася
sayLet();
console.log(say.age);
console.log(sayVas.age);

let group = {
  title: "Our Group",
  students: ["John", "Pete", "Alice"],

  showList() {
    this.students.forEach(function (title, student) {
      // Error: Cannot read property 'title' of undefined
      console.log(title + ": " + student);
    });
  },
};

group.showList();
