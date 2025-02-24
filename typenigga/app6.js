/* Задание 1: Основы классов (Уровень сложности: Начальный)
Описание: Создайте класс Person, который имеет следующие свойства:
`• firstName (строка)
• lastName (строка)
• age (число) ` */
var Person = /** @class */ (function () {
    function Person(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    /* Добавьте метод getFullName(), который возвращает полное имя человека (например, "Иван Иванов").
    Требования:
    `• Используйте синтаксис классов ТуpeScript.
    • Обеспечьте доступность свойств для чтения и записи.` */
    Person.prototype.getFullName = function () {
        return "".concat(this.firstName, " ").concat(this.lastName);
    };
    return Person;
}());
var person = new Person('Mark', 'Rivera', 30);
console.log(person.getFullName());
