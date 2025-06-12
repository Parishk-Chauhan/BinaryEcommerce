// Handle the checkout form submission
document.getElementById("checkout-form").addEventListener("submit", function (e) {
  e.preventDefault();

  // Clear cart after checkout
  localStorage.removeItem("cart");

  // Hide form, show confirmation
  this.classList.add("hidden");
  document.getElementById("confirmation").classList.remove("hidden");
});
