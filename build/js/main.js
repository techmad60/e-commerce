// Select elements using querySelector
const hamburgerBtn = document.querySelector("#hamburger-btn");
const closehamburgerBtn = document.querySelector("#close-hamburger");
const displayNavbar = document.querySelector("#navbar");
const images = document.querySelectorAll(".overflow-x-scroll img");
const prevButton = document.querySelector("#prev-button");
const nextButton = document.querySelector("#next-button");
let currentIndex = 0;
const decrementButton = document.querySelector("#decrement-number");
const incrementButton = document.querySelector("#increment-number");
const numberDisplay = document.querySelector("#number");
const numberBoughtDisplay = document.querySelector("#number-bought");
const totalAmountDisplay = document.querySelector("#total-amount");
let quantity = 0;
let numberValue = 0;
const openCartButton = document.querySelector("#open-cart");
const emptyCartModal = document.querySelector("#empty-cart");
const fullCartModal = document.querySelector("#full-cart");
const closeEmptyCartButton = document.querySelector("#close-emptycart");
const closeFullCartButton = document.querySelector("#close-fullcart");
const itemCountDisplay = document.querySelector("#number");
const numberPopup = document.querySelector("#number-popup");
const addToCartButton = document.querySelector("#Add-cart");
const deleteItemBtn = document.querySelector("#deleteitem-btn");
const overlay = document.querySelector('#dynamic-content');
const body = document.querySelector('body')

// Event listener for the "Delete Item" button
deleteItemBtn.addEventListener("click", () => {
  fullCartModal.style.display = "none";
  emptyCartModal.style.display = "block";

  if (emptyCartModal.style.display === "block") {
    numberPopup.style.display = "none";
  } else {
    numberPopup.style.display = "block";
  }
});

// Event listener for the "Add to cart" button
addToCartButton.addEventListener("click", () => {
  const selectedQuantity = parseInt(numberDisplay.textContent);

  if (selectedQuantity > 0) {
    // Update the "number-popup" content with the selected quantity
    numberPopup.textContent = selectedQuantity;

    // Make the "number-popup" visible
    numberPopup.style.display = "block";
  } else {
    // If the selected quantity is 0 or less, hide the "number-popup"
    numberPopup.style.display = "none";
  }
  updateNumberDisplay();
});

// Function to open the appropriate cart modal
function openCartModal() {
  const itemCount = parseInt(itemCountDisplay.textContent);

  if (itemCount === 0) {
    emptyCartModal.style.display = "block";
    fullCartModal.style.display = "none";
  } else {
    emptyCartModal.style.display = "none";
    fullCartModal.style.display = "block";
  }
}

// Function to close the empty cart modal
function closeEmptyCart() {
  emptyCartModal.style.display = "none";
}

// Function to close the full cart modal
function closeFullCart() {
  fullCartModal.style.display = "none";
}

// Attach click event listeners to the "open-cart" button
openCartButton.addEventListener("click", openCartModal);

// Attach click event listeners to the Close buttons
closeEmptyCartButton.addEventListener("click", closeEmptyCart);
closeFullCartButton.addEventListener("click", closeFullCart);

// Function to update the number display
function updateNumberDisplay() {
  numberDisplay.textContent = numberValue;
}

// Event listener for the decrement button
decrementButton.addEventListener("click", () => {
  if (numberValue > 0) {
    numberValue--;
    updateNumberDisplay();
  }
});

// Event listener for the increment button
incrementButton.addEventListener("click", () => {
  if (numberValue < 3) {
    numberValue++;
    updateNumberDisplay();
  }
});

// Initial update of the number display
updateNumberDisplay();

// Function to show the current image
function showImage(index) {
  if (index < 0) {
    currentIndex = images.length - 1;
  } else if (index >= images.length) {
    currentIndex = 0;
  }
  images.forEach((image, i) => {
    if (i === currentIndex) {
      image.style.display = "block";
    } else {
      image.style.display = "none";
    }
  });
}

// Event listener for the previous button
prevButton.addEventListener("click", () => {
  currentIndex--;
  showImage(currentIndex);
});

// Event listener for the next button
nextButton.addEventListener("click", () => {
  currentIndex++;
  showImage(currentIndex);
});

// Show the initial image (the first one)
showImage(currentIndex);

// Function to open the sidebar
function openSidebar() {
  displayNavbar.classList.remove('hidden');
  displayNavbar.classList.add('flex');
  overlay.classList.remove('hidden');
  overlay.classList.add('block');
  body.classList.add('overflow-hidden');
}
console.log(body);
// Function to close the sidebar
function closeSidebar() {
  displayNavbar.classList.add('hidden');
  displayNavbar.classList.remove('flex');
  overlay.classList.add('hidden');
  overlay.classList.remove('block');
  body.classList.remove('overflow-hidden');
}

// Event listener for opening the sidebar
hamburgerBtn.addEventListener('click', openSidebar);

// Event listener for closing the sidebar
closehamburgerBtn.addEventListener('click', closeSidebar);

// Function to update the quantity and total amount
function updateQuantityAndAmount() {
  numberBoughtDisplay.textContent = quantity;
  const pricePerItem = 125.00; // Adjust this to the actual price per item
  const totalAmount = (quantity * pricePerItem).toFixed(2); // Calculate total amount
  totalAmountDisplay.textContent = `$${totalAmount}`;
}

// Event listener for the decrement button
decrementButton.addEventListener("click", () => {
  if (quantity > 0) {
    quantity--;
    numberDisplay.textContent = quantity;
    updateQuantityAndAmount();
  }
});

// Event listener for the increment button
incrementButton.addEventListener("click", () => {
  if (quantity < 3) {
    quantity++;
    numberDisplay.textContent = quantity;
    updateQuantityAndAmount();
  }
});

// Initial update of the quantity and total amount
updateQuantityAndAmount();

// Function to adjust the width of the content div
function adjustContentWidth() {
  const navbarWidth = document.querySelector('#navbar').offsetWidth;
  overlay.style.width = `calc(100% - ${navbarWidth}px)`;
}

// Initial adjustment on page load
adjustContentWidth();

// Listen for window resize events to adjust width dynamically
window.addEventListener('resize', adjustContentWidth);
