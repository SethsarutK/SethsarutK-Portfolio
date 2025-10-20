# 🎓 Portfolio Website - เศรษฐ์ศรุต กตคุณไพศาล

เว็บไซต์ Portfolio สำหรับสมัครเข้าสาขาวิศวกรรมคอมพิวเตอร์ มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี (KMUTT)

**🌐 ดูเว็บไซต์: [https://SethsarutK.github.io/SethsarutK-Portfolio](https://SethsarutK.github.io/SethsarutK-Portfolio)**

## 🌟 เว็บไซต์นี้มีอะไรบ้าง

- 🎨 **แอนิเมชันโหลด** - หน้าจอโหลดแบบ spinner, จุดกระพริบ, shimmer effect
- 🌙 **เปลี่ยนธีม** - สลับโหมดกลางวัน/กลางคืนได้ 
- 🌍 **สองภาษา** - ไทย/อังกฤษ เปลี่ยนได้ตลอด
- 📱 **ใช้มือถือได้** - เมนูแฮมเบอร์เกอร์ ปรับขนาดหน้าจออัตโนมัติ
- ⚡ **โหลดเร็ว** - Deploy บน GitHub Pages แบบฟรี

## 🛠️ เทคโนโลยีที่ใช้

### Frontend (หน้าบ้าน)
- **React 18** - JavaScript library สำหรับสร้าง UI แบบ component
- **CSS3** - ตกแต่งหน้าเว็บ ใช้ CSS Variables สำหรับเปลี่ยนสี
- **React Router** - จัดการหน้าต่างๆ แบบ Single Page Application

### Backend (หลังบ้าน) 
- **ไม่มี Backend** - เป็น Static Website ไม่ต้องใช้เซิร์ฟเวอร์
- **GitHub Pages** - Host เว็บไซต์ฟรี โดยไม่ต้องจ่ายค่าเซิร์ฟเวอร์

### เครื่องมือพัฒนา
- **Node.js + npm** - สำหรับติดตั้ง packages และ build เว็บไซต์
- **Git + GitHub** - เก็บ source code และ version control

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
│   ├── ThemeToggle.js      # ปุ่มเปลี่ยนธีมสว่าง/มด
│   ├── LanguageToggle.js   # ปุ่มเปลี่ยนภาษาไทย/อังกฤษ
│   └── Footer.js           # ส่วนท้าย + ฟอร์มติดต่อ
├── pages/                  # หน้าหลักต่างๆ
│   ├── Home.js             # หน้าแรก (แนะนำตัว)
│   ├── About.js            # หน้าเกี่ยวกับฉัน (ประวัติ เป้าหมาย)
│   ├── Competitions.js     # หน้าการแข่งขัน (รางวัลต่างๆ)
│   ├── Activities.js       # หน้ากิจกรรม (กิจกรรมที่เข้าร่วม)
│   └── Workpieces.js       # หน้าผลงาน (โปรเจค ทักษะ)
├── contexts/               # จัดการข้อมูลทั่วทั้งเว็บ
│   └── AppContext.js       # เก็บ: ธีม + ภาษา + คำแปล
├── styles/                 # ไฟล์ CSS (ชื่อเดียวกับ component)
├── hooks/                  # Custom React hooks
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

*อัพเดทล่าสุด: 17 ตุลาคม 2025*