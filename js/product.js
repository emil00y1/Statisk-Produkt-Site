const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

fetch("https://kea-alt-del.dk/t7/api/products/" + id)
  .then((response) => response.json())
  .then((data) => showProduct(data));

function showProduct(product) {
  console.log(product);
  document.querySelector(".headlines h1").textContent =
    product.productdisplayname;
  document.querySelector(".price").textContent = product.price + ",-";
  document.querySelector(".brand").textContent = product.brandname;
  document.querySelector(".gender").textContent = product.gender;
  document.querySelector(".color p").textContent =
    "Color: " + product.basecolour;
  document.querySelector(".description").innerHTML = product.description;
  document.querySelector(".materialcare").textContent =
    product.materialcaredesc;
  document.querySelector(".productimage").src =
    "https://kea-alt-del.dk/t7/images/webp/640/" + product.id + ".webp";
}
