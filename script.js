
document.addEventListener("DOMContentLoaded", () => {
  const darkToggle = document.getElementById("dark-toggle");
  const menuBtn = document.getElementById("menu-btn");
  const navLinks = document.getElementById("nav-links");

  // Dark mode toggle
  darkToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    darkToggle.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
  });

  // Mobile menu toggle
  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });

  // Close mobile menu when nav link clicked
  const navLinkItems = navLinks.querySelectorAll("a");
  navLinkItems.forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("show");
    });
  });
});
