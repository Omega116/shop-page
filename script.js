"use strict";

let quantity = 0;
let price = 125;

window.addEventListener("click", function (e) {
  if (e.target.closest(".plus-icon")) {
    quantity++;
    e.target
      .closest(".plus-icon")
      .parentNode.querySelector(".quantity").innerText = quantity;
    let currentPrice = e.target
      .closest(".info-block")
      .querySelector(".current-price");
    currentPrice.innerText = `${price * quantity}.00`;
  } else if (e.target.closest(".minus-icon")) {
    if (quantity > 0) {
      quantity--;
      e.target
        .closest(".minus-icon")
        .parentNode.querySelector(".quantity").innerText = quantity;
      let currentPrice = e.target
        .closest(".info-block")
        .querySelector(".current-price");
      currentPrice.innerText = `${price * quantity}.00`;
    }
    if (quantity === 0) {
      let currentPrice = e.target
        .closest(".info-block")
        .querySelector(".current-price");
      currentPrice.innerText = `125.00`;
    }
  }
  if (e.target.closest(".little-image")) {
  }
  /* if (e.target === document.querySelector()) {
  } */
});

document.querySelectorAll(".little-image").forEach((picture) =>
  picture.addEventListener("mouseover", function (e) {
    e.preventDefault();
    picture
      .closest(".all-images")
      .querySelectorAll(".image-box")
      .forEach((box) => box.classList.remove("active-box"));

    picture.closest(".image-box").classList.add("active-box");
    let id = Number(picture.getAttribute("id"));
    picture
      .closest(".display-block")
      .querySelector(".showcased-item").innerHTML = `<img
              class='scalable-image'
              src="images/image-product-${id}.jpg"
              alt="showcased shoes picture"
            />`;
  })
);

/* zoom effect */
document
  .querySelector(".scalable-image")
  .addEventListener("mousemove", function (e) {});
