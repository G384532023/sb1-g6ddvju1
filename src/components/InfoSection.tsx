import React from 'react';

const InfoSection: React.FC = () => {
  const images = [
    'https://images.unsplash.com/photo-1542751371-adc38448a05e',
    'https://images.unsplash.com/photo-1511512578047-dfb367046420',
    'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8',
    'https://images.unsplash.com/photo-1509198397868-475647b2a1e5',
    'https://images.unsplash.com/photo-1534423861386-85a16f5d13fd',
    'https://images.unsplash.com/photo-1524178232363-1fb2b075b655'
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-black to-purple-900/20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12">Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {images.slice(0, 6).map((image, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-lg ${
                index === 5 ? 'md:col-span-2' : ''
              }`}
            >
              <img
                src={image}
                alt={`Info image ${index + 1}`}
                className="w-full h-64 object-cover transition-transform duration-300 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-xl font-bold">Title {index + 1}</h3>
                  <p className="text-sm text-gray-300">Description for image {index + 1}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default InfoSection;