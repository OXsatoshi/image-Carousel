import "./styles.css";
const container = document.querySelector(".container");
const circle = document.querySelector(".circles");
const dots = Array.from(circle.childNodes);
const slides = Array.from(container.childNodes);
let currentSlideIndex = 0;
function changeSlideTo(index) {
  slides[currentSlideIndex].classList.remove("visible");
  dots[currentSlideIndex].classList.remove("focused-dot");
  currentSlideIndex = index;
  slides[currentSlideIndex].classList.add("visible");
  dots[currentSlideIndex].classList.add("focused-dot");
}
dots.forEach((e, i) => {
  e.addEventListener("click", (event) => {
    changeSlideTo(i);
  });
});
function nextSlide() {
  slides[currentSlideIndex].classList.remove("visible");
  dots[currentSlideIndex].classList.remove("focused-dot");
  currentSlideIndex = (currentSlideIndex + 1) % slides.length;
  slides[currentSlideIndex].classList.add("visible");
  dots[currentSlideIndex].classList.add("focused-dot");
}
function previousSlide() {
  slides[currentSlideIndex].classList.remove("visible");
  dots[currentSlideIndex].classList.remove("focused-dot");

  currentSlideIndex =
    currentSlideIndex === 0 ? slides.length - 1 : currentSlideIndex - 1;
  slides[currentSlideIndex].classList.add("visible");
  dots[currentSlideIndex].classList.add("focused-dot");
}
document.querySelector(".prev-slide").addEventListener("click", previousSlide);
document.querySelector(".next-slide").addEventListener("click", nextSlide);
