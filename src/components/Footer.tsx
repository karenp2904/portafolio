import React from 'react';
import { Icon } from '@iconify/react';

export const Footer: React.FC = () => {
  return (
    <footer className="gradient-primary text-white py-8 mt-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold mb-2 flex items-center">
              <span className="bg-white text-primary rounded-full w-8 h-8 flex items-center justify-center mr-2">KP</span>
              Portafolio
            </h2>
            <p className="text-sm text-white/80">Ingeniería de Sistemas e Informática</p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              <a 
                href="https://www.linkedin.com/in/karen-perez-b81497339" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-white/80 transition duration-300 bg-white/10 p-3 rounded-full"
                aria-label="LinkedIn"
              >
                <Icon icon="logos:linkedin-icon" className="text-xl" />
              </a>
              <a 
                href="mailto:karenperezlun04@gmail.com" 
                className="hover:text-white/80 transition duration-300 bg-white/10 p-3 rounded-full"
                aria-label="Email"
              >
                <Icon icon="lucide:mail" className="text-xl" />
              </a>
              <a 
                href="https://wa.me/573157660279" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-white/80 transition duration-300 bg-white/10 p-3 rounded-full"
                aria-label="WhatsApp"
              >
                <Icon icon="logos:whatsapp" className="text-xl" />
              </a>
            </div>
            <p className="text-sm text-white/80">&copy; 2025 Karen Yulieth Perez</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
