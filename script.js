
const menuButton = document.querySelector("#menu-btn");
const navLinks = document.querySelector("#nav-links");

// Ouvrir et fermer le menu mobile
menuButton.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");

  menuButton.setAttribute("aria-expanded", isOpen);
  menuButton.setAttribute(
    "aria-label",
    isOpen ? "Fermer le menu" : "Ouvrir le menu"
  );
});

// Fermer le menu après avoir choisi une section
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Ouvrir le menu");
  });
});

// Mettre l'année actuelle dans le footer
document.querySelector("#year").textContent =
  new Date().getFullYear();
