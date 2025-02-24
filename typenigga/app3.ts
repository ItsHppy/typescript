/* Задание 1: Создание объекта персонажа 
1. Создайте интерфейс Character, Kоторый будет содержать следующие свойства: 
`a. name: string 
b. health: number 
C. attack: number` */

interface Character {
    name: string;
    health: number;
    attack: number;
}

// 2. Создайте объект hero, который будет соответствовать этому интерфейсу и инициализируйте его значениями.

const hero: Character = {
    name: 'שד המדבר',
    health: 100,
    attack: 20,
}

console.log('Nickname: ', hero.name);
console.log('HP: ', hero.health);
console.log('Damage: ', hero.attack);