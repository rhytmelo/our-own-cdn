<script>
    // Slide data
    const slidesData = [
        {
            image: "https://bacf.org.in/wp-content/uploads/2025/01/1-1.png",
            title: "Premium Fertilizers",
            linkText: "Learn More",
            link: "#"
        },
        {
            image: "https://bacf.org.in/wp-content/uploads/2025/01/2-1.png",
            title: "Organic Manure",
            linkText: "Discover More",
            link: "#"
        },
        {
            image: "https://bacf.org.in/wp-content/uploads/2025/01/3-1.png",
            title: "Vermicompost Solutions",
            linkText: "Get Started",
            link: "#"
        },
        {
            image: "https://www.icl-group.com/wp-content/uploads/2022/08/shutterstock_742121344-2.webp",
            title: "Bio Stimulants",
            linkText: "Get Now",
            link: "#"
        },
        {
            image: "https://images.pepagora.com/NTMwMw==/mediabank/images/products/NutricropAndMicronutrientFertilizerMixtureZn-6045511161_5303.jpg",
            title: "Micro Nutrient Fertilizers",
            linkText: "Learn More",
            link: "#"
        },
        {
            image: "https://gardenerspath.com/wp-content/uploads/2020/05/Spraying-Fungicide-on-Leaves.jpg",
            title: "Fungicides",
            linkText: "Learn More",
            link: "#"
        },
        {
            image: "https://cdn.the-scientist.com/assets/articleNo/30308/iImg/1481/605af452-974f-4063-8f1e-2869d2007bac-roundup-man-full.jpg",
            title: "Herbicides",
            linkText: "Know More",
            link: "#"
        },
        {
            image: "https://agromoris.com/wp-content/uploads/2024/05/insecticide-on-plants-scaled-1.webp",
            title: "Insecticides",
            linkText: "Get Started",
            link: "#"
        },
        {
            image: "https://cdn.cdnparenting.com/articles/2021/07/16191322/380433403.webp",
            title: "Organic Fertilizers",
            linkText: "Buy Now",
            link: "https://urbankhetti.com"
        },
        {
            image: "https://cdn.shopify.com/s/files/1/0767/4655/files/poppy-2502046_1280_grande.jpg?v=1586377952",
            title: "Flower Buds & Seeds",
            linkText: "Buy Now",
            link: "https://urbankhetti.com"
        }
    ];

    // Inject slides dynamically
    const slider = document.getElementById("rhytmelo_slider");

    slidesData.forEach(slide => {
        const slideElement = document.createElement("div");
        slideElement.classList.add("rhytmelo_carousel-slide");
        slideElement.innerHTML = `
            <img src="${slide.image}" alt="${slide.title}">
            <h3>${slide.title}</h3>
            <a href="${slide.link}">${slide.linkText} →</a>
        `;
        slider.appendChild(slideElement);
    });

    // Clone slides for infinite scrolling
    const allSlides = Array.from(slider.children);
    allSlides.forEach(slide => {
        const clonedSlide = slide.cloneNode(true);
        slider.appendChild(clonedSlide); // Append to the end
        slider.insertBefore(clonedSlide.cloneNode(true), slider.firstChild); // Prepend to the start
    });

    // Recalculate slides
    const slides = Array.from(document.querySelectorAll('.rhytmelo_carousel-slide'));
    let currentIndex = allSlides.length; // Start at the first real slide

    // Update carousel position
    function updateSliderPosition() {
        const slideWidth = slides[0].offsetWidth + parseFloat(getComputedStyle(slides[0]).marginRight);
        slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    }

    // Initialize carousel position
    updateSliderPosition();

    // Navigation Buttons
    const prevButton = document.querySelector('.rhytmelo_carousel-prev');
    const nextButton = document.querySelector('.rhytmelo_carousel-next');

    // Next Button
    nextButton.addEventListener('click', () => {
        currentIndex++;
        slider.style.transition = "transform 0.5s ease-in-out";
        updateSliderPosition();
        if (currentIndex >= slides.length - allSlides.length) {
            setTimeout(() => {
                slider.style.transition = "none";
                currentIndex = allSlides.length;
                updateSliderPosition();
            }, 500);
        }
    });

    // Prev Button
    prevButton.addEventListener('click', () => {
        currentIndex--;
        slider.style.transition = "transform 0.5s ease-in-out";
        updateSliderPosition();
        if (currentIndex < allSlides.length) {
            setTimeout(() => {
                slider.style.transition = "none";
                currentIndex = slides.length - allSlides.length - 1;
                updateSliderPosition();
            }, 500);
        }
    });

    // Auto-scroll
    let autoSlideInterval = setInterval(() => {
        nextButton.click();
    }, 3000);

    // Pause auto-scroll on manual interaction
    [nextButton, prevButton].forEach(button => {
        button.addEventListener('click', () => {
            clearInterval(autoSlideInterval);
            autoSlideInterval = setInterval(() => {
                nextButton.click();
            }, 3000);
        });
    });

    // Responsive adjustments
    window.addEventListener('resize', updateSliderPosition);

    // Accessibility: ARIA labels for navigation buttons
    nextButton.setAttribute('aria-label', 'Next Slide');
    prevButton.setAttribute('aria-label', 'Previous Slide');
</script>
