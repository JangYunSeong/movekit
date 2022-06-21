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
#### 서비스에서 가장 먼저 나오는 화면으로 이사하기 버튼을 클릭하면 신청 모달창으로 이동하고 일하기 버튼을 누르면 리스트 화면으로 이동한다.
![main](https://user-images.githubusercontent.com/46878756/174781407-0cbedaf6-2728-40c3-9c4e-dca500ca9c9b.png)
### 신청 modal
#### modal에 있는 입력창의 정보를 입력한 후 등록 버튼을 누르면 database에 입력한 이사 내용이 저장된다.
![modal](https://user-images.githubusercontent.com/46878756/174781543-284c555d-deaf-4774-a063-8f4a6174d92c.png)
#### 주소를 입력하는 칸을 클릭하면 kakao API를 이용해 도로명 주소를 입력할 수 있도록 기능을 추가했다.
![kakaoAddress](https://user-images.githubusercontent.com/46878756/174781566-ca065384-577f-44a9-8a2d-38b2fca9f30c.png)
### 리스트 화면(/worklists)
#### database에 존재하는 이사 내용을 가져와서 랜더링한다. 무한 스크롤을 이용해서 스크롤을 내리면서 내용을 확인할 수 있도록 만들었다. 내용 하나를 클릭하면 세부사항을 확인 할 수 있다.
![list](https://user-images.githubusercontent.com/46878756/174781638-50cf255c-dbdd-416c-99f0-17e5be312092.png)
### 이사 신청 세부사항 화면(/detail)
#### 리스크 화면에 있는 내용뿐만 아니라 geocode와 kakao local API를 이용해 도로명 주소를 위,경도로 변환한 다음 계산을 통해서 두 주소사이의 거리를 계산하고 그 거리와 이삿짐 양에 따라서 인력 가격을 측정한다. 이름, 전화번호를 올바르게 입력하면 결과화면으로 넘어간다.
![detail](https://user-images.githubusercontent.com/46878756/174781691-e1d67db1-cdec-45cc-a8f1-f14f682413de.png)
### 인력 신청 후 결과 화면(/detail/result)
#### 이사를 원하는 사람의 이름과 전화번호와 같은 개인정보를 랜더링해주고 이사를 신청한 사람에게 문자로 인력을 신청한 사람의 정보가 전달된다.
![result](https://user-images.githubusercontent.com/46878756/174781755-3421a777-2c50-4ce4-96c5-84ed12978a98.png)
### 인력신청이 완료된 화면(/complete)
#### 요구하는 사람 수를 만족하게 되면 매칭됨창으로 이사 내용이 넘어간다. 인력을 신청한 사람이 자신이 신청한 내용이 무엇인지 확인할 수 있도록 하기 위해 만들었다. 내용을 클릭하면 세부사항으로 넘어간다.
![complete](https://user-images.githubusercontent.com/46878756/174781844-7ba47813-2476-4d9a-8bc6-cea040039794.png)
### 완료된 이사항목 세부사항 화면(/complete/detail)
#### 이사 신청 세부사항과는 내용이 같지만 신청하는 버튼이 없고 돌아가기 버튼만 존재하여 내용을 확인만 할 수 있도록 했다. 
![completeDetail](https://user-images.githubusercontent.com/46878756/174781867-0b85de4b-faf6-4651-9993-45326be2f90e.png)




