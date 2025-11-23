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
    introduction: 'ผมเป็นนักเรียนชั้นมัธยมศึกษาปีที่ 6 แผนการเรียน Math Gifted Program\nโรงเรียนสวนกุหลาบวิทยาลัย มีความฝันอยากเข้าศึกษาในสาขาวิศวกรรมคอมพิวเตอร์ที่ มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี (KMUTT)ด้วยความหลงใหลในการเขียนโปรแกรมและพัฒนาเทคโนโลยี',
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
    myBirthDay: '( 16 ม.ค. 2551 )',
    years: 'ปี',
    myAddress: '284 ถนนพญาไม้ แขวงสมเด็จเจ้าพระยา เขตคลองสาน 10600 กรุงเทพมหานคร',
    mySchool: 'โรงเรียนสวนกุหลาบวิทยาลัย',
    myHobbies: 'ฝึกเขียนโปรแกรม, ดูข่าวสารเทคโนโลยี',
    
    // Computer Skills section
    computerSkills: 'ทักษะด้านคอมพิวเตอร์',
    programmingSkills: '💾 Programming: C, Python, HTML5, CSS3, JavaScript, React, Node.js, Figma, SQL, Postman, git',
    
    // Education section
    educationHistory: 'ประวัติการศึกษา',
    juniorHigh: 'ระดับมัธยมศึกษาตอนต้น',
    seniorHigh: 'ระดับมัธยมศึกษาตอนปลาย',
    future: 'เป้าหมาย: เข้ารับการศึกษาในสาขาวิศวกรรมคอมพิวเตอร์ KMUTT',
    seniorHighDesc: 'โรงเรียนสวนกุหลาบวิทยาลัย - แผน Math Gifted - เกรดเฉลี่ย 3.80',
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
    posnComputerAward: 'ผ่านการเข้าร่วมค่าย 1',
    posnComputerDesc: 'ประสบการณ์ที่ค่ายนี้มอบให้แก่ผมคือการเรียนรู้เกี่ยวกับตรรกะและการนำตรรกะไปประยุกต์ใช้ในการเขียนโปรแกรม รวมถึงการคิดอย่างเป็นระบบ การวางแผน และการเขียนโปรแกรมด้วยภาษา C พื้นฐาน ซึ่งทำให้ผมมีความสนใจในการเขียนโปรแกรมเพิ่มมากขึ้น และสามารถนำความรู้ที่ได้รับไปใช้ในการดำเนินโปรเจกต์ด้านคอมพิวเตอร์ในอนาคต\n\nนอกจากนี้ ค่ายนี้ยังเปิดโอกาสให้ผมได้พบปะกับเพื่อนใหม่ที่มีความสนใจในเรื่องเดียวกัน ซึ่งสร้างแรงบันดาลใจและความสนุกสนานในการเรียนรู้ ผมได้มีโอกาสแลกเปลี่ยนความรู้และประสบการณ์กับเพื่อน ๆ ที่มาจากหลากหลายโรงเรียน ทักษะการทำงานเป็นทีมและการสื่อสารที่ดีได้รับการพัฒนาอย่างมีนัยสำคัญจากกิจกรรมกลุ่มที่ค่ายจัดขึ้น\n\nความท้าทายที่ผมพบในค่ายนี้ช่วยให้ผมเรียนรู้วิธีรับมือกับความกดดันและการจัดการเวลาอย่างมีประสิทธิภาพ การเห็นความสำเร็จของเพื่อน ๆ ในการแข่งขันและการพัฒนาตนเองได้สร้างแรงผลักดันให้ผมมุ่งมั่นและตั้งใจมากขึ้นในการศึกษาด้านคอมพิวเตอร์\n\nเมื่อค่ายสิ้นสุดลง ผมพบว่าตนเองได้เติบโตขึ้นทั้งในด้านทักษะและความคิด พร้อมที่จะก้าวไปสู่ขั้นต่อไปในการศึกษาและพัฒนาตนเองในสาขานี้อย่างไม่หยุดยั้ง',
    
    aiHackathonAward: '🏆 Finalist รอบ 15 คนสุดท้าย',
    aiHackathonDesc: 'การแข่งขัน AI Hackathon ครั้งนี้เป็นประสบการณ์ที่ท้าทายและน่าตื่นเต้นอย่างมาก ผมได้มีโอกาสนำเสนอไอเดียการใช้ปัญญาประดิษฐ์เพื่อแก้ปัญหาสังคมที่แท้จริง โดยเริ่มจากการวิเคราะห์ปัญหาอย่างลึกซึ้ง ศึกษาข้อมูล และออกแบบโซลูชันที่สามารถนำ AI มาประยุกต์ใช้ได้จริง ผมได้เรียนรู้ว่าการพัฒนา AI ไม่ได้เป็นเพียงแค่เทคโนโลยี แต่ต้องเข้าใจบริบทของปัญหาและผลกระทบต่อผู้คนด้วย\n\nกระบวนการเตรียมตัวสำหรับการแข่งขันนี้ทำให้ผมได้ฝึกทักษะการนำเสนอ การสื่อสารไอเดียที่ซับซ้อนให้เข้าใจง่าย และการตอบคำถามจากคณะกรรมการอย่างมั่นใจ การได้เข้าสู่รอบ 15 คนสุดท้ายจากผู้เข้าแข่งขันจำนวนมาก ทำให้ผมรู้สึกภาคภูมิใจและเป็นแรงผลักดันให้พัฒนาความรู้ด้าน AI และ Machine Learning ต่อไป\n\nประสบการณ์นี้ทำให้ผมเห็นศักยภาพของ AI ในการสร้างการเปลี่ยนแปลงเชิงบวกต่อสังคม และสร้างแรงบันดาลใจให้ผมอยากพัฒนาทักษะในด้านนี้เพื่อสร้างนวัตกรรมที่มีประโยชน์ต่อผู้คนในอนาคต',
    
    acrpTitle: 'การแข่งขันโครงงาน ACRP ครั้งที่ 4',
    acrpAward: '🥇 เหรียญทอง',
    acrpDesc: 'การแข่งขันโครงงานคณิตศาสตร์ ACRP (Annual Conference for Research in Mathematics Education) ครั้งที่ 4 เป็นประสบการณ์ที่ท้าทายและมีคุณค่าอย่างยิ่ง ผมและทีมได้พัฒนาโครงงานคณิตศาสตร์ที่ศึกษาเกี่ยวกับ "ทฤษฎีบทพีทาโกรัสโฉมใหม่" โดยการค้นคว้าและนำเสนอแนวทางใหม่ในการมองทฤษฎีบทที่คุ้นเคยในมุมมองที่แตกต่าง\n\nกระบวนการทำโครงงานนี้ใช้เวลาหลายเดือนในการวิจัย ทดลอง และพิสูจน์ทางคณิตศาสตร์ ผมได้เรียนรู้วิธีการคิดอย่างเป็นระบบ การพิสูจน์ทางคณิตศาสตร์อย่างเข้มงวด และการนำเสนอแนวคิดที่ซับซ้อนให้เข้าใจง่าย การต้องยืนนำเสนอหน้าคณะกรรมการและผู้เชี่ยวชาญทำให้ผมพัฒนาทักษะการนำเสนอและการตอบคำถามอย่างมาก\n\nการได้รับเหรียญทองในการแข่งขันนี้เป็นความภาคภูมิใจและเป็นการยืนยันว่างานวิจัยที่ทำนั้นมีคุณค่าและน่าสนใจ ประสบการณ์นี้ทำให้ผมเห็นความสำคัญของการคิดวิเคราะห์ ความพากเพียร และการทำงานเป็นทีม ซึ่งเป็นทักษะที่จะนำไปใช้ในการศึกษาและทำงานในอนาคต',
    
    engineeringCompTitle: 'การแข่งขันตอบปัญหาทางวิศวกรรม KMUTT',
    engineeringCompAward: '🏆 เข้ารอบรองชนะเลิศ 50 ทีมสุดท้าย',
    engineeringCompDesc: 'ในการแข่งขันครั้งนั้น ผมได้ร่วมทีมกับเพื่อนอีกสองคน เราเริ่มต้นจากการวางแผนและแบ่งหน้าที่กันอย่างเป็นระบบ เพื่อให้สามารถทำข้อสอบได้ครบถ้วนและรอบคอบที่สุด ข้อไหนที่ยากหรือซับซ้อน เราก็ช่วยกันคิด วิเคราะห์ และทดลองแนวทางต่าง ๆ จนในที่สุดทีมของเราสามารถผ่านเข้ารอบรองชนะเลิศ ซึ่งเหลือเพียงห้าสิบทีมสุดท้ายจากผู้เข้าแข่งขันทั้งหมด ถือเป็นก้าวสำคัญที่สร้างทั้งความดีใจและแรงผลักดันให้พยายามมากขึ้น\n\nในรอบต่อมา หรือที่เรียกว่า "รอบแลปกริ๊ง" เป็นการทำโจทย์ภายใต้เวลาจำกัดและแรงกดดันสูง ผมได้เรียนรู้ถึงความสำคัญของ สติ สมาธิ และการประสานงานในทีม เราแบ่งหน้าที่กันอย่างรอบคอบและพยายามรักษาความนิ่งเพื่อแก้โจทย์ให้ได้มากที่สุด แม้ท้ายที่สุดจะไม่สามารถผ่านเข้าสู่รอบชิงชนะเลิศได้ แต่สิ่งที่ผมได้รับกลับมีค่ามากกว่ารางวัล นั่นคือความภูมิใจในความพยายามร่วมกันของทีม และความเข้าใจที่ลึกซึ้งขึ้นใน "จิตวิญญาณของวิศวกร" ที่ไม่ยอมแพ้ต่ออุปสรรคและพร้อมเรียนรู้จากทุกประสบการณ์',
    
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
    acrpAwardHome: '🥇 เหรียญทองแดง การแข่งขันโครงงาน ACRP ครั้งที่ 4',
    engineeringCompHome: '� รางวัลรองชนะเลิศ การแข่งขันตอบปัญหาทางวิศวกรรม KMUTT',
    variousWorks: 'ผลงานต่างๆ',
    competitionsSection: 'การแข่งขัน',
    competitionsDesc: 'รางวัลและความสำเร็จจากการแข่งขันต่างๆ',
    activitiesSection: 'กิจกรรม',
    activitiesDesc: 'กิจกรรมที่เข้าร่วมและผลงานที่โดดเด่น',
    workpiecesSection: 'ผลงาน',
    workpiecesDesc: 'โปรเจคและผลงานทางเทคโนโลยี',
    
    // Inspiration quote
    inspirationQuote: 'Innovation distinguishes between a leader and a follower.',
    inspirationQuoteThai: 'นวัตกรรมคือสิ่งที่แยกผู้นำออกจากผู้ตาม',
    quoteAuthor: 'Steve Jobs',
    
    // About page education details
    juniorHighDetail: 'โรงเรียนสวนกุหลาบวิทยาลัย - เกรดเฉลี่ย 3.62',
    mathGiftedDetail: 'เข้าร่วมแผน Math Gifted และได้รับการพัฒนาทักษะทางคณิตศาสตร์เป็นพิเศษ',
    
    // Loading component
    loading: 'กำลังโหลด...',
    
    // Footer component
    phoneLabel: 'เบอร์โทร',
    schoolLabel: 'โรงเรียน',
    goalLabel: 'เป้าหมาย',
    goalValue: 'KMUTT วิศวกรรมคอมพิวเตอร์',
    
    // Activities page
    activitiesPageTitle: 'กิจกรรมและประสบการณ์',
    activitiesPageSubtitle: 'กิจกรรมต่าง ๆ ที่เข้าร่วมและประสบการณ์ที่สร้างคุณค่า',
    campActivities: 'กิจกรรมค่าย',
    volunteerWork: 'จิตอาสา',
    selfLearning: 'เรียนรู้ด้วยตนเอง',
    
    // Camp Activities
    laodinsorthCampTitle: 'ค่าย LAODINSOR',
    laodinsorthCampDesc: 'ประสบการณ์จากค่ายวิศวกรรมนี้ถือเป็นโอกาสอันมีค่า ที่ทำให้ผมได้ขยายมุมมอง และเห็นถึงความหลากหลายและลักษณะเฉพาะของแต่ละสาขาวิศวกรรมอย่างชัดเจน ผ่านกิจกรรมที่สนุกสนานและให้ความรู้ ผมเรียนรู้จากการทดลองจริงและการพูดคุยกับรุ่นพี่ในหลายสาขา ซึ่งทำให้ผมค้นพบว่า ศักยภาพและความสนใจของตนเองตรงกับสาขาวิศวกรรมคอมพิวเตอร์มากที่สุด\n\nนอกจากนี้ ค่ายยังเปิดโอกาสให้ผมได้สัมผัสวิถีชีวิตและสังคมของวิศวกร โดยเฉพาะในด้านการทำงานร่วมกัน การแบ่งปันความคิด และการแก้ปัญหาอย่างเป็นระบบ ซึ่งเป็นประสบการณ์ที่มีค่ามากเกินกว่าที่จะหาได้จากห้องเรียนเพียงอย่างเดียว\n\nสำหรับผม ค่ายนี้ไม่เพียงแค่การเรียนรู้เกี่ยวกับวิศวกรรมเท่านั้น แต่ยังเป็นการสำรวจตัวตนของผมเอง เปิดรับประสบการณ์ใหม่ ๆ และจุดประกายแรงบันดาลใจในการศึกษาต่อของผมต่อไป',
    
    cuScienceCampTitle: 'ค่ายวิทยาศาสตร์ จุฬาลงกรณ์มหาวิทยาลัย',
    cuScienceCampDesc: '     ค่ายนี้ทำให้ผมได้รับความรู้และประสบการณ์ที่แตกต่างจากค่ายวิศวกรรม โดยสิ่งที่สำคัญที่สุดที่ค่ายนี้มอบให้คือการเรียนรู้และกระบวนการคิดอย่างเป็นระบบ ตั้งแต่การวิเคราะห์ปัญหา การวางแผนแก้ไข ไปจนถึงการกล้าทดลองและยอมรับความล้มเหลวเพื่อพัฒนาตนเองให้ดีขึ้น ผมได้ตระหนักว่าวิทยาศาสตร์ไม่ใช่เพียงการท่องจำทฤษฎีแต่เป็นการลงมือทำและเรียนรู้จากผลลัพธ์ที่เกิดขึ้นจริง\n\n     ประสบการณ์จากค่ายนี้ทำให้ผมเห็นคุณค่าของความพยายามและความอดทน รวมถึงการทำงานร่วมกับผู้อื่นในการหาทางออกอย่างสร้างสรรค์ สิ่งเหล่านี้ไม่เพียงแต่เสริมสร้างพื้นฐานทางวิชาการ แต่ยังหล่อหลอมแนวคิดและทัศนคติที่สามารถนำไปใช้ในทุกสาขาวิชาในอนาคต\n\n     นอกจากนี้ ค่ายยังเปิดโอกาสให้ผมได้สัมผัสกับการทำงานในรูปแบบของการทดลองจริงและการแก้ปัญหาเฉพาะหน้า ซึ่งจำเป็นต้องใช้ทั้งความคิดเชิงวิเคราะห์และความกล้าตัดสินใจ ผมได้เรียนรู้ว่าความผิดพลาดไม่ใช่สิ่งที่ต้องกลัวแต่เป็นบันไดที่นำไปสู่การค้นพบสิ่งใหม่ ๆ ที่มีคุณค่า และช่วยให้เราเติบโตทั้งในด้านความรู้และจิตใจ\n\n     ท้ายที่สุด ค่ายนี้ทำให้ผมตระหนักว่า การเรียนรู้ที่แท้จริงไม่ได้สิ้นสุดในห้องเรียน แต่เกิดจากการลงมือทำ การตั้งคำถามและการไม่ยอมแพ้ต่ออุปสรรค ผมจึงมองว่าค่ายนี้ไม่เพียงแค่ให้ความรู้ทางวิทยาศาสตร์ แต่ยังมอบแนวทางการใช้เหตุผลและการพัฒนาตนเอง ซึ่งจะเป็นพื้นฐานสำคัญในการก้าวต่อไปบนเส้นทางในอนาคตของผม',
    
    orientationCampTitle: 'ค่ายปฐมนิเทศโรงเรียน (หัวหน้าพี่เลี้ยง)',
    orientationCampDesc: 'ในค่ายปฐมนิเทศนี้ ผมได้รับหน้าที่เป็นหัวหน้าพี่เลี้ยงดูแลน้องใหม่ ซึ่งถือเป็นประสบการณ์ที่ท้าทายและมีคุณค่า ผมได้เรียนรู้ถึงความรับผิดชอบในการเป็นผู้นำและการดูแลผู้อื่น ไม่เพียงแต่ต้องวางแผนกิจกรรมให้สนุกสนานและมีประโยชน์ แต่ยังต้องคอยสังเกตและเข้าใจความต้องการของน้องๆ แต่ละคน\n\nการเป็นหัวหน้าพี่เลี้ยงทำให้ผมเข้าใจว่า ภาวะผู้นำที่ดีไม่ได้หมายถึงการสั่งการเพียงอย่างเดียว แต่เป็นการฟังอย่างตั้งใจ การให้กำลังใจ และการเป็นแบบอย่างที่ดี ผมได้พัฒนาทักษะการสื่อสารและการแก้ไขปัญหาเฉพาะหน้า เมื่อเผชิญกับสถานการณ์ที่ไม่คาดคิด\n\nประสบการณ์นี้ยังช่วยให้ผมเข้าใจถึงความสำคัญของการทำงานเป็นทีมและการประสานงาน รวมถึงการสร้างบรรยากาศที่อบอุ่นและเป็นกันเองให้กับน้องๆ เพื่อให้พวกเขารู้สึกเป็นส่วนหนึ่งของครอบครัวโรงเรียน ซึ่งเป็นรากฐานสำคัญในการปรับตัวและการเรียนรู้ต่อไปในอนาคต',
    
    // Volunteer Activities
    environmentVolunteerTitle: 'ค่ายคุณธรรมจิตอาสารักษ์โลก',
    environmentVolunteerDesc: 'ค่ายคุณธรรมจิตอาสารักษ์โลกนี้เป็นประสบการณ์ที่เปิดมุมมองให้ผมเห็นคุณค่าของธรรมชาติและความสำคัญของการอนุรักษ์สิ่งแวดล้อม เราได้เดินทางไปยังพื้นที่ป่าเขาเพื่อศึกษาและวิเคราะห์ปัญหาสิ่งแวดล้อมที่เกิดขึ้นจริง ทั้งการทำลายป่า มลพิษ และผลกระทบต่อระบบนิเวศ\n\nผมได้เรียนรู้วิธีการสำรวจและประเมินสภาพป่า การบันทึกข้อมูลอย่างเป็นระบบ และการวิเคราะห์ปัญหาเพื่อหาแนวทางแก้ไขที่เหมาะสม นอกจากนี้ยังได้ร่วมกิจกรรมปลูกต้นไม้ ทำความสะอาดป่า และสร้างจิตสำนึกในการรักษาสิ่งแวดล้อมให้กับชุมชนท้องถิ่น\n\nประสบการณ์นี้ทำให้ผมตระหนักว่าการรักษ์โลกไม่ใช่หน้าที่ของคนใดคนหนึ่ง แต่เป็นความรับผิดชอบร่วมกันของทุกคน และการแก้ปัญหาสิ่งแวดล้อมต้องอาศัยทั้งความรู้ทางวิทยาศาสตร์และการมีส่วนร่วมของชุมชน ผมมีความมุ่งมั่นที่จะนำความรู้และประสบการณ์นี้ไปใช้ในการสร้างสรรค์นวัตกรรมที่เป็นมิตรต่อสิ่งแวดล้อมในอนาคต',
    
    schoolDevVolunteerTitle: 'ค่ายอาสาพัฒนาโรงเรียน',
    schoolDevVolunteerDesc: 'การเข้าร่วมค่ายอาสาพัฒนาโรงเรียนวอนนภาศัพท์เป็นประสบการณ์ที่สอนให้ผมเข้าใจความหมายของการให้และการแบ่งปัน เราได้ทำงานร่วมกันในการซ่อมแซมและปรับปรุงอาคารเรียน ทาสีห้องเรียน ซ่อมแซมโต๊ะเก้าอี้ และจัดหาอุปกรณ์การเรียนที่จำเป็น\n\nผมได้เรียนรู้ทักษะพื้นฐานด้านช่างและการซ่อมบำรุง รวมถึงการทำงานเป็นทีมอย่างมีประสิทธิภาพ แม้งานจะหนักและเหนื่อย แต่รอยยิ้มและคำขอบคุณจากน้องๆ นักเรียนและครูที่โรงเรียนทำให้ผมรู้สึกว่าความพยายามของเรามีคุณค่าและสร้างความแตกต่างที่แท้จริง\n\nประสบการณ์นี้ทำให้ผมตระหนักถึงความเหลื่อมล้ำทางการศึกษาในสังคม และสร้างแรงบันดาลใจให้ผมอยากพัฒนาทักษะและความรู้ของตนเอง เพื่อสามารถช่วยเหลือและสร้างโอกาสให้กับผู้อื่นได้มากขึ้นในอนาคต การเป็นอาสาสมัครไม่ได้แค่ให้สิ่งที่มี แต่ยังได้รับประสบการณ์และมุมมองชีวิตที่มีค่ากลับมา',
    
    mathCampVolunteerTitle: 'ค่ายคณิตศาสตร์บูรณาการ',
    mathCampVolunteerDesc: 'การเป็นวิทยากรในค่ายคณิตศาสตร์บูรณาการสำหรับนักเรียนชั้นมัธยมศึกษาปีที่ 1 โรงเรียนนาวิกโยธินบูรณะ เป็นประสบการณ์ที่ท้าทายและให้ความรู้สึกภาคภูมิใจอย่างมาก ผมได้ออกแบบและจัดกิจกรรมคณิตศาสตร์ที่สนุกสนานและเข้าใจง่าย เพื่อให้น้องๆ เห็นว่าคณิตศาสตร์ไม่ใช่วิชาที่น่ากลัว แต่เป็นเครื่องมือที่มีประโยชน์ในชีวิตประจำวัน\n\nผมได้เรียนรู้วิธีการถ่ายทอดความรู้ให้ผู้อื่นเข้าใจ การปรับวิธีการสอนให้เหมาะกับผู้เรียนแต่ละคน และการสร้างบรรยากาศการเรียนรู้ที่เป็นกันเอง ความท้าทายที่ใหญ่ที่สุดคือการทำให้เนื้อหาที่ซับซ้อนกลายเป็นสิ่งที่เข้าใจง่ายและน่าสนใจ\n\nประสบการณ์นี้ช่วยพัฒนาทักษะการสื่อสาร ความอดทน และความเข้าใจในการทำงานกับผู้อื่น นอกจากนี้ยังทำให้ผมเข้าใจคณิตศาสตร์ในมุมมองใหม่ เพราะการสอนผู้อื่นช่วยให้เราเข้าใจเนื้อหานั้นลึกซึ้งยิ่งขึ้น การเห็นน้องๆ เข้าใจและมีความสุขกับคณิตศาสตร์มากขึ้น เป็นรางวัลที่มีค่าที่สุดสำหรับผม',
    
    // Self Learning
    grokLearningTitle: 'เรียนรู้การเขียนโค้ด GROK',
    grokLearningDesc: 'การเรียนรู้การเขียนโปรแกรมผ่านแพลตฟอร์ม GROK เป็นจุดเริ่มต้นที่สำคัญในการพัฒนาทักษะการเขียนโค้ดของผม แพลตฟอร์มนี้ช่วยให้ผมเข้าใจแนวคิดพื้นฐานของการเขียนโปรแกรมอย่างเป็นระบบ ตั้งแต่ตรรกะการคิด โครงสร้างข้อมูล ไปจนถึงอัลกอริทึมต่างๆ\n\nผมได้ฝึกฝนผ่านโจทย์ปัญหาที่หลากหลายและท้าทาย ซึ่งช่วยพัฒนาทักษะการแก้ปัญหาและการคิดเชิงตรรกะ การเรียนรู้แบบ step-by-step และการได้รับ feedback ทันทีทำให้ผมเข้าใจความผิดพลาดและปรับปรุงตนเองได้อย่างมีประสิทธิภาพ\n\nประสบการณ์จากการเรียนรู้ด้วยตนเองผ่าน GROK ทำให้ผมมีวินัยในการเรียนรู้และความมุ่งมั่นที่จะพัฒนาตนเอง การเอาชนะโจทย์ที่ยากให้ได้สร้างความภาคภูมิใจและแรงบันดาลใจให้ผมเรียนรู้เพิ่มเติมอย่างต่อเนื่อง',
    
    samsungLearningTitle: 'เรียนรู้การเขียนโค้ด Samsung',
    samsungLearningDesc: 'หลักสูตรการเรียนรู้การเขียนโค้ดและพัฒนาแอปพลิเคชันจาก Samsung เป็นประสบการณ์ที่ก้าวข้ามจากการเขียนโค้ดพื้นฐานไปสู่การพัฒนาแอปพลิเคชันที่สามารถใช้งานได้จริง ผมได้เรียนรู้เกี่ยวกับการออกแบบ UI/UX การจัดการฐานข้อมูล และการเชื่อมต่อ API\n\nหลักสูตรนี้เน้นการเรียนรู้แบบ hands-on โดยมีโปรเจคจริงให้ปฏิบัติ ทำให้ผมได้ประสบการณ์ในการพัฒนาแอปพลิเคชันตั้งแต่ต้นจนจบ ตั้งแต่การวางแผน การเขียนโค้ด การทดสอบ ไปจนถึงการ deploy ผมได้เรียนรู้ถึงความสำคัญของการเขียนโค้ดที่สะอาด การทำงานเป็นทีม และการแก้ไขข้อผิดพลาดอย่างเป็นระบบ\n\nประสบการณ์นี้ทำให้ผมมองเห็นศักยภาพของเทคโนโลยีในการแก้ปัญหาและสร้างนวัตกรรมที่มีประโยชน์ต่อสังคม ผมได้แรงบันดาลใจในการพัฒนาทักษะด้านการพัฒนาแอปพลิเคชันต่อไป เพื่อสร้างสรรค์ผลงานที่สามารถช่วยเหลือและอำนวยความสะดวกให้กับผู้คนได้',
    
    // ImageCarousel component
    carouselLoading: 'กำลังโหลด...',
    carouselError: '⚠️ ไม่สามารถโหลดรูปภาพได้'
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
    introduction: 'I am a Grade 12 student in the Math Gifted Program at Suankularb Wittayalai School who dreams of studying Computer Engineering at King Mongkut\'s University of Technology Thonburi (KMUTT).\n\nI have a passion for programming and technology development, constantly exploring new ways to solve problems through innovative solutions.',
    goals: 'My goal is to become a computer engineer capable of developing AI, IoT and automation systems to solve social problems.\n\nI believe KMUTT will be the best starting point for turning this dream into reality.',
    
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
    myBirthDay: '(Jan 16, 2008)',
    years: 'years old',
    myAddress: '284 Phayamai Road, Somdet Chao Phraya Subdistrict, Khlong San District, 10600 Bangkok, Thailand',
    mySchool: 'Suankularb Wittayalai School',
    myHobbies: 'Programming practice, Technology news',
    
    // Computer Skills section
    computerSkills: 'Computer Skills',
    programmingSkills: '💾 Programming: C, Python, HTML5, CSS3, JavaScript, React, Node.js, Figma, SQL, Postman, git',
    
    // Education section
    educationHistory: 'Education History',
    juniorHigh: 'Junior High School',
    seniorHigh: 'Senior High School',
    future: 'Goal: Study Computer Engineering at KMUTT',
    seniorHighDesc: 'Suankularb Wittayalai School - Math Gifted Program - GPA 3.80',
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
    posnComputerAward: 'Participate in Camp 1',
    posnComputerDesc: 'The experience this camp provided me was learning about logic and applying logic in programming, including systematic thinking, planning, and basic C programming. This increased my interest in programming even more and allowed me to apply the knowledge gained to future computer projects.\n\nIn addition, this camp also gave me the opportunity to meet new friends who share the same interests, which created inspiration and enjoyment in learning. I had the opportunity to exchange knowledge and experiences with friends from various schools. Teamwork and good communication skills were significantly developed from the group activities organized by the camp.\n\nThe challenges I encountered in this camp helped me learn how to cope with pressure and manage time effectively. Seeing the success of friends in competitions and self-development created motivation for me to be more determined and focused on studying computer science.\n\nWhen the camp ended, I found that I had grown both in skills and mindset, ready to move forward to the next level in studying and developing myself in this field without stopping.',
    
    aiHackathonAward: '🏆 Finalist Top 15',
    aiHackathonDesc: 'The AI Hackathon competition was an extremely challenging and exciting experience. I had the opportunity to present ideas on using artificial intelligence to solve real social problems, starting from in-depth problem analysis, data study, and designing solutions that could practically apply AI. I learned that AI development is not just about technology, but also requires understanding the context of problems and their impact on people.\n\nThe preparation process for this competition helped me practice presentation skills, communicating complex ideas in an understandable way, and confidently answering questions from judges. Being selected as one of the top 15 finalists from many competitors made me feel proud and motivated to continue developing my knowledge in AI and Machine Learning.\n\nThis experience showed me the potential of AI in creating positive social change and inspired me to develop skills in this area to create useful innovations for people in the future.',
    
    acrpTitle: '4th ACRP Project Competition',
    acrpAward: '🥇 Gold Medal',
    acrpDesc: 'The 4th ACRP (Annual Conference for Research in Mathematics Education) mathematics project competition was an extremely challenging and valuable experience. My team and I developed a mathematics project studying "Pythagoras New Theory" by researching and presenting a new approach to viewing the familiar theorem from a different perspective.\n\nThe project development process took several months of research, experimentation, and mathematical proof. I learned systematic thinking methods, rigorous mathematical proofs, and how to present complex ideas in an understandable way. Having to present in front of judges and experts greatly improved my presentation and question-answering skills.\n\nReceiving the gold medal in this competition was a great pride and confirmation that our research work was valuable and interesting. This experience showed me the importance of analytical thinking, perseverance, and teamwork, which are skills that will be applied in future studies and work.',
    
    engineeringCompTitle: 'KMUTT Engineering Problem Solving Competition',
    engineeringCompAward: '🏆 Enter the semi-finals of the final 50 teams',
    engineeringCompDesc: 'In that competition, I teamed up with two other friends. We started by systematically planning and dividing responsibilities to ensure we could complete all exam questions thoroughly and carefully. For difficult or complex problems, we worked together to think, analyze, and try different approaches until our team successfully advanced to the semi-finals, which left only fifty teams from all participants. This was a significant milestone that brought both joy and motivation to try harder.\n\nIn the next round, called "Lab Clink," we had to solve problems under time constraints and high pressure. I learned the importance of composure, concentration, and team coordination. We carefully divided our responsibilities and tried to stay calm to solve as many problems as possible. Although we ultimately did not advance to the finals, what I gained was more valuable than any award - the pride in our team\'s collective effort and a deeper understanding of the "engineer\'s spirit" that never gives up in the face of obstacles and is ready to learn from every experience.',

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
    acrpAwardHome: '🥇 Bronze Medal 4th ACRP Project Competition',
    engineeringCompHome: '� Runner-up KMUTT Engineering Problem Solving Competition',
    variousWorks: 'Various Works',
    competitionsSection: 'Competitions',
    competitionsDesc: 'Awards and achievements from various competitions',
    activitiesSection: 'Activities',
    activitiesDesc: 'Activities participated and outstanding works',
    workpiecesSection: 'Workpieces',
    workpiecesDesc: 'Projects and technology works',
    
    // Inspiration quote
    inspirationQuote: 'Innovation distinguishes between a leader and a follower.',
    inspirationQuoteThai: 'นวัตกรรมคือสิ่งที่แยกผู้นำออกจากผู้ตาม',
    quoteAuthor: 'Steve Jobs',
    
    // About page education details
    juniorHighDetail: 'Suankularb Wittayalai School - GPA 3.62',
    mathGiftedDetail: 'Participated in Math Gifted Program and received special mathematical skills development',
    
    // Loading component
    loading: 'Loading...',
    
    // Footer component
    phoneLabel: 'Tel.',
    schoolLabel: 'School',
    goalLabel: 'Goal',
    goalValue: 'KMUTT Computer Engineering',
    
    // Activities page
    activitiesPageTitle: 'Activities & Experience',
    activitiesPageSubtitle: 'Various activities participated and valuable experiences gained',
    campActivities: 'Camp Activities',
    volunteerWork: 'Volunteer Work',
    selfLearning: 'Self Learning',
    
    // Camp Activities
    laodinsorthCampTitle: 'LAODINSOR Engineering Camp',
    laodinsorthCampDesc: 'The experience from this engineering camp was a valuable opportunity that allowed me to expand my perspective and clearly see the diversity and unique characteristics of each engineering field. Through fun and educational activities, I learned from hands-on experiments and conversations with seniors from various fields, which helped me discover that my potential and interests align most with Computer Engineering.\n\nAdditionally, the camp gave me the chance to experience the lifestyle and society of engineers, especially in terms of teamwork, idea sharing, and systematic problem-solving. This was an invaluable experience that could not be found in the classroom alone.\n\nFor me, this camp was not just about learning engineering, but also about exploring myself, embracing new experiences, and igniting inspiration for my future studies.',
    
    cuScienceCampTitle: 'Science Camp - Chulalongkorn University',
    cuScienceCampDesc: '     This camp provided me with knowledge and experiences different from the engineering camp. The most important thing this camp offered was learning and systematic thinking processes, from problem analysis and solution planning to daring to experiment and accepting failure to improve oneself. I realized that science is not just about memorizing theories but about hands-on practice and learning from real results.\n\n     The experience from this camp helped me see the value of effort and patience, as well as working with others to find creative solutions. These not only strengthened my academic foundation but also shaped my mindset and attitude that can be applied in any field in the future.\n\n     Additionally, the camp gave me the opportunity to experience hands-on experimentation and on-the-spot problem-solving, which required both analytical thinking and decision-making courage. I learned that mistakes are not something to fear but are steps leading to valuable new discoveries and helping us grow both in knowledge and spirit.\n\n     Ultimately, this camp made me realize that true learning does not end in the classroom but comes from doing, questioning, and not giving up in the face of obstacles. I therefore view this camp as not just providing scientific knowledge but also offering guidelines for reasoning and self-development, which will be an important foundation for moving forward on my future path.',
    
    orientationCampTitle: 'School Orientation Camp (Mentor Leader)',
    orientationCampDesc: 'In this orientation camp, I served as the mentor leader taking care of new students, which was a challenging and valuable experience. I learned about the responsibility of being a leader and caring for others. Not only did I have to plan fun and beneficial activities, but I also had to observe and understand the needs of each junior student.\n\nBeing a mentor leader made me understand that good leadership does not mean just giving orders, but listening attentively, providing encouragement, and being a good role model. I developed communication skills and on-the-spot problem-solving when faced with unexpected situations.\n\nThis experience also helped me understand the importance of teamwork and coordination, as well as creating a warm and friendly atmosphere for the juniors so they feel part of the school family. This is an important foundation for adaptation and future learning.',
    
    // Volunteer Activities
    environmentVolunteerTitle: 'Environmental Conservation Volunteer Camp',
    environmentVolunteerDesc: 'This Environmental Conservation Volunteer Camp was an experience that opened my perspective to see the value of nature and the importance of environmental conservation. We traveled to forest and mountain areas to study and analyze real environmental problems, including deforestation, pollution, and impacts on ecosystems.\n\nI learned how to survey and assess forest conditions, systematically record data, and analyze problems to find appropriate solutions. Additionally, I participated in tree planting activities, forest cleaning, and creating environmental awareness for local communities.\n\nThis experience made me realize that protecting the world is not the duty of any one person, but a shared responsibility of everyone. Solving environmental problems requires both scientific knowledge and community participation. I am committed to using this knowledge and experience to create environmentally friendly innovations in the future.',
    
    schoolDevVolunteerTitle: 'School Development Volunteer Camp',
    schoolDevVolunteerDesc: 'Participating in the School Development Volunteer Camp at Wannaphasap School was an experience that taught me the meaning of giving and sharing. We worked together to repair and improve school buildings, paint classrooms, repair desks and chairs, and provide necessary learning equipment.\n\nI learned basic carpentry and maintenance skills, as well as efficient teamwork. Although the work was hard and tiring, the smiles and thanks from the students and teachers at the school made me feel that our efforts were valuable and made a real difference.\n\nThis experience made me aware of educational inequality in society and inspired me to develop my skills and knowledge so that I can help and create more opportunities for others in the future. Being a volunteer is not just about giving what you have, but also receiving valuable life experiences and perspectives in return.',
    
    mathCampVolunteerTitle: 'Integrated Mathematics Camp',
    mathCampVolunteerDesc: 'Being an instructor at the Integrated Mathematics Camp for Grade 7 students at Navikayothin Burana School was a challenging and very proud experience. I designed and organized fun and easy-to-understand mathematics activities to show the students that mathematics is not a scary subject, but a useful tool in daily life.\n\nI learned how to convey knowledge so others can understand, adjust teaching methods to suit each learner, and create a friendly learning atmosphere. The biggest challenge was making complex content easy to understand and interesting.\n\nThis experience helped develop communication skills, patience, and understanding in working with others. It also made me understand mathematics from a new perspective, because teaching others helps us understand the content more deeply. Seeing the students understand and enjoy mathematics more was the most valuable reward for me.',
    
    // Self Learning
    grokLearningTitle: 'GROK Coding Learning',
    grokLearningDesc: 'Learning programming through the GROK platform was an important starting point in developing my coding skills. This platform helped me understand the basic concepts of programming systematically, from logical thinking and data structures to various algorithms.\n\nI practiced through diverse and challenging problems, which helped develop problem-solving skills and logical thinking. The step-by-step learning approach and immediate feedback allowed me to understand mistakes and improve myself efficiently.\n\nThe experience of self-learning through GROK gave me discipline in learning and determination to develop myself. Overcoming difficult problems created pride and inspiration for me to continue learning.',
    
    samsungLearningTitle: 'Samsung Coding Learning',
    samsungLearningDesc: 'The Samsung coding and app development learning curriculum was an experience that went beyond basic coding to developing practical applications. I learned about UI/UX design, database management, and API integration.\n\nThis curriculum emphasized hands-on learning with real projects to practice, giving me experience in developing applications from start to finish, from planning, coding, testing, to deployment. I learned the importance of clean code, teamwork, and systematic debugging.\n\nThis experience made me see the potential of technology in solving problems and creating useful innovations for society. I was inspired to further develop app development skills to create works that can help and facilitate people.',
    
    // ImageCarousel component
    carouselLoading: 'Loading...',
    carouselError: '⚠️ Unable to load image'
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