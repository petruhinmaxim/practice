// Вызов setter в конструкторе
class User {
  constructor(name) {
    this.name = name;
  }
  set name(value) {
    if (value.length < 4) {
      console.log("Имя должно быть более 4-х символов");
      return;
    } else this._name = value;
  }
  get name() {
    return this._name;
  }
}

let userPet = new User("Pet");
let userSteave = new User("Steave");

console.log(User.prototype);
console.log(userPet.__proto__);

// исправить таймер с функции на класс

class Clock {
  constructor({ template }) {
    this.template = template;
  }

  render() {
    let date = new Date();

    let hours = date.getHours();
    if (hours < 10) hours = "0" + hours;

    let mins = date.getMinutes();
    if (mins < 10) mins = "0" + mins;

    let secs = date.getSeconds();
    if (secs < 10) secs = "0" + secs;

    let output = this.template
      .replace("h", hours)
      .replace("m", mins)
      .replace("s", secs);

    console.log(output);
  }

  stop() {
    clearInterval(this.timer);
    console.log(this.timer);
  }

  start() {
    this.render();
    this.timer = setInterval(() => this.render(), 1000);
  }
}

// let clock = new Clock({ template: "h:m:s" });
// clock.stop();
// clock.start();
// console.log(clock.timer);
// setTimeout(() => {
//   console.log(clock.timer);
// }, 3000);
// clock.stop();

class ExtendedClock extends Clock {
  constructor(template, precision = 1000) {
    super(template);
    this.precision = precision;
  }

  start() {
    this.render();
    this.timer = setInterval(() => this.render(), this.precision);
  }
}

let extClock = new ExtendedClock({ template: "h:m:s" }, 3000);
// extClock.start();

//прототипы наследования

class Rabbit {
  constructor(name) {
    this.name = name;
  }
  run() {
    console.log("бежит");
  }
}

class WhiteRabbit extends Rabbit {
  eat() {
    console.log("Ест");
  }
}

let whiteR = new WhiteRabbit("Whinte");

console.log(whiteR.__proto__.__proto__);
console.log(WhiteRabbit.prototype.__proto__);
console.log(Rabbit.prototype);

class CoffeeMachine {
  _waterAmount = 0;

  set waterAmount(value) {
    if (value < 0) console.log("Отрицательное количество воды");
    else this._waterAmount = value;
  }

  get waterAmount() {
    return this._waterAmount;
  }

  constructor(power) {
    this._power = power;
  }
}

// создаём новую кофеварку
let coffeeMachine = new CoffeeMachine(100);

// устанавливаем количество воды
coffeeMachine.waterAmount = -10; // Error:
console.log(coffeeMachine._power);
