# DATABASE 성능 향상 포인트


## 하드파싱과 소프트파싱
- DB에서 옵티마이저(sql을 가장 빠르고 효율적으로 수행할 최적의 처리경로를 생성해주는 내부 핵심엔진)가 쿼리를 수행하기 위해 파싱, 최적화, 로우 소스 생성과정을 거친다.
- 해당 과정 중 재사용할 수 있도록 캐싱해두는 라이브러리 캐시라는 공간이 존재한다.
- sql을 실행할 때 라이브러리 캐시에서 찾을 수 있다면 소프트 파싱이 일어나고 내부 프로시저가 존재하지 않아 처음부터 진행해야한다면 하드파싱이 일어난다.

## 소프트 파싱의 성능이 더 좋은 이유
- 옵티마이저가 최적의 경로를 찾기 위해 사용하는 데이터는 다음과 같다.
    - 테이블, 컬럼, 인덱스 구조에 관한 기본정보
    - 오브젝트 통계 : 테이블, 인덱스, 컬럼 통계
    - 시스템 통계 : CPU 속도, Single Block, Multiblock I/O 속도
    - 옵티마이저 관련 파라미터
- 이렇게 복잡하게 생성된 내부 프로시저를 한번만 사용하는 것은 낭비이기 때문에 캐시에 저장

## SQL 실행계획을 공유하지 못하는 경우
- 공백 문자 혹은 줄바꿈
- 대소문자
- 주석
- Table Owner 표시
- 옵티마이저 힌트 사용
- 조건절 비교 값 변화

 ```sql
    SELECT * FROM JEONGPRO WHERE LOGIN_ID = 'jeong'
    SELECT * FROM JEONGPRO WHERE LOGIN_ID = 'pro'
    SELECT * FROM JEONGPRO WHERE LOGIN_ID = 'jdk'
    SELECT * FROM JEONGPRO WHERE LOGIN_ID = 'oracle'
```       
- 위와 같은 경우 조건절의 리터럴만 달랐을 뿐인데 다른 실행계획으로 인식한다면 성능 저하가 올 수 있다.

## 바인드 변수 사용하기

```sql
    SELECT * FROM JEONGPRO WHERE LOGIN_ID = :LOGIN_ID;
```
- 바인드 변수가 불필요한 경우
  - 수행빈도가 아주 낮을 때
  - 조건절 컬럼의 값 종류가 적을 때 (ex. 남/여, 1~12월 등)

- JAVA와 같이 사용
```java
    String query = "SELECT * FROM exmaple_table WHERE id = ?";
    PreparedStatement ps = con.prepareStatement(query);
    ps.setint(1,id);
```
- 물론 ?를 :id와 같은 형태로도 사용 가능.

