document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector("#indicators-carousel");
    const slides = carousel.querySelectorAll("[data-carousel-item]");
    const indicators = carousel.querySelectorAll("[data-carousel-slide-to]");
    const prevButton = carousel.querySelector("[data-carousel-prev]");
    const nextButton = carousel.querySelector("[data-carousel-next]");
    let activeIndex = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            if (i === index) {
                slide.classList.remove("hidden");
                slide.setAttribute("data-carousel-item", "active");
            } else {
                slide.classList.add("hidden");
                slide.removeAttribute("data-carousel-item");
            }
        });

        indicators.forEach((indicator, i) => {
            if (i === index) {
                indicator.setAttribute("aria-current", "true");
            } else {
                indicator.removeAttribute("aria-current");
            }
        });

        activeIndex = index;
    }

    function nextSlide() {
        const newIndex = (activeIndex + 1) % slides.length;
        showSlide(newIndex);
    }

    function prevSlide() {
        const newIndex = (activeIndex - 1 + slides.length) % slides.length;
        showSlide(newIndex);
    }

    // Set up event listeners for buttons
    nextButton.addEventListener("click", nextSlide);
    prevButton.addEventListener("click", prevSlide);

    // Set up event listeners for indicators
    indicators.forEach((indicator, i) => {
        indicator.addEventListener("click", () => {
            showSlide(i);
        });
    });

    // Auto-play functionality (optional)
    let autoplayInterval = setInterval(nextSlide, 5000);

    // Pause on hover
    carousel.addEventListener("mouseenter", () => clearInterval(autoplayInterval));
    carousel.addEventListener("mouseleave", () => {
        autoplayInterval = setInterval(nextSlide, 5000);
    });

    // Initialize the carousel
    showSlide(activeIndex);
});
