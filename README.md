# MyPick

# 🧩 MyPick 프로젝트 관리 페이지

---

## 🪧 1. 프로젝트 개요

- **프로젝트명**: MyPick (나만의 영화 북마크 서비스)
- **기간**: 2025.11.10 ~ 2025.12.15
- **배포 URL:** [https://my-pick.vercel.app](https://my-pick.vercel.app)
- **GITHUB**: [https://github.com/ahyeona/my-pick](https://github.com/ahyeona/my-pick)
- **목표**:
  외부 API로 영화를 불러오고, 사용자가 마음에 드는 항목을 북마크해 관리할 수 있는 웹앱 개발
- **핵심 포인트**:
  - API 비동기 처리 / 상태관리
  - CRUD 구현
  - 로그인 및 북마크 데이터 관리
  - 라이트모드/다크모드
- **기술 스택**
  - Frontend: React, Zustand, TypeScript, Styled-components
  - Backend: Node.js (Express), MySQL
  - Deploy: Frontend- Vercel, Backend- Render, DB - Cloudtype
  - Tools: GitHub, Notion, Postman, draw.io, erdcloud

---

## 📱 2. 주요 기능 요약

| 구분                          | 기능                         | 설명                                            |
| ----------------------------- | ---------------------------- | ----------------------------------------------- |
| **회원 관리**                 | 회원가입 / 로그인 / 로그아웃 | JWT 인증 기반 로그인, bcrypt 암호화             |
| **검색 기능**                 | 외부 API 검색                | 외부 API에서 영화 데이터 비동기 호출            |
| **마이픽 리스트 관리 (CRUD)** | 관심 아이템 저장             | 검색된 콘텐츠를 마이픽 리스트에 추가            |
|                               | 조회                         | 로그인한 사용자의 마이픽 리스트 조회            |
|                               | 수정                         | 마이픽 리스트 아이템 상태 수정 (시청여부, 메모) |
|                               | 삭제                         | 마이픽 리스트에서 아이템 제거                   |
| **UX 부가 기능**              | 반응형 UI / 로딩 처리        | 반응형 UI, 로딩 스피너                          |

---

## 🔗 3. 화면 구성 (Page 설계)

| 페이지             | 주요 기능                                                      | 비고               |
| ------------------ | -------------------------------------------------------------- | ------------------ |
| **Login / Signup** | 로그인, 회원가입 폼 / JWT 토큰 저장 및 검증                    | Zustand 상태관리   |
| **Main (검색)**    | 외부 API 검색창 + 영화 목록 표시 / 영화 카드 클릭 시 상세 모달 | Axios 비동기 처리  |
| **My pick**        | 사용자가 추가한 아이템 목록 표시 / 수정·삭제 가능              | CRUD 구현          |
| **Detail (Modal)** | 선택한 아이템의 상세 정보 표시                                 | 외부 API 상세 조회 |

### 플로우차트

![mypick.drawio.png](1a9e3c78-7d02-434c-89e9-9aab3fd863dc.png)

### 와이어프레임

![mypick_와이어프레임_gpt.png](mypick_%EC%99%80%EC%9D%B4%EC%96%B4%ED%94%84%EB%A0%88%EC%9E%84_gpt.png)

---

## 🧠 4. 데이터베이스 설계 (초안 ERD)

![image.png](image.png)

---

## 🧰 5. API 설계

| 메서드   | 엔드포인트                | 설명                      |
| -------- | ------------------------- | ------------------------- |
| **POST** | /auth/signup              | 회원가입                  |
| **POST** | /auth/login               | 로그인 (JWT 발급)         |
| **POST** | /auth/logout              | 로그아웃                  |
| **GET**  | /auth/profile             | 사용자 정보 조회          |
| **GET**  | /auth/refresh             | access token 발급         |
| **GET**  | /search/keyword?q=keyword | 외부 API로 키워드 검색    |
| **GET**  | /search/genre             | 외부 API로 장르별 검색    |
| **GET**  | /search/popular           | 외부 API로 인기목록 검색  |
| **GET**  | /search/detail/:id        | 외부 API로 영화 상세 검색 |
| **GET**  | /mypick/list              | 마이픽 리스트 조회        |
| **POST** | /mypick/create            | 마이픽 추가               |
| **POST** | /mypick/update            | 마이픽 수정               |
| **POST** | /mypick/delete            | 마이픽 삭제               |
| **POST** | /mypick/detail            | 마이픽 상세 조회          |

---

## 📅 주차별 계획

| 주차  | 기간        | 목표                                          | 상세                                                                                 |
| ----- | ----------- | --------------------------------------------- | ------------------------------------------------------------------------------------ |
| 1주차 | 11/10~11/14 | 기획, 설계, 환경 세팅                         | 기능 정리, 구조 설계, 와이어프레임, DB 모델링, Vite 세팅, 기본 라우팅, 컴포넌트 설계 |
| 2주차 | 11/17~11/21 | 컴포넌트 작성, 로그인/회원관리, 외부 API 연동 | JWT 인증 구현, 컴포넌트 작성, 라이트모드/다크모드 설정                               |
| 3주차 | 11/24~11/28 | 메인/상세/마이픽 페이지 구현                  | 마이픽 리스트 추가/조회/삭제/수정 기능, 외부 API 검색 기능 완성                      |
| 4주차 | 12/1~12/5   | 전체 UI 다듬기, 배포 준비                     | 프론트/백 배포, 코드 정리                                                            |
| 5주차 | 12/8~12/15  | 테스트, 버그 수정, 문서화                     | 기능 테스트, 버그 수정, 포트폴리오 문서 정리, 회고 및 README 작성                    |

---

## 🧱 기능 목록 (Feature List)

| 기능              | 설명                                          |
| ----------------- | --------------------------------------------- |
| 회원가입 / 로그인 | JWT 기반 인증 구현                            |
| 영화 리스트       | 외부 API로 영화 데이터를 불러와 리스트로 표시 |
| 상세 보기         | 각 항목 클릭 시 상세 정보 표시                |
| 북마크 추가/삭제  | 사용자가 관심 콘텐츠를 북마크                 |
| 북마크 리스트     | 사용자별 저장 목록 관리                       |
| 반응형 디자인     | PC/모바일 화면 최적화                         |

---

## 🚨 문제 해결 기록 (Troubleshooting Log)

| 문제 상황                                                      | 원인 분석                       | 해결 방법                                                                                         |
| -------------------------------------------------------------- | ------------------------------- | ------------------------------------------------------------------------------------------------- |
| 백엔드로 API 호출 시 에러                                      | Authorization 헤더 누락         | axios 인터셉터에 헤더 추가                                                                        |
| 로그인 후 페이지 새로고침 시 로그아웃                          | cookie 사용 안 함               | refresh token 기능 추가하여 새로고침 시 쿠키에 저장된 refresh token으로 로그인 상태 유지되도록 함 |
| 배포환경에서 Refresh Token 저장되지 않음. 로컬에서는 정상 동작 | SameSite, Secure 옵션 설정 문제 | SameSite = None, Secure = true 설정                                                               |
| vercel에 프론트 배포 후 새로고침 시 404 에러                   | vercel rewrite 설정 안 함       | vercel rewrite 설정                                                                               |

---

## 🪄 기술 선택 이유

| 기술              | 선택 이유                         |
| ----------------- | --------------------------------- |
| React             | 빠른 UI 구성, SPA 구조에 익숙함   |
| Zustand           | 간단하고 가벼운 상태 관리 도구    |
| Express           | Node.js 기반 백엔드 구축 용이     |
| MySQL             | 관계형 데이터 모델 설계 경험 있음 |
| Styled-components | 컴포넌트 단위 스타일 관리 용이    |

---

## 🧾 회고

- **기술적으로 성장한 점**
  - React 상태관리 구조를 직접 설계
  - ERD, API 문서 작성 후 코드 작성하여 구조 수정 적음
- **아쉬운 점 & 개선점**
  - 에러 처리 및 테스트 코드를 잘 작성하지 못함
  - 프론트엔드 컴포넌트 규칙 명확하지 못함
- **다음 목표**
  - Next.js, Prisma 등 새로운 기술로 확장
  - AWS 배포 고려

---

## 💬 참고 링크

- 영화 API 문서: [TMDB API Docs](https://developer.themoviedb.org/docs)

---

[페이지별 기능 정리](https://www.notion.so/2a7ca601675d809c8b3ccfec47df7592?pvs=21)

--

## 📬 Contact

**개발자:** 김아현  
📧 Email: [ahhyeon741@gmail.com](mailto:ahhyeon741@gmail.com)  
🌐 Portfolio: [https://ahyeona.github.io/portfolio-2023/](https://ahyeona.github.io/portfolio-2023/)
💻 GitHub: [github.com/ahyeona](https://github.com/ahyeona)
