const button = document.querySelector("button");
const message = document.querySelector(".message");


function addedToCart(event) {
  event.preventDefault();

  message.innerHTML = `<a href="/checkout.html" class="message">Added to cart, click here for checkout</a>`;
};

button.addEventListener("click", addedToCart);


/* Showing product specific information */

const title = document.querySelector("title");
const productPage = document.querySelector(".product-page")
const jacketName = document.querySelector(".product-page__name");
const jacketPrice = document.querySelector(".product-page__price-tag");
const jacketImage = document.querySelector(".product-page__image");
const jacketDescription = document.querySelector(".product-page__description");


const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

console.log(id);

const url = "https://mbpedersen.no/rainy_days/wp-json/wc/store/products/" + id;

console.log(url);


async function productDetails() {
    try {
      const response = await fetch(url);
      const product = await response.json();
  
      title.innerHTML = `${product.name}`;
      jacketName.innerHTML = `${product.name}`;
      jacketPrice.innerHTML = `kr. ${product.prices.price},-`;
      jacketImage.innerHTML = `<img src="${product.images[0].src}" alt="${product.name}">`;
      //jacketDescription.innerHTML = `${product.description}`;
    }
    catch(error) {
      productPage.innerHTML = "Oops, seems we did something wrong..";
    }
  };
  
  productDetails();