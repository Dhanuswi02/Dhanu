// Form validation for the contact form
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
  
    // Name validation
    if (!name) {
      alert('Please enter your name.');
      return;
    }
  
    // Email validation (basic)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }
  
    // Message validation
    if (!message) {
      alert('Please enter a message.');
      return;
    }
  
    alert('Form submitted successfully!');
  });
  
  // Dynamic Image Gallery - Add/Remove Images
  const galleryContainer = document.querySelector('.image-gallery');
  
  // Function to add an image to the gallery
  function addImage(src, alt, caption) {
    const imageContainer = document.createElement('div');
    imageContainer.classList.add('image-container');
    
    const img = document.createElement('img');
    img.src = src;
    img.alt = alt;
  
    const p = document.createElement('p');
    p.textContent = caption;
  
    imageContainer.appendChild(img);
    imageContainer.appendChild(p);
    galleryContainer.appendChild(imageContainer);
  }
  
  // Function to remove all images from the gallery
  function clearGallery() {
    galleryContainer.innerHTML = '';
  }
  
  // Example of adding a new image dynamically
 
  
  // You can call the `clearGallery()` function to remove images
  // clearGallery();
  