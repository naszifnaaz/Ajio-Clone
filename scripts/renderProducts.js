// Rendering Products to DOM
function renderProducts(data) {
  let parent = document.getElementById("naz-product-container");
  parent.innerHTML = "";
  data.map((elem) => {
    let product = document.createElement("div");
    product.setAttribute("class", "naz-product");

    let poster = document.createElement("img");
    poster.setAttribute("class", "naz-product-img");
    poster.setAttribute("src", elem.imageURL);

    let brand = document.createElement("p");
    brand.setAttribute("class", "naz-product-brand");
    brand.innerHTML = elem.brand;

    let title = document.createElement("p");
    title.setAttribute("class", "naz-product-title");
    title.innerHTML = elem.product;

    let price_container = document.createElement("div");
    price_container.setAttribute("class", "naz-price-container");

    let price = document.createElement("p");
    price.setAttribute("class", "naz-price");
    price.innerHTML = `₹${elem.price}`;

    let strikedPrice = document.createElement("p");
    strikedPrice.setAttribute("class", "naz-striked-price");
    strikedPrice.innerHTML = `₹${elem.strikedOffPrice}`;

    let offer = document.createElement("p");
    offer.setAttribute("class", "naz-offer");
    let offerValue = Math.floor(
      ((elem.strikedOffPrice - elem.price) / elem.strikedOffPrice) * 100
    );
    offer.innerHTML = `(${offerValue}% off)`;

    price_container.append(price, strikedPrice, offer);
    product.append(poster, brand, title, price_container);

    parent.append(product);

    poster.addEventListener("click", function () {
      addToCart(elem);
    });
  });
}

var x = JSON.parse(localStorage.getItem("CartItemsOftarun"));
if (x == null) {
  cartArrFF = [];
} else {
  var cartArrFF = JSON.parse(localStorage.getItem("CartItemsOftarun"));
}

// On Click function
function addToCart(item) {
  if (cartArrFF.length == 1) {
    cartArrFF.pop();
  }
  cartArrFF.push(item);

  localStorage.setItem("CartItemsOftarun", JSON.stringify(cartArrFF));

  window.location.href = "clickedproduct.html";
}

export default renderProducts;
