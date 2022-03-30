//Filter functionality based on products

function filterProducts() {
  // Filtering based on Categories
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

  console.log(filterQuery);
}

export default filterProducts;
