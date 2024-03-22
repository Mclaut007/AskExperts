import Swiper from "swiper/bundle";

function clientFeedback() {
  const swiper = new Swiper(".client-feedback__swiper", {
    loop: true,
    effect: "fade",
    navigation: {
      nextEl: ".client-feedback__button-next",
      prevEl: ".client-feedback__button-prev",
    },
    keyboard: {
      enabled: true,
    },
  });
}

export default clientFeedback;
