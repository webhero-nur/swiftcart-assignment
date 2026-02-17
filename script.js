const trendingContainer = document.getElementById("trending");

function loadTrending() {
    fetch("https://fakestoreapi.com/products")
    .then(res => res.json())
    .then(data => displayTrending(data))
}
loadTrending();

function displayTrending(products) {
    for(let i=0; i < 3; i++) {
        const product = products[i];
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="card bg-base-100 w-full shadow-sm">
        <figure class="bg-slate-200 p-4">
          <img class="max-w-full max-h-[400px]" src="${product.image}"
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
          <div class="font-bold text-2xl">$350.00</div>
          <div class="card-actions justify-end">
            <button class="btn flex-1 btn-outline btn-primary"><i class="fa-solid fa-eye"></i>
              Details</button>
            <button class="btn flex-1 btn-primary"><i class="fa-solid fa-cart-plus"></i> Add</button>
          </div>
        </div>
      </div>
        `;
        trendingContainer.appendChild(div);
    }
}