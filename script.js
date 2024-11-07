"use strict";

let quantity = 0;
let price = 125;
const zoomDiv = document.querySelector(".zoom");

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
});

document.querySelectorAll(".little-image").forEach((picture) =>
  picture.addEventListener("mouseover", function (e) {
    picture
      .closest(".all-images")
      .querySelectorAll(".image-box")
      .forEach((box) => box.classList.remove("active-box"));

    picture.closest(".image-box").classList.add("active-box");
    let id = Number(picture.getAttribute("id"));
    picture
      .closest(".display-block")
      .querySelector(".scalable-image").src = `images/image-product-${id}.jpg`;
  })
);

/* zoom effect */
document
  .querySelector(".scalable-image")
  .addEventListener("mousemove", function (e) {
    const infoBlock = document.querySelector(".info-block");
    let id = Number(
      document.querySelector(".active-box>img").getAttribute("id")
    );
    const zoomedImg = document.querySelector(".zoom-image");
    zoomedImg.src = `images/image-product-${id}.jpg`;
    zoomDiv.style.display = "block";
    infoBlock.style.margin = "0";
    let start = document.querySelector("main").clientWidth * 0.09;
    let x = (e.clientX - start) / 400;
    let y = (e.clientY - 220) / 400;
    zoomedImg.style.transform = `translate3d(-${200 * x}px,-${200 * y}px,0px)`;
  });
document
  .querySelector(".scalable-image")
  .addEventListener("mouseleave", function (e) {
    const infoBlock = document.querySelector(".info-block");
    zoomDiv.style.display = "none";
    infoBlock.style.margin = "auto 0 ";
  });
