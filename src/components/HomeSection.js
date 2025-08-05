import React from 'react';
import './HomeSection.css';

const HomeSection = ({ isActive, childhoodPhoto, onSectionChange }) => {
  const handleViewMemories = () => {
    onSectionChange('gallery');
  };

  return (
    <section className={`section ${isActive ? 'active' : ''}`}>
      <div className="hero-banner">
        <div className="hero-content">
          {/* Main Headline */}
          <div className="headline-section">
            <h1 className="main-headline">Happy Rakshabandhan Jinal!</h1>
            <h2 className="sub-headline">Our First Rakhi Together</h2>
            <p className="affectionate-line">To my dearest sister 💛</p>
          </div>
          
          {/* Festive Divider */}
          <div className="festive-divider">
            <span>🎀</span>
            <span>✨</span>
            <span>💝</span>
          </div>
          
          {/* Childhood Photo with Enhanced Presentation */}
          <div className="childhood-photo">
            <div className="photo-container">
              <div className="photo-frame">
                <img 
                  src={childhoodPhoto} 
                  alt="Jinal's childhood photo - Our beginnings, captured in this memory" 
                  className="childhood-photo-img"
                />
                <div className="photo-caption">
                  <p>Our beginnings, captured in this memory</p>
                </div>
              </div>
            </div>
          </div>

          {/* Welcome Text */}
          <div className="introduction">
            <p>
              Dear Jinal, as we celebrate our first Rakshabandhan together, my heart is filled with joy and gratitude for the beautiful bond we share. This sacred thread of love connects us not just as siblings, but as lifelong friends who will always protect and cherish each other. May our relationship grow stronger with each passing year, and may we create countless beautiful memories together.
            </p>
          </div>

          {/* Call to Action Button */}
          <div className="cta-section">
            <button className="view-memories-btn" onClick={handleViewMemories}>
              <span className="btn-icon">📸</span>
              <span className="btn-text">View Your Gallery</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;