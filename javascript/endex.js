let slidePosition = 0;
const slides = document.getElementsByClassName('carousel__item');
const totalSlides = slides.length;

document.
  getElementById('next__btn')
  .addEventListener("click", function() {
     moveToNextSlide();
  });

  document.
  getElementById('prev__btn')
  .addEventListener("click", function() {
      moveToPrevSlide();
  });

  function updateSlidePosition() {
      for (let slide of slides) {
          slide.classList.remove('carousel__item--visible');
          slide.classList.add('carousel__item--hidden');
      }
      slides[slidePosition].classList.add('carousel__item--visible');
  }
  function moveToNextSlide() {
      updateSlidePosition();

      if (slidePosition === totalSlides - 1) {
          slidePosition = 0;
      } else {
          slidePosition++;
      }
      updateSlidePosition();
  }
  function moveToPrevSlide(){
      updateSlidePosition();
    if (slidePosition === 0) {
        slidePosition = totalSlides - 1;
    } else {
        slidePosition--;
    }
    updateSlidePosition();
}


// for navigatiion menu bar
let menu = document.querySelector('#main-menu__bar');
let navbar = document.querySelector('.main-navigation__links');

menu.onclick = () => {
	menu.classList.toggle('fa-times');
	navbar.classList.toggle('active');
}
