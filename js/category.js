fetch("https://kea-alt-del.dk/t7/api/categories")
  .then((res) => res.json())
  .then(showCategories);

function showCategories(categories) {
  categories.forEach(showCategory);
}

function showCategory(category) {
  const template = document.querySelector(".category_template").content;

  const copy = template.cloneNode(true);

  copy.querySelector("p").textContent = category.category;
  copy.querySelector("a").href =
    "productlist.html?category=" + category.category;

  document.querySelector(".category_overview").appendChild(copy);
}
