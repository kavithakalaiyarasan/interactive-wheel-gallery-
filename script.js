const slides = document.querySelectorAll('.slide');
const leftArrow = document.getElementById('leftArrow');
const rightArrow = document.getElementById('rightArrow');

let currentSlide = 0;

function updateSlider() {
  
  slides.forEach((slide, index) => {
    slide.style.transform = `translateX(-${currentSlide * 100}%)`;
    slide.classList.toggle('active', index === currentSlide);
  });

  leftArrow.disabled = currentSlide === 0;
  rightArrow.disabled = currentSlide === slides.length - 1;
}

leftArrow.addEventListener('click', () => {
  if (currentSlide > 0) currentSlide--;
  updateSlider();
});

rightArrow.addEventListener('click', () => {
  if (currentSlide < slides.length - 1) currentSlide++;
  updateSlider();
});

updateSlider();
