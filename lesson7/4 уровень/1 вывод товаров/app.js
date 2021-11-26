"use strict";


const products = {
    phones: [
        {
            id: 1,
            name: "Смартфон 1",
            price: "23,99 р.",
            imageUrl: "https://picsum.photos/seed/1/200",
        },
        {
            id: 2,
            name: "Смартфон 2",
            price: "11,99 р.",
            imageUrl: "https://picsum.photos/seed/2/200",
        },
        {
            id: 3,
            name: "Смартфон 3",
            price: "22,99 р.",
            imageUrl: "https://picsum.photos/seed/3/200",
        },
    ],

    tablets: [
        {
            id: 4,
            name: "Планшет 4",
            price: "99,99 р.",
            imageUrl: "https://picsum.photos/seed/4/200",
        },
        {
            id: 5,
            name: "Планшет 5",
            price: "44,99 р.",
            imageUrl: "https://picsum.photos/seed/5/200",
        },
    ],

    tv: [
        {
            id: 6,
            name: "Телевизор 6",
            price: "199,99 р.",
            imageUrl: "https://picsum.photos/seed/6/200",
        },
        {
            id: 7,
            name: "Телевизор 7",
            price: "244,99 р.",
            imageUrl: "https://picsum.photos/seed/7/200",
        },
        {
            id: 8,
            name: "Телевизор 8",
            price: "399,99 р.",
            imageUrl: "https://picsum.photos/seed/8/200",
        },
        {
            id: 9,
            name: "Телевизор 9",
            price: "444,99 р.",
            imageUrl: "https://picsum.photos/seed/9/200",
        },
    ],
};

const productsAll = document.querySelector(".products");
const buttonsAll = document.querySelectorAll("button");
buttonsAll.forEach(function (button) {
    button.addEventListener("click", MouseEvent);
});

/**
 * Эта функция должна вызываться при клике по кнопкам.
 * @param {MouseEvent} event
 */
function MouseEvent(event) {
    //вам нужно очищать .products
    productsAll.innerHTML = "";
    //в showCategory надо передать строку с типом категории, тип берите
    //из атрибута data-type у кнопки, по которой кликнули.
    showData(event.target.dataset.type);
}

/**
 * Сюда должно прилетать значение атрибута data-type у кнопки,
 * по которой кликнули.
 * @param {string} category 
 */
function showData(category_product) {
    const categoryProducts = products[category_product];
    let productsDiv = "";
    categoryProducts.forEach(function (product) {
        productsDiv += getProductAll(product);
    });
    productsAll.insertAdjacentHTML("afterbegin", productsDiv);
}

/**
 * @param {Object} product объект из массива phones, tablets или tv.
 * @param {number} product.id id продукта
 * @param {string} product.name название продукта
 * @param {string} product.price цена продукта
 * @param {string} product.imageUrl путь до картинки товара
 * @returns {string} html-разметка для товара
 */
function getProductAll(product) {
    return `
            <div class="product">
                <div>${product.name}</div>
                <img src="${product.imageUrl}" alt="">
                <div>${product.price}</div>
                <a href="https://example.com/producs/${product.id}">Подробнее</a>
            </div>
        `;
}
