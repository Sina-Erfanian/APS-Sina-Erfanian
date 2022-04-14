let allProducts = [
  {
    id: 1,
    title: "Album 1",
    price: 12.93,
    img: "Images/Album 1.png",
    count: 1,
  },
  { id: 2, title: "Album 2", price: 21, img: "Images/Album 2.png", count: 1 },
  { id: 3, title: "Album 3", price: 33, img: "Images/Album 3.png", count: 1 },
  {
    id: 4,
    title: "Album 4",
    price: 41.98,
    img: "Images/Album 4.png",
    count: 1,
  },
  { id: 5, title: "Coffee", price: 98, img: "Images/Cofee.png", count: 1 },
  { id: 6, title: "Shirt", price: 65.33, img: "Images/Shirt.png", count: 1 },
];

const shopItems = document.querySelector(".shop-items");
const cartItems = document.querySelector(".cart-items");
const cartTotalPrice = document.querySelector(".cart-total-price");

let basket = [];

allProducts.forEach((ele) => {
  let createDiv = document.createElement("div");
  createDiv.classList.add("shop-item");
  let createSpan = document.createElement("span");
  createSpan.classList.add("shop-item-title");
  createSpan.innerHTML = ele.title;
  let createImg = document.createElement("img");
  createImg.classList.add("shop-item-image");
  createImg.src = ele.img;

  let createDivDetails = document.createElement("div");
  createDivDetails.classList.add("shop-item-details");

  let createSpanDetails = document.createElement("span");
  createSpanDetails.classList.add("shop-item-price");
  createSpanDetails.innerHTML = ele.price;

  let btn = document.createElement("button");
  btn.className = "btn btn-primary shop-item-button";
  btn.innerHTML = "ADD TO CART";

  btn.addEventListener("click", () => {
    addProduct(ele.id);
  });

  createDivDetails.append(createSpanDetails, btn);
  createDiv.append(createSpan, createImg, createDivDetails);
  shopItems.append(createDiv);
});

function addProduct(productId) {
  let mainProduct = allProducts.find((ele) => ele.id === productId);
  basket.push(mainProduct);
  basketProduct(basket);
  totalPrice(basket);
}

function basketProduct(userBasket) {
  cartItems.innerHTML = "";
  userBasket.forEach((ele) => {
    let cartRow = document.createElement("div");
    cartRow.classList.add("cart-row");
    let cartItem = document.createElement("div");
    cartItem.className = "cart-item cart-column";
    let cartItemImg = document.createElement("img");
    cartItemImg.src = ele.img;
    cartItemImg.classList.add("cart-item-image");
    let cartItemTitle = document.createElement("span");
    cartItemTitle.classList.add("cart-item-title");
    cartItemTitle.innerHTML = ele.title;
    let cartPrice = document.createElement("span");
    cartPrice.className = "cart-price cart-column";
    cartPrice.innerHTML = "$" + ele.price;
    let cartQuantity = document.createElement("div");
    cartQuantity.className = "cart-quantity cart-column";
    let cartQuantityInput = document.createElement("input");
    cartQuantityInput.className = "cart-quantity-input";
    cartQuantityInput.type = "number";
    cartQuantityInput.value = ele.count;
    cartQuantityInput.addEventListener("change", () => {
      updateCount(ele.id, cartQuantityInput.value);
    });
    let btnAdd = document.createElement("btn");
    btnAdd.className = "btn btn-danger";
    btnAdd.type = "button";
    btnAdd.innerHTML = "REMOVE";
    btnAdd.addEventListener("click", () => {
      removeElem(ele.id);
    });
    cartQuantity.append(cartQuantityInput, btnAdd);
    cartItem.append(cartItemImg, cartItemTitle);
    cartRow.append(cartItem, cartPrice, cartQuantity);
    cartItems.append(cartRow);
  });
}

const removeAll = document.getElementById("removeAll");

removeAll.addEventListener("click", () => {
  basket = [];
  basketProduct(basket);
});

function removeElem(id) {
  basket = basket.filter((ele) => ele.id !== id);
  basketProduct(basket);
}

function totalPrice(basket) {
  let sum = 0;
  basket.forEach((ele) => {
    sum += ele.price * ele.count;
  });
  cartTotalPrice.innerHTML = sum;
}

function updateCount(productId, newCount) {
  basket.forEach((ele) => {
    if (ele.id === productId) {
      ele.count = newCount;
    }
  });
  totalPrice(basket);
}
