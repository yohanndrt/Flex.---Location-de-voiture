document.addEventListener('DOMContentLoaded', function() {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.carousel-item');
    const totalSlides = slides.length;
    const nextBtn = document.querySelector('.carousel-control-next');
    const prevBtn = document.querySelector('.carousel-control-prev');

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove('active');
            if (i === index) {
                slide.classList.add('active');
            }
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        showSlide(currentSlide);
    }

    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);

    // Auto slide
    function autoSlide() {
        nextSlide();
        setTimeout(autoSlide, 5000); // Change slide every 5 seconds
    }

    // Start auto slide
    autoSlide();
});

// Bouton "En savoir plus avec déroulement" 
document.addEventListener('DOMContentLoaded', function() {
    const toggleDescriptionBtn = document.getElementById('toggleDescription');
    const descriptionText = document.getElementById('text-container');

    // Masquer initialement le texte
    descriptionText.classList.add('hidden');

    toggleDescriptionBtn.addEventListener('click', function() {
        if (descriptionText.classList.contains('expanded')) {
            descriptionText.classList.remove('expanded');
            descriptionText.classList.add('hidden');
            toggleDescriptionBtn.textContent = 'En savoir plus';
        } else {
            descriptionText.classList.remove('hidden');
            descriptionText.classList.add('expanded');
            toggleDescriptionBtn.textContent = 'Réduire';
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const menu = document.querySelector('.tabs > ul > li > a');
    const dropdown = document.querySelector('.dropdown');

    menu.addEventListener('click', function(event) {
        event.preventDefault();
        dropdown.classList.toggle('active');
    });

    // Fermer le dropdown si on clique en dehors
    document.addEventListener('click', function(event) {
        if (!menu.contains(event.target) && !dropdown.contains(event.target)) {
            dropdown.classList.remove('active');
        }
    });
});







