/* Задание 1: Основы классов (Уровень сложности: Начальный) 
Описание: Создайте класс Person, который имеет следующие свойства: 
`• firstName (строка) 
• lastName (строка) 
• age (число) ` */

class Person {
    firstName: string;
    lastName: string;
    age: number;

    constructor(firstName: string, lastName: string, age: number) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    /* Добавьте метод getFullName(), который возвращает полное имя человека (например, "Иван Иванов"). 
    Требования: 
    `• Используйте синтаксис классов ТуpeScript. 
    • Обеспечьте доступность свойств для чтения и записи.` */

    getFullName(): string {
        return `${this.firstName} ${this.lastName}`
    }
}

const person = new Person('Mark', 'Rivera', 30);
console.log(person.getFullName());