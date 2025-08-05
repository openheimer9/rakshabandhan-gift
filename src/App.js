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
    { id: 2, src: '/uploads/jinal2.jpg', caption: 'Beautiful memories together' },
    { id: 3, src: '/uploads/jinal3.jpg', caption: 'Precious moments' },
    { id: 4, src: '/uploads/jinal4.jpg', caption: 'Special times' },
    { id: 5, src: '/uploads/jinal5.jpg', caption: 'Cherished memories' },
    { id: 6, src: '/uploads/jinal6.jpg', caption: 'Wonderful times' },
    { id: 7, src: '/uploads/jinal7.jpg', caption: 'Happy moments' },
    { id: 8, src: '/uploads/jinal8.jpg', caption: 'Joyful memories' },
    { id: 9, src: '/uploads/jinal9.jpg', caption: 'Lovely times' },
    { id: 10, src: '/uploads/jinal10.jpg', caption: 'Beautiful moments' },
    { id: 11, src: '/uploads/jinal11.jpg', caption: 'Special memories' },
    { id: 12, src: '/uploads/jinal12.jpg', caption: 'Precious times' },
    { id: 13, src: '/uploads/jinal13.jpg', caption: 'Happy memories' },
    { id: 14, src: '/uploads/jinal14.jpg', caption: 'Wonderful moments' },
    { id: 15, src: '/uploads/jinal15.jpg', caption: 'Cherished times' },
    { id: 16, src: '/uploads/jinal16.jpg', caption: 'Joyful memories' },
    { id: 17, src: '/uploads/jinal17.jpg', caption: 'Beautiful times' },
    { id: 18, src: '/uploads/jinal18.jpg', caption: 'Special moments' },
    { id: 19, src: '/uploads/jinal19.jpg', caption: 'Precious memories' },
    { id: 20, src: '/uploads/jinal20.jpg', caption: 'Happy times' },
    { id: 21, src: '/uploads/jinal21.jpg', caption: 'Wonderful memories' },
    { id: 22, src: '/uploads/jinal22.jpg', caption: 'Cherished moments' },
    { id: 23, src: '/uploads/jinal 23.jpg', caption: 'Joyful times' },
    { id: 24, src: '/uploads/jinal 24.jpg', caption: 'Beautiful memories' },
    { id: 25, src: '/uploads/jinal 25.jpg', caption: 'Special times' },
    { id: 26, src: '/uploads/jinal26.jpg', caption: 'Precious moments' }
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
