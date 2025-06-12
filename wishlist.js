const wishlistItemsContainer = document.getElementById("wishlist-items");
let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

// Function to render all wishlist items
function renderWishlist() {
  wishlistItemsContainer.innerHTML = "";

  if (wishlist.length === 0) {
    wishlistItemsContainer.innerHTML = "<p>Your wishlist is empty.</p>";
    return;
  }

  wishlist.forEach((item, index) => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <img src="${item.image}" alt="${item.name}">
      <h3>${item.name}</h3>
      <p>₹${item.price}</p>
      <button class="remove-btn" data-index="${index}">Remove</button>
    `;
    wishlistItemsContainer.appendChild(card);
  });
}

// Remove item from wishlist
wishlistItemsContainer.addEventListener("click", function (e) {
  if (e.target.classList.contains("remove-btn")) {
    const index = e.target.dataset.index;
    wishlist.splice(index, 1);
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
    renderWishlist();
  }
});

renderWishlist();
