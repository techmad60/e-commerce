// Select elements using querySelector
const hamburgerBtn = document.querySelector("#hamburger-btn");
const closeHamburgerBtn = document.querySelector("#close-hamburger");
const displayNavbar = document.querySelector("#navbar");
const mainImages = document.querySelectorAll(".main-images img");
const lightBox = document.querySelector("#lightbox");
const lightboxImages = document.querySelectorAll(".lightbox-images img");
const thumbnailImages = document.querySelectorAll(".thumbnail-image");
const lightboxThumbnails = document.querySelectorAll(".lightbox-thumbnail img");
const prevButton = document.querySelector("#prev-button");
const nextButton = document.querySelector("#next-button");
const lightboxPrevBtn = document.querySelector("#lightbox-prevbtn");
const lightboxNextBtn = document.querySelector("#lightbox-nextbtn");
const closeLightBoxBtn = document.querySelector("#close-lightbox");
const decrementButton = document.querySelector("#decrement-number");
const incrementButton = document.querySelector("#increment-number");
const numberDisplay = document.querySelector("#number");
const numberBoughtDisplay = document.querySelector("#number-bought");
const totalAmountDisplay = document.querySelector("#total-amount");
const openCartButton = document.querySelector("#open-cart");
const cartModal = document.querySelector("#cart-modal");
const closeModal = document.querySelector("#close-modal");
const fullCartModal = document.querySelector("#full-cart");
const emptyCartModal = document.querySelector("#empty-cart");
const checkOutItemsButton = document.querySelector("#checkout-items");
const itemCountDisplay = document.querySelector("#number");
const numberPopup = document.querySelector("#number-popup");
const addToCartButton = document.querySelector("#Add-cart");
const deleteItemBtn = document.querySelector("#deleteitem-btn");
const overlay = document.querySelector("#dynamic-content");
const body = document.querySelector("body");

let currentIndex = 0;
let quantity = 0;
let numberValue = 0;


// Function to show the current image
function showImage(index) {
  if (index < 0) {
    currentIndex = mainImages.length - 1;
  } else if (index >= mainImages.length) {
    currentIndex = 0;
  }

  mainImages.forEach((image, i) => {
    if (i === currentIndex) {
      image.style.display = "block";
    } else {
      image.style.display = "none";
    }
  });

  // Enable or disable prevButton based on the current index
  prevButton.disabled = currentIndex === 0;

  // Enable or disable nextButton based on the current index
  nextButton.disabled = currentIndex === mainImages.length - 1;
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

// Function to show the current lightbox image
function showLightboxImage(index) {
  if (index < 0) {
    currentIndex = lightboxImages.length - 1;
  } else if (index >= lightboxImages.length) {
    currentIndex = 0;
  }

  lightboxImages.forEach((lightboxImage, i) => {
    if (i === currentIndex) {
      lightboxImage.style.display = "block";
    } else {
      lightboxImage.style.display = "none";
    }
  });

  // Enable or disable lightboxPrevBtn based on the current index
  lightboxPrevBtn.disabled = currentIndex === 0;

  // Enable or disable lightboxNextBtn based on the current index
  lightboxNextBtn.disabled = currentIndex === lightboxImages.length - 1;

  // Update the active thumbnail
  lightboxThumbnails.forEach((thumbnail, i) => {
    if (i === currentIndex) {
      thumbnail.classList.add("active-img");
    } else {
      thumbnail.classList.remove("active-img");
    }
  });
}

// Event listener for the lightbox previous button
lightboxPrevBtn.addEventListener("click", () => {
  currentIndex--;
  showLightboxImage(currentIndex);
});

// Event listener for the lightbox next button
lightboxNextBtn.addEventListener("click", () => {
  currentIndex++;
  showLightboxImage(currentIndex);
});

// Function to display the lightbox
function displayLightbox() {
  lightBox.style.display = "grid";
  overlay.style.display = "block";
  body.classList.add("fixed");
}

// Event listener to open the lightbox
thumbnailImages.forEach((thumbnail, index) => {
  thumbnail.addEventListener("click", () => {
    currentIndex = index;
    showLightboxImage(currentIndex);
    displayLightbox();
  });
});

// Event listener for the lightbox thumbnails
lightboxThumbnails.forEach((thumbnail, index) => {
  thumbnail.addEventListener("click", () => {
    currentIndex = index;
    showLightboxImage(currentIndex);
  });
});

// Function to close the lightbox
function closeLightBox() {
  lightBox.style.display = "none";
  overlay.style.display = "none";
  body.classList.remove("fixed");
}

// Event listener to close the lightbox
closeLightBoxBtn.addEventListener("click", closeLightBox);

// Function to open the sidebar
function openSidebar() {
  displayNavbar.classList.remove("hidden");
  displayNavbar.classList.add("flex");
  overlay.classList.remove("hidden");
  overlay.classList.add("block");
  body.classList.add("overflow-hidden");
}

// Function to close the sidebar
function closeSidebar() {
  displayNavbar.classList.add("hidden");
  displayNavbar.classList.remove("flex");
  overlay.classList.add("hidden");
  overlay.classList.remove("block");
  body.classList.remove("overflow-hidden");
}

// Event listener to open the sidebar
hamburgerBtn.addEventListener("click", openSidebar);

// Event listener to close the sidebar
closeHamburgerBtn.addEventListener("click", closeSidebar);

// Function to update the quantity and total amount
function updateQuantityAndAmount() {
  numberBoughtDisplay.textContent = quantity;
  const pricePerItem = 125.0; // Adjust this to the actual price per item
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

// Function to open the cart modal
function openCartModal() {
  const itemCount = parseInt(itemCountDisplay.textContent);
  cartModal.style.display = "block";

  if (itemCount === 0) {
    emptyCartModal.style.display = "block";
    fullCartModal.style.display = "none";
    numberPopup.style.display = "none";
  } else {
    emptyCartModal.style.display = "none";
    fullCartModal.style.display = "block";
    numberPopup.style.display = "block";
  }
}

// Function to close the cart modal
function closeCartModal() {
  cartModal.style.display = "none";
}

// Event listener to open the cart modal
openCartButton.addEventListener("click", openCartModal);

// Event listener to close the cart modal
closeModal.addEventListener("click", closeCartModal);

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

// Event listener for the "Add to Cart" button
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
})

// Initial adjustment on page load
adjustContentWidth();

// Listen for window resize events to adjust width dynamically
window.addEventListener("resize", adjustContentWidth);

// Function to adjust the width of the content div
function adjustContentWidth() {
  const windowWidth = window.innerWidth;

  // Check if the window width is less than 1024px
  if (windowWidth < 1024) {
    const navbarWidth = document.querySelector("#navbar").offsetWidth;
    overlay.style.width = `calc(100% - ${navbarWidth}px)`;
  } else {
    // If the window width is 1024px or greater, reset the overlay width
    overlay.style.width = "100%";
  }
}

// Event listeners to add/remove border class
thumbnailImages.forEach((image) => {
  image.addEventListener("click", () => {
    image.classList.toggle("border-orange-400");
  });
});

// Event listener for checking out items
checkOutItemsButton.addEventListener("click", () => {
  fullCartModal.style.display = "none";
  emptyCartModal.style.display = "block";
  numberPopup.style.display = "none";
});

