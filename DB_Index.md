# DATABASE
# Index 개념
- 책의 첫 장에 있는 목차가 DB에서 적용되는 것.
<br>
<br>

## 예시 1
 ![image](https://user-images.githubusercontent.com/38865267/94498101-3bd06480-0234-11eb-9536-d53ca1896656.png)

1만 페이지짜리 데이터가 있을 때
```sql
SELECT	page
FROM	db_book
WHERE	title = 'Transaction';
```
해당 쿼리를 보내게 되면 full scan을 수행해야 'Transaction'을 조회 할 수 있다.

![image](https://user-images.githubusercontent.com/38865267/94498677-b6e64a80-0235-11eb-954d-b5570767106d.png)  
이런 식으로 문자열 기준 정렬에 저장위치까지 표시한다면 더욱 빠르게 'Transaction'을 찾을 수 있다.  

<br>
<br>

## 예시 2 
## [book_store]  Table
![image](https://user-images.githubusercontent.com/38865267/94499770-7f2cd200-0238-11eb-9983-3474d8f70940.png)  
<br>  
```sql
SELECT	name, location
FROM	book_store
WHERE	category = 'java'
```

서점에서 카테고리가 java인 책을 찾고 싶을 때 해당 쿼리 또한 full scan이 일어날 것.  

![image](https://user-images.githubusercontent.com/38865267/94499886-cdda6c00-0238-11eb-9680-7086e45deb12.png)  

이런식으로 index를 구성한다면 'java'라는 문자열 검색 중 'javascript'를 만나게 되었을 때 탐색이 종료 된다. 또한, 내부적으로 B-Tree 구조에 저장하기에 단순한 순차 조회보다 훨씬 빠르다.
<br>
인덱스에서 찾아낸 rowid 값은 1, 4, 4222, 9999 이므로 다음과 같이 검색이 가능하다.
```sql
SELECT	name, location
FROM	book_store
WHERE	rowid IN (1, 4, 4222, 9999)
```
위 상황을 보면 그냥 카테고리가 'java'인 것을 검색하는 것과 차이가 없을 것 같다.  
하지만 rowid는 해당 row의 고유한 주소 값을 가르키기 때문에 바로 접근할 수 있다.  
<br>
<br>

## **결론적으로 인덱스를 만드는 이유는 rowid를 기준으로 데이터를 탐색할 수 있도록 유도해서 쿼리의 성능을 향상시키기 위함**  
<br>
<br>  

```sql
CREATE INDEX index_category ON book_store(category)
```
'category' 컬럼에 대한 index_category라는 인덱스 생성 후 기존과 똑같이 조회 쿼리를 수행하면 된다.  
```sql
SELECT	name, location
FROM	book_store
WHERE	category = 'java'
```
## 주의점
- 인덱스는 다른 테이블에 의존적인 새로운 테이블이 하나 생성된다.
- 인덱스는 기본적으로 "이진트리 검색"을 사용하기에 기본적으로 정렬된 상태, 즉 삽입, 삭제, 수정이 일어날 때는 데이터 정렬과정이 일어나기에 전체적인 성능 저하를 초래할 수 있다.
- 마지막으로 인덱스는 검색(배민, 쇼핑몰 등)에 최적화된 기능이기에 삽입, 삭제, 수정이 자주 일어나는 비즈니스로적(페이스북 등)에서는 인덱스 사용 여부를 신중하게 고민해야한다.  
<br>
<br>
<br>  

## B-Tree(B트리)
- B-tree : 이진트리 같은 구조인데 한 노드에 M(Max Degree), 즉 차수가 있다고 보면된다. M-1칸의 리스트가 하나의 노드인 트리구조이다.
<br>
<br>
<br>
# Index 사용법
