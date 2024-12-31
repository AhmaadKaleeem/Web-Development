document.addEventListener('DOMContentLoaded', function() {
    const galleryItems = document.querySelectorAll('.gallery-item');

    galleryItems.forEach(item => {
        item.addEventListener('mouseover', () => {
            item.style.transform = 'scale(1.05)';
            item.style.boxShadow = '0px 8px 25px rgba(0, 0, 0, 0.3)';
        });

        item.addEventListener('mouseout', () => {
            item.style.transform = 'scale(1)';
            item.style.boxShadow = '0px 4px 15px rgba(0, 0, 0, 0.2)';
        });
    });
});