import React, { useState, useEffect } from 'react';
import { Menu, Users, Twitter, Instagram, Facebook, Youtube } from 'lucide-react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Gallery from './components/Gallery';
import InfoSection from './components/InfoSection';
import Footer from './components/Footer';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white">
      <Header 
        isSidebarOpen={isSidebarOpen} 
        setIsSidebarOpen={setIsSidebarOpen} 
      />
      
      <Sidebar isOpen={isSidebarOpen} />

      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative h-screen">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1511512578047-dfb367046420')] bg-cover bg-center" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/90" />
          
          <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center">
            <div className="max-w-2xl">
              <h1 className="text-5xl md:text-7xl font-bold mb-6">Game Title</h1>
              <div className="flex items-center gap-4 mb-8">
                <Users className="w-6 h-6" />
                <span className="text-xl">2-4 Players</span>
              </div>
              <a href="#join" className="inline-block bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors">
                Join Game
              </a>
            </div>
          </div>
        </section>

        <InfoSection />
        <Gallery />
      </main>

      <Footer />
    </div>
  );
}

export default App;