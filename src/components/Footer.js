import React from 'react';
import { useLanguage } from '../contexts/AppContext';
import { SOCIAL_LINKS } from '../constants';
import '../styles/Footer.css';

function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Contact Info Section */}
          <div className="footer-section contact-info">
            <h3>{t('contactInfo')}</h3>
            <div className="contact-items">
              <div className="contact-item">
                <span className="contact-icon">📧</span>
                <div>
                  <strong>{t('email')}</strong>
                  <p>bhumjai123@gmail.com</p>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📱</span>
                <div>
                  <strong>{t('phone')}</strong>
                  <p>064-692-2542</p>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">🏫</span>
                <div>
                  <strong>โรงเรียน</strong>
                  <p>โรงเรียนสวนกุหลาบวิทยาลัย</p>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">🎯</span>
                <div>
                  <strong>เป้าหมาย</strong>
                  <p>KMUTT วิศวกรรมคอมพิวเตอร์</p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="footer-section social-section">
            <h3>{t('followMe')}</h3>
            <div className="social-links">
              {SOCIAL_LINKS.map((link, index) => {
                const getIcon = (name) => {
                  switch(name.toLowerCase()) {
                    case 'line': return 'https://upload.wikimedia.org/wikipedia/commons/4/41/LINE_logo.svg';
                    case 'facebook': return 'https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg';
                    case 'email': return 'https://img.icons8.com/fluency/48/email.png';
                    case 'instagram': return 'https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png';
                    default: return 'https://img.icons8.com/material-outlined/24/link.png';
                  }
                };
                
                return (
                  <a 
                    key={index}
                    href={link.url} 
                    className="social-link"
                    target={link.name !== 'Email' ? '_blank' : '_self'}
                    rel={link.name !== 'Email' ? 'noopener noreferrer' : ''}
                  >
                    <div className="social-icon">
                      <img src={getIcon(link.name)} alt={link.name} />
                    </div>
                    <span>{link.name}</span>
                  </a>
                );
              })}
              <a href="https://www.instagram.com/_.sxtsrtt/" target="_blank" rel="noopener noreferrer" className="social-link">
                <div className="social-icon">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="Instagram" />
                </div>
                <span>Instagram</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;