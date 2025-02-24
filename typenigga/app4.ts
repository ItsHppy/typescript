/* Задание 1: Создание класса Игрока 
• Создайте класс Player, который будет иметь следующие свойства: 
`name: string — имя игрока
health: number — здоровье игрока` */

class Player {
    name: string;
    health: number;

    constructor(name: string, health: number) {
        this.name = name;
        this.health = health;
    }

    /* • Добавьте метод takeDamage (damage: number), который уменьшает здоровье игрока на переданное значение damage. Если здоровье становится меньше или равно нулю, выводите сообщение "Игрок (имя)
    погиб". */

    takeDamage(damage: number): void {
        this.health -= damage;

        if (this.health <= 0) {
            console.log(`\nPlayer ${this.name} died!`);
            this.health = 0;
        }
    }
}

const player = new Player('MorTaalll', 100);
console.log(`Player's HP ${player.name}: ${player.health}`)

player.takeDamage(20);
console.log(`\nPlayer's HP ${player.name}: ${player.health}`);

player.takeDamage(80);
console.log(`\nPlayer's HP ${player.name}: ${player.health}`);