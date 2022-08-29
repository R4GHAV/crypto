new fullpage("#fullpage");

var slide = document.querySelector(".carousel")
// function addSlide() {
  slide.innerHTML += `<div class="carousel-item">
  <img src="./assets/images/mobile1.png" alt="Pizza" />
  </div> 
  <div class="carousel-item">
  <img src="./assets/images/mobile2.png" alt="Pizza" />
  </div> 
  <div class="carousel-item">
  <img src="./assets/images/mobile3.png" alt="Pizza" />
  </div> 
  <div class="carousel-item">
  <img src="./assets/images/mobile4.png" alt="Pizza" />
  </div> 
  <div class="carousel-item">
  <img src="./assets/images/mobile5.png" alt="Pizza" />
  </div> 
  <div class="carousel-item">
  <img src="./assets/images/mobile6.png" alt="Pizza" />
  </div> 
  <div class="carousel-item">
  <img src="./assets/images/mobile7.png" alt="Pizza" />
  </div>
  <div class="carousel-item">
  <img src="./assets/images/mobile8.png" alt="Pizza" />
  </div> 
  <div class="carousel-item">
  <img src="./assets/images/mobile9.png" alt="Pizza" />
  </div> 
  <div class="carousel-item">
  <img src="./assets/images/mobile10.png" alt="Pizza" />
  </div>
  <div class="carousel-item">
  <img src="./assets/images/mobile1.png" alt="Pizza" />
  </div> 
  <div class="carousel-item">
  <img src="./assets/images/mobile2.png" alt="Pizza" />
  </div> 
  <div class="carousel-item">
  <img src="./assets/images/mobile3.png" alt="Pizza" />
  </div> 
  <div class="carousel-item">
  <img src="./assets/images/mobile4.png" alt="Pizza" />
  </div> 
  <div class="carousel-item">
  <img src="./assets/images/mobile5.png" alt="Pizza" />
  </div> 
  <div class="carousel-item">
  <img src="./assets/images/mobile6.png" alt="Pizza" />
  </div> 
  <div class="carousel-item">
  <img src="./assets/images/mobile7.png" alt="Pizza" />
  </div>
  <div class="carousel-item">
  <img src="./assets/images/mobile8.png" alt="Pizza" />
  </div> 
  <div class="carousel-item">
  <img src="./assets/images/mobile9.png" alt="Pizza" />
  </div> 
  <div class="carousel-item">
  <img src="./assets/images/mobile10.png" alt="Pizza" />
  </div>
  <div class="carousel-item">
  <img src="./assets/images/mobile1.png" alt="Pizza" />
  </div> 
  <div class="carousel-item">
  <img src="./assets/images/mobile2.png" alt="Pizza" />
  </div> 
  <div class="carousel-item">
  <img src="./assets/images/mobile3.png" alt="Pizza" />
  </div> 
  <div class="carousel-item">
  <img src="./assets/images/mobile4.png" alt="Pizza" />
  </div> 
  <div class="carousel-item">
  <img src="./assets/images/mobile5.png" alt="Pizza" />
  </div> 
  <div class="carousel-item">
  <img src="./assets/images/mobile6.png" alt="Pizza" />
  </div> 
  <div class="carousel-item">
  <img src="./assets/images/mobile7.png" alt="Pizza" />
  </div>
  <div class="carousel-item">
  <img src="./assets/images/mobile8.png" alt="Pizza" />
  </div> 
  <div class="carousel-item">
  <img src="./assets/images/mobile9.png" alt="Pizza" />
  </div> 
  <div class="carousel-item">
  <img src="./assets/images/mobile10.png" alt="Pizza" />
  </div>
  `
// }

slide.addEventListener('mouseenter', pause)
slide.addEventListener('mouseleave', resume)

function pause() {
  clearInterval(scroller);
}

function resume() {
  clearInterval(scroller);
  scroller = setInterval(() => {
    slide.scrollLeft += 215;
  }, 1000);
}

scroller = setInterval(() => {
  slide.scrollLeft += 215;
}, 1000);
