//Filter functionality based on products
import renderProducts from "../scripts/renderProducts.js";

function filterProducts() {
  // Filtering Based On Gender
  let menFilter = document.getElementById("menFilter");
  let womenFilter = document.getElementById("womenFilter");
  let kidFilter = document.getElementById("kidsFilter");

  if (menFilter.checked == true) window.location.href = "./menStyles.html";

  if (womenFilter.checked == true) window.location.href = "./womenStyles.html";

  if (kidFilter.checked == true) window.location.href = "./kidsStyles.html";

  // Filtering based on Categories
  let queryURL = "http://localhost:5000/products/filter?items=[";
  let filterQuery = [];
  let shirtFilter = document.getElementById("shirtFilter");
  let tshirtFilter = document.getElementById("tshirtFilter");
  let jacketFilter = document.getElementById("jacketFilter");
  let trouserFilter = document.getElementById("trouserFilter");
  let shortsFilter = document.getElementById("shortsFilter");
  let topsFilter = document.getElementById("topsFilter");
  let kurtasFilter = document.getElementById("kurtasFilter");
  let sareeFilter = document.getElementById("sareeFilter");

  if (shirtFilter.checked == true) filterQuery.push("shirt");
  if (tshirtFilter.checked == true) filterQuery.push("tshirt");
  if (jacketFilter.checked == true) filterQuery.push("jacket");
  if (trouserFilter.checked == true) filterQuery.push("pants");
  if (shortsFilter.checked == true) filterQuery.push("shorts");
  if (topsFilter.checked == true) filterQuery.push("top");
  if (kurtasFilter.checked == true) filterQuery.push("kurta");
  if (sareeFilter.checked == true) filterQuery.push("saree");

  filterQuery.map((elem) => {
    queryURL = queryURL + elem + ",";
  });
  queryURL = queryURL.slice(0, -1);
  queryURL += "]";

  filteredData(queryURL);
}

async function filteredData(queryURL) {
  let res = await fetch(queryURL);
  let data = await res.json();
  data = data.products;
  console.log(data);
  renderProducts(data);
}

export default filterProducts;
