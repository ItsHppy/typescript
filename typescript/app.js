//File 0
//0: Отобразить 4 строки любой англоязычной песни
console.log('Задание 0');
console.log('Nigga, nigga, nigga, nigga, nigga, nigga, nigga' +
    'Im 100% nigga' +
    'Nigga, nigga, nigga, nigga, nigga, nigga, nigga,' +
    'Im 200% nigga');
//1: Сгенерировать 3 числа и отобразить результат выполнения между ними хотя бы 3 операций, которые только вы вспоминаете
console.log('Задание 1');
var num1 = Math.floor(Math.random() * 100);
var num2 = Math.floor(Math.random() * 100);
var num3 = Math.floor(Math.random() * 100);
console.log("".concat(num1, " + ").concat(num2, " + ").concat(num3, " = ").concat(num1, " + ").concat(num2, " + ").concat(num3));
console.log("".concat(num1, " - ").concat(num2, " - ").concat(num3, " = ").concat(num1, " - ").concat(num2, " - ").concat(num3));
console.log("".concat(num1, " * ").concat(num2, " * ").concat(num3, " = ").concat(num1, " * ").concat(num2, " * ").concat(num3));
//2: Ввести с клавиатуры число/сгенерировать случ образом, которое будет обозначать ваш возраст.
console.log('Задание 2');
var num4 = Math.floor(Math.random() * 100);
var days = num4 * 365;
var money = days * 5;
var kenguloni = ((money / 3) / 1313);
console.log(num4);
console.log(days);
console.log(money);
console.log(kenguloni);
//a: задания с кенгулонами
var getRandomSize = Math.floor(Math.random() * (13 - 5 + 1)) + 5;
var kengulonSizes = [
    getRandomSize,
    getRandomSize,
    getRandomSize
];
console.log("Размеры кенгулонов:", kengulonSizes);
var randomAction = Math.floor(Math.random() * 3);
console.log("Случайный символ:", randomAction);
switch (randomAction) {
    case 0:
        var maxSize = Math.max.apply(Math, kengulonSizes);
        console.log("Максимальный размер кенгулона:", maxSize);
        break;
    case 1:
        var averageSize = (kengulonSizes[0] + kengulonSizes[1] + kengulonSizes[2]) / 3;
        console.log("Средний размер кенгулонов:", averageSize);
        break;
    case 2:
        var maxSize1 = Math.max.apply(Math, kengulonSizes);
        var minSize = Math.min.apply(Math, kengulonSizes);
        var sizeDifference = maxSize1 - minSize;
        console.log("Разность между самым маленьким и самым большим размером:", sizeDifference);
        break;
    default:
        console.log("Неизвестное действие");
}
if (randomAction === 0) {
    var maxSize = Math.max.apply(Math, kengulonSizes);
    console.log("Максимальный размер кенгулона:", maxSize);
}
else if (randomAction === 1) {
    var averageSize = (kengulonSizes[0] + kengulonSizes[1] + kengulonSizes[2]) / 3;
    console.log("Средний размер кенгулонов:", averageSize);
}
else if (randomAction === 2) {
    var minSize = Math.min.apply(Math, kengulonSizes);
    var sizeDifference = Math.max.apply(Math, kengulonSizes) - minSize;
    console.log("Разность между самым маленьким и самым большим размером:", sizeDifference);
}
//b: Задание с сопротивлениями
var R1 = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
var R2 = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
var R3 = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
var R0 = 1 / (1 / R1 + 1 / R2 + 1 / R3);
console.log("Значение сопротивления R0 =", R0);
//c: Задания с возрастом и слоником
var age = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
var fem = age * 1000000000000000 * 365 * 24 * 3600;
var hours = age * 365 * 24;
var slonik = 365 * 24 * 3600 * 30000;
console.log("Возраст -", age);
console.log("Прожитые фемтосекунды -", fem);
console.log("Прожитые часы -", hours);
console.log("Кол-во слонов за 1 день рождения -", slonik);
//d: Задание с компом
var processor = Math.floor(Math.random() * 500) + 500;
var mater = Math.floor(Math.random() * 1000) + 60;
var videocard = Math.floor(Math.random() * 600) + 600;
var dollarCourse = Math.floor(Math.random() * 4) + 1;
var summa = (processor + mater + videocard) / dollarCourse;
console.log("Стоимость ПК-сборки: ", summa);
//File 1
var n = 1;
var person = {};
function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
function generatePerson() {
    var ages = randomInt(18, 133);
    var balances;
    if (age < 42) {
        balances = randomInt(5478, 6666);
    }
    else if (age < 52) {
        balances = randomInt(6666, 6789);
    }
    else {
        balances = randomInt(6789, 9865);
    }
    var genders;
    switch (randomInt(1, 3)) {
        case 1:
            genders = "m";
            break;
        case 2:
            genders = "w";
            break;
        default:
            genders = "nigger";
            break;
    }
    var activeSemispheres = randomInt(0, 6);
    person = { age: ages, balance: balances, gender: genders, activeSemisphere: activeSemispheres };
}
generatePerson();
console.log(person);
for (var i = 1; i <= 13; i++) {
    generatePerson();
    console.log(n, ":", person);
    n = n + 1;
}
