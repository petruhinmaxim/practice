function getChannel(name) {
    return { name: name };
}
var getChennelName = function (name) {
    return { name: name };
};
var getChannelNameFunc = function (name) {
    return { name: name };
};
var getNumbers = function () {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers;
};
function getCar(name, price) {
    return price ? "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 ".concat(name, " \u0426\u0435\u043D\u0430 ").concat(price) : "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 ".concat(name);
}
console.log(getCar("petia", 13));
