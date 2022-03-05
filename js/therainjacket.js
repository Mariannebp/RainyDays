const button = document.querySelector("button");
const message = document.querySelector(".message");


function addedToCart(event) {
  event.preventDefault();

  message.innerHTML = `<a href="/checkout.html" class="message">Added to cart, click here for checkout</a>`;
};

button.addEventListener("click", addedToCart);