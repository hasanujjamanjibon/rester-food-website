// Burger menus

document.addEventListener("DOMContentLoaded", function () {
  // open

  const menu = document.querySelectorAll(".navbar-menu");
  // Adjust the interval as needed
  const slides = document.querySelector(".slides");
  const slide = document.querySelector(".slide");
  const slideWidth = slide.clientWidth;
  const totalSlides = document.querySelectorAll(".slide").length;
  let currentIndex = 0;

  function updateSlidePosition() {
    slides.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlidePosition();
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateSlidePosition();
  }

  setInterval(nextSlide, 2000); // Adjust the interval as needed

  document.querySelector(".next").addEventListener("click", nextSlide);
  document.querySelector(".prev").addEventListener("click", prevSlide);

  const burger = document.querySelectorAll(".navbar-burger");

  if (burger.length && menu.length) {
    for (var i = 0; i < burger.length; i++) {
      burger[i].addEventListener("click", function () {
        for (var j = 0; j < menu.length; j++) {
          menu[j].classList.toggle("hidden");
        }
      });
    }
  }

  // close
  const close = document.querySelectorAll(".navbar-close");
  const backdrop = document.querySelectorAll(".navbar-backdrop");

  if (close.length) {
    for (var i = 0; i < close.length; i++) {
      close[i].addEventListener("click", function () {
        for (var j = 0; j < menu.length; j++) {
          menu[j].classList.toggle("hidden");
        }
      });
    }
  }

  if (backdrop.length) {
    for (var i = 0; i < backdrop.length; i++) {
      backdrop[i].addEventListener("click", function () {
        for (var j = 0; j < menu.length; j++) {
          menu[j].classList.toggle("hidden");
        }
      });
    }
  }
});
