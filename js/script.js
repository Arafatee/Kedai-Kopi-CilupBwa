// Toggle class active hamburger menu
const navbarNav = document.querySelector(".navbar-nav");

document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};
// toogle class active search form
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");

document.querySelector("#search-button").onclick = (e) => {
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
};

// toogle class active shopping cart
const shopingCart = document.querySelector(".shopping-cart");

document.querySelector("#shopping-cart").onclick = (e) => {
  shopingCart.classList.toggle("active");
  e.preventDefault();
};

// Klik di luar side bar untuk menghilangkan nav

const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
// Klik di luar side bar untuk menghilangkan search button
const searchform = document.querySelector("#search-button");

document.addEventListener("click", function (e) {
  if (!searchform.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }
});

// Klik di luar side bar untuk menghilangkan shopping card
const shopingcart = document.querySelector("#shopping-cart");

document.addEventListener("click", function (e) {
  if (!shopingcart.contains(e.target) && !shopingCart.contains(e.target)) {
    shopingCart.classList.remove("active");
  }
});

// Modal Box

const itemDetailModal = document.querySelector("#item-detail-modal");
const itemDetailButtons = document.querySelectorAll(".item-detail-button");

itemDetailButtons.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetailModal.style.display = "flex";
    e.preventDefault();
  };
});

// klik tombol close

document.querySelector(".modal .close-icon").onclick = (e) => {
  itemDetailModal.style.display = "none";
  e.preventDefault();
};

// klik di luar modal

window.onclick = (e) => {
  if (e.target === itemDetailModal) {
    itemDetailModal.style.display = "none";
  }
};
