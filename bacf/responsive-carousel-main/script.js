// Image data for the carousel
const slideData = [
    {
        src: "https://bacf.org.in/wp-content/uploads/2025/01/4.png",
        alt: "Beautiful landscape of Lands End, showcasing scenic coastal cliffs and clear blue sky."
    },
    {
        src: "https://bacf.org.in/wp-content/uploads/2025/01/3.png",
        alt: "Stunning aerial view of lush green forest during daytime."
    },
    {
        src: "https://bacf.org.in/wp-content/uploads/2025/01/1.png",
        alt: "City skyline with modern buildings and vibrant city lights at night."
    },
    {
        src: "https://bacf.org.in/wp-content/uploads/2025/01/2.png",
        alt: "Mountain range covered in snow, showcasing majestic peaks during sunrise."
    },
    {
        src: "https://bacf.org.in/wp-content/uploads/2024/07/wallpaper_bg_bacf_04.png",
        alt: "Calm river flowing through a green valley with trees lining the banks."
    },
    {
        src: "https://bacf.org.in/wp-content/uploads/2024/07/wallpaper_bg_bacf_03.png",
        alt: "Beautiful sunset over the ocean with colorful hues and gentle waves."
    }
];


// Carousel setup
const carouselContainer = document.getElementById('carousel-container');
let autoplayInterval;
const autoplayDelay = 3000; // 3 seconds

// Create carousel elements dynamically
function createCarousel() {
    const wrapper = document.createElement('div');
    wrapper.classList.add('carousel-wrapper');

    const indicators = document.createElement('div');
    indicators.classList.add('carousel-indicators');

    slideData.forEach((image, index) => {
        // Create slides
        const slide = document.createElement('div');
        slide.classList.add('carousel-slide');
        if (index === 0) slide.classList.add('active');
        const img = document.createElement('img');
        img.src = image;
        img.alt = `Slide ${index + 1}`;
        img.loading = 'lazy';
        slide.appendChild(img);
        wrapper.appendChild(slide);

        // Create indicators
        const indicator = document.createElement('button');
        indicator.dataset.slideTo = index;
        if (index === 0) indicator.classList.add('active');
        indicator.addEventListener('click', () => goToSlide(index));
        indicators.appendChild(indicator);
    });

    // Create controls
    const prevButton = document.createElement('button');
    prevButton.classList.add('carousel-control', 'prev');
    prevButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10"><path stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M5 1L1 5l4 4"/></svg>`;
    prevButton.addEventListener('click', () => moveSlide(-1));

    const nextButton = document.createElement('button');
    nextButton.classList.add('carousel-control', 'next');
    nextButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10"><path stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M1 1l4 4-4 4"/></svg>`;
    nextButton.addEventListener('click', () => moveSlide(1));

    // Append elements to the container
    carouselContainer.appendChild(wrapper);
    carouselContainer.appendChild(indicators);
    carouselContainer.appendChild(prevButton);
    carouselContainer.appendChild(nextButton);

    // Add event listeners for autoplay pause on hover
    carouselContainer.addEventListener('mouseover', pauseAutoplay);
    carouselContainer.addEventListener('mouseout', startAutoplay);
}

let currentIndex = 0;

function updateCarousel(index) {
    const slides = document.querySelectorAll('.carousel-slide');
    const indicators = document.querySelectorAll('.carousel-indicators button');
    slides.forEach((slide, i) => {
        slide.style.transform = `translateX(${(i - index) * 100}%)`;
    });
    indicators.forEach((indicator, i) => {
        indicator.classList.toggle('active', i === index);
    });
}

function moveSlide(direction) {
    currentIndex = (currentIndex + direction + slideData.length) % slideData.length;
    updateCarousel(currentIndex);
}

function goToSlide(index) {
    currentIndex = index;
    updateCarousel(currentIndex);
}

// Autoplay functionality
function startAutoplay() {
    autoplayInterval = setInterval(() => moveSlide(1), autoplayDelay);
}

function pauseAutoplay() {
    clearInterval(autoplayInterval);
}

// Initialize carousel
createCarousel();
updateCarousel(currentIndex);
startAutoplay();
