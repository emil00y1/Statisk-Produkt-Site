const urlParams = new URLSearchParams(window.location.search);
const category = urlParams.get("category");

fetch(
  "https://kea-alt-del.dk/t7/api/products?category=" + category + "&limit=20"
)
  .then((res) => res.json())
  .then(showProducts);

function showProducts(products) {
  products.forEach(showProduct);
}

function showProduct(product) {
  const template = document.querySelector(".smallProductTemplate").content;

  const copy = template.cloneNode(true);

  copy.querySelector("h1").textContent = product.productdisplayname;
  copy.querySelector(".card_price").textContent = product.price + ",-";
  copy.querySelector(".card_brand").textContent = product.brandname;
  copy.querySelector("a").href = "product.html?id=" + product.id;
  document.querySelector(".main_headline h1").textContent = category;
  copy.querySelector("img").src =
    "https://kea-alt-del.dk/t7/images/webp/640/" + product.id + ".webp";

  if (product.soldout) {
    copy.querySelector(".thumbnail").classList.add("sold_out");
    copy.querySelector(".card_info").classList.add("linedtext");
    copy.querySelector(".product_card").classList.add("sold_out_banner");
  }

  if (product.discount > 0) {
    copy.querySelector(".card_price").classList.add("new_price");
    copy.querySelector(".sale_percentage").classList.remove("hide");
    copy.querySelector(".sale_percentage").textContent =
      "-" + product.discount + "%";

    const discountedprice =
      product.price - product.price * (product.discount / 100);
    copy.querySelector(".card_price").textContent =
      Math.round(discountedprice) + ",-";

    // copy.querySelector(".card_price").textContent =
    //   product.price - product.price * (product.discount / 100);
  }

  document.querySelector(".product_overview").appendChild(copy);
}
