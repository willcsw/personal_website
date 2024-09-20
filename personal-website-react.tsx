import React from 'react';
import { useState } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const PersonalWebsite = () => {
  const [activeTab, setActiveTab] = useState('about');

  const renderContent = () => {
    switch(activeTab) {
      case 'about':
        return (
          <div className="mt-4">
            <h2 className="text-2xl font-bold mb-2">About Me</h2>
            <p>Hello! I'm a web developer passionate about creating beautiful and functional websites. I love working with React and exploring new technologies.</p>
          </div>
        );
      case 'projects':
        return (
          <div className="mt-4">
            <h2 className="text-2xl font-bold mb-2">My Projects</h2>
            <ul className="list-disc pl-5">
              <li>Personal Website (React)</li>
              <li>E-commerce Platform (Next.js)</li>
              <li>Weather App (React Native)</li>
            </ul>
          </div>
        );
      case 'contact':
        return (
          <div className="mt-4">
            <h2 className="text-2xl font-bold mb-2">Contact Me</h2>
            <p>Feel free to reach out to me at: example@email.com</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-2">Your Name</h1>
        <p className="text-xl">Web Developer & Designer</p>
      </header>

      <nav className="flex justify-center space-x-4 mb-6">
        <button 
          onClick={() => setActiveTab('about')} 
          className={`px-4 py-2 rounded ${activeTab === 'about' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          About
        </button>
        <button 
          onClick={() => setActiveTab('projects')} 
          className={`px-4 py-2 rounded ${activeTab === 'projects' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          Projects
        </button>
        <button 
          onClick={() => setActiveTab('contact')} 
          className={`px-4 py-2 rounded ${activeTab === 'contact' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          Contact
        </button>
      </nav>

      <main>
        {renderContent()}
      </main>

      <footer className="mt-8 text-center">
        <div className="flex justify-center space-x-4">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <Github size={24} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <Linkedin size={24} />
          </a>
          <a href="mailto:example@email.com">
            <Mail size={24} />
          </a>
        </div>
        <p className="mt-2">&copy; 2024 Your Name. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default PersonalWebsite;
