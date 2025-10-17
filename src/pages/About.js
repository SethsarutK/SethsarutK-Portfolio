import React, { useEffect, useState } from 'react';
import { useLanguage } from '../contexts/AppContext';
import PageTransition from '../components/PageTransition';
import '../styles/About.css';

function About() {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <PageTransition>
      <div className={`about ${isVisible ? 'fade-in' : ''}`}>
      <div className="container">
        <section className="about-intro">
          <h1>{t('aboutTitle')}</h1>
          <div className="about-content">
            <div className="about-image">
              <div className="about-photo-frame">
                <img 
                  src="https://SethsarutK.github.io/SethsarutK-Portfolio/images/cafe1.jpg"
                  alt="เศรษฐ์ศรุต กตคุณไพศาล" 
                  className="about-profile-image"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="about-fallback" style={{display: 'none'}}>
                  <span className="profile-initial">ศร</span>
                </div>
              </div>
            </div>
            <div className="about-text">
              <h2>สวัสดีครับ! ผมคือ นาย เศรษฐ์ศรุต กตคุณไพศาล</h2>
              <p>
                ผมเป็นนักเรียนชั้น ม.6 แผน Math Gifted โรงเรียนสวนกุหลาบวิทยาลัย 
                ที่มีความฝันอยากเข้าเรียนสาขาวิศวกรรมคอมพิวเตอร์ที่ <strong>มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี (KMUTT)</strong> 
                ด้วยความหลงใหลในการเขียนโปรแกรมและพัฒนาเทคโนโลยี
              </p>
              <p>
                เป้าหมายของผมคือการเป็นวิศวกรคอมพิวเตอร์ที่สามารถพัฒนา AI, IoT และระบบอัตโนมัติ
                เพื่อนำมาแก้ปัญหาในสังคมไทย เช่น การเกษตรอัจฉริยะ ระบบจัดการพลังงาน และเทคโนโลยีเพื่อการศึกษา
                ผมเชื่อว่า KMUTT จะเป็นจุดเริ่มต้นที่ดีที่สุดสำหรับความฝันนี้
              </p>
              <p>
                นอกเหนือจากการเรียน ผมยังสนใจการพัฒนาซอฟต์แวร์ เว็บแอปพลิเคชัน และการทำโครงงานวิทยาศาสตร์
                ผมเชื่อว่าเทคโนโลยีสามารถเปลี่ยนแปลงโลกให้ดีขึ้นได้ และผมอยากเป็นส่วนหนึ่งของการเปลี่ยนแปลงนั้น
              </p>
            </div>
          </div>
        </section>

        <section className="personal-info">
          <h2>{t('personalInfo')}</h2>
          <div className="info-grid">
            <div className="info-item">
              <strong>ชื่อ-นามสกุล:</strong>
              <span>นาย เศrษฐ์ศรุต กตคุณไพศาล</span>
            </div>
            <div className="info-item">
              <strong>อายุ:</strong>
              <span>18 ปี (เกิด พ.ศ. 2550)</span>
            </div>
            <div className="info-item">
              <strong>จังหวัด:</strong>
              <span>กรุงเทพมหานคร</span>
            </div>
            <div className="info-item">
              <strong>โรงเรียน:</strong>
              <span>โรงเรียนสวนกุหลาบวิทยาลัย</span>
            </div>
            <div className="info-item">
              <strong>แผนการเรียน:</strong>
              <span>Math Gifted Program</span>
            </div>
            <div className="info-item">
              <strong>GPA:</strong>
              <span>3.78 / 4.00</span>
            </div>
            <div className="info-item">
              <strong>งานอดิเรก:</strong>
              <span>เขียนโปรแกรม, อ่านหนังสือ, เล่นเกม</span>
            </div>
            <div className="info-item">
              <strong>ภาษาที่ใช้ได้:</strong>
              <span>ไทย (เจ้าของภาษา), อังกฤษ (ระดับดี)</span>
            </div>
          </div>
        </section>

        <section className="education-path">
          <h2>เส้นทางการศึกษา</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-year">2019-2022</div>
              <div className="timeline-content">
                <h3>ระดับมัธยมศึกษาตอนต้น</h3>
                <p>โรงเรียนสวนกุหลาบวิทยาลัย - เกรดเฉลี่ย 3.85</p>
                <p>เข้าร่วมแผน Math Gifted และได้รับการพัฒนาทักษะทางคณิตศาสตร์เป็นพิเศษ</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2022-2025</div>
              <div className="timeline-content">
                <h3>ระดับมัธยมศึกษาตอนปลาย</h3>
                <p>โรงเรียนสวนกุหลาบวิทยาลัย - แผน Math Gifted</p>
                <p>เน้นการเรียนวิชาคณิตศาสตร์, วิทยาศาสตร์ และคอมพิวเตอร์</p>
                <p>เริ่มหลงใหลในการเขียนโปรแกรมและพัฒนาโครงงานต่าง ๆ</p>
              </div>
            </div>
            <div className="timeline-item future">
              <div className="timeline-year">2025+</div>
              <div className="timeline-content">
                <h3>เป้าหมาย: วิศวกรรมคอมพิวเตอร์ KMUTT</h3>
                <p>มุ่งสู่การเป็นวิศวกรที่ใช้เทคโนโลยีแก้ปัญหาสังคม</p>
                <p>เฉพาะด้าน: AI, IoT, และ Software Development</p>
              </div>
            </div>
          </div>
        </section>

        <section className="interests">
          <h2>{t('interests')}</h2>
          <div className="interests-grid">
            <div className="interest-card">
              <h3>📚 การอ่าน</h3>
              <p>ชอบอ่านหนังสือประเภทเทคโนโลยี วิทยาศาสตร์ และนิยายไซไฟ เพื่อเพิ่มพูนความรู้และจินตนาการ</p>
              <ul>
                <li>หนังสือเทคโนโลยี: "Clean Code", "Design Patterns"</li>
                <li>นิยายไซไฟ: Isaac Asimov, Philip K. Dick</li>
                <li>หนังสือวิทยาศาสตร์: "A Brief History of Time"</li>
              </ul>
            </div>
            <div className="interest-card">
              <h3>💻 เทคโนโลยี</h3>
              <p>หลงใหลในการเขียนโปรแกรม AI, Machine Learning และการพัฒนาเว็บแอปพลิเคชั่น</p>
              <ul>
                <li>Web Development: React, JavaScript, Node.js</li>
                <li>AI/ML: Python, TensorFlow, Data Science</li>
                <li>Hardware: Arduino, Raspberry Pi, IoT</li>
              </ul>
            </div>
            <div className="interest-card">
              <h3>🎨 ศิลปะดิจิทัล</h3>
              <p>สนใจการออกแบบ UI/UX และการสร้าง Digital Art ด้วยเครื่องมือต่างๆ</p>
              <ul>
                <li>UI/UX Design: Figma, Adobe XD</li>
                <li>Graphic Design: Photoshop, Illustrator</li>
                <li>Web Design: Responsive & Modern Interfaces</li>
              </ul>
            </div>
            <div className="interest-card">
              <h3>🌱 Sustainable Technology</h3>
              <p>ใส่ใจในการใช้เทคโนโลยีเพื่อสิ่งแวดล้อมและพลังงานหมุนเวียน</p>
              <ul>
                <li>Smart Farm Technology</li>
                <li>Energy Management Systems</li>
                <li>Green Computing Practices</li>
              </ul>
            </div>
            <div className="interest-card">
              <h3>🎮 เกมและสื่อ</h3>
              <p>เล่นเกมเพื่อการผ่อนคลายและศึกษาการออกแบบเกม รวมถึงติดตามข่าวสารเทคโนโลยี</p>
              <ul>
                <li>Strategy Games: เกมที่ต้องใช้ความคิด</li>
                <li>Programming Games: CodeCombat, HackerRank</li>
                <li>Tech News: YouTube, Tech Blogs</li>
              </ul>
            </div>
            <div className="interest-card">
              <h3>🏃‍♂️ กิจกรรมเสริม</h3>
              <p>ออกกำลังกายและกิจกรรมที่ช่วยให้สมองสดใส พร้อมเรียนรู้สิ่งใหม่ ๆ</p>
              <ul>
                <li>วิ่งจ๊อกกิ้ง: 3-4 ครั้งต่อสัปดาห์</li>
                <li>เล่นดนตรี: กีตาร์ (ระดับเริ่มต้น)</li>
                <li>การถ่ายภาพ: Photography เป็นงานอดิเรก</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="portfolio-section">
          <h2>ผลงานและโปรเจ็กต์</h2>
          <div className="projects-grid">
            <div className="project-card card">
              <div className="project-image">
                <img 
                  src="https://SethsarutK.github.io/SethsarutK-Portfolio/images/cafe2.jpg"
                  alt="ระบบจัดการห้องสมุดออนไลน์"
                  className="project-screenshot"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="mockup-fallback" style={{display: 'none'}}>
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
              <div className="project-content">
                <span className="project-category">เว็บแอปพลิเคชัน</span>
                <h3>ระบบจัดการห้องสมุดออนไลน์</h3>
                <p>ระบบจัดการห้องสมุดที่พัฒนาด้วย React และ Firebase ช่วยให้ผู้ใช้ค้นหาหนังสือ จองหนังสือ และติดตามสถานะการยืมได้อย่างสะดวก</p>
                <div className="project-technologies">
                  <span className="tech-tag">React</span>
                  <span className="tech-tag">Firebase</span>
                  <span className="tech-tag">CSS3</span>
                </div>
              </div>
            </div>

            <div className="project-card card">
              <div className="project-image">
                <img 
                  src="https://SethsarutK.github.io/SethsarutK-Portfolio/images/cafe3.jpg"
                  alt="แอปพยากรณ์อากาศ AI"
                  className="project-screenshot"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="mockup-fallback" style={{display: 'none'}}>
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
              <div className="project-content">
                <span className="project-category">Mobile App</span>
                <h3>แอปพยากรณ์อากาศ AI</h3>
                <p>แอปพลิเคชันพยากรณ์อากาศที่ใช้ Machine Learning วิเคราะห์ข้อมูลอากาศและให้คำแนะนำเกี่ยวกับกิจกรรมที่เหมาะสม</p>
                <div className="project-technologies">
                  <span className="tech-tag">Python</span>
                  <span className="tech-tag">TensorFlow</span>
                  <span className="tech-tag">React Native</span>
                </div>
              </div>
            </div>

            <div className="project-card card">
              <div className="project-image">
                <img 
                  src="https://SethsarutK.github.io/SethsarutK-Portfolio/images/cafe4.jpg"
                  alt="Smart Farm IoT"
                  className="project-screenshot"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="mockup-fallback" style={{display: 'none'}}>
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
              <div className="project-content">
                <span className="project-category">IoT Project</span>
                <h3>โครงงานวิทยาศาสตร์: Smart Farm</h3>
                <p>ระบบฟาร์มอัจฉริยะที่ใช้ IoT ควบคุมการรดน้ำ วัดความชื้น และตรวจสอบสภาพพืชผ่านเซนเซอร์และแอปพลิเคชัน รางวัลชนะเลิศระดับเขตการศึกษา</p>
                <div className="project-technologies">
                  <span className="tech-tag">Arduino</span>
                  <span className="tech-tag">React</span>
                  <span className="tech-tag">Node.js</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="skills-section">
          <h2>ทักษะและความสามารถ</h2>
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
                <div className="skill-item">
                  <span>Python</span>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{width: '80%'}}></div>
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
                  <span>การออกแบบ UI/UX</span>
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

        <section className="achievements-section">
          <h2>รางวัลและความสำเร็จ</h2>
          <div className="achievements-grid">
            <div className="achievement-card card">
              <div className="achievement-year">2024</div>
              <h3>รางวัลชนะเลิศ โครงงานวิทยาศาสตร์</h3>
              <p>ระดับเขตการศึกษา ด้วยโครงงาน Smart Farm Monitoring System</p>
            </div>
            <div className="achievement-card card">
              <div className="achievement-year">2023</div>
              <h3>เหรียญทองแดง โอลิมปิกคณิตศาสตร์</h3>
              <p>การแข่งขันโอลิมปิกวิชาการ ระดับจังหวัด สาขาคณิตศาสตร์</p>
            </div>
            <div className="achievement-card card">
              <div className="achievement-year">2023</div>
              <h3>รางวัลนักเรียนดีเด่น</h3>
              <p>ด้านเทคโนโลยีสารสนเทศ ประจำปีการศึกษา 2566</p>
            </div>
          </div>
        </section>
      </div>
    </div>
    </PageTransition>
  );
}

export default About;
