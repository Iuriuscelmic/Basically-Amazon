"use strict";

const products = {};

const allProducts = document.querySelector(`.allProducts`);
const addBtn = document.querySelector(`.addProductBtn`);
const prodName = document.querySelector(`.addName`);
const prodDesc = document.querySelector(`.addDesc`);
const prodPrice = document.querySelector(`.addPrice`);
const check = document.querySelector(`.check`);
const list = document.querySelector(`.list`);
const totalPrice = document.querySelector(`.total-price`);

const addProduct = () => {
  playAmazin();
  let newProd = {
    name: prodName.value,
    description: prodDesc.value,
    price: prodPrice.value,
    stock: check.checked,
  };

  products[prodName.value] = newProd;

  let cardDiv = document.createElement(`div`);
  cardDiv.classList.add(`card`);
  cardDiv.setAttribute(`id`, `${prodName.value}`);

  let delBtn = document.createElement(`button`);
  delBtn.classList.add(`deleteBtn`);
  delBtn.innerHTML = `X`;

  let label = document.createElement(`label`);
  label.classList.add(`label`);
  label.innerHTML = prodName.value;

  let paraDesc = document.createElement(`p`);
  paraDesc.classList.add(`description`);
  paraDesc.innerHTML = prodDesc.value;

  let paraPrice = document.createElement(`p`);
  paraPrice.classList.add(`price`);
  paraPrice.innerHTML = `${prodPrice.value}$`;

  let inStock = document.createElement(`button`);
  inStock.classList.add(`inStock`);
  inStock.innerHTML = check.checked ? `In Stock` : `Out of stock`;
  inStock.disabled = check.checked ? false : true;

  cardDiv.appendChild(delBtn);
  cardDiv.appendChild(label);
  cardDiv.appendChild(paraDesc);
  cardDiv.appendChild(paraPrice);
  cardDiv.appendChild(inStock);
  allProducts.appendChild(cardDiv);

  delBtn.addEventListener(`click`, deleteBtn);
  inStock.addEventListener(`click`, buyProduct);

  prodName.value = "";
  prodDesc.value = "";
  prodPrice.value = "";
  check.checked = true;
};

addBtn.addEventListener(`click`, addProduct);

const deleteBtn = (event) => {
  play();
  event.target.parentElement.remove();
  console.log(`buna ziua`);
};

const buyProduct = (event) => {
  playChaChing();
  let cardElem = event.target.parentElement;
  let price = parseInt(cardElem.querySelector(`.price`).innerHTML);
  let prodLabel = cardElem.querySelector(`.label`);

  let listElem = document.getElementById(`list-${cardElem.id}`);

  if (listElem) {
    let quantityElem = document.getElementById(`quantity-${cardElem.id}`);
    let quantityValue = parseInt(quantityElem.innerHTML);

    quantityElem.innerHTML = quantityValue + 1;
  } else {
    let productInList = document.createElement(`li`);
    productInList.setAttribute(`id`, `list-${cardElem.id}`);
    productInList.innerHTML = `${prodLabel.innerHTML}`;

    let productQuantity = document.createElement(`div`);
    productQuantity.setAttribute(`id`, `quantity-${cardElem.id}`);
    productQuantity.innerHTML = `1`;

    productInList.appendChild(productQuantity);
    list.appendChild(productInList);
  }

  let totalPriceElem = document.querySelector(`.total-price-value`);
  let totalPriceValue = parseInt(totalPriceElem.innerHTML);

  totalPriceElem.innerHTML = totalPriceValue + price;
};
