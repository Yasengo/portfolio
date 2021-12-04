let menu = document.querySelector('.hamburger-menubar');
let navbar = document.querySelector('.main-navigationlinks');

menu.onclick = () => {
    menu.classList.toggle('active');
    navbar.classList.toggle('active2');
}
window.onscroll = () => {
    menu.classList.remove('active');
    navbar.classList.remove('active2');
    
}
// ================= light/dark mode 
const text =  document.querySelector('.text');
const checkbox  = document.getElementById('checkbox');

checkbox.addEventListener('click', () => {
	document.body.classList.toggle('dark');
});


let slidePosition = 0;
const slides = document.getElementsByClassName('carousel__item'); 
const totalSlides = slides.length;

document.
  getElementById('carousel__button--next')
  .addEventListener("click", function() {
     moveToNextSlide();

  });
  document.
  getElementById('carousel__button--prev')
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