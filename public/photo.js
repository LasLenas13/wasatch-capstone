document.addEventListener('DOMContentLoaded', function () {

    const images = document.querySelectorAll('.gallery-image');
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image');
    const lightboxCaption = document.getElementById('lightbox-caption');
    const close = document.querySelector('.close');
  
  
    images.forEach((image) => {
      image.addEventListener('click', function () {
        lightbox.style.display = 'block';
        lightboxImage.src = this.src;
        lightboxCaption.innerHTML = this.alt;
      });
    });
  
  
    close.addEventListener('click', function () {
      lightbox.style.display = 'none';
    });
  
  
    lightbox.addEventListener('click', function (event) {
      if (event.target === lightbox) {
        lightbox.style.display = 'none';
      }
    });
  });

  const text = document.querySelector(".fancy")
const strText = text.textContent;
const splitText = strText.split("");
text.textContent = "";

for (let i = 0; i < splitText.length; i++) {
  text.innerHTML += "<span>" + splitText[i] + "</span>"
}

let char = 0;
let timer = setInterval(onTick, 70);

function onTick(){
  const span = text.querySelectorAll('span')[char];
  span.classList.add('fade');
  char++
  if(char === splitText.length){
    complete();
    return;
  }
}

function complete() {
  clearInterval(timer);
  timer = null;
}