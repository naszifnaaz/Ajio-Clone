import renderProducts from "../scripts/renderProducts.js";

//Sort functionality for products
function sortFunctionality(data) {
  let selected = document.getElementById("naz-sort-products-option").value;

  if (selected == "default") {
    renderProducts(data);
  }
  if (selected == "Relevence") {
    shuffleArray(data);
  }
  if (selected == "Discount") {
    let array = data.slice();
    array.map((elem) => {
      let offer = Math.floor(
        ((elem.strikedOffPrice - elem.price) / elem.strikedOffPrice) * 100
      );
      elem.discount = offer;
    });
    array.sort((a, b) => {
      return b.discount - a.discount;
    });
    renderProducts(array);
  }

  if (selected == "lowtohigh") {
    let array = data.slice();
    array.sort((a, b) => {
      return a.price - b.price;
    });
    renderProducts(array);
  }

  if (selected == "hightolow") {
    let array = data.slice();
    array.sort((a, b) => {
      return b.price - a.price;
    });
    renderProducts(array);
  }
}

/* Randomize array in-place using Durstenfeld shuffle algorithm */
function shuffleArray(data) {
  let array = data.slice();
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  renderProducts(array);
}

export default sortFunctionality;
