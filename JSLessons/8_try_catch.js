// try {
//   setTimeout(function () {
//     //   noSuchVariable; // скрипт упадёт тут
//   }, 1000);
// } catch (e) {
//   console.log("не сработает");
// }

setTimeout(function () {
  try {
    noSuchVariable;
  } catch (e) {
    console.log(e.name);
    console.log(e.stack);
    console.log(e.message);
  }
}, 1000);

let json = '{"name":30}';
const jsonParse = JSON.parse(json);

try {
  if (!jsonParse.age) throw new SyntaxError("Отсутвует поле age");
} catch (e) {
  console.log(e.message);
} finally {
  console.log("Fine");
}

class FormatError extends SyntaxError {
  constructor(message) {
    super(message);
    this.name = this.constructor.name;
  }
}

let err = new FormatError("ошибка форматирования");

console.log(err.message); // ошибка форматирования
console.log(err.name); // FormatError
console.log(err.stack); // stack

console.log(err instanceof FormatError); // true
console.log(err instanceof SyntaxError); // true (потому что наследует от SyntaxError)
