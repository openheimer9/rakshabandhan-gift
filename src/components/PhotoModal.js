import React from 'react';
import './PhotoModal.css';

const PhotoModal = ({ isOpen, photo, onClose }) => {
  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      onClose();
    }
  };

  if (!isOpen || !photo) return null;

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close" onClick={onClose}>&times;</span>
        
        <img 
          src={photo.src} 
          alt="Gallery photo" 
          className="modal-image"
        />
        
        <div className="modal-caption">
          <div className="caption-display">
            <p>{photo.caption || 'A beautiful memory'}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoModal;