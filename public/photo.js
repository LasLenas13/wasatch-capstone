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