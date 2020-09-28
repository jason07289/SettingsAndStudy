# vue 환경 세팅

#### nodejs 설치
- 다운로드 링크
 https://nodejs.org/ko/download/  
- cmd창에서 vue프로젝트 생성할 곳으로 간다.

- node.js 설치 확인.
    ```bash
    npm -v or node -v
    ```
- vue를 설치하는 과정에서 다음과 같은 에러가 난다면 init   
![image](https://user-images.githubusercontent.com/38865267/93973023-78244080-fdae-11ea-86f0-8578f29b2eee.png)
  
- npm 프로그램 시작(init)  
    ```bash
    npm init
    ```
- 해당 명령어로 package.json 파일 생성을 돕는다.  
- package.json은 프로그램에 대한 기본정보를 담고 있다.
![image](https://user-images.githubusercontent.com/38865267/93973107-9db14a00-fdae-11ea-8bb3-44206c8d4bda.png)  

<br>

#### vue 설치
- [참고 링크](https://medium.com/@nameejang/vue-js-%EC%9E%85%EB%AC%B8%EC%9E%90%EB%A5%BC-%EC%9C%84%ED%95%9C-vue-js-%EC%84%A4%EC%B9%98-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%EC%83%9D%EC%84%B1%ED%95%98%EB%8A%94-%EB%B0%A9%EB%B2%95-f2079e3ff79f)  

- vue 설치  

    ```bash
    npm install vue
    ```  
- vue cli 설치  

    - vue cli는 vue.js 프로젝트 생성을 돕는 vue 공식 Cli이며 이를 통해 vue 명령어를 사용가능하게 된다.npm install -g @vue/cli-init
    ```bash
    npm install -g @vue/cli
    ```   
    - vue cli 또한 initialize가 필요  
    ```bash
    npm install -g @vue/cli-init
    ```
<br>

#### 프로젝트 생성(VUE/CLI)
- 프로젝트 생성
    ```bash
    vue init webpack hello-world
    ```
- 커맨드 입력 후 옵션 몇가지 설정 뒤 설치 진행
![image](https://user-images.githubusercontent.com/38865267/93990443-1374e000-fdc6-11ea-9454-680d082fe1a8.png)  
- hello world 프로젝트 생성 확인 가능.
![image](https://user-images.githubusercontent.com/38865267/93990910-a746ac00-fdc6-11ea-96bb-b0db3e1a2003.png)  

#### Vue pjt 실행
- 서버 구동
    - 우선 생성된 프로젝트 폴더로 이동
    - run 명령어를 통해 개발모드로 서버 구동
    ```bash
    npm run dev
    ```
    ![image](https://user-images.githubusercontent.com/38865267/94086368-abfe7500-fe45-11ea-89fc-320f22e5487e.png)  


