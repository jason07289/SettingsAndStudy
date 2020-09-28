## Creation
- Creation : 컴포넌트 초기화 단계
    - 컴포넌트가 돔에 추가 되기 전이다.
    - **클라이언트 단과 서버단 렌더링 모두에서 처리할 일이 있을 때**, 이 단계에서 하면된다.
    - 돔에 접근 this.$el을 사용할 수 없다. *el(expression Language)
    - 중요한 것은 **서버 렌더링에서도 지원되는 훅**이라는 점.

#### 훅 종류
- beforeCreate
    - data와 events(vm.$on, vm.$once, vm.$off, vm.$emit)가 세팅되지 않은 시점
- created 
    - 이제 data와 events가 활성화 되어 있다.
    - 단, template와 virtual dom은 마운트 및 렌더링 되지 않은 시점

## Mounting
- Mounting : Dom 삽입 단계
    - 초기 렌더링 직전에 컴포넌트에 직접 접근 가능
    - 컴포넌트 초기 세팅할 데이터 패치는 created 단계를 사용하는 것이 낫다.

#### 훅 종류
- beforeMount 
    - template과 렌더 함수들이 컴파일 된 후, 첫 렌더링이 일어나기 직전에 실행
    - 대부분의 경우에 사용하지 않는 것이 좋다.
    - 서버사이드 렌더링 시에는 호출되지 않는다.
- Mounted 
    - 컴포넌트, 템플릿, 렌더링된 돔에 접근 가능
    - 모든 하위 컴포넌트가 마운트된 상태를 보장하지는 않음 - 서버사이드 렌더링 호출 X
    - 주의할 점은 부모의 mounted 훅이 자식의 mounted 훅보다 먼저 실행되지 않고 반대라는 것.
    ![image](https://user-images.githubusercontent.com/38865267/94395982-d9c42080-019b-11eb-960a-3948bbe8943a.png)
    - Created 훅은 부모 -> 자식 순, but mounted는 아니다.
    - 부모는 mounted를 실행하기 전에 자식의 mounted를 기다린다.

## Updating
- updating : Diff 및 재 렌더링 단계
    - 컴포넌트 내에서 반응형 속성들이 변경되거나 특정한 이유로 재 렌더링이 발생되면 실행.
    - 디버깅이나 프로파일링 등을 위해 컴포넌트 재 렌더링 시점을 알고 싶을때 사용하면 된다.
    - 서버렌더링 시 호출 X 

#### 훅 종류
- beforeUpdate
    - 컴포넌트의 데이터가 변하여 업데이트 사이클이 시작될때 실행.
    - 돔이 재 렌더링 되고 패치되기 직전에 실행.
    - 재 렌더링 전의 새 상태의 데이터를 얻을 수 있고 더 많은 변경이 가능.
- updated
    - 재 렌더링이 일어난 후 실행.
    - 돔이 업데이트 완료되었기에 돔 종속적인 연산이 가능.
    - 이 훅에서 상태변경 시 무한루프에 빠지지 않게 주의할 것.

## Destruction
- Destruction
    - 해체단계

#### 훅 종류
- beforeDestroy
    - 뷰 인스턴스가 제거되기 직전 호출.
    - 컴포넌트는 원래 모습과 모든 기능들을 그대로 가지고 있다.
    - reactive subscription을 제거하고자 한다면 이 훅이 제격
    - 서버렌더링 시 호출 X

- destroyed
    - 뷰 인스턴스가 제거된 후 호출.
    - Vue 인스턴스의 모든 디렉티브가 바인딩 해제되고 모든 이벤트 리스너가 제거되며 모든 하위 Vue 인스턴스도 삭제.
    - 서버렌더링 시 호출 X  
    


## 서버사이드 렌더링이란??
- 우선 **SPA는 클라이언트 사이드 렌더링** 방식이기에 언제 새로운 데이터를 불러와야할지 스스로 정해서 구현해야 한다.

- 서버사이드 랜더링은 요청시 마다 새로고침이 일어나며 서버에 새로운 페이지에 대한 요청을 하는 방식이다.  


#### 전통적인 방식에서의 웹페이지 구동  
![image](https://user-images.githubusercontent.com/38865267/94397105-1bee6180-019e-11eb-8e6f-76bc08312dad.png)
  
#### SPA에서의 구동
![image](https://user-images.githubusercontent.com/38865267/94397152-31fc2200-019e-11eb-8e99-df7031dcf05d.png)