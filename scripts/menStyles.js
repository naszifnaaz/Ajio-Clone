// Importing Navbar
import navbar from "../components/navbar.js";
let nav_container = document.getElementById("naz-nav-container");
console.log(navbar);
nav_container.innerHTML = navbar();

// Sidebar Filter
import sidebar from "../components/sidebar-filter.js";
let sidebar_container = document.getElementById("naz-sidebar");
sidebar_container.innerHTML = sidebar();

//rendering products to DOM
import renderProducts from "../scripts/renderProducts.js";

//filtering functionality
import filterProducts from "../scripts/filterFunctionality.js";

//sorting functionality
import sortFunctionality from "../scripts/sortFunctionality.js";

//API call
let data;
getData();

//Sort functionality
document
  .getElementById("naz-sort-products")
  .addEventListener("change", sortingProducts);

function sortingProducts() {
  sortFunctionality(data);
}
//Filter Products
let button = document
  .getElementById("filterButton")
  .addEventListener("click", filterProducts);

//API Call
async function getData() {
  const res = await fetch("http://localhost:5000/products/men");
  data = await res.json();
  data = data.products;
  renderProducts(data);
}
