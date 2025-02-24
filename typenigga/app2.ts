// Задание 2: Массивы

// Легкий уровень: Создайте массив из 5 строк, представляющих названия комплектующих для ПК. Выведите все названия на экран, используя цикл for.

const components: string[] = [
    'Processor',
    'Motherboard',
    'RAM',
    'Video Card',
    'ROM',
];

for (let i = 0; i <components.length; i++) {
    console.log(components[i]);
};

/* Средний уровень: Создайте массив объектов components, где каждый объект будет представлять комплектующее (свойства: name, type, price). Напишите функцию getExpensiveComponents(components:
Component[], threshold: number), которая будет возвращать массив комплектующих, цена которых выше заданного порога. */

interface Component {
    name: string;
    type: string;
    price: number;
}

function getExpensiveComponents(
    components: Component[],
    threshold: number
): Component[] {
    const expensiveComponents: Component[] = [];
    for (const component of components) {
        if (component.price > threshold) [
            expensiveComponents.push(component),
        ]
    }

    return expensiveComponents;
};

const componentsList: Component[] = [
    { name: 'Intel i5', type: 'Processor', price: 200},
    { name: 'ASUS RTX 3060', type: 'Video Card', price: 400},
    { name: 'Corsair 16GB RAM', type: 'RAM', price: 80},
    { name: 'Samsung 11TB SSD', type: 'ROM', price: 120},
    { name: 'Cooler Master Case', type: 'Case', price: 70},
];

const expensive = getExpensiveComponents(componentsList, 150);
console.log('\nExpensive components: ', expensive);

/* Сложный уровень: Напишите функцию sortComponentsByPrice(components: Component[]), которая будет сортировать массив комплектующих по цене (по возрастанию). Затем создайте массив из 10
комплектующих и протестируйте свою функцию, выводя отсортированный массив в консоль. */

function sortComponentsByPrice(components: Component[]): Component[] {
    return components.slice().sort((a, b) => a.price - b.price);
}

const componentsList_: Component[] = [
    { name: 'Intel i9', type: 'Processor', price: 500},
    { name: 'ASUS RTX 4090', type: 'Video Card', price: 1600},
    { name: 'Corsair 32GB RAM', type: 'RAM', price: 160},
    { name: 'Samsung 2TB SSD', type: 'ROM', price: 240},
    { name: 'Cooler Master Case', type: 'Case', price: 70},
    { name: 'AMD Ryzen 5', type: 'Processor', price: 180},
    { name: 'Gigabyte RTX 3070', type: 'Video Card', price: 550},
    { name: 'Kingston 16GB RAM', type: 'RAM', price: 75},
    { name: 'WD 11TB HDD', type: 'ROM', price: 50},
    { name: 'Be Quite! PSU', type: 'Power Unit', price: 120},
];

const sortedComponents = sortComponentsByPrice(componentsList_);
console.log('\nSorted components: ', sortedComponents);