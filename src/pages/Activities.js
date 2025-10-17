import React, { useEffect, useState } from 'react';
import { useLanguage } from '../contexts/AppContext';
import SEO from '../components/SEO';
import PageTransition from '../components/PageTransition';
import '../styles/Activities.css';

function Activities() {
  const { t, currentLanguage } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const activities = {
    leadership: [
      {
        title: currentLanguage === 'th' ? 'หัวหน้าห้อง' : 'Class Representative',
        period: currentLanguage === 'th' ? '2023-2024' : '2023-2024',
        description: currentLanguage === 'th' ? 
          'รับผิดชอบการประสานงานระหว่างนักเรียนและครูอาจารย์ จัดกิจกรรมต่าง ๆ ในห้องเรียน' : 
          'Responsible for coordinating between students and teachers, organizing classroom activities',
        skills: [currentLanguage === 'th' ? 'ภาวะผู้นำ' : 'Leadership', 
                currentLanguage === 'th' ? 'การสื่อสาร' : 'Communication', 
                currentLanguage === 'th' ? 'การจัดการ' : 'Management']
      },
      {
        title: currentLanguage === 'th' ? 'ประธานชมรมคอมพิวเตอร์' : 'Computer Club President',
        period: currentLanguage === 'th' ? '2024' : '2024',
        description: currentLanguage === 'th' ? 
          'นำชมรมคอมพิวเตอร์จัดกิจกรรมการเรียนรู้ด้านเทคโนโลジี แลกเปลี่ยนความรู้ระหว่างสมาชิก' : 
          'Led computer club activities for technology learning and knowledge sharing among members',
        skills: [currentLanguage === 'th' ? 'ภาวะผู้นำ' : 'Leadership', 
                currentLanguage === 'th' ? 'การสอน' : 'Teaching', 
                currentLanguage === 'th' ? 'เทคโนโลยี' : 'Technology']
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
                currentLanguage === 'th' ? 'การบริการ' : 'Service']
      },
      {
        title: currentLanguage === 'th' ? 'กิจกรรมบำเพ็ญประโยชน์' : 'Community Service',
        period: currentLanguage === 'th' ? '2023-2024' : '2023-2024',
        description: currentLanguage === 'th' ? 
          'เข้าร่วมกิจกรรมบำเพ็ญประโยชน์ต่าง ๆ เช่น ทำความสะอาดสวนสาธารณะ ช่วยเหลือผู้ด้อยโอกาส' : 
          'Participated in various community service activities such as park cleaning and helping the underprivileged',
        skills: [currentLanguage === 'th' ? 'จิตอาสา' : 'Volunteerism', 
                currentLanguage === 'th' ? 'การทำงานร่วมกัน' : 'Teamwork', 
                currentLanguage === 'th' ? 'ความรับผิดชอบ' : 'Responsibility']
      }
    ],
    projects: [
      {
        title: currentLanguage === 'th' ? 'โครงการ Smart Farm' : 'Smart Farm Project',
        period: currentLanguage === 'th' ? '2024' : '2024',
        description: currentLanguage === 'th' ? 
          'พัฒนาระบบฟาร์มอัจฉริยะด้วย IoT เซ็นเซอร์วัดความชื้น อุณหภูมิ และระบบรดน้ำอัตโนมัติ' : 
          'Developed smart farm system with IoT sensors for humidity, temperature monitoring and automatic irrigation',
        skills: [currentLanguage === 'th' ? 'IoT' : 'IoT', 
                currentLanguage === 'th' ? 'โปรแกรมมิ่ง' : 'Programming', 
                currentLanguage === 'th' ? 'ฮาร์ดแวร์' : 'Hardware']
      },
      {
        title: currentLanguage === 'th' ? 'เว็บไซต์แนะนำโรงเรียน' : 'School Introduction Website',
        period: currentLanguage === 'th' ? '2023' : '2023',
        description: currentLanguage === 'th' ? 
          'สร้างเว็บไซต์แนะนำโรงเรียนด้วย HTML, CSS, JavaScript เพื่อประชาสัมพันธ์โรงเรียน' : 
          'Created school introduction website using HTML, CSS, JavaScript for school promotion',
        skills: [currentLanguage === 'th' ? 'Web Development' : 'Web Development', 
                currentLanguage === 'th' ? 'UI/UX' : 'UI/UX', 
                currentLanguage === 'th' ? 'การออกแบบ' : 'Design']
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

          {/* ภาวะผู้นำ */}
          <section className="activity-section">
            <h2 className="section-title">
              👑 {currentLanguage === 'th' ? 'ภาวะผู้นำ' : 'Leadership'}
            </h2>
            <div className="activity-timeline">
              {activities.leadership.map((activity, index) => (
                <div key={index} className="activity-card card">
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
                </div>
              ))}
            </div>
          </section>

          {/* งานอาสา */}
          <section className="activity-section">
            <h2 className="section-title">
              🤝 {currentLanguage === 'th' ? 'งานอาสาและการบริการ' : 'Volunteer & Service'}
            </h2>
            <div className="activity-timeline">
              {activities.volunteer.map((activity, index) => (
                <div key={index} className="activity-card card">
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
                </div>
              ))}
            </div>
          </section>

          {/* โครงการพิเศษ */}
          <section className="activity-section">
            <h2 className="section-title">
              🚀 {currentLanguage === 'th' ? 'โครงการพิเศษ' : 'Special Projects'}
            </h2>
            <div className="activity-timeline">
              {activities.projects.map((activity, index) => (
                <div key={index} className="activity-card card">
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
    </PageTransition>
  );
}

export default Activities;