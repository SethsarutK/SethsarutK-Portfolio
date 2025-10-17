import React from 'react';
import { Helmet } from 'react-helmet';

const SEO = ({ title, description, image, article }) => {
  const siteTitle = 'เศรษฐ์ศรุต กตคุณไพศาล | Portfolio';
  const siteDescription = 'Portfolio ของนักเรียน ม.6 ที่มีความฝันเข้าเรียน KMUTT สาขาวิศวกรรมคอมพิวเตอร์ แสดงผลงานด้านเทคโนโลยีและการเขียนโปรแกรม';
  const siteImage = '/images/portfolio-og.jpg';
  const siteUrl = process.env.NODE_ENV === 'production' 
    ? 'https://sethsarut-portfolio.vercel.app' 
    : 'http://localhost:3000';

  return (
    <Helmet>
      {/* Basic meta tags */}
      <title>{`${title} | ${siteTitle}`}</title>
      <meta name="description" content={description || siteDescription} />
      <meta name="image" content={image || siteImage} />

      {/* OpenGraph tags */}
      <meta property="og:url" content={siteUrl} />
      {article ? <meta property="og:type" content="article" /> : <meta property="og:type" content="website" />}
      <meta property="og:title" content={`${title} | ${siteTitle}`} />
      <meta property="og:description" content={description || siteDescription} />
      <meta property="og:image" content={image || siteImage} />

      {/* Keywords for KMUTT application */}
      <meta name="keywords" content="เศรษฐ์ศรุต กตคุณไพศาล, Sethsarut Katakhunpaisarn, KMUTT, มจธ, วิศวกรรมคอมพิวเตอร์, Computer Engineering, Portfolio, React, JavaScript, Python, AI, IoT, Smart Farm, โครงงานวิทยาศาสตร์, Math Gifted, สวนกุหลาบวิทยาลัย" />
      
      {/* Additional meta for university application */}
      <meta name="author" content="เศรษฐ์ศรุต กตคุณไพศาล" />
      <meta name="subject" content="Computer Engineering Portfolio for KMUTT Application" />
      <meta name="classification" content="Education, Technology, Portfolio" />

      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={`${title} | ${siteTitle}`} />
      <meta name="twitter:description" content={description || siteDescription} />
      <meta name="twitter:image" content={image || siteImage} />

      {/* Other important meta tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <meta name="theme-color" content="#000000" />
      <link rel="canonical" href={siteUrl} />
    </Helmet>
  );
};

export default SEO;