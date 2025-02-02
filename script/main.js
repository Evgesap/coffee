"use strict";

/* order */

const checkboxBtn = document.querySelectorAll('[name="goods"]');
const goods = document.querySelectorAll(".goods-items__coffee-house");
let goodsData = [];

checkboxBtn.forEach((checkbox, index) => {
  checkbox.addEventListener("change", function () {
    const choiceQuantity = document.querySelector(
      `[data-name="${checkbox.value}"]`
    );

    if (checkbox.checked) {
      choiceQuantity.value = parseInt(1);
      goodsData.push({
        name: checkbox.value,
        price: checkbox.dataset.price,
        quantity: parseInt(choiceQuantity.value),
      });
    } else {
      goodsData.splice(goodsData.indexOf(goodsData[index]), 1);
      return (choiceQuantity.value = parseInt(0));
    }

    console.log(goodsData);
  });
});

/* result sum */

const getResultSum = () => {};

/* order data */

const userData = {};

const userSurname = document.querySelector('[name="surname"]');
const userName = document.querySelector('[name="name"]');
const result = document.querySelector(".sum__coffee-house");
const btn = document.querySelector(".btn__coffee-house");

btn.addEventListener("click", function () {
  userData.surname = userSurname.value;
  userData.name = userName.value;

  alert(`Заказчик: ${userData.surname} ${userData.name}`);
});
