import React, { useState } from 'react';
import './App.css';
import Navigation from './components/Navigation';
import MusicControls from './components/MusicControls';
import FloatingElements from './components/FloatingElements';
import HomeSection from './components/HomeSection';
import GallerySection from './components/GallerySection';
import LetterSection from './components/LetterSection';
import PhotoModal from './components/PhotoModal';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const [modalPhoto, setModalPhoto] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Static data
  const childhoodPhoto = '/uploads/jinal1.jpg';
  const galleryPhotos = [
    { id: 2, src: '/uploads/jinal2.jpg', caption: 'Beautiful memories together', alt: 'Jinal and Bhagirath Rakshabandhan memories' },
    { id: 3, src: '/uploads/jinal3.jpg', caption: 'Precious moments', alt: 'Jinal Rakhi celebration moments' },
    { id: 4, src: '/uploads/jinal4.jpg', caption: 'Special times', alt: 'Special Rakshabandhan times with Jinal' },
    { id: 5, src: '/uploads/jinal5.jpg', caption: 'Cherished memories', alt: 'Cherished Rakshabandhan memories with Jinal' },
    { id: 6, src: '/uploads/jinal6.jpg', caption: 'Wonderful times', alt: 'Wonderful Rakshabandhan times with Jinal' },
    { id: 7, src: '/uploads/jinal7.jpg', caption: 'Happy moments', alt: 'Happy Rakshabandhan moments with Jinal' },
    { id: 8, src: '/uploads/jinal8.jpg', caption: 'Joyful memories', alt: 'Joyful Rakshabandhan memories with Jinal' },
    { id: 9, src: '/uploads/jinal9.jpg', caption: 'Lovely times', alt: 'Lovely Rakshshabandhan times with Jinal' },
    { id: 10, src: '/uploads/jinal10.jpg', caption: 'Beautiful moments', alt: 'Beautiful Rakshabandhan moments with Jinal' },
    { id: 11, src: '/uploads/jinal11.jpg', caption: 'Special memories', alt: 'Special Rakshabandhan memories with Jinal' },
    { id: 12, src: '/uploads/jinal12.jpg', caption: 'Precious times', alt: 'Precious Rakshabandhan times with Jinal' },
    { id: 13, src: '/uploads/jinal13.jpg', caption: 'Happy memories', alt: 'Happy Rakshabandhan memories with Jinal' },
    { id: 14, src: '/uploads/jinal14.jpg', caption: 'Wonderful moments', alt: 'Wonderful Rakshabandhan moments with Jinal' },
    { id: 15, src: '/uploads/jinal15.jpg', caption: 'Cherished times', alt: 'Cherished Rakshabandhan times with Jinal' },
    { id: 16, src: '/uploads/jinal16.jpg', caption: 'Joyful memories', alt: 'Joyful Rakshabandhan memories with Jinal' },
    { id: 17, src: '/uploads/jinal17.jpg', caption: 'Beautiful times', alt: 'Beautiful Rakshabandhan times with Jinal' },
    { id: 18, src: '/uploads/jinal18.jpg', caption: 'Special moments', alt: 'Special Rakshabandhan moments with Jinal' },
    { id: 19, src: '/uploads/jinal19.jpg', caption: 'Precious memories', alt: 'Precious Rakshabandhan memories with Jinal' },
    { id: 20, src: '/uploads/jinal20.jpg', caption: 'Happy times', alt: 'Happy Rakshabandhan times with Jinal' },
    { id: 21, src: '/uploads/jinal21.jpg', caption: 'Wonderful memories', alt: 'Wonderful Rakshabandhan memories with Jinal' },
    { id: 22, src: '/uploads/jinal22.jpg', caption: 'Cherished moments', alt: 'Cherished Rakshabandhan moments with Jinal' },
    { id: 23, src: '/uploads/jinal 23.jpg', caption: 'Joyful times', alt: 'Joyful Rakshabandhan times with Jinal' },
    { id: 24, src: '/uploads/jinal 24.jpg', caption: 'Beautiful memories', alt: 'Beautiful Rakshabandhan memories with Jinal' },
    { id: 25, src: '/uploads/jinal 25.jpg', caption: 'Special times', alt: 'Special Rakshabandhan times with Jinal' },
    { id: 26, src: '/uploads/jinal26.jpg', caption: 'Precious moments', alt: 'Precious Rakshabandhan moments with Jinal' }
  ];

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  const handleMusicToggle = () => {
    setIsMusicPlaying(!isMusicPlaying);
  };

  const handlePhotoClick = (photo) => {
    setModalPhoto(photo);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setModalPhoto(null);
  };

  return (
    <div className="App">
      <MusicControls 
        isPlaying={isMusicPlaying} 
        onToggle={handleMusicToggle} 
      />
      
      <Navigation 
        activeSection={activeSection} 
        onSectionChange={handleSectionChange} 
      />
      
      <FloatingElements />
      
      <main className="main-content">
        <HomeSection 
          isActive={activeSection === 'home'} 
          childhoodPhoto={childhoodPhoto}
          onSectionChange={handleSectionChange}
        />
        
        <GallerySection 
          isActive={activeSection === 'gallery'} 
          photos={galleryPhotos} 
          onPhotoClick={handlePhotoClick} 
        />
        
        <LetterSection isActive={activeSection === 'letter'} />
      </main>
      
      <PhotoModal 
        isOpen={isModalOpen} 
        photo={modalPhoto} 
        onClose={handleModalClose} 
      />
    </div>
  );
}

export default App;
