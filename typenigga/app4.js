/* Задание 1: Создание класса Игрока
• Создайте класс Player, который будет иметь следующие свойства:
`name: string — имя игрока
health: number — здоровье игрока` */
var Player = /** @class */ (function () {
    function Player(name, health) {
        this.name = name;
        this.health = health;
    }
    /* • Добавьте метод takeDamage (damage: number), который уменьшает здоровье игрока на переданное значение damage. Если здоровье становится меньше или равно нулю, выводите сообщение "Игрок (имя)
    погиб". */
    Player.prototype.takeDamage = function (damage) {
        this.health -= damage;
        if (this.health <= 0) {
            console.log("\nPlayer ".concat(this.name, " died!"));
            this.health = 0;
        }
    };
    return Player;
}());
var player = new Player('MorTaalll', 100);
console.log("Player's HP ".concat(player.name, ": ").concat(player.health));
player.takeDamage(20);
console.log("\nPlayer's HP ".concat(player.name, ": ").concat(player.health));
player.takeDamage(80);
console.log("\nPlayer's HP ".concat(player.name, ": ").concat(player.health));
