// Gallery functionality
document.addEventListener('DOMContentLoaded', () => {
    const images = [
        'https://images.unsplash.com/photo-1542751371-adc38448a05e',
        'https://images.unsplash.com/photo-1511512578047-dfb367046420',
        'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8',
        'https://images.unsplash.com/photo-1509198397868-475647b2a1e5',
        'https://images.unsplash.com/photo-1534423861386-85a16f5d13fd',
        'https://images.unsplash.com/photo-1524178232363-1fb2b075b655',
        'https://images.unsplash.com/photo-1550745165-9bc0b252726f',
        'https://images.unsplash.com/photo-1511512578047-dfb367046420',
        'https://images.unsplash.com/photo-1542751371-adc38448a05e',
        'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8'
    ];

    const galleryTrack = document.querySelector('.gallery-track');
    let currentSlide = 0;

    // Create gallery slides
    images.forEach((image, index) => {
        const slide = document.createElement('div');
        slide.className = 'gallery-slide';
        slide.innerHTML = `<img src="${image}" alt="Gallery image ${index + 1}">`;
        galleryTrack.appendChild(slide);
    });

    // Auto-slide functionality
    function updateSlide() {
        const slideWidth = 100 / (window.innerWidth >= 768 ? 3 : 2);
        galleryTrack.style.transform = `translateX(-${currentSlide * slideWidth}%)`;
    }

    setInterval(() => {
        currentSlide = (currentSlide + 1) % images.length;
        updateSlide();
    }, 3000);

    // Update slide width on resize
    window.addEventListener('resize', updateSlide);
});