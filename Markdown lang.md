# Markdown 작성법



## 헤더 Headers
- 큰제목: 문서제목
    ```markdown
    This is an H1
    =============
    ```

    This is an H1
    =============
  
- 작은제목: 문서 부제목
    ```markdown
    This is an H2
    -------------
    ```
  This is an H2
  -------------
   
- 글머리: 1~6까지만 지원
    ```markdown
    # H1
    ## H2
    ### H3
    #### H4
    ##### H5
    ###### H6
    ```
    # H1
    ## H2
    ### H3
    #### H4
    ##### H5
    ###### H6

## BlockQuote
- 이메일에서 사용하는 > 블럭인용문자를 이용한다.

    ```markdown
    > blockqute1
    >   > blockqute2
    >   >   > blockqute3
    ```
    > blockqute1
    >   > blockqute2
    >   >   > blockqute3

- 다른 마크다운 요소 포함하기.

    > 다른 요소 포함하기  
    > - 리스트
    >   ```java
    >       System.out.println();
    >   ```

## 목록
- 순서있는 목록
    ```markdown
    1. 첫번째
    3. 세번째
    2. 두번째
   
        이런식으로 어떤 번호를 입력해도 순서는 내림차순!
    ```
    1. 첫번째
    2. 세번째
    3. 두번째

- 순서없는 목록(글머리 기호: *, +, - 지원)
    ```markdown
    * 빨강
      * 녹색
        * 파랑

    + 빨강
      + 녹색
        + 파랑

    - 빨강
      - 녹색
        - 파랑
    ```
    * 빨강
      * 녹색
        * 파랑

    + 빨강
      + 녹색
        + 파랑

    - 빨강
      - 녹색
        - 파랑
  

## 코드
- 들여쓰기
    ```markdown
    This is a normal paragraph:

        This is a code block.
    
    end code block.
    ```
    This is a normal paragraph:

        This is a code block.
    
    end code block.

- 한줄씩 띄우지 않으면 안되므로 주의.
    ```markdown
    This is a normal paragraph:
        This is a code block.    
    end code block.
    ```
    This is a normal paragraph:
        This is a code block.    
    end code block.

## 코드블럭    
- 코드블럭은 또 2가지방식으로 사용이 가능, ```<pre><code>{code}</code></pre>``` 그리고 ``` ``` ```
  
    ```markdown
    <pre>
    <code>
    public class BootSpringBootApplication {
    public static void main(String[] args) {
        System.out.println("Hello, Honeymon");
    }

    }
    </code>
    </pre>
    ```
    <pre>
    <code>
    public class BootSpringBootApplication {
    public static void main(String[] args) {
        System.out.println("Hello, Honeymon");
    }

    }
    </code>
    </pre>

## 수평선 ```<hr/>```

- 아래 줄은 모두 수평선을 생성
    ```markdown
    * * *

    ***

    *****

    - - -

    ---------------------------------------
    ```

    * * *

    ***

    *****

    - - -

    ---------------------------------------
## 링크
- 참조링크
    ```markdown
    [link keyword][id]

    [id]: URL "Optional Title here"

    // code
    Link: [Google][googlelink]

    [googlelink]: https://google.com "Go google"
    ```
    
    Link: [Google][googlelink]

    [googlelink]: https://google.com "Go google"

    
- 외부링크
    ```markdown
    사용문법: [Title](link)
    적용예: [Google](https://google.com, "google link")   
    ```
    사용문법: [Title](link)
    적용예: [Google](https://google.com, "google link")

- 자동연결
    ```markdown
    일반적인 URL 혹은 이메일주소인 경우 적절한 형식으로 링크를 형성한다.

    * 외부링크: <https://github.com/jason07289>
    * 이메일링크: <jason07999@naver.com>
    ```
    일반적인 URL 혹은 이메일주소인 경우 적절한 형식으로 링크를 형성한다.

    * 외부링크: <https://github.com/jason07289>
    * 이메일링크: <jason07999@naver.com>

## 강조
- 글 강조하기
    ```markdown
    *single asterisks*
    _single underscores_
    **double asterisks**
    __double underscores__
    ~~cancelline~~
    ```
    *single asterisks*
    _single underscores_
    **double asterisks**
    __double underscores__
    ~~cancelline~~ 
- 문장 중간에 사용할 경우에는 띄어쓰기를 사용하는 것이 좋다.
    ```markdown
    문장 중간에 사용할 경우에는 **띄어쓰기** 를 사용하는 것이 좋다.
    ```

    문장 중간에 사용할 경우에는 **띄어쓰기** 를 사용하는 것이 좋다.

## 이미지
- 기본 방식
    ```markdown
    ![image](https://user-images.githubusercontent.com/38865267/97545711-b85e8a80-1a0e-11eb-94c2-e53b8ab07f4c.png)
    ```
    ![image](https://user-images.githubusercontent.com/38865267/97545711-b85e8a80-1a0e-11eb-94c2-e53b8ab07f4c.png)

- 사이즈 조절 ```<img width="" height=""></img>```를 이용
    ```markdown
    <img src="https://user-images.githubusercontent.com/38865267/97545711-b85e8a80-1a0e-11eb-94c2-e53b8ab07f4c.png" width="450px" height="300px" title="px(픽셀) 크기 설정" alt="RubberDuck"></img><br/>
    <img src="https://user-images.githubusercontent.com/38865267/97545711-b85e8a80-1a0e-11eb-94c2-e53b8ab07f4c.png" width="40%" height="30%" title="px(픽셀) 크기 설정" alt="RubberDuck"></img>
    ```
    <img src="https://user-images.githubusercontent.com/38865267/97545711-b85e8a80-1a0e-11eb-94c2-e53b8ab07f4c.png" width="450px" height="300px" title="px(픽셀) 크기 설정" alt="RubberDuck"></img><br/>
    <img src="https://user-images.githubusercontent.com/38865267/97545711-b85e8a80-1a0e-11eb-94c2-e53b8ab07f4c.png" width="40%" height="30%" title="px(픽셀) 크기 설정" alt="RubberDuck"></img>

## 줄바꿈
- 3칸 이상 띄어쓰기(   )를 하면 줄이 바뀐다.
    ```markdown
    * 줄 바꿈을 하기 위해서는 문장 마지막에서 3칸이상을 띄어쓰기해야 한다. 
    이렇게

    * 줄 바꿈을 하기 위해서는 문장 마지막에서 3칸이상을 띄어쓰기해야 한다.___\\ 띄어쓰기
    이렇게
    ```
    
    * 줄 바꿈을 하기 위해서는 문장 마지막에서 3칸이상을 띄어쓰기해야 한다. 
    이렇게

    * 줄 바꿈을 하기 위해서는 문장 마지막에서 3칸이상을 띄어쓰기해야 한다.___\\ 띄어쓰기
    이렇게