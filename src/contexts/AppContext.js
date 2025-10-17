import React, { createContext, useContext, useState, useEffect } from 'react';

// Theme Context
const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved === 'dark';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Translation data
const translations = {
  th: {
    // Navigation
    home: 'หน้าแรก',
    about: 'เกี่ยวกับฉัน',
    portfolio: 'ผลงาน',
    
    // Home page
    heroTitle: 'สวัสดีครับ ผมคือ นาย เศรษฐ์ศรุต กตคุณไพศาล',
    heroSubtitle: 'นักเรียนชั้น ม.6 ที่มีความฝันจะเข้าเรียนที่ มจธ. สาขาวิศวกรรมคอมพิวเตอร์',
    heroDescription: 'ผมมีความหลงใหลในการพัฒนาซอฟต์แวร์ AI และ IoT มุ่งมั่นที่จะเป็นวิศวกรที่นำเทคโนโลยีมาใช้แก้ปัญหาสังคมไทย',
    viewPortfolio: 'ดูผลงาน',
    aboutMe: 'เกี่ยวกับฉัน',
    contactMe: 'ติดต่อฉัน',
    contactTitle: 'ติดต่อฉัน',
    sendMessage: 'ส่งข้อความ',
    name: 'ชื่อ',
    email: 'อีเมล',
    message: 'ข้อความ',
    
    // Home page additional keys
    highlights: 'จุดเด่น',
    education: 'การศึกษา',
    awards: 'รางวัล',
    skills: 'ทักษะ',
    readyToStart: 'พร้อมที่จะเริ่มต้น',
    readyDescription: 'มาร่วมงานกันเพื่อสร้างสิ่งที่ยอดเยี่ยมด้วยกัน',
    
    // About page keys  
    aboutTitle: 'เกี่ยวกับฉัน',
    personalInfo: 'ข้อมูลส่วนตัว',
    interests: 'ความสนใจ',
    
    // Portfolio page keys
    portfolioTitle: 'ผลงานของฉัน',
    projects: 'โปรเจกต์',
    achievements: 'ความสำเร็จ',
    skillsAndAbilities: 'ทักษะและความสามารถ',
    
    // New navigation keys
    competitions: 'การแข่งขัน',
    activities: 'กิจกรรม',
    workpieces: 'ผลงาน',
    
    // Footer keys
    contactInfo: 'ข้อมูลติดต่อ',
    phone: 'เบอร์โทร',
    address: 'ที่อยู่',
    location: 'กรุงเทพมหานคร ประเทศไทย',
    quickContact: 'ติดต่อด่วน',
    followMe: 'ติดตามฉัน',
    thankYouMessage: 'ขอบคุณสำหรับข้อความของคุณ!'
  },
  en: {
    // Navigation
    home: 'Home',
    about: 'About Me',
    portfolio: 'Portfolio',
    
    // Home page
    heroTitle: 'Hello, I am Mr. Sethsarut Katakhunpaisarn',
    heroSubtitle: 'Aspiring Computer Engineering student with dreams to study at KMUTT',
    heroDescription: 'Passionate about software development, AI, and IoT. Committed to becoming an engineer who uses technology to solve Thai society\'s challenges',
    viewPortfolio: 'View Portfolio',
    aboutMe: 'About Me',
    contactMe: 'Contact Me',
    contactTitle: 'Contact Me',
    sendMessage: 'Send Message',
    name: 'Name',
    email: 'Email',
    message: 'Message',
    
    // Home page additional keys
    highlights: 'Highlights',
    education: 'Education',
    awards: 'Awards',
    skills: 'Skills',
    readyToStart: 'Ready to Start',
    readyDescription: 'Let\'s work together to create something amazing',
    
    // About page keys  
    aboutTitle: 'About Me',
    personalInfo: 'Personal Information',
    interests: 'Interests',
    
    // Portfolio page keys
    portfolioTitle: 'My Portfolio',
    projects: 'Projects',
    achievements: 'Achievements',
    skillsAndAbilities: 'Skills & Abilities',
    
    // New navigation keys
    competitions: 'Competitions',
    activities: 'Activities',
    workpieces: 'Workpieces',
    
    // Footer keys
    contactInfo: 'Contact Information',
    phone: 'Phone',
    address: 'Address',
    location: 'Bangkok, Thailand',
    quickContact: 'Quick Contact',
    followMe: 'Follow Me',
    thankYouMessage: 'Thank you for your message!'
  }
};

// Language Context
const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    const saved = localStorage.getItem('language');
    return saved || 'th';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'th' ? 'en' : 'th');
  };

  const t = (key) => {
    return translations[language]?.[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};