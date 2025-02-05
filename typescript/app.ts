//File 0
//0: Отобразить 4 строки любой англоязычной песни
console.log('Задание 0');
console.log('Nigga, nigga, nigga, nigga, nigga, nigga, nigga'+
'Im 100% nigga'+
'Nigga, nigga, nigga, nigga, nigga, nigga, nigga,'+
'Im 200% nigga');
 
   //1: Сгенерировать 3 числа и отобразить результат выполнения между ними хотя бы 3 операций, которые только вы вспоминаете
   console.log('Задание 1');
   let num1: number = Math.floor(Math.random()*100);
   let num2: number = Math.floor(Math.random()*100);
   let num3: number = Math.floor(Math.random()*100);
   console.log(`${num1} + ${num2} + ${num3} = ${num1} + ${num2} + ${num3}`);
   console.log(`${num1} - ${num2} - ${num3} = ${num1} - ${num2} - ${num3}`);
   console.log(`${num1} * ${num2} * ${num3} = ${num1} * ${num2} * ${num3}`);

   //2: Ввести с клавиатуры число/сгенерировать случ образом, которое будет обозначать ваш возраст.
   console.log('Задание 2');
   let num4: number = Math.floor(Math.random()*100);
    let days : number = num4 * 365;
    let money : number = days * 5;
    let kenguloni : number = ((money / 3)/1313);
    console.log(num4);
    console.log(days);
    console.log(money);
    console.log(kenguloni);

    //a: задания с кенгулонами
    let getRandomSize: number = Math.floor(Math.random() * (13 - 5 + 1)) + 5;
const kengulonSizes = [
    getRandomSize,
    getRandomSize,
    getRandomSize
];

console.log("Размеры кенгулонов:", kengulonSizes);

const randomAction = Math.floor(Math.random() * 3);
console.log("Случайный символ:", randomAction);

switch (randomAction) {
    case 0:
        const maxSize = Math.max(...kengulonSizes);
        console.log("Максимальный размер кенгулона:", maxSize);
        break;
    case 1:
        const averageSize = (kengulonSizes[0] + kengulonSizes[1] + kengulonSizes[2]) / 3;
        console.log("Средний размер кенгулонов:", averageSize);
        break;
    case 2:
        const maxSize1 = Math.max(...kengulonSizes);
        const minSize = Math.min(...kengulonSizes);
        const sizeDifference = maxSize1 - minSize;
        console.log("Разность между самым маленьким и самым большим размером:", sizeDifference);
        break;
    default:
        console.log("Неизвестное действие");
}

if (randomAction === 0) {
    const maxSize = Math.max(...kengulonSizes);
    console.log("Максимальный размер кенгулона:", maxSize);
} else if (randomAction === 1) {
    const averageSize = (kengulonSizes[0] + kengulonSizes[1] + kengulonSizes[2]) / 3;
    console.log("Средний размер кенгулонов:", averageSize);
} else if (randomAction === 2) {
    const minSize = Math.min(...kengulonSizes);
    const sizeDifference = Math.max(...kengulonSizes) - minSize;
    console.log("Разность между самым маленьким и самым большим размером:", sizeDifference);
}

//b: Задание с сопротивлениями
let R1:number = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
let R2:number = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
let R3:number = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
let R0:number = 1 / (1/R1 + 1/R2 + 1/R3);
console.log("Значение сопротивления R0 =", R0);

//c: Задания с возрастом и слоником
let age: number = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
let fem: number = age * 1000000000000000 * 365 * 24 * 3600;
let hours: number = age * 365 * 24;
let slonik: number = 365 * 24 * 3600 * 30000;
console.log("Возраст -", age);
console.log("Прожитые фемтосекунды -", fem);
console.log("Прожитые часы -", hours);
console.log("Кол-во слонов за 1 день рождения -", slonik);

//d: Задание с компом
let processor: number = Math.floor(Math.random() * 500) + 500;
let mater: number = Math.floor(Math.random() * 1000) + 60;
let videocard: number = Math.floor(Math.random() * 600) + 600;
let dollarCourse: number = Math.floor(Math.random() * 4) + 1;
let summa: number = (processor + mater + videocard) / dollarCourse;
console.log("Стоимость ПК-сборки: ", summa); 

//File 1
let n:number = 1;
let summ:number = 0;
let person: {
    age?: number;
    balance?: number;
    gender?: string;
    activeSemisphere?: number 
} = {};

function randomInt(min:number, max:number) {
    return Math.floor(Math.random()*(max-min) + min);
}

function generatePerson() {
    let ages: number = randomInt(18, 133);
    let balances: number;
    if(age < 42) {
        balances = randomInt(5478, 6666)
    } else if (age <52) {
        balances = randomInt(6666, 6789)
    } else {
        balances = randomInt(6789, 9865)
    }
    let genders: string;
    switch(randomInt(1,3)) {
        case 1: genders = "m"; break;
        case 2: genders = "w"; break;
        default: genders = "nigger"; break;
    }
    let activeSemispheres: number = randomInt(0, 6);
    person = {age: ages, balance: balances, gender: genders, activeSemisphere: activeSemispheres};
}
generatePerson();
console.log(person);
for (let i:number = 1; i <= 13; i++) {
    generatePerson();
    console.log(n, ":", person);
    n = n + 1;
    summ = summ + 
}