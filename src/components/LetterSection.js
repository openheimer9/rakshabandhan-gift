import React from 'react';
import './LetterSection.css';

const LetterSection = ({ isActive }) => {
  const handlePrint = () => {
    const printWindow = window.open('', '_blank');
    
    printWindow.document.close();
    printWindow.print();
  };

  const handleDownloadPDF = () => {
    handlePrint();
  };

  return (
    <section className={`section ${isActive ? 'active' : ''}`}>
      <div className="letter-container">
        <h3 className="section-title">Rakshabandhan Letter</h3>
        <div className="letter-content">
          <div className="letter-header">
            <div className="letter-date">Rakshabandhan 2025</div>
            <div className="letter-hearts">💖 💖 💖</div>
          </div>
          <div className="letter-body guj-body">
            <p>To my Dearest Panda 🐼,</p>
            <p>This is our first Rakhi together, and honestly, it means the world to me. You may not be my sister by blood, but from the day I decided to call you my sister , you’ve become even more than that. You’re my family by heart, and that bond is something truly special.

I don’t know how to put it into perfect words, but having you in my life has been like finding the missing piece I didn’t even know I needed. You’ve brought so much warmth, laughter, and meaning into my days. Calling you Panda might be fun and silly, but you really are someone so soft-hearted, strong, and adorable , a perfect mix of cute chaos and deep care.

This Rakshabandhan, I want you to know that I’ll always be there for you not just today, but always. Through thick and thin, in your happy times and tough ones, I’ll be the brother you can count on, no matter what.

Thank you for being in my life. For letting me tie this bond of love and trust with you. For being my Panda not by chance, but by choice. 💙</p>
            <p>with all my love,</p>
            <p>Your Proud Brother</p>
            <p className="signature">Bhagirath</p>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default LetterSection; 