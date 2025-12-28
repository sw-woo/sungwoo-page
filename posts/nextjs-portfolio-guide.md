---
title: "Next.js로 포트폴리오 웹사이트 만들기"
date: "2024-12-15"
excerpt: "Next.js와 Tailwind CSS를 활용하여 현대적이고 반응형 포트폴리오 웹사이트를 구축하는 완벽한 가이드입니다."
tags: ["Next.js", "React", "Web Development", "Portfolio"]
author: "Sungwoo"
---

# Next.js로 포트폴리오 웹사이트 만들기

개발자에게 포트폴리오는 자신을 표현하는 중요한 수단입니다. 이 글에서는 Next.js를 사용하여 현대적인 포트폴리오 웹사이트를 만드는 방법을 알아봅니다.

## 왜 Next.js인가?

Next.js는 다음과 같은 이점을 제공합니다:

1. **서버 사이드 렌더링(SSR)**: 더 나은 SEO
2. **정적 사이트 생성(SSG)**: 빠른 로딩 속도
3. **파일 기반 라우팅**: 직관적인 구조
4. **이미지 최적화**: 자동 이미지 최적화

## 프로젝트 설정

```bash
npx create-next-app@latest my-portfolio
cd my-portfolio
npm install
```

## 핵심 기능 구현

### 1. 홈 페이지

```tsx
export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4">
          안녕하세요, 저는 개발자입니다
        </h1>
        <p className="text-xl text-gray-600">
          풀스택 개발자이자 AI 엔지니어
        </p>
      </div>
    </div>
  );
}
```

### 2. 프로젝트 섹션

프로젝트를 카드 형태로 표시하여 시각적으로 매력적인 포트폴리오를 만들 수 있습니다.

### 3. 블로그 통합

마크다운을 사용한 블로그 시스템으로 기술 글을 작성하고 공유할 수 있습니다.

## 배포

GitHub Pages 또는 Vercel을 사용하여 무료로 배포할 수 있습니다:

```bash
npm run build
```

## 결론

Next.js는 포트폴리오 웹사이트를 만들기에 완벽한 선택입니다. 빠르고, 현대적이며, SEO 친화적입니다!
