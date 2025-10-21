import React, { useEffect, useState } from 'react';
import { useLanguage } from '../contexts/AppContext';
import SEO from '../components/SEO';
import PageTransition from '../components/PageTransition';
import ImageModal from '../components/ImageModal';
import '../styles/Activities.css';

function Activities() {
  const { t, currentLanguage } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedActivity, setSelectedActivity] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const openModal = (activity) => {
    setSelectedActivity(activity);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedActivity(null);
  };

  const activities = {
    camps: [
      {
        title: currentLanguage === 'th' ? 'ค่าย POSN คอมพิวเตอร์' : 'POSN Computer Camp',
        period: currentLanguage === 'th' ? '2024' : '2024',
        description: currentLanguage === 'th' ? 
          'เข้าร่วมค่ายฝึกอบรมด้านคอมพิวเตอร์ขั้นสูง เรียนรู้เทคนิคการเขียนโปรแกรมและอัลกอริทึม' : 
          'Participated in advanced computer training camp, learned programming techniques and algorithms',
        skills: [currentLanguage === 'th' ? 'โปรแกรมมิ่ง' : 'Programming', 
                currentLanguage === 'th' ? 'อัลกอริทึม' : 'Algorithms', 
                currentLanguage === 'th' ? 'ปัญหาแก้ไข' : 'Problem Solving'],
        image: 'http://localhost:5806/SethsarutK-Portfolio/Certificate/FirstCamp.jpg'
      },
      {
        title: currentLanguage === 'th' ? 'ค่าย CU Young Webmaster' : 'CU Young Webmaster Camp',
        period: currentLanguage === 'th' ? '2024' : '2024',
        description: currentLanguage === 'th' ? 
          'เข้าร่วมค่ายพัฒนาเว็บไซต์ จุฬาลงกรณ์มหาวิทยาลัย เรียนรู้การสร้างเว็บไซต์สมัยใหม่' : 
          'Participated in web development camp at Chulalongkorn University, learned modern website creation',
        skills: [currentLanguage === 'th' ? 'Web Development' : 'Web Development', 
                currentLanguage === 'th' ? 'UI/UX Design' : 'UI/UX Design', 
                currentLanguage === 'th' ? 'การนำเสนอ' : 'Presentation'],
        image: 'http://localhost:5806/SethsarutK-Portfolio/Certificate/CU_camp.jpg'
      },
      {
        title: currentLanguage === 'th' ? 'ค่าย Samsung Innovation' : 'Samsung Innovation Camp',
        period: currentLanguage === 'th' ? '2024' : '2024',
        description: currentLanguage === 'th' ? 
          'เข้าร่วมค่ายนวัตกรรม Samsung เรียนรู้เทคโนโลยี IoT และการพัฒนาโปรเจ็กต์สร้างสรรค์' : 
          'Participated in Samsung Innovation Camp, learned IoT technology and creative project development',
        skills: [currentLanguage === 'th' ? 'IoT' : 'IoT', 
                currentLanguage === 'th' ? 'นวัตกรรม' : 'Innovation', 
                currentLanguage === 'th' ? 'การทำงานเป็นทีม' : 'Teamwork'],
        image: 'http://localhost:5806/SethsarutK-Portfolio/Certificate/Sumsung01.png'
      }
    ],
    volunteer: [
      {
        title: currentLanguage === 'th' ? 'อาสาสมัครสอนคอมพิวเตอร์' : 'Computer Teaching Volunteer',
        period: currentLanguage === 'th' ? '2024' : '2024',
        description: currentLanguage === 'th' ? 
          'สอนคอมพิวเตอร์พื้นฐานให้กับผู้สูงอายุในชุมชน ช่วยลดช่องว่างทางเทคโนโลยี' : 
          'Taught basic computer skills to elderly community members to bridge the digital divide',
        skills: [currentLanguage === 'th' ? 'การสอน' : 'Teaching', 
                currentLanguage === 'th' ? 'ความอดทน' : 'Patience', 
                currentLanguage === 'th' ? 'การบริการ' : 'Service'],
        image: 'http://localhost:5806/SethsarutK-Portfolio/Certificate/Volunteer.jpg'
      },
      {
        title: currentLanguage === 'th' ? 'กิจกรรมจิตอาสา โรงเรียน' : 'School Volunteer Activities',
        period: currentLanguage === 'th' ? '2023-2024' : '2023-2024',
        description: currentLanguage === 'th' ? 
          'เข้าร่วมกิจกรรมจิตอาสาของโรงเรียน ช่วยเหลือชุมชน ทำความสะอาดสิ่งแวดล้อม' : 
          'Participated in school volunteer activities, helped community and environmental cleaning',
        skills: [currentLanguage === 'th' ? 'จิตอาสา' : 'Volunteerism', 
                currentLanguage === 'th' ? 'การทำงานร่วมกัน' : 'Teamwork', 
                currentLanguage === 'th' ? 'ความรับผิดชอบ' : 'Responsibility'],
        image: 'http://localhost:5806/SethsarutK-Portfolio/Certificate/Volunteercamp1_67.jpg'
      },
      {
        title: currentLanguage === 'th' ? 'อาสาช่วยเหลือผู้ด้อยโอกาส' : 'Helping Underprivileged Volunteer',
        period: currentLanguage === 'th' ? '2023' : '2023',
        description: currentLanguage === 'th' ? 
          'ร่วมกิจกรรมช่วยเหลือเด็กด้อยโอกาส มอบของใช้ จัดกิจกรรมสร้างความสุข' : 
          'Participated in helping underprivileged children, donated supplies and organized fun activities',
        skills: [currentLanguage === 'th' ? 'ความเข้าใจ' : 'Empathy', 
                currentLanguage === 'th' ? 'การช่วยเหลือ' : 'Helping', 
                currentLanguage === 'th' ? 'การจัดการ' : 'Organization'],
        image: 'http://localhost:5806/SethsarutK-Portfolio/Certificate/MathDay.jpg'
      }
    ],
    selflearning: [
      {
        title: currentLanguage === 'th' ? 'เรียนรู้ Python พื้นฐาน' : 'Basic Python Learning',
        period: currentLanguage === 'th' ? '2023-2024' : '2023-2024',
        description: currentLanguage === 'th' ? 
          'ศึกษา Python จากหนังสือ คอร์สออนไลน์ และฝึกฝนด้วยโปรเจ็กต์เล็ก ๆ' : 
          'Learned Python through books, online courses, and practiced with small projects',
        skills: [currentLanguage === 'th' ? 'โปรแกรมมิ่ง' : 'Programming', 
                currentLanguage === 'th' ? 'การเรียนรู้ด้วยตนเอง' : 'Self Learning', 
                currentLanguage === 'th' ? 'ความอดทน' : 'Patience'],
        image: 'http://localhost:5806/SethsarutK-Portfolio/Certificate/FirstCamp.jpg'
      },
      {
        title: currentLanguage === 'th' ? 'เรียนรู้ Web Development' : 'Web Development Learning',
        period: currentLanguage === 'th' ? '2024' : '2024',
        description: currentLanguage === 'th' ? 
          'ศึกษา HTML, CSS, JavaScript และ React จาก YouTube และเอกสารออนไลน์' : 
          'Learned HTML, CSS, JavaScript, and React from YouTube and online documentation',
        skills: [currentLanguage === 'th' ? 'Web Development' : 'Web Development', 
                currentLanguage === 'th' ? 'การวิจัย' : 'Research', 
                currentLanguage === 'th' ? 'การแก้ปัญหา' : 'Problem Solving'],
        image: 'http://localhost:5806/SethsarutK-Portfolio/Certificate/CU_camp.jpg'
      }
    ]
  };

  return (
    <PageTransition>
      <SEO 
        title={currentLanguage === 'th' ? 'กิจกรรมและประสบการณ์' : 'Activities & Experience'}
        description={currentLanguage === 'th' ? 
          'กิจกรรมต่าง ๆ ที่เข้าร่วมและประสบการณ์ที่ได้รับ' : 
          'Various activities participated and experiences gained'}
      />
      
      <div className={`activities-page ${isVisible ? 'fade-in' : ''}`}>
        <div className="container">
          <header className="page-header">
            <h1 className="page-title">
              {currentLanguage === 'th' ? 'กิจกรรมและประสบการณ์' : 'Activities & Experience'}
            </h1>
            <p className="page-subtitle">
              {currentLanguage === 'th' ? 
                'กิจกรรมต่าง ๆ ที่เข้าร่วมและประสบการณ์ที่สร้างคุณค่า' : 
                'Various activities participated and valuable experiences gained'}
            </p>
          </header>

          {/* กิจกรรมค่าย */}
          <section className="activity-section">
            <h2 className="section-title">
              🏕️ {currentLanguage === 'th' ? 'กิจกรรมค่าย' : 'Camp Activities'}
            </h2>
            <div className="activity-timeline">
              {activities.camps.map((activity, index) => (
                <div 
                  key={index} 
                  className="activity-card card clickable"
                  onClick={() => openModal(activity)}
                >
                  <div className="activity-header">
                    <h3>{activity.title}</h3>
                    <span className="activity-period">{activity.period}</span>
                  </div>
                  <p className="activity-description">
                    {activity.description}
                  </p>
                  <div className="activity-skills">
                    {activity.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className="skill-tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                  <div className="click-hint">
                    📸 {currentLanguage === 'th' ? 'คลิกเพื่อดูรูปภาพ' : 'Click to view image'}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* งานอาสา */}
          <section className="activity-section">
            <h2 className="section-title">
              🤝 {currentLanguage === 'th' ? 'จิตอาสา' : 'Volunteer Work'}
            </h2>
            <div className="activity-timeline">
              {activities.volunteer.map((activity, index) => (
                <div 
                  key={index} 
                  className="activity-card card clickable"
                  onClick={() => openModal(activity)}
                >
                  <div className="activity-header">
                    <h3>{activity.title}</h3>
                    <span className="activity-period">{activity.period}</span>
                  </div>
                  <p className="activity-description">
                    {activity.description}
                  </p>
                  <div className="activity-skills">
                    {activity.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className="skill-tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                  <div className="click-hint">
                    📸 {currentLanguage === 'th' ? 'คลิกเพื่อดูรูปภาพ' : 'Click to view image'}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* เรียนรู้ด้วยตนเอง */}
          <section className="activity-section">
            <h2 className="section-title">
              📚 {currentLanguage === 'th' ? 'เรียนรู้ด้วยตนเอง' : 'Self Learning'}
            </h2>
            <div className="activity-timeline">
              {activities.selflearning.map((activity, index) => (
                <div 
                  key={index} 
                  className="activity-card card clickable"
                  onClick={() => openModal(activity)}
                >
                  <div className="activity-header">
                    <h3>{activity.title}</h3>
                    <span className="activity-period">{activity.period}</span>
                  </div>
                  <p className="activity-description">
                    {activity.description}
                  </p>
                  <div className="activity-skills">
                    {activity.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className="skill-tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                  <div className="click-hint">
                    📸 {currentLanguage === 'th' ? 'คลิกเพื่อดูรูปภาพ' : 'Click to view image'}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="activity-cta">
            <div className="cta-content card glass">
              <h2>
                {currentLanguage === 'th' ? 'เรียนรู้และพัฒนาอย่างต่อเนื่อง' : 'Continuous Learning & Development'}
              </h2>
              <p>
                {currentLanguage === 'th' ? 
                  'กิจกรรมเหล่านี้ช่วยพัฒนาทักษะในหลายด้าน ทั้งด้านเทคนิคและบุคลิกภาพ เตรียมความพร้อมสู่อนาคต' :
                  'These activities help develop various skills, both technical and personal, preparing for the future'}
              </p>
            </div>
          </section>
        </div>
      </div>

      {/* Image Modal */}
      <ImageModal
        isOpen={modalOpen}
        onClose={closeModal}
        imageSrc={selectedActivity?.image}
        title={selectedActivity?.title}
      />
    </PageTransition>
  );
}

export default Activities;