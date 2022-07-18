const menuModule = () => {
  const menuBtn = document.querySelector(".menu");
  const menu = document.querySelector("menu");
  const closeBtn = menu.querySelector(".close-btn");
  const menuItems = menu.querySelectorAll("ul>li>a");

  const openClose = () => {
    menu.classList.toggle("active-menu");
  };
  //   console.log(menuBtn, menu);
  menuBtn.addEventListener("click", openClose);
  closeBtn.addEventListener("click", openClose);

  menuItems.forEach((element) => {
    element.addEventListener("click", openClose);
  });
};
export default menuModule;
