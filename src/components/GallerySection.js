import React, { useRef } from 'react';
import './GallerySection.css';

const GallerySection = ({ isActive, photos, onPhotoClick }) => {
  const getRandomRotation = () => {
    return Math.random() * 6 - 3; // Random rotation between -3 and 3 degrees
  };

  const getRandomVerticalOffset = () => {
    return Math.random() * 40 - 20; // Random vertical offset between -20px and 20px
  };

  return (
    <section className={`section ${isActive ? 'active' : ''}`}>
      <div className="gallery-container">
      
        <h2 className="section-title">Panda's Photo Gallery</h2>
        <p className="section-subtitle">
          {photos.length > 0 ? `${photos.length} beautiful moments` : 'No photos uploaded yet'}
        </p>
        
        {photos.length > 0 ? (
          <div className="gallery-grid">
            {photos.map((photo) => (
              <div 
                key={photo.id} 
                className="gallery-item"
                onClick={() => onPhotoClick(photo)}
                style={{
                  '--random-rotate': `${getRandomRotation()}deg`,
                  '--random-offset-y': `${getRandomVerticalOffset()}px`
                }}
              >
                <div className="photo-wrapper">
                  <img src={photo.src} alt="Gallery photo" />
                  <div className="gallery-caption">{photo.caption}</div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="empty-gallery">
            <div className="empty-icon">📸</div>
            <h3>No Photos Yet</h3>
            <p>Upload photos through the Admin panel to see them here!</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default GallerySection;