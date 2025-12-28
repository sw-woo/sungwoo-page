# 🚀 Sungwoo's Problem-Solving Portfolio

[![Next.js](https://img.shields.io/badge/Next.js-16.1-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1-38bdf8)](https://tailwindcss.com/)

**문제 해결 중심 포트폴리오 + 기술 블로그**

실제 문제를 해결한 경험과 성과를 정량적 지표로 보여주는 현대적인 포트폴리오 웹사이트

🌐 **Live Site**: https://sw-woo.github.io/sungwoo-page/

---

## ✨ 차별화 포인트

### 🎯 Problem-Solution-Impact 구조
각 프로젝트를 다음 구조로 제시:
- 💡 **Problem**: 해결한 구체적인 문제
- ✅ **Solution**: 기술적 접근 방법
- 📊 **Impact**: 정량적 성과 (80% 개선, 92% 정확도 등)

### 📊 성과 지표 섹션
- **40+ Community Impact**: Stars & Forks
- **80% Performance**: RAG 시스템 최적화
- **6 Production Projects**: 실전 솔루션
- **92% Accuracy**: AI 검색 정확도

### 📝 실전 문제 해결 블로그
- RAG 성능 최적화 사례 (검색 속도 80% 개선)
- Before/After 코드 비교
- 구체적인 벤치마크 결과
- 실무 적용 팁

### 📧 이메일 연락 시스템
- EmailJS 통합
- 실시간 메시지 전송
- 반응형 폼 디자인

---

## 🚀 Features

- ✅ **문제 해결 중심 포트폴리오**: Problem-Solution-Impact 구조
- ✅ **성과 지표 시각화**: 정량적 임팩트 표시
- ✅ **기술 블로그**: Markdown 기반 블로그 시스템
- ✅ **타임라인**: Problem-Solving Journey
- ✅ **연락 폼**: EmailJS 이메일 전송
- ✅ **반응형 디자인**: 모바일 최적화
- ✅ **다크 모드**: 라이트/다크 테마 지원
- ✅ **SEO 최적화**: 메타 태그, OpenGraph
- ✅ **자동 배포**: GitHub Actions → GitHub Pages

## 🛠️ Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: React Icons
- **Markdown**: gray-matter, remark, remark-html
- **Email**: EmailJS
- **Deployment**: GitHub Pages

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 📝 Writing Blog Posts

Create markdown files in the `posts/` directory:

```markdown
---
title: "Your Post Title"
date: "2024-12-20"
excerpt: "Brief description of your post"
tags: ["Tag1", "Tag2"]
author: "Sungwoo"
---

Your content here...
```

## 🎨 Customization

### Update Personal Info

1. Edit contact information in `components/Contact.tsx`
2. Update social links in `components/Footer.tsx`
3. Modify tech stack in `components/Hero.tsx`
4. Update projects in `components/Projects.tsx`

### EmailJS Setup

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create a service and template
3. Update credentials in `components/Contact.tsx`:
   - `serviceId`
   - `templateId`
   - `publicKey`

## 🚀 Deployment

This project is configured for GitHub Pages deployment:

1. Push to `main` branch
2. GitHub Actions will automatically build and deploy
3. Enable GitHub Pages in repository settings
4. Set source to "GitHub Actions"

Your site will be available at: `https://sw-woo.github.io/sungwoo-page/`

## 📄 License

MIT License - feel free to use this template for your own portfolio!

## 🤝 Connect

- GitHub: [@sw-woo](https://github.com/sw-woo)
- Email: your.email@example.com

---

Built with ❤️ using Next.js
