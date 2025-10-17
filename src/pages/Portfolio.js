import React from 'react';
import { useLanguage } from '../contexts/AppContext';
import '../styles/Portfolio.css';

function Portfolio() {
  const { t } = useLanguage();

  // ข้อมูลผลงานจริง
  const projects = [
    {
      id: 1,
      title: "ระบบจัดการห้องสมุดออนไลน์",
      description: "ระบบจัดการห้องสมุดที่พัฒนาด้วย React และ Firebase ช่วยให้ผู้ใช้ค้นหาหนังสือ จองหนังสือ และติดตามสถานะการยืมได้อย่างสะดวก",
      technologies: ["React", "Firebase", "CSS3"],
      image: "library-system.jpg", 
      link: "https://github.com/sethsarut-k/library-management-system",
      demo: "https://library-demo.vercel.app",
      category: "เว็บแอปพลิเคชัน"
    },
    {
      id: 2,
      title: "แอปพยากรณ์อากาศ AI",
      description: "แอปพลิเคชันพยากรณ์อากาศที่ใช้ Machine Learning วิเคราะห์ข้อมูลอากาศและให้คำแนะนำเกี่ยวกับกิจกรรมที่เหมาะสม",
      technologies: ["Python", "TensorFlow", "React Native"],
      image: "weather-app.jpg",
      link: "https://github.com/sethsarut-k/weather-ai-app",
      demo: "https://weather-ai-demo.herokuapp.com",
      category: "Mobile App"
    },
    {
      id: 3,
      title: "โครงงานวิทยาศาสตร์: Smart Farm",
      description: "ระบบฟาร์มอัจฉริยะที่ใช้ IoT ควบคุมการรดน้ำ วัดความชื้น และตรวจสอบสภาพพืชผ่านเซนเซอร์และแอปพลิเคชัน รางวัลชนะเลิศระดับเขตการศึกษา",
      technologies: ["Arduino", "React", "Node.js"],
      image: "smart-farm.jpg",
      link: "https://github.com/sethsarut-k/smart-farm-iot",
      demo: "https://smart-farm.netlify.app",
      category: "IoT Project"
    }
  ];

  const achievements = [
    {
      title: "รางวัลชนะเลิศ โครงงานวิทยาศาสตร์",
      description: "ระดับเขตการศึกษา ด้วยโครงงาน Smart Farm Monitoring System",
      year: "2024"
    },
    {
      title: "เหรียญทองแดง โอลิมปิกคณิตศาสตร์",
      description: "การแข่งขันโอลิมปิกวิชาการ ระดับจังหวัด สาขาคณิตศาสตร์",
      year: "2023"
    },
    {
      title: "รางวัลนักเรียนดีเด่น",
      description: "ด้านเทคโนโลยีสารสนเทศ ประจำปีการศึกษา 2566",
      year: "2023"
    }
  ];

  return (
    <div className="portfolio">
      <div className="container">
        <section className="portfolio-header card glass">
          <div className="header-content">
            <div className="header-text">
              <h1>{t('portfolioTitle')}</h1>
              <p>
                รวบรวมผลงานด้านเทคโนโลยีและนวัตกรรมที่สะท้อนความพร้อมในการเรียนต่อ
                <strong> สาขาวิศวกรรมคอมพิวเตอร์ มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี (KMUTT)</strong>
                เพื่อเป็นวิศวกรที่นำเทคโนโลยีมาพัฒนาสังคมไทย
              </p>
            </div>
            <div className="header-image">
              <div className="profile-circle">
                <img 
                  src="https://SethsarutK.github.io/SethsarutK-Portfolio/images/profile.jpg"
                  alt="เศรษฐ์ศรุต กตคุณไพศาล" 
                  className="profile-photo"
                  onError={(e) => {
                    console.log('Portfolio header image failed to load:', e.target.src);
                    e.target.style.display = 'none';
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        <section className="projects-section">
          <h2>{t('projects')}</h2>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={project.id} className="project-card card">
                <div className="project-image">
                  <div className="image-placeholder project-mockup">
                    <img 
                      src={`https://SethsarutK.github.io/SethsarutK-Portfolio/images/${project.image}`}
                      alt={project.title}
                      className="project-screenshot"
                      onError={(e) => {
                        console.log(`Project image failed to load: ${project.title}`, e.target.src);
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div className="mockup-fallback">
                      <div className="mockup-header">
                        <div className="mockup-dots">
                          <span></span><span></span><span></span>
                        </div>
                      </div>
                      <div className="mockup-content">
                        <div className="mockup-code">
                          <div className="code-line"></div>
                          <div className="code-line short"></div>
                          <div className="code-line"></div>
                          <div className="code-line medium"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="project-overlay">
                    <div className="project-links">
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="view-project github">
                        📂 GitHub
                      </a>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer" className="view-project demo">
                        🚀 Demo
                      </a>
                    </div>
                  </div>
                </div>
                <div className="project-content">
                  <span className="project-category">{project.category}</span>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-technologies">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="achievements-section">
          <h2>{t('achievements')}</h2>
          <div className="achievements-grid">
            {achievements.map((achievement, index) => (
              <div key={index} className="achievement-card card">
                <div className="achievement-year">{achievement.year}</div>
                <h3>{achievement.title}</h3>
                <p>{achievement.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="skills-section">
          <h2>{t('skillsAndAbilities')}</h2>
          <div className="skills-grid">
            <div className="skill-category">
              <h3>💻 เทคนิค</h3>
              <div className="skills-list">
                <div className="skill-item">
                  <span>HTML/CSS</span>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{width: '85%'}}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <span>JavaScript</span>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{width: '75%'}}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <span>React</span>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{width: '70%'}}></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="skill-category">
              <h3>🗣️ ภาษา</h3>
              <div className="skills-list">
                <div className="skill-item">
                  <span>ไทย</span>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{width: '100%'}}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <span>อังกฤษ</span>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{width: '80%'}}></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="skill-category">
              <h3>🎨 สร้างสรรค์</h3>
              <div className="skills-list">
                <div className="skill-item">
                  <span>การออกแบบ</span>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{width: '75%'}}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <span>การนำเสนอ</span>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{width: '85%'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Portfolio;