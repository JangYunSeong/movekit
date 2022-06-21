# 📦 movekit
![KakaoTalk_20220414_202931055](https://user-images.githubusercontent.com/46878756/168100814-4b6a9836-06a4-4ba0-b0e4-546b7d9118ca.png)

## 📑 목차
- [📒 프로젝트 설명](#-프로젝트-설명)
- [📅 개발 기간](#-개발-기간)
- [⚙ 기술 스택](#-기술-스택)
- [📁 프로젝트 구조](#-프로젝트-구조)
- [📝 프로젝트 상세 설명](#-프로젝트-상세-설명)

## 📒 프로젝트 설명
**단거리 이사에 필요한 물품** 배송

택배 박스, 쓰레기봉투, 목장갑, 청소용품, 노끈, 테이프

**+ 추가물품 대여 → 끌차, 용달업체 연결, 인력** 

### **고객 : 경북대 근처 기숙사 입주인 or 자취생**

이사하는데 혼자 짐정리하기 어렵거나 부담스러운 학생들..

**+ 돈이 필요한 누구나(아르바이트), 제휴 용달업체**

## 📅 개발 기간
### 2022.04.10 ~ 2022.06.21

## ⚙ 기술 스택
  ### Frontend
  <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"> <img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"> 
  <img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white">
  ### Backend
  <img src="https://img.shields.io/badge/jquery-0769AD?style=for-the-badge&logo=jquery&logoColor=white"><img src="https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=Node.js&logoColor=white">
  <img src="https://img.shields.io/badge/express-000000?style=for-the-badge&logo=express&logoColor=white">
  <img src="https://img.shields.io/badge/mongoDB-47A248?style=for-the-badge&logo=MongoDB&logoColor=white">

## 📁 프로젝트 구조
```
move:.
│  .env
│  .gitignore
│  app.js
│  package-lock.json
│  package.json
│
├─model
│      index.js
│      order.js
│
├─routes
│      completeRouter.js
│      detailRouter.js
│      listRouter.js
│      mainRouter.js
│      orderRouter.js
│
├─style
│      main.css
│      moveModal.css
│      workDetail.css
│      worklist.css
│      workResult.css
│
└─views
        completeDetail.html
        completeList.html
        main.html
        workDetail.html
        worklist.html
        workResult.html
```
## 📋 프로젝트 상세 설명
### 메인화면(/)
![main](https://user-images.githubusercontent.com/46878756/174781407-0cbedaf6-2728-40c3-9c4e-dca500ca9c9b.png)
### 신청 modal
![modal](https://user-images.githubusercontent.com/46878756/174781543-284c555d-deaf-4774-a063-8f4a6174d92c.png)
![kakaoAddress](https://user-images.githubusercontent.com/46878756/174781566-ca065384-577f-44a9-8a2d-38b2fca9f30c.png)
### 리스트 화면(/worklists)
![list](https://user-images.githubusercontent.com/46878756/174781638-50cf255c-dbdd-416c-99f0-17e5be312092.png)
### 이사 신청 세부사항 화면(/detail)
![detail](https://user-images.githubusercontent.com/46878756/174781691-e1d67db1-cdec-45cc-a8f1-f14f682413de.png)
### 인력 신청 후 결과 화면(/detail/result)
![result](https://user-images.githubusercontent.com/46878756/174781755-3421a777-2c50-4ce4-96c5-84ed12978a98.png)
### 인력신청이 완료된 화면(/complete)
![complete](https://user-images.githubusercontent.com/46878756/174781844-7ba47813-2476-4d9a-8bc6-cea040039794.png)
### 완료된 이사항목 세부사항 화면(/complete/detail)
![completeDetail](https://user-images.githubusercontent.com/46878756/174781867-0b85de4b-faf6-4651-9993-45326be2f90e.png)




