import React from 'react';
import { Twitter, Instagram, Facebook, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-6 mb-6 md:mb-0">
            <img src="/game-logo.svg" alt="Game Logo" className="h-8" />
            <div className="flex gap-4">
              <a href="#" className="hover:text-purple-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-purple-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-purple-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-purple-400 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
          <p className="text-sm text-gray-400">© 2024 CoCoRP JP</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;