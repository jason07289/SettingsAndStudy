# HTTP 구조 및 핵심 요소

## 1. HTTP 핵심 요소
### 1.1 HTTP 통신 방식
- HTTP는 기본적으로 요청/응답(request/response) 구조를 가진다.
- 클라이언트는 HTTP request를 서버에 보내고 서버는 HTTP response를 보낸다.
- 클라이언트와 서버의 모든 통신은 요청과 응답으로 이루어진다.
- HTTP는 Stateless
  * 요청이 오면 그에 응답을 할 뿐 다른 요청/응답 끼리 연결되어 있지 않다는 뜻 (각각 독립적이다.)
  * 요청과 응답의 진행과정이나 데이터가 필요할 때, 쿠키나 세션 등을 사용하게 된다.

### 1.2 HTTP Request 구조
- HTTP request 메세지는 크게 3 부분으로 구성
  - start line
  - headers
  - body

### 1.2.1 Start Line
- HTTP request의 첫 라인
- 3부분으로 구성되어 있다.
  - HTTP Method
    - 해당 request가 의도한 action을 정의하는 부분.
    - HTTP Methods에는 GET, POST, PUT, DELETE, OPTIONS 등등이 있다.
  - Request target
    - 해당 request가 전송되는 목표 URI
    - ex) /login
  - HTTP Version
    - 말 그대로 사용되는 HTTP 버전(1.0, 1.1, 2.0 등)
### 1.2.2 Headers
- 해당 request에 대한 추가 정보를 담고 있는 부분
   ex) request 메세지 Body의 총 길이 등
- Key:Value 값
   ex) HOST:google.com
- Headers도 general headers. request headers, entity headers 세 부분으로 나눠짐.
- Host
  - 요청이 전송되는 target의 host url. ex) google.com
- User-Agent
  - 요청을 보내는 클라이언트에 대한 정보. ex) 웹브라우저 정보
- Accept
  - 해당 요청이 받을 수 있는 응답(response) 타입.
- Connection
  - 해당 요청이 끝난 후에 클라이언트와 서버가 계속해서 네트워크 커넥션을 유지 할 것인지 아니면 끊을 것인지에 대해 지시하는 부분.
- Content - Type
  - 해당 요청이 보내는 메세지 body의 타입. ex) JSON을 보내면 application/json
- Content-Length
  - 메세지 body의 길이.

### 1.2.3 Body
- 해당 request의 실제 메세지/내용
- Body가 없는 request도 많다. ex) GET request

### 1.2.4 HTTP Response 구조
- Response도 request와 마찬가지로 3부분.
  - Status line
  - Headers
  - Body
### 1.2.5 Status Line
- Response의 상태를 간략하게 나타내주는 부분.
  - HTTP 버전
  - Status code: 응답 상태를 나타내는 코드, 숫자로 되어 있는 코드. ex) 200
  - Status text: 응답 상태를 간략하게 설명해주는 부분. ex) "Not Found"

### 1.2.6 Headers
- Response의 headers와 동일.
- 다만 response에서만 사용되는 header 값들.
- 예를 들어, User Agent 대신에 Server 헤더가 사용.
### 1.2.7 Body
- Response의 body와 일반적으로 동일하다.
- Request와 마찬가지로 모든 response가 body에 있지는 않다. 데이터를 전송할 필요가 없을 경우 body가 비어있게 된다.

## 2. HTTP Methods  

### 2.1 GET
  - 데이터를 서버로 부터 받아올 때 사용.
  - 데이터 생성/수정/삭제 없이 받아오기만 할 때 사용.
  - 가장 간단하고 많이 사용되는 HTTP Method.
  - request에 body를 안 보내는 경우가 많다.
  - 
### 2.2 POST
- 데이터를 생성/수정/삭제 할 때 쓰인다.
- 데이터를 생성 및 수정 할때 많이 사용해 request시 body가 포함되서 보내진다.
- 같은 경로로 여러번 호출하면 다른결과가 나온다.(생성이 계속 될 수 있음)
- 
### 2.3 PUT
- 데이터를 수정 할때 사용된다.
- POST와 비슷, 원본 리소스의 표현이 포함 된 정보를 담아 요청.
- POST와 겹치기 때문에 PUT을 안 쓰고 POST로 통일하는 곳도 많으며 최근에는 없어지는 추세.
- 같은 경로로 여러번 호출해도 결과가 같다.(특정 데이터를 바꾸므로 새로 생성 X)
- 추가적으로 PATCH 메소드는 특정 속성만 변경.
- PUT은 전체가 아닌 일부만 전달할 경우, 전달한 필드 외 모두 null 혹은 default 값 처리 되니 주의할 것.
- 
### 2.4 DELETE
- 특정 데이터를 서버에서 삭제 요청을 보낼 때 쓰이는 Method.
- 특정 리소스에 대한 표현이 포함되어 있다.
- PUT과 마찬가지로 POST에 밀려서 잘 사용되지 않는다.
  
### 2.5 OPTIONS
- 주로 요청 URI에서 사용할 수 있는 Method를 받아올때 사용.
- 예를 들어, /update uri에서 어떤 method를 요청 가능한가를 알고 싶다면 OPTIONS 요청을 사용해서 확인.

## 3. 자주 쓰이는 HTTP Status Code
### 3.1 200 OK
- 가장 자주 보게 되는 상태 코드
- 문제없이 실행 되었을때 보내는 코드

### 301 Moved Permanently
- 해당 URI가 다른 주소로 바뀌었을 때 보내는 코드.

### 400 Bad Request
- 해당 요청이 잘못된 요청일때 보내는 코드.
- 주로 요청에 포함된 input 값들이 잘못된 값들이 보내졌을때 사용되는 코드.
- 예를 들어, 전화번호를 보내야 되는데 text가 보내졌을때 등등.

### 401 Unauthorized
- 유저가 해당 요청을 진행 할려면 먼저 로그인을 하거나 회원 가입을 하거나 등등이 필요하다는 것을 나타내려 할 때 쓰이는 코드.
- 
### 403 Forbidden
- 유저가 해당 요청에 대한 권한이 없다는 뜻.
- 예를 들어, 오직 과금을 한 유저만 볼 수 있는 데이터를 요청 했을 때 등.

### 404 Not Found
- 요청된 uri가 존재 하지 않는다는 뜻.

### 500 Internal Server Error
- 서버에서 에러가 났을 때 나오는 코드. (백엔드 API 에러)
