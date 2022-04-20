const productPresentation = document.querySelector(".jackets-list");
const url = "https://mbpedersen.no/rainy_days/wp-json/wc/store/products";

async function productApi() {
  try {
    const response = await fetch(url);
    const jackets = await response.json();
    
    console.log(jackets);

    productPresentation.innerHTML = "";

    jackets.forEach(function(jackets) {
      productPresentation.innerHTML += `
      <a href="productpage.html?id=${jackets.id}">
        <div class="jackets">
          <div>
            <img src="${jackets.images[0].src}" alt="${jackets.name}">
            <p class="jackets__sale">- 30%</p>
          </div>
          <h2>${jackets.name}</h2>
          <p>kr. ${jackets.prices.sale_price},-</p>
        </div>
        </a>`
    });
  }
  catch (error) {
    productPresentation.innerHTML = "Hmm, seems to be something wrong";
  }
};

productApi();

