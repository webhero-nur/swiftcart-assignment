
function loadCategories() {
    fetch("https://fakestoreapi.com/products/categories")
    .then(res=> res.json())
    .then(data => displayCategories(data))
}
loadCategories();

function displayCategories(categories) {
    const categoriesContainer = document.getElementById("categories");
    for(const category of categories) {
        const categoryBtn = document.createElement('button');
        categoryBtn.classList = "btn btn-primary rounded-full category-btn btn-outline capitalize";
        categoryBtn.setAttribute('id', category);
        categoryBtn.setAttribute('onclick', `loadProducts("${category}")`);
        categoryBtn.innerText = category;
        categoriesContainer.appendChild(categoryBtn);
    }
}

function loadProducts(category) {
    setActive(category);
    const url = category ? `https://fakestoreapi.com/products/category/${category}` : "https://fakestoreapi.com/products";
    fetch(url)
    .then(res => res.json())
    .then(data => displayProducts(data))
}
loadProducts();

function displayProducts(products) {
    const productsContainer = document.getElementById("products");
    productsContainer.innerHTML = "";
    for(const product of products) {
        const productCard = document.createElement('div');
        productCard.innerHTML = `
        <div class="card bg-base-100 w-full shadow-sm">
        <figure class="bg-slate-200 h-[400px]">
          <img class="max-w-full p-4 max-h-[400px]" src="${product.image}"
            alt="Shoes" />
        </figure>
        <div class="card-body">
          <div class="flex justify-between">
            <p class="capitalize text-xs py-0.5 px-2 rounded-xl bg-blue-100 text-blue-500 w-max font-bold">${product.category}
            </p>
            <p class="text-right">
              <span class="text-amber-400">
                <i class="fa-regular fa-star"></i>
              </span>
              ${product.rating.rate} (${product.rating.count})
            </p>
          </div>
          <h2 class="card-title">${product.title.length > 30 ? product.title.slice(0, 30) + "..." : product.title}</h2>
          <div class="font-bold text-2xl">$${product.price.toFixed(2)}</div>
          <div class="card-actions justify-end">
            <button onclick="loadModal(${product.id})" class="btn flex-1 btn-outline btn-primary"><i class="fa-solid fa-eye"></i>
              Details</button>
            <button class="btn flex-1 btn-primary"><i class="fa-solid fa-cart-plus"></i> Add</button>
          </div>
        </div>
      </div>
        `;
        productsContainer.appendChild(productCard);
    }
}

function setActive(category = 'all') {
    const categoriesBtns = document.querySelectorAll("#categories>.category-btn");
    for(const categoryBtn of categoriesBtns) {
        categoryBtn.classList.add("btn-outline");
    }
    document.getElementById(category)?.classList.remove('btn-outline');
}