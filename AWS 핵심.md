# IAM - Identity and Access Management

## IAM이란?
- AWS 리소스에 대한 엑세스를 안전하게 제어할 수 있는 웹 서비스

## IAM 리소스 생성
- 그룹생성으로 여러 IAM 사용자의 엑세스 관리
![image](https://user-images.githubusercontent.com/38865267/126244188-4d772aff-4913-4b55-bd73-9bf2fcb8f346.png)

- 생성한 그룹에 정책 연결 -> Administrator Access
![image](https://user-images.githubusercontent.com/38865267/126244340-d35e880e-725a-49f3-ba0f-5290a8673be5.png)
  - 정책연결에서 지정해준 권한을 쓸 수 있다.
- 사용자 생성
  - 프로그매밍 방식 엑세스, AWS 관리자 콘솔 엑세스 두 가지가 존재
  - 생성 후 CSV 파일 확인
  
  ![image](https://user-images.githubusercontent.com/38865267/126244554-0a1d124f-f171-4f9b-91e8-4cfe78fce733.png)
  - 해당 링크로 들어가면 로그인 창에 계정번호가 자동입력
  
  ![image](https://user-images.githubusercontent.com/38865267/126244665-01811eee-c8fc-4ba1-8bf4-18a709e226b8.png)

- IAM 계정번호 별칭으로 바꾸기
  - 사용자 지정으로 계정의 기본별칭 입력가능
  ![image](https://user-images.githubusercontent.com/38865267/126245205-baadd062-9dec-445a-a214-450d4d7b2cdf.png)
  
  - 외우기 힘든 계정번호가 아닌 별칭으로 로그인 할 수 있다.
  
  ![image](https://user-images.githubusercontent.com/38865267/126245286-6e37fad2-43a3-4aee-862f-a63e1b4ac588.png)


## IAM Policy
- AWS 인증과 권한부여
  - Group - USER 들의 집단, 영구적이다
  - Role - 역할, 시간이 정해져있다, 다른 AWS 서비스의 권한을 받고 싶을 때 사용 (람다함수가 S3에 접근할때, code를 S3에 업로드할 때)
  - IAM Policy - 권한 부여의 주체, json 포맷의 문서
- Policy 종류
  - AWS 관리 정책
    - AWS가 미리 만들어 놓은 정책
  - 사용자 관리 정책
    - 사용자가 직접 생성한 정책
    - 기존 정책으로 부터 생성 및 수정 또는 직접 생성 가능
    - GUI 편집기/json 편집기 모두 이용 가능
## IAM Role
- Role ARN: 역할을 호출하기 위해 필요
- IAM Policy: 롤 자체는 인증 수단인데 이 Policy가 Role에 붙어서 short term 인증을 받을 수 있다.
- 신뢰 관계: 어떤 개체가 IAM Role을 호출할 수 있는가
- 사용 예시
  - EC2 role: EC2 인스턴스에게 AWS 서비스 접근권한을 부여
  - Lambda Execution Role: 람다에서 S3로 부터 파일을 읽고 싶을 때, role에 권한 지정
  - 

