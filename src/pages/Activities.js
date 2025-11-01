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
  const [expandedCards, setExpandedCards] = useState({});

  const toggleExpand = (category, index) => {
    const key = `${category}-${index}`;
    setExpandedCards(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const getShortDescription = (description) => {
    const paragraphs = description.split('\n\n');
    return paragraphs[0];
  };

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

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const activities = {
    camps: [
      {
        title: currentLanguage === 'th' ? 'ค่าย LAODINSOR' : 'LAODINSOR Engineering Camp',
        period: currentLanguage === 'th' ? '2024' : '2024',
        description: currentLanguage === 'th' ? 
          'ประสบการณ์จากค่ายวิศวกรรมนี้ถือเป็นโอกาสอันมีค่า ที่ทำให้ผมได้ขยายมุมมอง และเห็นถึงความหลากหลายและลักษณะเฉพาะของแต่ละสาขาวิศวกรรมอย่างชัดเจน ผ่านกิจกรรมที่สนุกสนานและให้ความรู้ ผมเรียนรู้จากการทดลองจริงและการพูดคุยกับรุ่นพี่ในหลายสาขา ซึ่งทำให้ผมค้นพบว่า ศักยภาพและความสนใจของตนเองตรงกับสาขาวิศวกรรมคอมพิวเตอร์มากที่สุด\n\nนอกจากนี้ ค่ายยังเปิดโอกาสให้ผมได้สัมผัสวิถีชีวิตและสังคมของวิศวกร โดยเฉพาะในด้านการทำงานร่วมกัน การแบ่งปันความคิด และการแก้ปัญหาอย่างเป็นระบบ ซึ่งเป็นประสบการณ์ที่มีค่ามากเกินกว่าที่จะหาได้จากห้องเรียนเพียงอย่างเดียว\n\nสำหรับผม ค่ายนี้ไม่เพียงแค่การเรียนรู้เกี่ยวกับวิศวกรรมเท่านั้น แต่ยังเป็นการสำรวจตัวตนของผมเอง เปิดรับประสบการณ์ใหม่ ๆ และจุดประกายแรงบันดาลใจในการศึกษาต่อของผมต่อไป' : 
          'The experience from this engineering camp was a valuable opportunity that allowed me to expand my perspective and clearly see the diversity and unique characteristics of each engineering field. Through fun and educational activities, I learned from hands-on experiments and conversations with seniors from various fields, which helped me discover that my potential and interests align most with Computer Engineering.\n\nAdditionally, the camp gave me the chance to experience the lifestyle and society of engineers, especially in terms of teamwork, idea sharing, and systematic problem-solving. This was an invaluable experience that could not be found in the classroom alone.\n\nFor me, this camp was not just about learning engineering, but also about exploring myself, embracing new experiences, and igniting inspiration for my future studies.',
        skills: [currentLanguage === 'th' ? 'วิศวกรรม' : 'Engineering', 
                currentLanguage === 'th' ? 'เทคโนโลยี' : 'Technology', 
                currentLanguage === 'th' ? 'การแก้ปัญหา' : 'Problem Solving'],
        image: process.env.PUBLIC_URL + '/Certificate/Laodinsor.jpg'
      },
      {
        title: currentLanguage === 'th' ? 'ค่ายวิทยาศาสตร์ จุฬาลงกรณ์มหาวิทยาลัย' : 'Science Camp - Chulalongkorn University',
        period: currentLanguage === 'th' ? '2024' : '2024',
        description: currentLanguage === 'th' ? 
          `     ค่ายนี้ทำให้ผมได้รับความรู้และประสบการณ์ที่แตกต่างจากค่ายวิศวกรรม โดยสิ่งที่สำคัญที่สุดที่ค่ายนี้มอบให้คือการเรียนรู้และกระบวนการคิดอย่างเป็นระบบ ตั้งแต่การวิเคราะห์ปัญหา การวางแผนแก้ไข ไปจนถึงการกล้าทดลองและยอมรับความล้มเหลวเพื่อพัฒนาตนเองให้ดีขึ้น ผมได้ตระหนักว่าวิทยาศาสตร์ไม่ใช่เพียงการท่องจำทฤษฎีแต่เป็นการลงมือทำและเรียนรู้จากผลลัพธ์ที่เกิดขึ้นจริง

     ประสบการณ์จากค่ายนี้ทำให้ผมเห็นคุณค่าของความพยายามและความอดทน รวมถึงการทำงานร่วมกับผู้อื่นในการหาทางออกอย่างสร้างสรรค์ สิ่งเหล่านี้ไม่เพียงแต่เสริมสร้างพื้นฐานทางวิชาการ แต่ยังหล่อหลอมแนวคิดและทัศนคติที่สามารถนำไปใช้ในทุกสาขาวิชาในอนาคต

     นอกจากนี้ ค่ายยังเปิดโอกาสให้ผมได้สัมผัสกับการทำงานในรูปแบบของการทดลองจริงและการแก้ปัญหาเฉพาะหน้า ซึ่งจำเป็นต้องใช้ทั้งความคิดเชิงวิเคราะห์และความกล้าตัดสินใจ ผมได้เรียนรู้ว่าความผิดพลาดไม่ใช่สิ่งที่ต้องกลัวแต่เป็นบันไดที่นำไปสู่การค้นพบสิ่งใหม่ ๆ ที่มีคุณค่า และช่วยให้เราเติบโตทั้งในด้านความรู้และจิตใจ

     ท้ายที่สุด ค่ายนี้ทำให้ผมตระหนักว่า การเรียนรู้ที่แท้จริงไม่ได้สิ้นสุดในห้องเรียน แต่เกิดจากการลงมือทำ การตั้งคำถามและการไม่ยอมแพ้ต่ออุปสรรค ผมจึงมองว่าค่ายนี้ไม่เพียงแค่ให้ความรู้ทางวิทยาศาสตร์ แต่ยังมอบแนวทางการใช้เหตุผลและการพัฒนาตนเอง ซึ่งจะเป็นพื้นฐานสำคัญในการก้าวต่อไปบนเส้นทางในอนาคตของผม` : 
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
        title: currentLanguage === 'th' ? 'ค่ายคุณธรรมจิตอาสารักษ์โลก' : 'Environmental Conservation Volunteer Camp',
        period: currentLanguage === 'th' ? '2024' : '2024',
        description: currentLanguage === 'th' ? 
          'เข้าร่วมค่ายคุณธรรมจิตอาสารักษ์โลก ไปวิเคราะห์ปัญหาธรรมชาติตามป่าเขาและหาแนวทางแก้ไข' : 
          'Participated in Environmental Conservation Volunteer Camp, analyzed natural problems in forests and mountains to find solutions',
        skills: [currentLanguage === 'th' ? 'การวิเคราะห์' : 'Analysis', 
                currentLanguage === 'th' ? 'สิ่งแวดล้อม' : 'Environment', 
                currentLanguage === 'th' ? 'การแก้ปัญหา' : 'Problem Solving'],
        image: process.env.PUBLIC_URL + '/Certificate/Volunteer.jpg'
      },
      {
        title: currentLanguage === 'th' ? 'ค่ายอาสาพัฒนาโรงเรียน' : 'School Development Volunteer Camp',
        period: currentLanguage === 'th' ? '2023-2024' : '2023-2024',
        description: currentLanguage === 'th' ? 
          'เข้าร่วมค่ายอาสาพัฒนาโรงเรียน ไปช่วยซ่อมบำรุงโรงเรียนวอนนภาศัพท์' : 
          'Participated in School Development Volunteer Camp, helped repair and maintain Wannaphasap School',
        skills: [currentLanguage === 'th' ? 'การซ่อมบำรุง' : 'Maintenance', 
                currentLanguage === 'th' ? 'การทำงานร่วมกัน' : 'Teamwork', 
                currentLanguage === 'th' ? 'ความรับผิดชอบ' : 'Responsibility'],
        image: process.env.PUBLIC_URL + '/Certificate/Volunteercamp1_67.jpg'
      },
      {
        title: currentLanguage === 'th' ? 'ค่ายคณิตศาสตร์บูรณาการ' : 'Integrated Mathematics Camp',
        period: currentLanguage === 'th' ? '2023' : '2023',
        description: currentLanguage === 'th' ? 
          'เป็นวิทยากรในการจัดกิจกรรมคณิตศาสตร์ให้กับนักเรียน ม.1 โรงเรียนนาวิกโยธินบูรณะ' : 
          'Served as instructor organizing mathematics activities for Grade 7 students at Navikayothin Burana School',
        skills: [currentLanguage === 'th' ? 'การสอน' : 'Teaching', 
                currentLanguage === 'th' ? 'คณิตศาสตร์' : 'Mathematics', 
                currentLanguage === 'th' ? 'ภาวะผู้นำ' : 'Leadership'],
        image: process.env.PUBLIC_URL + '/Certificate/Volunteercamp2_67.jpg'
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
              {activities.camps.map((activity, index) => {
                const isExpanded = expandedCards[`camps-${index}`];
                const hasMultipleParagraphs = activity.description.includes('\n\n');
                
                return (
                  <div 
                    key={index} 
                    className="activity-card card"
                  >
                    <div className="activity-header">
                      <h3>{activity.title}</h3>
                      <span className="activity-period">{activity.period}</span>
                    </div>
                    <div className="activity-description">
                      {isExpanded ? activity.description : getShortDescription(activity.description)}
                    </div>
                    {hasMultipleParagraphs && (
                      <button 
                        className="read-more-btn"
                        onClick={() => toggleExpand('camps', index)}
                      >
                        {isExpanded ? 
                          (currentLanguage === 'th' ? '▲ ซ่อน' : '▲ Hide') : 
                          (currentLanguage === 'th' ? '▼ คลิกเพื่ออ่านเพิ่มเติม' : '▼ Click to read more')}
                      </button>
                    )}
                    <div className="activity-skills">
                      {activity.skills.map((skill, skillIndex) => (
                        <span key={skillIndex} className="skill-tag">
                          {skill}
                        </span>
                      ))}
                    </div>
                    <div className="click-hint" onClick={() => openModal(activity)}>
                      📸 {currentLanguage === 'th' ? 'คลิกเพื่อดูรูปภาพ' : 'Click to view image'}
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* งานอาสา */}
          <section className="activity-section">
            <h2 className="section-title">
              🤝 {currentLanguage === 'th' ? 'จิตอาสา' : 'Volunteer Work'}
            </h2>
            <div className="activity-timeline">
              {activities.volunteer.map((activity, index) => {
                const isExpanded = expandedCards[`volunteer-${index}`];
                const hasMultipleParagraphs = activity.description.includes('\n\n');
                
                return (
                  <div 
                    key={index} 
                    className="activity-card card"
                  >
                    <div className="activity-header">
                      <h3>{activity.title}</h3>
                      <span className="activity-period">{activity.period}</span>
                    </div>
                    <div className="activity-description">
                      {isExpanded ? activity.description : getShortDescription(activity.description)}
                    </div>
                    {hasMultipleParagraphs && (
                      <button 
                        className="read-more-btn"
                        onClick={() => toggleExpand('volunteer', index)}
                      >
                        {isExpanded ? 
                          (currentLanguage === 'th' ? '▲ ซ่อน' : '▲ Hide') : 
                          (currentLanguage === 'th' ? '▼ คลิกเพื่ออ่านเพิ่มเติม' : '▼ Click to read more')}
                      </button>
                    )}
                    <div className="activity-skills">
                      {activity.skills.map((skill, skillIndex) => (
                        <span key={skillIndex} className="skill-tag">
                          {skill}
                        </span>
                      ))}
                    </div>
                    <div className="click-hint" onClick={() => openModal(activity)}>
                      📸 {currentLanguage === 'th' ? 'คลิกเพื่อดูรูปภาพ' : 'Click to view image'}
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* เรียนรู้ด้วยตนเอง */}
          <section className="activity-section">
            <h2 className="section-title">
              📚 {currentLanguage === 'th' ? 'เรียนรู้ด้วยตนเอง' : 'Self Learning'}
            </h2>
            <div className="activity-timeline">
              {activities.selflearning.map((activity, index) => {
                const isExpanded = expandedCards[`selflearning-${index}`];
                const hasMultipleParagraphs = activity.description.includes('\n\n');
                
                return (
                  <div 
                    key={index} 
                    className="activity-card card"
                  >
                    <div className="activity-header">
                      <h3>{activity.title}</h3>
                      <span className="activity-period">{activity.period}</span>
                    </div>
                    <div className="activity-description">
                      {isExpanded ? activity.description : getShortDescription(activity.description)}
                    </div>
                    {hasMultipleParagraphs && (
                      <button 
                        className="read-more-btn"
                        onClick={() => toggleExpand('selflearning', index)}
                      >
                        {isExpanded ? 
                          (currentLanguage === 'th' ? '▲ ซ่อน' : '▲ Hide') : 
                          (currentLanguage === 'th' ? '▼ คลิกเพื่ออ่านเพิ่มเติม' : '▼ Click to read more')}
                      </button>
                    )}
                    <div className="activity-skills">
                      {activity.skills.map((skill, skillIndex) => (
                        <span key={skillIndex} className="skill-tag">
                          {skill}
                        </span>
                      ))}
                    </div>
                    <div className="click-hint" onClick={() => openModal(activity)}>
                      📸 {currentLanguage === 'th' ? 'คลิกเพื่อดูรูปภาพ' : 'Click to view image'}
                    </div>
                  </div>
                );
              })}
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