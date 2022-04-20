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

const urlId = "https://mbpedersen.no/rainy_days/wp-json/wc/store/products/" + id;

console.log(urlId);


async function productDetails() {
    try {
      const response = await fetch(urlId);
      const product = await response.json();
  
      title.innerHTML = `Rainy Days | ${product.name}`;
      jacketName.innerHTML = `${product.name}`;
      jacketPrice.innerHTML = `kr. ${product.prices.regular_price},-`;
      jacketImage.innerHTML = `<img src="${product.images[0].src}" alt="${product.name}">`;
      jacketDescription.innerHTML = `<p>${product.description}</p>`;
    }
    catch(error) {
      productPage.innerHTML = "Oops, seems we did something wrong..";
    }
  };
  
  productDetails();


/* Promotions - You might also like */

const promotions = document.querySelector(".jackets-list");
const url = "https://mbpedersen.no/rainy_days/wp-json/wc/store/products";

async function productApi() {
  try {
    const response = await fetch(url);
    const jackets = await response.json();
    
    console.log(jackets);

    promotions.innerHTML = "";

    jackets.forEach(function(jackets) {
      promotions.innerHTML += `
      <a href="productpage.html?id=${jackets.id}">
        <div class="jackets">
          <img src="${jackets.images[0].src}" alt="${jackets.name}">
          <h3>${jackets.name}</h3>
          <p>kr. ${jackets.prices.regular_price},-</p>
        </div>
        </a>`
    });
  }
  catch (error) {
    promotions.innerHTML = "Hmm, seems to be something wrong";
  }
};

productApi();


/* Adding to cart */
const button = document.querySelector("button");
const message = document.querySelector(".message");


function addedToCart(event) {
  event.preventDefault();

  message.innerHTML = `<a href="/checkout.html" class="message">Added to cart, click here for checkout</a>`;
};

button.addEventListener("click", addedToCart); 