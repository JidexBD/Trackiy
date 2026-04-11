// javascript
// header
const hamburger = document.querySelector(".mobile-btn");

const cancelBtn = document.querySelector(".close-sidebar");

const mobileNav = document.querySelector(".header-content-mobile");

//open sidebar
hamburger.addEventListener("click", () => {
  mobileNav.classList.add("active");
});

// close sidebar
cancelBtn.addEventListener("click", () => {
  mobileNav.classList.remove("active");
});
