# 🎓 Portfolio Website - เศรษฐ์ศรุต กตคุณไพศาล

เว็บไซต์ Portfolio สำหรับการสมัครเข้าเรียนสาขาวิศวกรรมคอมพิวเตอร์ มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี (KMUTT)

**🌐 Live Demo: [https://SethsarutK.github.io/SethsarutK-Portfolio](https://SethsarutK.github.io/SethsarutK-Portfolio)**

## ✨ คุณสมบัติล่าสุด

- � **HashRouter Navigation**: แก้ไขปัญหา 404 บน GitHub Pages และ refresh หน้าได้
- 🎨 **Smooth Animations**: Fade-in, slide-in, hover effects ที่สวยงามและเหมาะสม
- 📱 **Mobile Navigation**: Hamburger menu พร้อมปุ่มเปลี่ยนธีม/ภาษาในแถบด้านข้าง
- 🌙 **Dark/Light Mode**: สลับโหมดกลางวัน/กลางคืนได้ด้วยปุ่มสวยงาม
- 🌍 **Dual Language**: รองรับภาษาไทย/อังกฤษ พร้อมปุ่มสลับภาษา
- 🎪 **Interactive Elements**: Hover effects, button animations, scroll reveals

## 🛠️ เทคโนโลยีและเครื่องมือ

### Frontend
- **React 18.2.0** - Modern React with Hooks และ Context API
- **React Router DOM 6.8.1** - HashRouter สำหรับ GitHub Pages
- **CSS3 + CSS Variables** - Advanced styling with animations
- **JavaScript ES6+** - Modern JavaScript features
- **Framer Motion 10.18.0** - Advanced animations (พร้อมใช้งาน)

### Development & Deploy
- **GitHub Pages** - Static hosting ฟรี
- **gh-pages** - Automated deployment
- **React Scripts 5.0.1** - Modern build tools
- **ESLint + Prettier** - Code quality tools

### UI/UX Features
- **Responsive Design** - Mobile-first approach
- **Dark Mode** - CSS Variables theming
- **Internationalization** - Thai/English support
- **Modern Animations** - CSS transitions และ keyframes

## วิธีการติดตั้งและรัน

### ขั้นตอนที่ 1: ติดตั้ง Dependencies
```bash
npm install
```

### ขั้นตอนที่ 2: รันเว็บไซต์ในโหมดพัฒนา
```bash
npm start
```

เว็บไซต์จะเปิดที่: [http://localhost:3000](http://localhost:3000)

### ขั้นตอนที่ 3: สร้างไฟล์สำหรับ Production
```bash
npm run build
```

## โครงสร้างไฟล์

```
port/
├── public/
│   └── index.html          # ไฟล์ HTML หลัก
├── src/
│   ├── components/         # Components ที่ใช้ซ้ำ
│   │   └── Navbar.js      # เมนูนำทาง
│   ├── pages/             # หน้าต่างๆ ของเว็บไซต์
│   │   ├── Home.js        # หน้าแรก
│   │   ├── About.js       # หน้าเกี่ยวกับฉัน
│   │   └── Portfolio.js   # หน้าผลงาน
│   ├── components/        # Components ที่ใช้ซ้ำ
│   │   ├── Navbar.js      # เมนูนำทาง
│   │   ├── ThemeToggle.js # ปุ่มเปลี่ยนธีม
│   │   ├── LanguageToggle.js # ปุ่มเปลี่ยนภาษา
│   │   └── Footer.js      # ส่วนท้ายพร้อมฟอร์มติดต่อ
│   ├── contexts/          # Context สำหรับจัดการ State
│   │   └── AppContext.js  # Theme, Language และ Translation
│   ├── styles/            # ไฟล์ CSS
│   │   ├── index.css      # สไตล์หลัก
│   │   ├── Navbar.css     # สไตล์เมนู
│   │   ├── Home.css       # สไตล์หน้าแรก
│   │   ├── About.css      # สไตล์หน้าเกี่ยวกับฉัน
│   │   ├── Portfolio.css  # สไตล์หน้าผลงาน
│   │   └── Footer.css     # สไตล์ส่วนท้าย
│   ├── App.js             # Component หลัก
│   └── index.js           # จุดเริ่มต้นของแอป
├── package.json           # ข้อมูลโปรเจกต์และ dependencies
└── README.md              # คู่มือการใช้งาน
```

## การปรับแต่งเนื้อหา

### 1. ข้อมูลส่วนตัว
แก้ไขไฟล์ต่อไปนี้:
- `src/contexts/AppContext.js` - ชื่อ คำอธิบาย และข้อมูลส่วนตัวทั้งหมด
- `src/pages/Home.js` - หน้าแรกและจุดเด่น
- `src/pages/About.js` - ข้อมูลส่วนตัว ความสนใจ เป้าหมาย
- `src/components/Footer.js` - ข้อมูลติดต่อในส่วนท้าย

### 2. ผลงานและโปรเจกต์
แก้ไขไฟล์ `src/pages/Portfolio.js`:
- เพิ่ม/ลบ โปรเจกต์ในอาร์เรย์ `projects`
- เพิ่ม/ลบ รางวัลในอาร์เรย์ `achievements`
- ปรับแต่งทักษะและระดับความสามารถ

### 3. รูปภาพ
- เพิ่มรูปภาพในโฟลเดอร์ `public/images/`
- แก้ไข path ในส่วน `image-placeholder` ของแต่ละไฟล์

### 4. สีและธีม
แก้ไขไฟล์ CSS ในโฟลเดอร์ `src/styles/`:
- เปลี่ยนสีหลักใน CSS Variables: `--primary-color`, `--secondary-color`
- ปรับแต่งฟอนต์ Google Fonts (Inter, Kanit, Noto Sans Thai)
- ปรับแต่งแอนิเมชั่นและเอฟเฟกต์ต่างๆ

## คุณสมบัติพิเศษ

- ✅ **Responsive Design** - ใช้งานได้ดีบนทุกขนาดหน้าจอ
- ✅ **Modern UI/UX** - ดีไซน์สวยงามและใช้งานง่าย
- ✅ **Smooth Animations** - เอฟเฟกต์เคลื่อนไหวที่นุ่มนวล
- ✅ **Form Validation** - ตรวจสอบข้อมูลในฟอร์มติดต่อ
- ✅ **SEO Friendly** - เหมาะสำหรับการค้นหา
- ✅ **Dark Mode** - สลับโหมดกลางวัน/กลางคืนได้
- ✅ **Language Switcher (TH/EN)** - ปุ่มเปลี่ยนภาษาแบบแสดงทีละธง
- ✅ **Custom Flag Animation** - แอนิเมชั่นธงชาติ

## 🚀 การ Deploy (เสร็จสมบูรณ์แล้ว!)

### ✅ GitHub Pages (ปัจจุบัน)
เว็บไซต์ถูก deploy แล้วที่: **https://SethsarutK.github.io/SethsarutK-Portfolio**

#### วิธี deploy ใหม่:
```bash
# Build และ deploy ในคำสั่งเดียว
npm run deploy

# หรือทำทีละขั้นตอน
npm run build
git add .
git commit -m "Update website"
git push origin master
npm run deploy
```

### 🔧 ตัวเลือกอื่น

#### Netlify (สำหรับ custom domain)
1. สร้าง production build: `npm run build`
2. ลาก-วาง folder `build` ไปยัง netlify.com
3. จะได้ URL ใหม่ทันที

#### Vercel (Auto-deploy)
1. Connect GitHub repository ไปยัง Vercel
2. Auto-deploy ทุกครั้งที่ push

### 📋 Deploy Checklist
- ✅ Homepage URL ถูกต้องใน package.json
- ✅ HashRouter ใช้งานได้บน GitHub Pages  
- ✅ Build pass ไม่มี errors
- ✅ Responsive design ทำงานดี
- ✅ Dark mode / Language switcher ทำงานดี

## การแก้ไขปัญหา

### ปัญหาที่พบบ่อย
1. **npm start ไม่ทำงาน**: ลบโฟลเดอร์ `node_modules` และรัน `npm install` ใหม่
2. **หน้าเว็บแสดงผลไม่ถูกต้อง**: ตรวจสอบ import path ในไฟล์ต่างๆ

## 📊 สถานะโปรเจค - อัพเดท 15 ตุลาคม 2025

### 🎉 **LIVE & READY TO USE!**
**✅ เว็บไซต์ออนไลน์แล้วที่: https://SethsarutK.github.io/SethsarutK-Portfolio**

### ✅ Features เสร็จสมบูรณ์ 100%

#### 🏗️ **Core Features**
- ✅ **React 18 Setup** - Modern React architecture
- ✅ **HashRouter Navigation** - แก้ปัญหา GitHub Pages routing
- ✅ **3 หน้าหลัก** - Home, About, Portfolio (responsive 100%)
- ✅ **Production Build** - Optimized สำหรับ deployment

#### 🎨 **Design & UX**  
- ✅ **Orange Modern Theme** - ธีมสีส้มสุดสวย + Dark mode
- ✅ **Smooth Animations** - Fade-in, slide effects ที่เหมาะสม
- ✅ **Mobile Navigation** - Hamburger menu พร้อม theme/language controls
- ✅ **Google Fonts** - Typography สวยด้วย Inter, Kanit, Noto Sans Thai

#### 🌍 **International & Accessibility**
- ✅ **Dual Language (TH/EN)** - Translation ครบทุกหน้า
- ✅ **Theme Switcher** - Dark/Light mode เรียบร้อย  
- ✅ **Mobile Optimized** - ใช้งานได้สมบูรณ์บนมือถือ
- ✅ **Contact Form** - แบบฟอร์มติดต่อในส่วน Footer

#### 🚀 **Deployment & Performance**
- ✅ **GitHub Pages Deploy** - Auto-deploy pipeline
- ✅ **Performance Optimized** - Fast loading, lightweight
- ✅ **SEO Ready** - Meta tags และ structure ครบ
- ✅ **No 404 Errors** - HashRouter แก้ปัญหา refresh

### 🎯 **พร้อมส่งใบสมัคร!**
เว็บไซต์นี้พร้อมใช้สำหรับการสมัครเข้า **มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี (KMUTT)** แล้ว!
3. **CSS ไม่ทำงาน**: ตรวจสอบการ import CSS ในไฟล์ component

## 📞 ติดต่อ

### 👤 **เศรษฐ์ศรุต กตคุณไพศาล (Sethsarut Katakhunpaisarn)**
- 🌐 **Portfolio**: https://SethsarutK.github.io/SethsarutK-Portfolio
- 📧 **GitHub**: [@SethsarutK](https://github.com/SethsarutK)
- 🏫 **การศึกษา**: ม.6 แผน Math Gifted โรงเรียนสวนกุหลาบวิทยาลัย
- 🎯 **เป้าหมาย**: วิศวกรรมคอมพิวเตอร์ KMUTT

### 🛠️ Technical Support
หากมีปัญหาเชิงเทคนิค:
- 📋 **Issues**: [Create GitHub Issue](https://github.com/SethsarutK/SethsarutK-Portfolio/issues)
- 📖 **Documentation**: README.md นี้
- 🔧 **Build Problems**: ตรวจสอบ `npm run build`

## 📈 Project Stats

| Metric | Value |
|--------|--------|
| 🌟 **Status** | **✅ LIVE & PRODUCTION READY** |
| 📊 **Performance** | ~93KB gzipped, โหลด < 2 วินาทีบน 3G |
| 📱 **Mobile Score** | 100% Responsive |  
| 🌍 **Languages** | Thai 🇹🇭 / English 🇺🇸 |
| 🎨 **Themes** | Light / Dark Mode |
| 🚀 **Deploy Time** | < 5 นาที |

---

### 🎓 **สร้างเพื่อการสมัครเข้า KMUTT**
**ด้วยความหวังและความมุ่งมั่น ❤️**

*Last Updated: 15 ตุลาคม 2025*