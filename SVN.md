# SVN 사용법  


## 용어 설명  
- 저장소 : Repository, 프로젝트의 프로그램 소스들 및 변경사항이 저장 또 여러사람이 접근가능. 한 프로젝트 마다 한 저장소가 필요하다.  

- 리비전(Revision) : 소스 파일 등을 수정하여 커밋하게 되면 특정 규칙에 따라 숫자가 증가. 저장소에 저장된 각각의 파일 버전이라 할 수 있다. Subversion의 경우 파일별로 리비전이 매겨지지 않고 커밋 한 것으로 전체 리비전이 매겨 진다. 리비전을 통해 프로젝트 진행상황 확인 가능.  

- trunk : 나무줄기, 몸통이라는 뜻으로 프로젝트에서 가장 중심이 되는 디렉토리. trunk 아래에 소스파일과 다른 디렉토리가 들어가게 된다.  

- branches : 프로젝트안의 작은 프로젝트. beanches 디렉토리 안에 또 다른 디렉토리를 두어 그 안에서 개발.  

- tags : 프로그램을 0.1, 0.2, 1.0 이렇게 버전을 붙여 릴리즈 할 때 발표한 소스들을 따로 저장하는 공간.  


## 명령어 
- Import : svn import [디렉토리명] [svn링크]  
처음에 임포트 하는 명령어  

- Checkout : svn checkout [svn링크] [sample]  
저장소에서 소스를 받아온다. 버전관리를 위한 파일도 같이 받아온다. 지우거나 변경시 저장소와 연결 불가능?  

- Export : svn export [svn링크] [sample]  
체크아웃과는 달리 버젼관리 파일을 뺀 순수 소스코드만 가져오는 명령어인데 마지막에 사용한다.  

- Commit : svn commit  
체크아웃 한 소스를 commit하는 명령어, Revison 1 증가

- Update : svn update  
최신 소스로 업데이트 하는 명령어. 소스 수정 및 Commit 전에 한번씩해준다.  

- Log : svn log  
저장소 변경사항/로그 확인하는 명령어  

- Diff : svn diff --revision 4 [sample.java]  
이전 소스와 지금의 소스를 비교하는 명령어

- blame : svn blame [sample.java]  
Blame은 한 소스 대상으로 각 리비전에 대해 어떤 행을 누가 수정했는지 볼 수 있다.  
- lock : svn lock [sample.java]  
파일에 락을 걸어 락을 건 사용자만이 수정 가능 svn unlock으로 해제, 로그 기록 가능.  
- Add : svn add [sample.java]  
새 파일을 만들었을 때 파일 추가, 추가 후엔 Commit 필수  
새 파일 생성시에도 꼭 add를 해주고 commit을 해야된다.  
- 기타 :  
svnadmin dump [sample]  
svnadmin load [sample]

