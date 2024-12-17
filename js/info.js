// Information section functionality
document.addEventListener('DOMContentLoaded', () => {
    const images = [
        'https://images.unsplash.com/photo-1542751371-adc38448a05e',
        'https://images.unsplash.com/photo-1511512578047-dfb367046420',
        'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8',
        'https://images.unsplash.com/photo-1509198397868-475647b2a1e5',
        'https://images.unsplash.com/photo-1534423861386-85a16f5d13fd',
        'https://images.unsplash.com/photo-1524178232363-1fb2b075b655'
    ];

    const infoGrid = document.querySelector('.info-grid');

    // Create info cards
    images.forEach((image, index) => {
        const card = document.createElement('div');
        card.className = `info-card ${index === 5 ? 'wide' : ''}`;
        card.innerHTML = `
            <img src="${image}" alt="Info image ${index + 1}">
            <div class="info-overlay">
                <h3>Title ${index + 1}</h3>
                <p>Description for image ${index + 1}</p>
            </div>
        `;
        infoGrid.appendChild(card);
    });
});