// ************ Smooth Scroll *************
// Select Links
const scrollLinks = document.querySelectorAll(".scroll-link");
const linksContainer = document.querySelector(".links-container");
const navToggler = document.querySelector(".navbar-toggler");
const navBar = document.querySelector(".navbar");

scrollLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    // Prevent Default
    e.preventDefault();
    // Navigate To Specific Spot
    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);
    // Caculate The Heights
    const navHeight = navBar.getBoundingClientRect().height;
    console.log(navHeight);
    const containerHeight = linksContainer.getBoundingClientRect().height;
    console.log(containerHeight);
    let position = element.offsetTop - navHeight;

    if (navHeight > 82) {
      position = position + containerHeight;
    }
    window.scrollTo({
      left: 0,
      top: position,
    });
    navToggler.classList.remove("collapsed");
    linksContainer.classList.remove("show");
  });
});
