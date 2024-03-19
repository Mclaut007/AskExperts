function moveSocials() {
  const headerSocials = document.querySelector(".header__socials");
  const headerTopContainer = document.querySelector(".header__top-container");
  const menuList = document.querySelector(".menu__list");

  const mediaQuery = window.matchMedia("(max-width: 47.99875rem)");

  function handleMobileChange(e) {
    if (e.matches) {
      menuList.append(headerSocials);
    } else {
      headerTopContainer.append(headerSocials);
    }
  }
  mediaQuery.addEventListener("change", handleMobileChange);
  handleMobileChange(mediaQuery);
}

export default moveSocials;
