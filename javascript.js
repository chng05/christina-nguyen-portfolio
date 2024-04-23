//Copyright Year
const yearElement = document.getElementById('year');
const currentYear = new Date().getFullYear();
yearElement.textContent = currentYear;

// Accordion
const accordionItems = document.querySelectorAll('.accordion-item');

accordionItems.forEach(item => {
  const header = item.querySelector('.accordion-header');
  const content = item.querySelector('.accordion-content');
  const icon = item.querySelector('.accordion-icon');

  header.addEventListener('click', () => {
    content.classList.toggle('active');
    icon.textContent = content.classList.contains('active') ? '-' : '+';
  });
});

//Back to top button
window.addEventListener('scroll', () => {
  const backToTopButton = document.getElementById('back-to-top-btn');
  if (window.scrollY > 300) {
    backToTopButton.style.display = 'block';
  } else {
    backToTopButton.style.display = 'none';
  }
});

document.getElementById('back-to-top-btn').addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

//Keyaboard Navigation for Accordion
document.addEventListener('DOMContentLoaded', function() {
  const accordionHeaders = document.querySelectorAll('.accordion-header');

  accordionHeaders.forEach(header => {
    header.addEventListener('keydown', function(event) {
      if (event.key === 'Enter' || event.keyCode === 13) {
        const content = this.nextElementSibling;
        content.classList.toggle('active');
        const icon = this.querySelector('.accordion-icon');
        icon.textContent = icon.textContent === '+' ? '-' : '+';
      }
    });
  });
});


//Lightbox

document.addEventListener('DOMContentLoaded', function() {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const closeBtn = lightbox.querySelector('.close');

  // Open the lightbox
  function openLightbox(event) {
      const imgSrc = event.target.src;
      lightboxImg.src = imgSrc;
      lightbox.style.display = 'flex';
  }

  // Close the lightbox
  function closeLightbox() {
      lightbox.style.display = 'none';
  }

  // Click event listeners for each image in the gallery
  const images = document.querySelectorAll('.card img');
  images.forEach(img => {
      img.addEventListener('click', openLightbox);
  });

  // Click event listener to the close button
  closeBtn.addEventListener('click', closeLightbox);

  // Lightbox Closing Function when clicking outside the image
  lightbox.addEventListener('click', function(event) {
      if (event.target === lightbox) {
          closeLightbox();
      }
  });
});

