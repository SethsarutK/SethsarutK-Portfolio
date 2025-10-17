import React from 'react';
import { useForm } from '../hooks/useForm';
import '../styles/Contact.css';

const Contact = () => {
  const {
    values,
    errors,
    handleChange,
    validateForm,
    resetForm,
    setIsSubmitting,
    isSubmitting
  } = useForm({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = React.useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    
    try {
      setIsSubmitting(true);
      
      // Mock API call - simulate sending email
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Log the contact attempt (in real app, this would be sent to backend)
      console.log('Contact form submitted:', {
        name: values.name,
        email: values.email,
        message: values.message,
        timestamp: new Date().toISOString()
      });
      
      resetForm();
      setStatus('success');
      alert('ขอบคุณสำหรับข้อความของคุณ! เราจะติดต่อกลับโดยเร็วที่สุด');
    } catch (error) {
      console.error('Contact form error:', error);
      setStatus('error');
      alert('เกิดข้อผิดพลาด กรุณาลองใหม่อีกครั้ง หรือติดต่อโดยตรงผ่านอีเมล');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      className="contact-section"
      id="contact"
    >
      <h2 className="contact-title">
        Let's Connect
      </h2>
      
      <div className="contact-content">
        <div className="contact-info">
          <div>
            <h3>Get in Touch</h3>
            <p>I'm always interested in hearing about new projects and opportunities.</p>
          </div>
          
          <div className="contact-links">
            <a href="mailto:sethsarut.k@gmail.com" className="contact-link">
              sethsarut.k@gmail.com
            </a>
            <a href="tel:+1234567890" className="contact-link">
              +1 (234) 567-890
            </a>
          </div>
        </div>

        <form 
          className="contact-form"
          onSubmit={handleSubmit}
        >
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={values.name}
              onChange={handleChange}
              className={errors.name ? 'error' : ''}
              aria-describedby={errors.name ? 'name-error' : undefined}
            />
            {errors.name && (
              <span id="name-error" className="error-message">
                {errors.name}
              </span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              className={errors.email ? 'error' : ''}
              aria-describedby={errors.email ? 'email-error' : undefined}
            />
            {errors.email && (
              <span id="email-error" className="error-message">
                {errors.email}
              </span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={values.message}
              onChange={handleChange}
              className={errors.message ? 'error' : ''}
              aria-describedby={errors.message ? 'message-error' : undefined}
              rows={5}
            />
            {errors.message && (
              <span id="message-error" className="error-message">
                {errors.message}
              </span>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;