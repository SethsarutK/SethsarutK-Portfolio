import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import '../styles/ImageCarousel.css';

function ImageCarousel({ images, isOpen, onClose, initialIndex = 0 }) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [imageLoading, setImageLoading] = useState(true);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    if (isOpen) {
      // บันทึกตำแหน่ง scroll ปัจจุบัน
      setScrollPosition(window.pageYOffset);
      // ป้องกันการ scroll ของ body
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.top = `-${window.pageYOffset}px`;
      document.body.style.width = '100%';
    } else {
      // คืนค่าการ scroll
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      window.scrollTo(0, scrollPosition);
    }

    return () => {
      // cleanup เมื่อ component unmount
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
    };
  }, [isOpen, scrollPosition]);

  // Reset loading state เมื่อเปลี่ยนรูป
  useEffect(() => {
    if (images && images[currentIndex]) {
      setImageLoading(true);
      setImageError(false);
    }
  }, [currentIndex, images]);

  if (!isOpen || !images || images.length === 0) return null;

  const handleImageLoad = () => {
    setImageLoading(false);
  };

  const handleImageError = () => {
    setImageLoading(false);
    setImageError(true);
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const modalContent = (
    <div className="image-carousel-overlay" onClick={handleBackdropClick}>
      <div className="image-carousel-content">
        <button className="carousel-close" onClick={onClose}>
          ×
        </button>
        
        {images.length > 1 && (
          <>
            <button className="carousel-nav carousel-prev" onClick={prevImage}>
              ‹
            </button>
            <button className="carousel-nav carousel-next" onClick={nextImage}>
              ›
            </button>
          </>
        )}

        <div className="carousel-image-container">
          {/* Loading Spinner */}
          {imageLoading && (
            <div className="carousel-loading">
              <div className="loading-spinner"></div>
              <p>กำลังโหลด...</p>
            </div>
          )}
          
          {/* Error Message */}
          {imageError && (
            <div className="carousel-error">
              <p>⚠️ ไม่สามารถโหลดรูปภาพได้</p>
            </div>
          )}
          
          <img 
            src={images[currentIndex]} 
            alt={`Certificate ${currentIndex + 1}`}
            className="carousel-image"
            onLoad={handleImageLoad}
            onError={handleImageError}
            style={{ display: imageLoading ? 'none' : 'block' }}
          />
        </div>

        {images.length > 1 && (
          <div className="carousel-indicators">
            {images.map((_, index) => (
              <button
                key={index}
                className={`carousel-indicator ${index === currentIndex ? 'active' : ''}`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        )}

        <div className="carousel-counter">
          {currentIndex + 1} / {images.length}
        </div>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
}

export default ImageCarousel;