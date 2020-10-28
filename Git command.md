# Git 명령어
![image](https://user-images.githubusercontent.com/38865267/97398691-fdab8b00-192e-11eb-9831-0015b7c15d00.png)

#### git init
- 새로운 저장소를 생성.
- .git 이라는 폴더가 생성.

#### git config
- 최초 깃 설정

#### git add
- Staging area 상태로 변경. (새 파일들을 인식시키는 역할)
- 폴더 전체를 add 할 경우 - git add .

#### git status
- git의 현재 상태 확인.

#### git rm --cached (파일명)
- Staging 상태를 작업상태로.

#### git commit -m "커밋 메시지"
- Staging 상태에서 Head 상태로 변경 

#### git push
- 내커밋을 깃허브 remote로 보내는 것

#### git log
- commit 기록 확인
- commit id, 커밋한 브랜치정보, 작성자 정보, commit message 확인 가능

#### git log --oneline
- git log 한줄로 보기.

#### git checkout -- (파일명)
- 로컬의 변경내용을 변경 전 상태로 돌림
- 이미 Staging 추가딘 변경내용과 새로 생성한 파일은 그대로

#### git checkout -b "브랜치명"
- 새로운 branch 생성
- git branch 명령어를 이용해 현재 로컬 브랜치 확인 가능
- git checkout "브랜치명"을 통해 현재 선택된 브랜치 변경
- git branch -d "브랜치명"을 통해 삭제 가능

#### git merge "브랜치명"
- 브랜치 병합

#### git pull
- 로컬 작업 시 작업하고 있는 저장소의 최신 버전을 다운받는 것