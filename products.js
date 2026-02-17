const categoriesContainer = document.getElementById("categories");

function loadCategories() {
    fetch("https://fakestoreapi.com/products/categories")
    .then(res=> res.json())
    .then(data => displayCategories(data))
}
loadCategories();

function displayCategories(categories) {
    for(const category of categories) {
        const categoryBtn = document.createElement('button');
        categoryBtn.classList = "btn btn-primary rounded-full category-btn btn-outline capitalize";
        categoryBtn.setAttribute('id', category);
        categoryBtn.setAttribute('onclick', `loadProducts("${category}")`);
        categoryBtn.innerText = category;
        categoriesContainer.appendChild(categoryBtn);
    }
}