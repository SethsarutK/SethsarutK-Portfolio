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
    
    // Home page
    heroTitle: 'สวัสดีครับ ผมคือ นายเศรษฐ์ศรุต กตคุณไพศาล',
    heroSubtitle: 'มีความฝันอยากจะเข้าเรียนที่ มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี สาขาวิศวกรรมคอมพิวเตอร์',
    heroDescription: 'เว็บนี้จัดทำขึ้นเพื่อแสดงข้อมูล การแข่งขัน กิจกรรม และผลงานของผม',
    aboutMe: 'เกี่ยวกับฉัน',
    
    // Home page sections
    highlights: 'จุดเด่น',
    education: 'การศึกษา',
    awards: 'รางวัล',
    skills: 'ทักษะ',
    
    // About page keys  
    aboutTitle: 'เกี่ยวกับฉัน',
    personalInfo: 'ข้อมูลส่วนตัว',
    interests: 'ความสนใจ',
    
    // Navigation keys
    competitions: 'การแข่งขัน',
    activities: 'กิจกรรม',
    workpieces: 'ผลงาน',
    
    // Footer keys
    contactInfo: 'ข้อมูลติดต่อ',
    phone: 'เบอร์โทร',
    address: 'ที่อยู่',
    location: 'กรุงเทพมหานคร ประเทศไทย',
    followMe: 'ติดตามฉัน'
  },
  en: {
    // Navigation
    home: 'Home',
    about: 'About Me',
    
    // Home page
    heroTitle: 'Hello, I am Mr.Sethsarut Katakhunpaisarn',
    heroSubtitle: 'I have a dream of wanting to study at King Mongkut\'s University of Technology Thonburi. Computer Engineering',
    heroDescription: 'This website is created to display about competitions, activities, and my workpieces.',
    aboutMe: 'About Me',
    
    // Home page sections
    highlights: 'Highlights',
    education: 'Education',
    awards: 'Awards',
    skills: 'Skills',
    
    // About page keys  
    aboutTitle: 'About Me',
    personalInfo: 'Personal Information',
    interests: 'Interests',
    
    // Navigation keys
    competitions: 'Competitions',
    activities: 'Activities',
    workpieces: 'Workpieces',
    
    // Footer keys
    contactInfo: 'Contact Information',
    phone: 'Phone',
    address: 'Address',
    location: 'Bangkok, Thailand',
    followMe: 'Follow Me'
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
    <LanguageContext.Provider value={{ language, currentLanguage: language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};