// Static product list (backend removed)
const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 1999,
    image: "Images/headphone.jpg",
    desc: "Bluetooth over-ear headphones with noise cancellation"
  },
  {
    id: 2,
    name: "Smartwatch",
    price: 2999,
    image: "Images/smartwatch.jpg",
    desc: "Water-resistant smartwatch with fitness tracking and alerts"
  },
  {
    id: 3,
    name: "Sneakers",
    price: 2499,
    image: "Images/sneakers.jpg",
    desc: "Comfortable daily wear sneakers with breathable mesh"
  },
  {
    id: 4,
    name: "Backpack",
    price: 1499,
    image: "Images/backpack.jpg",
    desc: "Spacious backpack with laptop compartment and USB port"
  },
  {
    id: 5,
    name: "Sunglasses",
    price: 999,
    image: "Images/sunglasses.jpg",
    desc: "UV-protected stylish unisex sunglasses for all seasons"
  }
];

const productGrid = document.getElementById("product-grid");
productGrid.innerHTML = "";

// Render product cards
products.forEach(product => {
  const card = document.createElement("div");
  card.className = "product-card";
  card.innerHTML = `
    <img src="${product.image}" alt="${product.name}">
    <div class="wishlist-icon" title="Add to wishlist">♡</div>
    <h3>${product.name}</h3>
    <p class="product-desc">${product.desc}</p>
    <p>₹${product.price}</p>
    <button class="add-to-cart-btn" data-id="${product.id}">Add to Cart</button>
  `;
  productGrid.appendChild(card);
});

let cartCount = 0;

// Event listeners for add to cart and wishlist toggle
document.addEventListener("click", function (e) {
  if (e.target.classList.contains("add-to-cart-btn")) {
    const productId = e.target.dataset.id;
    const currentCart = JSON.parse(localStorage.getItem("cart")) || [];
    const product = products.find(p => p.id == productId);
    currentCart.push(product);
    localStorage.setItem("cart", JSON.stringify(currentCart));

    cartCount++;
    document.getElementById("cart-count").textContent = cartCount;
    alert("Item added to cart!");
  }

  if (e.target.classList.contains("wishlist-icon")) {
    const productName = e.target.closest(".product-card").querySelector("h3").textContent;
    const product = products.find(p => p.name === productName);

    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    const index = wishlist.findIndex(item => item.name === product.name);

    if (index === -1) {
      wishlist.push(product);
      e.target.textContent = "❤️";
    } else {
      wishlist.splice(index, 1);
      e.target.textContent = "♡";
    }

    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }
});
