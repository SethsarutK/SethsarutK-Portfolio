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
    heroTitle: 'สวัสดีครับ ผมคือ นาย เศรษฐ์ศรุต\nกตคุณไพศาล',
    heroSubtitle: 'ผมมีความฝันที่อยากจะเข้าเรียนที่ มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี สาขาวิศวกรรมคอมพิวเตอร์',
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
    greeting: 'สวัสดีครับ! ผมชื่อ เศรษฐ์ศรุต กตคุณไพศาล',
    introduction: 'ผมเป็นนักเรียนชั้นมัธยมศึกษาปีที่ 6 แผนการเรียน Math Gifted Program\nโรงเรียนสวนกุหลาบวิทยาลัย มีความฝันอยากเข้าศึกษาในสาขาวิศวกรรมคอมพิวเตอร์ที่ มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี (KMUTT)ด้วยความหลงใหล\nในการเขียนโปรแกรมและพัฒนาเทคโนโลยี',
    goals: 'เป้าหมายของผมคือการเป็นวิศวกรคอมพิวเตอร์ที่สามารถพัฒนา AI, IoT\nและระบบอัตโนมัติเพื่อนำมาแก้ปัญหาในสังคม และผมเชื่อว่า KMUTT จะเป็นจุดเริ่มต้นที่ดีที่สุดสำหรับความฝันนี้',
    
    // Personal info
    fullName: 'ชื่อ-นามสกุล',
    nickname: 'ชื่อเล่น',
    age: 'อายุ',
    address: 'ที่อยู่',
    school: 'โรงเรียน',
    program: 'แผนการเรียน',
    hobbies: 'งานอดิเรก',
    
    myName: 'นาย เศรษฐ์ศรุต กตคุณไพศาล',
    myNickname: 'ภูมิใจ',
    myAge: '17 ปี ( 16 ม.ค. 2551 )',
    myAddress: '284 ถนนพญาไม้ แขวงสมเด็จเจ้าพระยา เขตคลองสาน 10600 กรุงเทพมหานคร',
    mySchool: 'โรงเรียนสวนกุหลาบวิทยาลัย',
    myHobbies: 'ฝึกเขียนโปรแกรม, ดูข่าวสารเทคโนโลยี',
    
    // Education section
    educationHistory: 'ประวัติการศึกษา',
    juniorHigh: 'ระดับมัธยมศึกษาตอนต้น',
    seniorHigh: 'ระดับมัธยมศึกษาตอนปลาย',
    future: 'เป้าหมาย: เข้ารับการศึกษาในสาขาวิศวกรรมคอมพิวเตอร์ KMUTT',
    seniorHighDesc: 'โรงเรียนสวนกุหลาบวิทยาลัย - แผน Math Gifted',
    seniorHighFocus: 'เน้นการเรียนวิชาคณิตศาสตร์, วิทยาศาสตร์',
    programmingStart: 'เริ่มหลงใหลในการเขียนโปรแกรมและพัฒนาโครงงานต่าง ๆ',
    futureGoal: 'มุ่งสู่การเป็นวิศวกรที่ใช้เทคโนโลยีแก้ปัญหาของโลก',
    
    // Navigation keys
    competitions: 'การแข่งขัน',
    activities: 'กิจกรรม',
    workpieces: 'ผลงาน',
    
    // Footer keys
    contactInfo: 'ข้อมูลติดต่อ',
    phone: 'เบอร์โทร',
    address: 'ที่อยู่',
    location: 'กรุงเทพมหานคร ประเทศไทย',
    followMe: 'ติดตามฉัน',
    
    // Home page buttons and content
    visitWebsite: 'เยี่ยมชมเว็บไซต์',
    learnMore: 'เรียนรู้เพิ่มเติม',
    
    // Workpieces page
    workpiecesTitle: 'ผลงานและโปรเจ็กต์',
    workpiecesDescription: 'แสดงผลงานและโปรเจ็กต์ต่าง ๆ ที่ได้สร้างสรรค์',
    workpiecesSubtitle: 'แสดงผลงานและโปรเจ็กต์ที่ได้พัฒนาในด้านต่าง ๆ',
    
    // Categories
    allCategory: 'ทั้งหมด',
    websitesCategory: 'เว็บไซต์',
    gamesCategory: 'เกม',
    hardwareCategory: 'ฮาร์ดแวร์',
    
    // Project descriptions
    portfolioDesc: 'เว็บไซต์แสดงผลงานส่วนตัวที่สร้างด้วย React และ CSS',
    schoolWebsiteTitle: 'เว็บไซต์โรงเรียน',
    schoolWebsiteDesc: 'เว็บไซต์แนะนำโรงเรียนและกิจกรรมต่าง ๆ',
    adventureGameTitle: 'เกมผจญภัย 2D',
    adventureGameDesc: 'เกมผจญภัยแบบ 2D ที่สร้างด้วย Python และ Pygame',
    puzzleGameTitle: 'เกมปริศนา',
    puzzleGameDesc: 'เกมไขปริศนาที่ฝึกทักษะการคิดเชิงตรรกะ',
    smartFarmDesc: 'ระบบฟาร์มอัจฉริยะด้วย Arduino และเซ็นเซอร์ต่าง ๆ',
    securitySystemTitle: 'ระบบรักษาความปลอดภัย',
    securitySystemDesc: 'ระบบรักษาความปลอดภัยด้วยกล้องและเซ็นเซอร์',
    
    // Actions
    viewDetails: 'ดูรายละเอียด',
    noWorkpieces: 'ไม่มีผลงานในหมวดหมู่นี้',
    
    // Call to action
    readyToCreate: 'พร้อมสร้างสรรค์ผลงานใหม่',
    futureWorks: 'ผลงานเหล่านี้เป็นเพียงจุดเริ่มต้น พร้อมที่จะเรียนรู้และพัฒนาต่อไปในอนาคต',
    
    // Competitions page
    competitionsTitle: 'การแข่งขันและรางวัล',
    competitionsDescription: 'รายการการแข่งขันและรางวัลต่าง ๆ ที่ได้รับ',
    competitionsSubtitle: 'ประสบการณ์การแข่งขันและรางวัลที่ได้รับในด้านต่าง ๆ',
    computerTech: 'คอมพิวเตอร์และเทคโนโลยี',
    academic: 'วิชาการ',
    others: 'อื่น ๆ',
    
    // Competition items
    posnComputer: 'สอวน.คอมพิวเตอร์',
    posnComputerAward: '🥇 ผ่านการเข้าร่วมค่าย 1',
    posnComputerDesc: 'ได้รับคัดเลือกให้เข้าร่วมค่ายอบรมเชิงปฏิบัติการด้านคอมพิวเตอร์',
    
    aiHackathonAward: '🥇 Finalist รอบ 15 คนสุดท้าย',
    aiHackathonDesc: 'แข่งขันนำเสนอไอเดียการแก้ปัญหาในสังคมผ่านการวิเคราะห์และนำ AI มาช่วยเพื่อแก้ปัญหา',
    
    acrpTitle: 'การแข่งขันโครงงาน ACRP ครั้งที่ 4',
    acrpAward: '🥇 เหรียญทองแดง',
    acrpDesc: 'การแข่งขันประกวดโครงงานคณิตศาสตร์ประเภทนำเสนอบนเวที',
    
    scienceCompTitle: 'การแข่งขันวิทยาศาสตร์',
    scienceCompAward: '⭐ รางวัลชมเชย',
    scienceCompDesc: 'นำเสนอโครงงานวิทยาศาสตร์นวัตกรรม',
    
    outstandingAwardTitle: 'รางวัลนักเรียนดีเด่น',
    outstandingAward: '🏆 นักเรียนดีเด่นด้านเทคโนโลยี',
    outstandingAwardDesc: 'ได้รับการยกย่องในด้านเทคโนโลยีและนวัตกรรม',
    
    // Future success section
    futureSuccess: 'มุ่งสู่ความสำเร็จในอนาคต',
    futureSuccessDesc: 'ประสบการณ์เหล่านี้เป็นรากฐานสำคัญในการเตรียมพร้อมสู่การศึกษาต่อในระดับอุดมศึกษา',
    
    clickToViewImage: 'คลิกเพื่อดูรูปภาพ',
    
    // NotFound page
    pageNotFound: 'หน้าที่ค้นหาไม่พบ',
    notFoundDesc: 'ขออภัย หน้าที่คุณกำลังค้นหาอาจถูกย้าย ลบ หรือไม่เคยมีอยู่จริง',
    notFoundSuggestion: 'ลองไปดู Portfolio หรือข้อมูลเกี่ยวกับฉันแทนไหม?',
    goHome: '🏠 กลับหน้าแรก',
    viewWorkpieces: '💼 ดูผลงาน',
    aboutMeLink: '👨‍💻 เกี่ยวกับฉัน',
    
    // Home page sections
    mySchoolName: 'โรงเรียนสวนกุหลาบวิทยาลัย',
    smartFarmAward: '🥇 รางวัลชนะเลิศ โครงงานวิทยาศาสตร์ Smart Farm',
    mathOlympicAward: '🥉 เหรียญทองแดง โอลิมปิกคณิตศาสตร์',
    techStudentAward: '⭐ รางวัลนักเรียนดีเด่น ด้านเทคโนโลยี',
    variousWorks: 'ผลงานต่างๆ',
    competitionsSection: 'การแข่งขัน',
    competitionsDesc: 'รางวัลและความสำเร็จจากการแข่งขันต่างๆ',
    activitiesSection: 'กิจกรรม',
    activitiesDesc: 'กิจกรรมที่เข้าร่วมและผลงานที่โดดเด่น',
    workpiecesSection: 'ผลงาน',
    workpiecesDesc: 'โปรเจคและผลงานทางเทคโนโลยี',
    
    // About page education details
    juniorHighDetail: 'โรงเรียนสวนกุหลาบวิทยาลัย - เกรดเฉลี่ย 3.78',
    mathGiftedDetail: 'เข้าร่วมแผน Math Gifted และได้รับการพัฒนาทักษะทางคณิตศาสตร์เป็นพิเศษ',
    
    // Loading component
    loading: 'กำลังโหลด...',
    
    // Footer component
    phoneLabel: 'เบอร์โทร',
    schoolLabel: 'โรงเรียน',
    goalLabel: 'เป้าหมาย',
    goalValue: 'KMUTT วิศวกรรมคอมพิวเตอร์'
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
    greeting: 'Hello! I am Sethsarut Katakhunpaisarn',
    introduction: 'I am a Grade 12 student in the Math Gifted Program at Suankularb Wittayalai School\n\nwho dreams of studying Computer Engineering at King Mongkut\'s University of Technology Thonburi (KMUTT)\n\nwith a passion for programming and technology development.',
    goals: 'My goal is to become a computer engineer capable of developing AI, IoT and automation systems\n\nto solve social problems, and I believe KMUTT will be the best starting point for this dream.',
    
    // Personal info
    fullName: 'Full Name',
    nickname: 'Nickname',
    age: 'Age',
    address: 'Address',
    school: 'School',
    program: 'Program',
    hobbies: 'Hobbies',
    
    myName: 'Mr. Sethsarut Katakhunpaisarn',
    myNickname: 'Bhumjai',
    myAge: '17 years old (Jan 16, 2008)',
    myAddress: '284 Phayamai Road, Somdet Chao Phraya Subdistrict, Khlong San District, 10600 Bangkok, Thailand',
    mySchool: 'Suankularb Wittayalai School',
    myHobbies: 'Programming practice, Technology news',
    
    // Education section
    educationHistory: 'Education History',
    juniorHigh: 'Junior High School',
    seniorHigh: 'Senior High School',
    future: 'Goal: Study Computer Engineering at KMUTT',
    seniorHighDesc: 'Suankularb Wittayalai School - Math Gifted Program',
    seniorHighFocus: 'Focus on Mathematics, Science',
    programmingStart: 'Started to become passionate about programming and developing various projects',
    futureGoal: 'Aiming to be an engineer who uses technology to solve world problems',
    
    // Navigation keys
    competitions: 'Competitions',
    activities: 'Activities',
    workpieces: 'Workpieces',
    
    // Footer keys
    contactInfo: 'Contact Information',
    phone: 'Phone',
    address: 'Address',
    location: 'Bangkok, Thailand',
    followMe: 'Follow Me',
    
    // Home page buttons and content
    visitWebsite: 'Visit Website',
    learnMore: 'Learn More',
    
    // Workpieces page
    workpiecesTitle: 'Workpieces & Projects',
    workpiecesDescription: 'Showcase of various workpieces and projects created',
    workpiecesSubtitle: 'Showcase of various workpieces and projects developed',
    
    // Categories
    allCategory: 'All',
    websitesCategory: 'Websites',
    gamesCategory: 'Games',
    hardwareCategory: 'Hardware',
    
    // Project descriptions
    portfolioDesc: 'Personal portfolio website built with React and CSS',
    schoolWebsiteTitle: 'School Website',
    schoolWebsiteDesc: 'School introduction and activities website',
    adventureGameTitle: '2D Adventure Game',
    adventureGameDesc: '2D adventure game created with Python and Pygame',
    puzzleGameTitle: 'Puzzle Game',
    puzzleGameDesc: 'Puzzle game for logical thinking skills',
    smartFarmDesc: 'Smart farm system with Arduino and various sensors',
    securitySystemTitle: 'Security System',
    securitySystemDesc: 'Security system with camera and sensors',
    
    // Actions
    viewDetails: 'View Details',
    noWorkpieces: 'No workpieces in this category',
    
    // Call to action
    readyToCreate: 'Ready to Create New Works',
    futureWorks: 'These works are just the beginning, ready to learn and develop further in the future',
    
    // Competitions page
    competitionsTitle: 'Competitions & Awards',
    competitionsDescription: 'List of competitions and awards received',
    competitionsSubtitle: 'Competition experiences and awards received in various fields',
    computerTech: 'Computer & Technology',
    academic: 'Academic',
    others: 'Others',
    
    // Competition items
    posnComputer: 'POSN Computer',
    posnComputerAward: '🥇 Participate in Camp 1',
    posnComputerDesc: 'Selected to participate in a computer workshop camp',
    
    aiHackathonAward: '🥈 Finalist Top 15',
    aiHackathonDesc: 'Compete to present ideas for solving social problems through analysis and using AI to help solve problems.',
    
    acrpTitle: '4th ACRP Project Competition',
    acrpAward: '🥇 Gold Medal',
    acrpDesc: 'Mathematics Project Competition, Stage Presentation Category',
    
    scienceCompTitle: 'Science Competition',
    scienceCompAward: '⭐ Honorable Mention',
    scienceCompDesc: 'Presented innovative science project',
    
    outstandingAwardTitle: 'Outstanding Student Award',
    outstandingAward: '🏆 Outstanding in Technology',
    outstandingAwardDesc: 'Recognized for excellence in technology and innovation',
    
    // Future success section
    futureSuccess: 'Striving for Future Success',
    futureSuccessDesc: 'These experiences are important foundations in preparing for higher education',
    
    clickToViewImage: 'Click to view image',
    
    // NotFound page
    pageNotFound: 'Page Not Found',
    notFoundDesc: 'Sorry, the page you are looking for might have been moved, deleted, or never existed.',
    notFoundSuggestion: 'Why not check out my portfolio or learn more about me?',
    goHome: '🏠 Go Home',
    viewWorkpieces: '💼 View Workpieces',
    aboutMeLink: '👨‍💻 About Me',
    
    // Home page sections
    mySchoolName: 'Suankularb Wittayalai School',
    smartFarmAward: '🥇 Winner of Smart Farm Science Project',
    mathOlympicAward: '🥉 Bronze Medal in Mathematics Olympiad',
    techStudentAward: '⭐ Outstanding Student in Technology',
    variousWorks: 'Various Works',
    competitionsSection: 'Competitions',
    competitionsDesc: 'Awards and achievements from various competitions',
    activitiesSection: 'Activities',
    activitiesDesc: 'Activities participated and outstanding works',
    workpiecesSection: 'Workpieces',
    workpiecesDesc: 'Projects and technology works',
    
    // About page education details
    juniorHighDetail: 'Suankularb Wittayalai School - GPA 3.85',
    mathGiftedDetail: 'Participated in Math Gifted Program and received special mathematical skills development',
    
    // Loading component
    loading: 'Loading...',
    
    // Footer component
    phoneLabel: 'Tel.',
    schoolLabel: 'School',
    goalLabel: 'Goal',
    goalValue: 'KMUTT Computer Engineering'
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