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
      <a href="therainjacket.html?id=${jackets.id}">
        <div class="jackets">
          <img src="${jackets.images[0].src}" alt="${jackets.name}">
          <h2>${jackets.name}</h2>
          <p>kr. ${jackets.prices.price},-</p>
        </div>
        </a>`
    });
  }
  catch (error) {
    productPresentation.innerHTML = "Hmm, seems to be something wrong";
  }
};

productApi();

// const playersPresentation = document.querySelector(".playersPresentation");
// const url = "https://free-nba.p.rapidapi.com/players?page=0&per_page=25";
// const key = {"headers": {
//   "x-rapidapi-key": "e094895d13msh830a09e2ae63b01p1a08e3jsn72c3be0988c7",
// }};


// async function nbaApi() {
//   try {
//     const response = await fetch(url, key);
//     const result = await response.json();
//     const players = result.data;
  
//     console.log(players);

//     playersPresentation.innerHTML = "";

//     players.forEach(function(details) {
            
//       playersPresentation.innerHTML += `<a href="details.html?id=${details.id}">
//                                           <div class="playersPresentation_eachPlayer">
//                                             <h2>Name: ${details.first_name} ${details.last_name}<h2>
//                                             <p>Position: ${details.position}<p>
//                                           </div>
//                                         </a>`
//     });
//   }
//   catch (error) {
//     playersPresentation.innerHTML = "Hmm, seems to be something wrong";
//   }
// };

// nbaApi();