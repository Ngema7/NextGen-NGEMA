
  const menu = document.querySelector(".menu");
  const navbar = document.querySelector(".navbar");
  const navLinks = document.querySelectorAll(".navbar a");

  menu.addEventListener("click", () => {
    menu.classList.toggle("active");
    navbar.classList.toggle("active");
  });

  // auto close on menu click
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      menu.classList.remove("active");
      navbar.classList.remove("active");
    });
  });

