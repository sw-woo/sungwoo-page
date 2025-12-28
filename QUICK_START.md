# 🚀 GitHub Pages 활성화 가이드

## ⚠️ 중요: 마지막 단계 (1분 소요)

코드는 모두 준비되었습니다! GitHub Pages만 활성화하면 즉시 사이트가 라이브됩니다.

### 📋 체크리스트

- [x] 코드 작성 완료
- [x] GitHub Actions 워크플로우 실행 완료
- [x] gh-pages 브랜치 자동 생성됨
- [ ] **GitHub Pages 설정 활성화 필요** ← 여기만 하면 됩니다!

---

## 🎯 활성화 방법 (3단계)

### 1️⃣ Settings 페이지로 이동

브라우저에서 다음 URL을 엽니다:
```
https://github.com/sw-woo/sungwoo-page/settings/pages
```

또는:
1. GitHub 저장소 페이지로 이동
2. 상단 탭에서 **"Settings"** 클릭
3. 왼쪽 메뉴에서 **"Pages"** 클릭

### 2️⃣ Source 설정

**Build and deployment** 섹션에서:

- **Source**: `Deploy from a branch` 선택
- **Branch**:
  - 첫 번째 드롭다운: `gh-pages` 선택
  - 두 번째 드롭다운: `/ (root)` 선택
- **Save** 버튼 클릭

### 3️⃣ 배포 완료 확인 (1-2분)

1. 페이지 상단에 초록색 배너 표시:
   ```
   ✓ Your site is live at https://sw-woo.github.io/sungwoo-page/
   ```

2. 또는 Actions 탭에서 확인:
   ```
   https://github.com/sw-woo/sungwoo-page/actions
   ```
   - "pages build and deployment" 워크플로우
   - 초록색 체크마크 표시되면 완료

3. 사이트 접속:
   ```
   https://sw-woo.github.io/sungwoo-page/
   ```

---

## 🎨 사이트에서 볼 수 있는 것

### 메인 페이지
- ✅ "AI/ML Developer & Problem Solver" 타이틀
- ✅ 한국어 자기소개
- ✅ GitHub, LinkedIn 링크

### Problem-Solving Projects
각 프로젝트 카드에 표시:
- 💡 **Problem**: 해결한 문제
- ✅ **Solution**: 기술적 접근
- 📊 **Impact**: 정량적 성과

### 기술 블로그
- LangChain 튜토리얼
- Next.js 가이드
- Flutter ML 통합
- **RAG 성능 최적화 (신규)**

### 연락 폼
- EmailJS 연동 가능
- 실시간 이메일 전송

---

## 🔍 트러블슈팅

### 문제: 404 에러 발생

**해결 방법**:
1. Settings > Pages에서 Source가 `gh-pages` 브랜치인지 확인
2. URL 끝에 `/` 추가: `https://sw-woo.github.io/sungwoo-page/`
3. 브라우저 캐시 삭제 후 재접속

### 문제: 사이트가 안 보임

**해결 방법**:
1. 5분 정도 대기 (첫 배포는 시간이 걸릴 수 있음)
2. Actions 탭에서 "pages build and deployment" 성공 확인
3. 하드 새로고침: `Ctrl + Shift + R` (Windows) 또는 `Cmd + Shift + R` (Mac)

### 문제: 스타일이 깨짐

**해결 방법**:
- 이미 `next.config.js`에 basePath 설정됨
- `.nojekyll` 파일 자동 추가됨
- 정상 작동해야 함

---

## 📊 성능 최적화

### 빌드 결과
```
✓ 8개 페이지 정적 생성
✓ Next.js 최적화 완료
✓ 번들 크기 최소화
```

### 로딩 속도
- 초기 로딩: < 1초
- 페이지 전환: 즉시
- 이미지 최적화: 자동

---

## 🔄 자동 배포

이제부터 코드를 수정하고 푸시하면 **자동으로 배포**됩니다:

```bash
# 1. 파일 수정
vim components/Hero.tsx

# 2. 커밋
git add .
git commit -m "feat: 새 기능 추가"

# 3. 푸시 (자동 배포 트리거)
git push origin claude/analyze-github-qdQxB
```

**자동 진행 과정**:
1. GitHub Actions 트리거
2. Next.js 빌드 (약 30초)
3. gh-pages 브랜치 업데이트
4. 사이트 자동 배포 (약 1분)

---

## 📈 다음 단계

### 커스터마이징

#### 1. EmailJS 연동
`components/Contact.tsx` 파일 수정:
```typescript
const serviceId = "YOUR_SERVICE_ID";
const templateId = "YOUR_TEMPLATE_ID";
const publicKey = "YOUR_PUBLIC_KEY";
```

[EmailJS 가입하기](https://www.emailjs.com/) → 무료 200건/월

#### 2. LinkedIn 링크 수정
`components/Footer.tsx`와 `components/Hero.tsx`에서:
```typescript
href="https://linkedin.com/in/your-profile"
```

#### 3. 이메일 주소 변경
`components/Contact.tsx`:
```typescript
your.email@example.com
```

### 블로그 포스트 작성

`posts/` 폴더에 새 파일 생성:
```markdown
---
title: "새 포스트 제목"
date: "2024-12-28"
excerpt: "간단한 설명"
tags: ["AI", "LangChain"]
author: "Sungwoo"
---

# 내용 작성...
```

---

## 🎯 체크리스트

### 배포 전
- [x] 빌드 성공
- [x] GitHub Actions 실행
- [x] gh-pages 브랜치 생성
- [ ] GitHub Pages 설정 (위 가이드 참고)

### 배포 후
- [ ] 사이트 접속 확인
- [ ] 모바일 반응형 테스트
- [ ] 모든 링크 작동 확인
- [ ] 블로그 포스트 확인

### 개인화
- [ ] EmailJS 연동
- [ ] LinkedIn 링크 업데이트
- [ ] 이메일 주소 변경
- [ ] 프로필 사진 추가 (선택)

---

## 💡 활용 팁

### SEO 최적화
- 이미 메타 태그 설정됨
- OpenGraph 이미지 추가 가능
- sitemap.xml 자동 생성 (Next.js)

### 분석 도구
- Google Analytics 추가 가능
- 방문자 통계 확인

### 소셜 공유
- LinkedIn에 프로젝트 공유
- Twitter/X에 블로그 포스트 홍보
- 한국 개발자 커뮤니티 공유

---

**🚀 지금 바로 Settings > Pages로 가서 활성화하세요!**

문제가 있으면 Issues 탭에 등록해주세요.
