# 니집내집 - 전세사기 안정성 확인 서비스

현직 공인중개사가 전세 매물의 안정성을 검증해주는 서비스입니다.

## 주요 기능

- 연락처 입력 (핸드폰 번호 또는 이메일)
- 매물 주소 입력
- 현직 공인중개사 검증 프로세스 안내
- 서비스 신뢰도 정보 제공

## 시작하기

### 설치

```bash
npm install
```

### 실행

```bash
npm start
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 확인하세요.

### 빌드

```bash
npm run build
```

## 기술 스택

- React 18
- CSS3
- Create React App

## 프로젝트 구조

```
src/
├── components/
│   ├── PropertyCheckForm.js    # 매물 확인 폼
│   ├── PropertyCheckForm.css
│   ├── LoadingMessage.js       # 로딩 메시지
│   ├── LoadingMessage.css
│   ├── TrustSection.js         # 신뢰도 섹션
│   └── TrustSection.css
├── App.js
├── App.css
├── index.js
└── index.css
```
# ni-jib-nae-jib
