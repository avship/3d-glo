const menuModule = () => {
  const menuBtn = document.querySelector(".menu");
  const menu = document.querySelector("menu");
  const closeBtn = menu.querySelector(".close-btn");
  const menuItems = menu.querySelectorAll("ul>li>a");
  const btnNext = document.querySelector("#nextSection");
  let idInterval;

  const scrollToElem = (elem) => {
    document.querySelector(elem.getAttribute("href")).scrollIntoView({
      block: "start",
      behaviour: "smooth",
      alignToTop: true,
    });
  };

  btnNext.addEventListener("click", (event) => {
    scrollToElem(event.target);
  });

  const openClose = (event) => {
    event.preventDefault();
    menu.classList.toggle("active-menu");
    if (event.path[0].tagName === "A") {
      scrollToSection(event.target.getAttribute("href"));

      scrollToElem(event.target);
    }
  };

  menuBtn.addEventListener("click", openClose);
  closeBtn.addEventListener("click", openClose);

  menuItems.forEach((element) => {
    element.addEventListener("click", openClose);
  });
};
export default menuModule;
