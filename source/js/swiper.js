var swiper = new Swiper('.swiper-container');
document.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    console.log(swiper)
    if (swiper.isBeginning) {
      swiper.slideNext();
    }
  }
});
