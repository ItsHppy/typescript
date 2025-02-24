/* 1. Фильтрация массива объектов
Задание: Определите интерфейс Product с полями id (число), name (строка) и ргіcе (число). Создайте массив products из нескольких объектов типа Product. */

interface Product {
    id: number;
    name: string;
    price: number;
}

const products: Product[] = [
    { id: 1, name: 'Laptop', price: 1200 },
    { id: 2, name: 'Keyboard', price: 75 },
    { id: 3, name: 'Mouse', price: 25 },
    { id: 4, name: 'Monitor', price: 300 },
    { id: 5, name: 'Headphones', price: 150 },
];

// Напишите функцию filter Affordable Products, которая принимает массив продуктов и максимальную цену, возвращая массив продуктов с ценой ниже указанной.

function filterAffordableProducts(products: Product[], maxPrice: number): Product[] {
    return products.filter(product => product.price < maxPrice);
}

const veryAffordableProducts = filterAffordableProducts(products, 50);
console.log(veryAffordableProducts);