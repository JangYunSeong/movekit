# π¦ movekit
![KakaoTalk_20220414_202931055](https://user-images.githubusercontent.com/46878756/168100814-4b6a9836-06a4-4ba0-b0e4-546b7d9118ca.png)

## π λͺ©μ°¨
- [π νλ‘μ νΈ μ€λͺ](#-νλ‘μ νΈ-μ€λͺ)
- [π κ°λ° κΈ°κ°](#-κ°λ°-κΈ°κ°)
- [β κΈ°μ  μ€ν](#-κΈ°μ -μ€ν)
- [π νλ‘μ νΈ κ΅¬μ‘°](#-νλ‘μ νΈ-κ΅¬μ‘°)
- [π νλ‘μ νΈ μμΈ μ€λͺ](#-νλ‘μ νΈ-μμΈ-μ€λͺ)

## π νλ‘μ νΈ μ€λͺ
**λ¨κ±°λ¦¬ μ΄μ¬μ νμν λ¬Όν** λ°°μ‘

νλ°° λ°μ€, μ°λ κΈ°λ΄ν¬, λͺ©μ₯κ°, μ²­μμ©ν, λΈλ, νμ΄ν

**+ μΆκ°λ¬Όν λμ¬ β λμ°¨, μ©λ¬μμ²΄ μ°κ²°, μΈλ ₯** 

### **κ³ κ° : κ²½λΆλ κ·Όμ² κΈ°μμ¬ μμ£ΌμΈ or μμ·¨μ**

μ΄μ¬νλλ° νΌμ μ§μ λ¦¬νκΈ° μ΄λ ΅κ±°λ λΆλ΄μ€λ¬μ΄ νμλ€..

**+ λμ΄ νμν λκ΅¬λ(μλ₯΄λ°μ΄νΈ), μ ν΄ μ©λ¬μμ²΄**

## π κ°λ° κΈ°κ°
### 2022.04.10 ~ 2022.06.21

## β κΈ°μ  μ€ν
  ### Frontend
  <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"> <img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"> 
  <img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white">
  ### Backend
  <img src="https://img.shields.io/badge/jquery-0769AD?style=for-the-badge&logo=jquery&logoColor=white"><img src="https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=Node.js&logoColor=white">
  <img src="https://img.shields.io/badge/express-000000?style=for-the-badge&logo=express&logoColor=white">
  <img src="https://img.shields.io/badge/mongoDB-47A248?style=for-the-badge&logo=MongoDB&logoColor=white">

## π νλ‘μ νΈ κ΅¬μ‘°
```
move:.
β  .env
β  .gitignore
β  app.js
β  package-lock.json
β  package.json
β
ββmodel
β      index.js
β      order.js
β
ββroutes
β      completeRouter.js
β      detailRouter.js
β      listRouter.js
β      mainRouter.js
β      orderRouter.js
β
ββstyle
β      main.css
β      moveModal.css
β      workDetail.css
β      worklist.css
β      workResult.css
β
ββviews
        completeDetail.html
        completeList.html
        main.html
        workDetail.html
        worklist.html
        workResult.html
```
## π νλ‘μ νΈ μμΈ μ€λͺ
### λ©μΈνλ©΄(/)
#### μλΉμ€μμ κ°μ₯ λ¨Όμ  λμ€λ νλ©΄μΌλ‘ μ΄μ¬νκΈ° λ²νΌμ ν΄λ¦­νλ©΄ μ μ²­ λͺ¨λ¬μ°½μΌλ‘ μ΄λνκ³  μΌνκΈ° λ²νΌμ λλ₯΄λ©΄ λ¦¬μ€νΈ νλ©΄μΌλ‘ μ΄λνλ€.
![main](https://user-images.githubusercontent.com/46878756/174781407-0cbedaf6-2728-40c3-9c4e-dca500ca9c9b.png)
### μ μ²­ modal
#### modalμ μλ μλ ₯μ°½μ μ λ³΄λ₯Ό μλ ₯ν ν λ±λ‘ λ²νΌμ λλ₯΄λ©΄ databaseμ μλ ₯ν μ΄μ¬ λ΄μ©μ΄ μ μ₯λλ€.
![modal](https://user-images.githubusercontent.com/46878756/174781543-284c555d-deaf-4774-a063-8f4a6174d92c.png)
#### μ£Όμλ₯Ό μλ ₯νλ μΉΈμ ν΄λ¦­νλ©΄ kakao APIλ₯Ό μ΄μ©ν΄ λλ‘λͺ μ£Όμλ₯Ό μλ ₯ν  μ μλλ‘ κΈ°λ₯μ μΆκ°νλ€.
![kakaoAddress](https://user-images.githubusercontent.com/46878756/174781566-ca065384-577f-44a9-8a2d-38b2fca9f30c.png)
### λ¦¬μ€νΈ νλ©΄(/worklists)
#### databaseμ μ‘΄μ¬νλ μ΄μ¬ λ΄μ©μ κ°μ Έμμ λλλ§νλ€. λ¬΄ν μ€ν¬λ‘€μ μ΄μ©ν΄μ μ€ν¬λ‘€μ λ΄λ¦¬λ©΄μ λ΄μ©μ νμΈν  μ μλλ‘ λ§λ€μλ€. λ΄μ© νλλ₯Ό ν΄λ¦­νλ©΄ μΈλΆμ¬ν­μ νμΈ ν  μ μλ€.
![list](https://user-images.githubusercontent.com/46878756/174781638-50cf255c-dbdd-416c-99f0-17e5be312092.png)
### μ΄μ¬ μ μ²­ μΈλΆμ¬ν­ νλ©΄(/detail)
#### λ¦¬μ€ν¬ νλ©΄μ μλ λ΄μ©λΏλ§ μλλΌ geocodeμ kakao local APIλ₯Ό μ΄μ©ν΄ λλ‘λͺ μ£Όμλ₯Ό μ,κ²½λλ‘ λ³νν λ€μ κ³μ°μ ν΅ν΄μ λ μ£Όμμ¬μ΄μ κ±°λ¦¬λ₯Ό κ³μ°νκ³  κ·Έ κ±°λ¦¬μ μ΄μΏμ§ μμ λ°λΌμ μΈλ ₯ κ°κ²©μ μΈ‘μ νλ€. μ΄λ¦, μ νλ²νΈλ₯Ό μ¬λ°λ₯΄κ² μλ ₯νλ©΄ κ²°κ³Όνλ©΄μΌλ‘ λμ΄κ°λ€.
![detail](https://user-images.githubusercontent.com/46878756/174781691-e1d67db1-cdec-45cc-a8f1-f14f682413de.png)
### μΈλ ₯ μ μ²­ ν κ²°κ³Ό νλ©΄(/detail/result)
#### μ΄μ¬λ₯Ό μνλ μ¬λμ μ΄λ¦κ³Ό μ νλ²νΈμ κ°μ κ°μΈμ λ³΄λ₯Ό λλλ§ν΄μ£Όκ³  μ΄μ¬λ₯Ό μ μ²­ν μ¬λμκ² λ¬Έμλ‘ μΈλ ₯μ μ μ²­ν μ¬λμ μ λ³΄κ° μ λ¬λλ€.
![result](https://user-images.githubusercontent.com/46878756/174781755-3421a777-2c50-4ce4-96c5-84ed12978a98.png)
### μΈλ ₯μ μ²­μ΄ μλ£λ νλ©΄(/complete)
#### μκ΅¬νλ μ¬λ μλ₯Ό λ§μ‘±νκ² λλ©΄ λ§€μΉ­λ¨μ°½μΌλ‘ μ΄μ¬ λ΄μ©μ΄ λμ΄κ°λ€. μΈλ ₯μ μ μ²­ν μ¬λμ΄ μμ μ΄ μ μ²­ν λ΄μ©μ΄ λ¬΄μμΈμ§ νμΈν  μ μλλ‘ νκΈ° μν΄ λ§λ€μλ€. λ΄μ©μ ν΄λ¦­νλ©΄ μΈλΆμ¬ν­μΌλ‘ λμ΄κ°λ€.
![complete](https://user-images.githubusercontent.com/46878756/174781844-7ba47813-2476-4d9a-8bc6-cea040039794.png)
### μλ£λ μ΄μ¬ν­λͺ© μΈλΆμ¬ν­ νλ©΄(/complete/detail)
#### μ΄μ¬ μ μ²­ μΈλΆμ¬ν­κ³Όλ λ΄μ©μ΄ κ°μ§λ§ μ μ²­νλ λ²νΌμ΄ μκ³  λμκ°κΈ° λ²νΌλ§ μ‘΄μ¬νμ¬ λ΄μ©μ νμΈλ§ ν  μ μλλ‘ νλ€. 
![completeDetail](https://user-images.githubusercontent.com/46878756/174781867-0b85de4b-faf6-4651-9993-45326be2f90e.png)




