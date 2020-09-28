## Vuex  

#### Vuex객체의 4가지 속성
- State: 컴포넌트 간 공유할 Data 객체를 의미
- Getters
    - 공유하는 Data를 그대로 전달, 혹은 가공하여 전달
- Mutations
    - 저장소에 공유되어 있는 Data를 가공
    - 인자를 전달받아 미리 정의된 모듈을 실행하여 상태를 재 변경
    - Setter화 비슷한 역할
- Actions
    - Mutations와 동일하나 비동기 작업을 처리할 때 사용
    - 주로 API 호출, 반응형 동작시 사용
