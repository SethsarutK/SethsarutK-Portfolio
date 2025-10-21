import React, { useEffect, useState } from 'react';
import { useLanguage } from '../contexts/AppContext';
import SEO from '../components/SEO';
import PageTransition from '../components/PageTransition';
import ImageModal from '../components/ImageModal';
import ImageCarousel from '../components/ImageCarousel';
import '../styles/Activities.css';

function Activities() {
  const { t, currentLanguage } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [carouselOpen, setCarouselOpen] = useState(false);
  const [selectedActivity, setSelectedActivity] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const openModal = (activity) => {
    if (activity.images && activity.images.length > 1) {
      setSelectedActivity(activity);
      setCarouselOpen(true);
    } else {
      setSelectedActivity(activity);
      setModalOpen(true);
    }
  };

  const closeModal = () => {
    setModalOpen(false);
    setCarouselOpen(false);
    setSelectedActivity(null);
  };

  const activities = {
    camps: [
      {
        title: currentLanguage === 'th' ? 'ค่าย LAODINSOR' : 'LAODINSOR Engineering Camp',
        period: currentLanguage === 'th' ? '2024' : '2024',
        description: currentLanguage === 'th' ? 
          'ค่ายวิศวกรรมของมหาวิทยาลัยธรรมศาสตร์ เรียนรู้หลักการวิศวกรรมและเทคโนโลยี' : 
          'Engineering camp at Thammasat University, learned engineering principles and technology',
        skills: [currentLanguage === 'th' ? 'วิศวกรรม' : 'Engineering', 
                currentLanguage === 'th' ? 'เทคโนโลยี' : 'Technology', 
                currentLanguage === 'th' ? 'การแก้ปัญหา' : 'Problem Solving'],
        image: process.env.PUBLIC_URL + '/Certificate/Laodinsor.jpg'
      },
      {
        title: currentLanguage === 'th' ? 'ค่ายวิทยาศาสตร์ จุฬาลงกรณ์มหาวิทยาลัย' : 'Science Camp - Chulalongkorn University',
        period: currentLanguage === 'th' ? '2024' : '2024',
        description: currentLanguage === 'th' ? 
          'ค่ายวิทยาศาสตร์ จุฬาลงกรณ์มหาวิทยาลัย เรียนรู้หลักการทางวิทยาศาสตร์และการทดลอง' : 
          'Science camp at Chulalongkorn University, learned scientific principles and experiments',
        skills: [currentLanguage === 'th' ? 'วิทยาศาสตร์' : 'Science', 
                currentLanguage === 'th' ? 'การทดลอง' : 'Experiments', 
                currentLanguage === 'th' ? 'การวิเคราะห์' : 'Analysis'],
        image: process.env.PUBLIC_URL + '/Certificate/CU_camp.jpg'
      },
      {
        title: currentLanguage === 'th' ? 'ค่ายปฐมนิเทศโรงเรียน (หัวหน้าพี่เลี้ยง)' : 'School Orientation Camp (Mentor Leader)',
        period: currentLanguage === 'th' ? '2024' : '2024',
        description: currentLanguage === 'th' ? 
          'ค่ายปฐมนิเทศของโรงเรียน ได้รับหน้าที่เป็นหัวหน้าพี่เลี้ยง ดูแลน้องใหม่' : 
          'School orientation camp, served as mentor leader taking care of new students',
        skills: [currentLanguage === 'th' ? 'ภาวะผู้นำ' : 'Leadership', 
                currentLanguage === 'th' ? 'การดูแล' : 'Mentoring', 
                currentLanguage === 'th' ? 'ความรับผิดชอบ' : 'Responsibility'],
        image: process.env.PUBLIC_URL + '/Certificate/FirstCamp.jpg'
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
        image: process.env.PUBLIC_URL + '/Certificate/Volunteer.jpg'
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
        image: process.env.PUBLIC_URL + '/Certificate/Volunteercamp1_67.jpg'
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
        image: process.env.PUBLIC_URL + '/Certificate/MathDay.jpg'
      }
    ],
    selflearning: [
      {
        title: currentLanguage === 'th' ? 'เรียนรู้การเขียนโค้ด GROK' : 'GROK Coding Learning',
        period: currentLanguage === 'th' ? '2023-2024' : '2023-2024',
        description: currentLanguage === 'th' ? 
          'เรียนรู้การเขียนโปรแกรมผ่านแพลตฟอร์ม GROK ฝึกฝนทักษะการแก้ปัญหา' : 
          'Learned programming through GROK platform, practiced problem-solving skills',
        skills: [currentLanguage === 'th' ? 'โปรแกรมมิ่ง' : 'Programming', 
                currentLanguage === 'th' ? 'การแก้ปัญหา' : 'Problem Solving', 
                currentLanguage === 'th' ? 'ตรรกศาสตร์' : 'Logic'],
        image: process.env.PUBLIC_URL + '/Certificate/grok1.jpg',
        images: [
          process.env.PUBLIC_URL + '/Certificate/grok1.jpg',
          process.env.PUBLIC_URL + '/Certificate/grok2.jpg'
        ]
      },
      {
        title: currentLanguage === 'th' ? 'เรียนรู้การเขียนโค้ด Samsung' : 'Samsung Coding Learning',
        period: currentLanguage === 'th' ? '2024' : '2024',
        description: currentLanguage === 'th' ? 
          'เรียนรู้การเขียนโค้ดและพัฒนาแอปพลิเคชันผ่านหลักสูตร Samsung' : 
          'Learned coding and app development through Samsung curriculum',
        skills: [currentLanguage === 'th' ? 'การพัฒนาแอป' : 'App Development', 
                currentLanguage === 'th' ? 'โปรแกรมมิ่ง' : 'Programming', 
                currentLanguage === 'th' ? 'นวัตกรรม' : 'Innovation'],
        image: process.env.PUBLIC_URL + '/Certificate/Sumsung01.png',
        images: [
          process.env.PUBLIC_URL + '/Certificate/Sumsung01.png',
          process.env.PUBLIC_URL + '/Certificate/Sumsung02.png',
          process.env.PUBLIC_URL + '/Certificate/Sumsung03.png',
          process.env.PUBLIC_URL + '/Certificate/Sumsung04.png'
        ]
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

      {/* Image Modal for single images */}
      <ImageModal
        isOpen={modalOpen}
        onClose={closeModal}
        imageSrc={selectedActivity?.image}
        title={selectedActivity?.title}
      />

      {/* Image Carousel for multiple images */}
      <ImageCarousel
        isOpen={carouselOpen}
        onClose={closeModal}
        images={selectedActivity?.images}
      />
    </PageTransition>
  );
}

export default Activities;