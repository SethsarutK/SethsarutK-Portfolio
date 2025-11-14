# 🎓 Portfolio Website - เศรษฐ์ศรุต กตคุณไพศาล

เว็บไซต์ Portfolio สำหรับสมัครเข้าสาขาวิศวกรรมคอมพิวเตอร์ มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี (KMUTT)

**🌐 ดูเว็บไซต์: [https://SethsarutK.github.io/SethsarutK-Portfolio](https://SethsarutK.github.io/SethsarutK-Portfolio)**

## 🌟 เว็บไซต์นี้มีอะไรบ้าง

- 🎨 **แอนิเมชันโหลด** - หน้าจอโหลดแบบ spinner, จุดกระพริบ, shimmer effect
- 🌙 **เปลี่ยนธีม** - สลับโหมดกลางวัน/กลางคืนได้ (Dark/Light mode)
- 🌍 **สองภาษา** - ไทย/อังกฤษ เปลี่ยนได้ตลอด (Context API)
- 📱 **ใช้มือถือได้** - เมนูแฮมเบอร์เกอร์ ปรับขนาดหน้าจออัตโนมัติ (Responsive Design)
- 🖼️ **แสดงรูปภาพ** - Image modal และ carousel สำหรับดูรูปกิจกรรม
- 📄 **ดู PDF** - เปิดไฟล์ PDF ผลงานและโครงงาน
- ⚡ **โหลดเร็ว** - ไม่มี external dependencies ที่ไม่จำเป็น
- 🚀 **Deploy ง่าย** - GitHub Pages แบบฟรี

## 🛠️ เทคโนโลยีที่ใช้

### Frontend (หน้าบ้าน)
- **React 18.2.0** - JavaScript library สำหรับสร้าง UI แบบ component
- **React Router DOM 6.8.1** - จัดการหน้าต่างๆ แบบ Single Page Application (HashRouter)
- **React Helmet 6.1.0** - จัดการ SEO meta tags
- **CSS3** - ตกแต่งหน้าเว็บ ใช้ CSS Variables สำหรับเปลี่ยนสีธีม

### Backend (หลังบ้าน) 
- **ไม่มี Backend** - เป็น Static Website ไม่ต้องใช้เซิร์ฟเวอร์
- **GitHub Pages** - Host เว็บไซต์ฟรี โดยไม่ต้องจ่ายค่าเซิร์ฟเวอร์

### เครื่องมือพัฒนา
- **Node.js + npm** - สำหรับติดตั้ง packages และ build เว็บไซต์
- **React Scripts 5.0.1** - Build tools และ development server
- **ESLint + Prettier** - Code formatting และ linting
- **Jest + React Testing Library** - Unit testing
- **Git + GitHub** - เก็บ source code และ version control
- **gh-pages 6.3.0** - Deploy ไปยัง GitHub Pages อัตโนมัติ

## 🚀 วิธีเริ่มใช้งาน

```bash
# 1. ติดตั้ง packages
npm install

# 2. รันโหมดพัฒนา
npm start        # → เปิดที่ http://localhost:3000/SethsarutK-Portfolio

# 3. อัพโหลดเว็บไซต์
npm run deploy   # → ขึ้น GitHub Pages
```

## 📁 โครงสร้างโปรเจค (ไฟล์ไหนเก็บอะไร)

```
src/
├── components/              # ส่วนประกอบที่ใช้ซ้ำได้
│   ├── Navbar.js           # เมนูด้านบน + เมนูมือถือ
│   ├── Loading.js          # หน้าจอโหลด (spinner, dots, shimmer)
│   ├── ThemeToggle.js      # ปุ่มเปลี่ยนธีมสว่าง/มืด
│   ├── LanguageToggle.js   # ปุ่มเปลี่ยนภาษาไทย/อังกฤษ
│   ├── Footer.js           # ส่วนท้าย + ลิงก์โซเชียล
│   ├── SEO.js              # จัดการ meta tags (React Helmet)
│   ├── PageTransition.js   # แอนิเมชันเปลี่ยนหน้า
│   ├── ErrorBoundary.js    # จัดการ errors
│   ├── ImageModal.js       # แสดงรูปภาพขยาย
│   ├── ImageCarousel.js    # สไลด์รูปภาพ
│   └── ScrollToTop.js      # เลื่อนขึ้นบนสุดเมื่อเปลี่ยนหน้า
├── pages/                  # หน้าหลักต่างๆ
│   ├── Home.js             # หน้าแรก (แนะนำตัว + คำคม)
│   ├── About.js            # หน้าเกี่ยวกับฉัน (ประวัติ การศึกษา ทักษะ)
│   ├── Competitions.js     # หน้าการแข่งขัน (รางวัล + เกียรติบัตร)
│   ├── Activities.js       # หน้ากิจกรรม (กิจกรรมที่เข้าร่วม + รูปภาพ)
│   ├── Workpieces.js       # หน้าผลงาน (โปรเจค + PDF)
│   ├── NotFound.js         # หน้า 404
│   └── ComingSoon.js       # หน้า Coming Soon
├── contexts/               # จัดการข้อมูลทั่วทั้งเว็บ
│   └── AppContext.js       # ThemeContext + LanguageContext + คำแปล
├── constants/              # ค่าคงที่
│   └── index.js            # SOCIAL_LINKS (LINE, Facebook, Instagram)
├── styles/                 # ไฟล์ CSS (ชื่อเดียวกับ component)
│   ├── index.css           # Global styles + CSS Variables
│   ├── Navbar.css          # Navbar styles
│   ├── Home.css            # Home page styles
│   └── ...                 # CSS files for each component/page
├── tests/                  # Unit tests
│   ├── Navbar.test.js
│   └── ErrorBoundary.test.js
└── utils/                  # ฟังก์ชันช่วยเหลือ
```

### 💡 ความหมายของแต่ละส่วน
- **components** = ชิ้นส่วนเล็กๆ ที่นำไปใช้หลายที่ได้ (เช่น ปุ่ม, เมนู)
- **pages** = หน้าต่างๆ ที่ผู้ใช้เห็น (หน้าแรก, เกี่ยวกับฉัน, ผลงาน)  
- **contexts** = เก็บข้อมูลที่ทุกหน้าต้องใช้ (ธีม, ภาษา)
- **styles** = ตกแต่งสีสัน รูปแบบ แอนิเมชัน

## ⚙️ วิธีแก้ไขเนื้อหาเว็บไซต์

### 📝 ข้อมูลส่วนตัว
- **`src/contexts/AppContext.js`** - ชื่อ, คำแนะนำตัว, คำแปลภาษา
- **`src/pages/About.js`** - ประวัติ, ความสนใจ, เป้าหมาย  
- **`src/components/Footer.js`** - เบอร์โทร, อีเมล, ที่อยู่

### 💼 ผลงานและทักษะ
- **`src/pages/Competitions.js`** - แก้ไขรางวัลและการแข่งขัน
- **`src/pages/Activities.js`** - แก้ไขกิจกรรมที่เข้าร่วม  
- **`src/pages/Workpieces.js`** - แก้ไขโปรเจคและผลงาน

### 🎨 เปลี่ยนสีและธีม
- **`src/styles/index.css`** - แก้ตัวแปรสี: `--primary-color`, `--secondary-color`
- **ไฟล์ CSS อื่นๆ** - แต่ละ component มีไฟล์ CSS เป็นของตัวเอง

### 🖼️ เพิ่มรูปภาพ
- เอารูปใส่ในโฟลเดอร์ **`public/images/`** 
- แก้ไข path รูปในไฟล์ component ที่ต้องการ

## 📚 ความรู้ที่ควรมีสำหรับ ม.คอม

### พื้นฐานที่ต้องรู้
- **HTML/CSS** - โครงสร้างและตกแต่งเว็บไซต์
- **JavaScript** - ภาษาหลักของเว็บ frontend
- **React** - Library สำหรับสร้าง UI แบบ component
- **Git/GitHub** - เก็บ code และทำงานร่วมกัน

### แนวคิดสำคัญ
- **Component-Based** - แบ่งเว็บเป็นชิ้นส่วนเล็กๆ
- **State Management** - จัดการข้อมูลที่เปลี่ยนแปลงได้
- **Responsive Design** - ใช้งานได้ทุกขนาดหน้าจอ  
- **Version Control** - ติดตามการเปลี่ยนแปลง code

## 🚀 วิธีอัพโหลดเว็บไซต์

**เว็บไซต์สด:** https://SethsarutK.github.io/SethsarutK-Portfolio

```bash
# อัพโหลดไปยัง GitHub Pages
npm run deploy

# หรือทำทีละขั้นตอน
npm run build                    # สร้างไฟล์สำหรับใช้งานจริง
git add . && git commit -m "อัพเดท"  # บันทึกการเปลี่ยนแปลง
git push && npm run deploy       # ส่งขึ้น GitHub
```

### ตัวเลือกอื่น
- **Netlify:** ลากโฟลเดอร์ `build/` ไปยัง netlify.com
- **Vercel:** เชื่อม GitHub repo จะ auto-deploy เอง

## 🐛 แก้ปัญหาที่พบบ่อย

| ปัญหา | วิธีแก้ |
|---------|----------|
| `npm start` ใช้ไม่ได้ | ลบโฟลเดอร์ `node_modules/` → `npm install` ใหม่ |
| CSS ไม่ทำงาน | ตรวจสอบการ import CSS ในไฟล์ component |
| Refresh แล้ว 404 | แก้แล้วด้วย HashRouter |
| เว็บไม่อัพเดท | รอ 5-10 นาที GitHub Pages ต้องใช้เวลา |

---

## 📞 ติดต่อ

**เศรษฐ์ศรุต กตคุณไพศาล** | ผู้สมัครสาขาวิศวกรรมคอมพิวเตอร์ KMUTT  
🌐 [Portfolio](https://SethsarutK.github.io/SethsarutK-Portfolio) • 📧 [GitHub](https://github.com/SethsarutK)

---

## 📝 Recent Updates (November 2025)

### ✨ Features Added
- ✅ เพิ่ม Image Modal และ Carousel สำหรับดูรูปกิจกรรม
- ✅ เพิ่ม SEO component ด้วย React Helmet
- ✅ เพิ่ม Page Transition animations
- ✅ เพิ่ม ErrorBoundary สำหรับจัดการ errors
- ✅ อัพเดทคำคมเป็น Steve Jobs (สองภาษา)

### 🗑️ Removed
- ❌ ลบ framer-motion (ลดขนาด bundle ~100KB)
- ❌ ลบ snap scroll feature (ปรับ UX ให้ดีขึ้น)
- ❌ ลบ Google Analytics (ไม่จำเป็นสำหรับ portfolio ส่วนตัว)
- ❌ ลบ source-map-explorer (ไม่ได้ใช้งาน)
- ❌ ลบ GitHub และ Email จาก social links

### 🎨 UI/UX Improvements
- ✅ แก้ไขปัญหา title alignment ใน Home page
- ✅ แก้ไขปัญหา button positioning ใน Competitions และ Workpieces
- ✅ ดาวน์โหลดรูปภาพจาก Unsplash มาเก็บ local (4 images)
- ✅ ลบ inline styles ที่ไม่จำเป็น แยก CSS ให้ชัดเจน

### 🧹 Code Cleanup
- ✅ ลบไฟล์ที่ไม่ได้ใช้งาน (SchoolPic.jpg, README.md ใน images/)
- ✅ ลบ unused dependencies
- ✅ ปรับปรุงโครงสร้าง CSS ให้เป็นระเบียบ

*อัพเดทล่าสุด: 15 พฤศจิกายน 2025*