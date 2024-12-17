import React from 'react';
import { X } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
  return (
    <div className={`fixed top-0 right-0 h-full w-80 bg-black/95 backdrop-blur-lg transform transition-transform duration-300 ease-in-out z-40 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
      <div className="p-8">
        <nav className="space-y-6">
          <a href="#home" className="block text-lg hover:text-purple-400 transition-colors">Home</a>
          <a href="#about" className="block text-lg hover:text-purple-400 transition-colors">About</a>
          <a href="#gallery" className="block text-lg hover:text-purple-400 transition-colors">Gallery</a>
          <a href="#join" className="block text-lg hover:text-purple-400 transition-colors">Join Game</a>
        </nav>
      </div>
    </div>
  );
}

export default Sidebar;