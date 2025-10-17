import React, { useState } from 'react';
import { useLanguage } from '../contexts/AppContext';
import { SOCIAL_LINKS } from '../constants';
import '../styles/Footer.css';

function Footer() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name.trim()) {
      alert('กรุณากรอกชื่อ');
      return;
    }
    if (!formData.email.trim()) {
      alert('กรุณากรอกอีเมล');
      return;
    }
    if (!formData.message.trim()) {
      alert('กรุณากรอกข้อความ');
      return;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert('กรุณากรอกอีเมลให้ถูกต้อง');
      return;
    }

    try {
      setIsSubmitting(true);
      setSubmitStatus('กำลังส่ง...');
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Show success message
      setSubmitStatus('ส่งข้อความสำเร็จแล้ว!');
      alert(t('thankYouMessage'));
      setFormData({ name: '', email: '', message: '' });
      
      // Clear status after 3 seconds
      setTimeout(() => setSubmitStatus(''), 3000);
    } catch (error) {
      setSubmitStatus('เกิดข้อผิดพลาด กรุณาลองใหม่อีกครั้ง');
    } finally {
      setIsSubmitting(false);
    }
  };

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
                  <p>sethsarut.k@gmail.com</p>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📱</span>
                <div>
                  <strong>{t('phone')}</strong>
                  <p>064-123-4567 (สำหรับติดต่องาน)</p>
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

          {/* Quick Contact Form */}
          <div className="footer-section contact-form">
            <h3>{t('quickContact')}</h3>
            <form onSubmit={handleSubmit} className="quick-form">
              <div className="form-row">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={t('name')}
                  required
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={t('email')}
                  required
                />
              </div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder={t('message')}
                rows="3"
                required
              ></textarea>
              {submitStatus && (
                <div className={`submit-status ${submitStatus.includes('สำเร็จ') ? 'success' : submitStatus.includes('ข้อผิดพลาด') ? 'error' : 'info'}`}>
                  {submitStatus}
                </div>
              )}
              <button 
                type="submit" 
                className="btn btn-primary"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'กำลังส่ง...' : t('sendMessage')}
              </button>
            </form>
          </div>

          {/* Social Links */}
          <div className="footer-section social-section">
            <h3>{t('followMe')}</h3>
            <div className="social-links">
              {SOCIAL_LINKS.map((link, index) => {
                const getIcon = (name) => {
                  switch(name.toLowerCase()) {
                    case 'github': return '�';
                    case 'facebook': return '📘';
                    case 'email': return '📧';
                    case 'linkedin': return '💼';
                    default: return '�';
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
                    <span className="social-icon">{getIcon(link.name)}</span>
                    <span>{link.name}</span>
                  </a>
                );
              })}
              <a href="https://www.instagram.com/_.sxtsrtt/" target="_blank" rel="noopener noreferrer" className="social-link">
                <span className="social-icon">📷</span>
                <span>Instagram</span>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>&copy; 2025 {t('footerCopyright')} | {t('footerRights')}</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;