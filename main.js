// JavaScript to toggle the nav menu
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".navbar");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

var typed = new Typed(".text", {
  strings: ["Frontend Developer", "Backend Developer", "FullStack Developer"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});
