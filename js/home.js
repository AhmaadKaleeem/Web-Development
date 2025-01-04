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

    // Scroll animation
    const contentSections = document.querySelectorAll('.content-section');
    const options = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('pop-up');
                observer.unobserve(entry.target);
            }
        });
    }, options);

    contentSections.forEach(section => {
        observer.observe(section);
    });

    // Gallery hover effect
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach(item => {
        item.addEventListener('mouseover', () => {
            const description = item.querySelector('.description');
            description.style.opacity = '1';
        });
        item.addEventListener('mouseout', () => {
            const description = item.querySelector('.description');
            description.style.opacity = '0';
        });
    });
});