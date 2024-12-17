import React, { useState, useEffect } from 'react';

const Gallery: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
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

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12">Gallery</h2>
        <div className="overflow-hidden">
          <div className="flex gap-4 transition-transform duration-500" style={{
            transform: `translateX(-${currentSlide * (100 / (window.innerWidth >= 768 ? 3 : 2))}%)`
          }}>
            {images.map((image, index) => (
              <div
                key={index}
                className="flex-none w-full md:w-1/3"
              >
                <img
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Gallery;