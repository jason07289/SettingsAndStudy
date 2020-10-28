# Garbage Collector

## GC의 역할
- 메모리 할당
- 사용중인 메모리 인식
- 사용하지 않는 메모리인식

## 자바 힙 구조
![image](https://user-images.githubusercontent.com/38865267/97396025-92ab8580-1929-11eb-88d0-f89ee19785fc.png)

![image](https://user-images.githubusercontent.com/38865267/97396076-b078ea80-1929-11eb-83ef-39f3d5e1e65f.png)

## GC의 종류
- 마이너 GC: young 영역에서 발생하는 GC
- 메이저 GC (Full GC): OLD 영역이나 Perm 영역에서 발생하는 GC

## 4가지 GC의 방식
- Serial Collector (시리얼 콜렉터)
- Parallel Collector (병렬 콜렉터)
- Parallel Compacting Collector (병렬 컴팩팅 콜렉터)
- Concurrent Mark-Sweep Collector (CMS 콜렉터)

## GC의 수행 시점 및 특징
- 각 영역의 할당된 크기의 메모리가 허용치를 넘을 때.
- 개발자가 컨트롤할 영역은 아니다.
- 필요할 때에는 알맞은 GC 방식을 개발한 시스템에 적용할 수 있다.
