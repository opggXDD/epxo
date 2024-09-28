let images = [
    "pictures/home-expo-dubai.jpg",
    "pictures/home-expo-dubai-2.jpg",
    "pictures/home-expo-dubai-3.jpg"
];
let currentImageIndex = 0;
let autoSwapInterval = setInterval(swapImages, 10000);

// Function to swap images automatically or manually
function swapImages(direction) {
    if (direction === 'prev') {
        currentImageIndex = (currentImageIndex === 0) ? images.length - 1 : currentImageIndex - 1;
    } else if (direction === 'next' || !direction) {
        currentImageIndex = (currentImageIndex + 1) % images.length;
    }
    
    document.getElementById('slideshow').src = images[currentImageIndex];
}

// Manual swap using previous and next buttons
document.getElementById('prev').addEventListener('click', function() {
    clearInterval(autoSwapInterval);  // Reset the auto-swap timer
    swapImages('prev');               // Swap to previous image
    autoSwapInterval = setInterval(swapImages, 5000);  // Restart the auto-swap timer
});

document.getElementById('next').addEventListener('click', function() {
    clearInterval(autoSwapInterval);  // Reset the auto-swap timer
    swapImages('next');               // Swap to next image
    autoSwapInterval = setInterval(swapImages, 5000);  // Restart the auto-swap timer
});
let slideInterval = setInterval(nextSlide, 10000); // Start auto slide

function resetInterval() {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, 10000); // Restart timer
}

function prevSlide() {
    resetInterval(); // Reset when manually sliding
    showNextImage((currentIndex - 1 + images.length) % images.length);
}

function nextSlide() {
    resetInterval(); // Reset when manually sliding
    showNextImage();
}
