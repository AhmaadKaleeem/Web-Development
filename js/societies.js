document.addEventListener('DOMContentLoaded', function() {
    // Navbar hover effect
    const navLinks = document.querySelectorAll('.navbar nav a');
    navLinks.forEach(link => {
        link.addEventListener('mouseover', () => {
            link.style.transform = 'scale(1.2)';
            link.style.transition = 'transform 0.3s';
        });
        link.addEventListener('mouseout', () => {
            link.style.transform = 'scale(1)';
        });
    });

    // Slider functionality
    const slides = document.querySelector('.slides');
    const slide = document.querySelectorAll('.slide');
    let index = 0;
    const slidesToShow = 4; // Number of slides to show at once
    const slideWidth = 100 / slidesToShow; // Calculate slide width

    slide.forEach(slide => {
        slide.style.flex = `0 0 ${slideWidth}%`;
    });

    function showSlide(n) {
        if (n >= slide.length / slidesToShow) {
            index = 0;
        } else if (n < 0) {
            index = Math.ceil(slide.length / slidesToShow) - 1;
        } else {
            index = n;
        }
        slides.style.transform = `translateX(${-index * 100}%)`;
    }

    function nextSlide() {
        showSlide(index + 1);
    }

    setInterval(nextSlide, 5000);

    // Scroll-to-Top Button
    const scrollToTopBtn = document.querySelector('.scroll-to-top');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollToTopBtn.classList.add('visible');
            scrollToTopBtn.classList.remove('hidden');
        } else {
            scrollToTopBtn.classList.add('hidden');
            scrollToTopBtn.classList.remove('visible');
        }
    });

    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Scroll Animation
    const contentSections = document.querySelectorAll('.content-section');
    const options = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, options);

    contentSections.forEach(section => {
        observer.observe(section);
    });
});