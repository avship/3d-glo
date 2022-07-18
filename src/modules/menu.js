const menuModule = () => {
  const menuBtn = document.querySelector(".menu");
  const menu = document.querySelector("menu");
  const closeBtn = menu.querySelector(".close-btn");
  const menuItems = menu.querySelectorAll("ul>li>a");

  let idInterval;

  const scrollToSection = (idHref) => {};
  document.addEventListener("scroll", () => {
    console.log(
      document.querySelector("#service-block").getBoundingClientRect()
    );
  });
  const openClose = (event) => {
    event.preventDefault();
    menu.classList.toggle("active-menu");
    if (event.path[0].tagName === "A") {
      scrollToSection(event.target.getAttribute("href"));
      document.querySelector(event.target.getAttribute("href")).scrollIntoView({
        block: "start",
        behaviour: "smooth",
        alignToTop: true,
      });
    }
  };

  menuBtn.addEventListener("click", openClose);
  closeBtn.addEventListener("click", openClose);

  menuItems.forEach((element) => {
    element.addEventListener("click", openClose);
  });
};
export default menuModule;
