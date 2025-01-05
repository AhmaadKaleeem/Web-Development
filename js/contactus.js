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

    // Initialize AOS
    AOS.init({
        duration: 800, // Animation duration
        once: true, // Whether animation should happen only once - while scrolling down
        easing: 'ease-in-out', // Easing function for animations
        offset: 120, // Offset (in px) from the original trigger point
    });

    // Handle feedback form submission
    const feedbackForm = document.getElementById('feedback-form');
    feedbackForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('feedback-name').value;
        const email = document.getElementById('feedback-email').value;
        const feedback = document.getElementById('feedback-content').value;

        const feedbackItem = document.createElement('div');
        feedbackItem.classList.add('feedback-item');
        feedbackItem.innerHTML = `
            <h3>${name} (${email})</h3>
            <p>${feedback}</p>
        `;

        document.getElementById('feedback-list').appendChild(feedbackItem);

        feedbackForm.reset();
    });
});