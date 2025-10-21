import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import '../styles/ImageModal.css';

function ImageModal({ isOpen, onClose, imageSrc, title }) {
  const [imageLoading, setImageLoading] = useState(true);
  const [imageError, setImageError] = useState(false);

  // Reset loading state เมื่อเปิด modal ใหม่
  useEffect(() => {
    if (isOpen && imageSrc) {
      setImageLoading(true);
      setImageError(false);
    }
  }, [isOpen, imageSrc]);

  const handleImageLoad = () => {
    setImageLoading(false);
  };

  const handleImageError = () => {
    setImageLoading(false);
    setImageError(true);
  };
  // ป้องกันการ scroll เมื่อ modal เปิด - แบบง่าย
  useEffect(() => {
    if (isOpen) {
      // บันทึกตำแหน่ง scroll ปัจจุบัน
      const scrollY = window.scrollY;
      const scrollX = window.scrollX;
      
      // ล็อคการ scroll แบบง่าย
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
      
      // ป้องกันทุกการ scroll
      const preventScroll = (e) => {
        e.preventDefault();
        e.stopPropagation();
        return false;
      };
      
      // ป้องกัน scroll events ทั้งหมด
      document.addEventListener('wheel', preventScroll, { passive: false });
      document.addEventListener('touchmove', preventScroll, { passive: false });
      document.addEventListener('scroll', preventScroll, { passive: false });
      document.addEventListener('keydown', (e) => {
        // ป้องกัน arrow keys, page up/down, home/end
        if ([32, 33, 34, 35, 36, 37, 38, 39, 40].includes(e.keyCode)) {
          if (e.key !== 'Escape') { // ยกเว้น ESC key
            e.preventDefault();
          }
        }
      });
      
      return () => {
        // คืนค่าการ scroll เมื่อปิด modal
        document.body.style.overflow = '';
        document.documentElement.style.overflow = '';
        
        // ลบ event listeners
        document.removeEventListener('wheel', preventScroll);
        document.removeEventListener('touchmove', preventScroll);
        document.removeEventListener('scroll', preventScroll);
      };
    }
  }, [isOpen]);

  // ESC key เพื่อปิด modal
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    
    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
      return () => document.removeEventListener('keydown', handleEsc);
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const modalContent = (
    <div 
      className="popup-overlay" 
      onClick={onClose}
      style={{
        position: 'fixed',
        top: '0px',
        left: '0px',
        right: '0px', 
        bottom: '0px',
        width: '100vw',
        height: '100vh',
        zIndex: 999999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 0,
        padding: 0,
        transform: 'none',

      }}
    >
      <div 
        className="popup-content" 
        onClick={(e) => e.stopPropagation()}
        style={{
          position: 'relative',
          zIndex: 1000000,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <button 
          className="close-btn" 
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '10px',
            right: '15px',
            zIndex: 1000001
          }}
        >
          ✕
        </button>
        
        {/* Loading Spinner */}
        {imageLoading && (
          <div className="image-loading">
            <div className="loading-spinner"></div>
            <p>กำลังโหลด...</p>
          </div>
        )}
        
        {/* Error Message */}
        {imageError && (
          <div className="image-error">
            <p>⚠️ ไม่สามารถโหลดรูปภาพได้</p>
          </div>
        )}
        
        <img 
          src={imageSrc} 
          alt={title} 
          className="popup-image"
          onLoad={handleImageLoad}
          onError={handleImageError}
          style={{ display: imageLoading ? 'none' : 'block' }}
        />
      </div>
    </div>
  );

  // Render ใน body โดยตรง
  return createPortal(modalContent, document.body);
}

export default ImageModal;