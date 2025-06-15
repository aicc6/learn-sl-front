# Learn (Front-end)

## 시작하기

```sh
# 사전 준비해둔 demo-front 를 내려받는다.
git clone https://github.com/aicc6/demo-front.git

# 내려받은 프로젝트로 이동
cd demo-front

# 신규 git 원격 저장소와 연결(1 또는 2만 선택적으로 실행)
# 1. 이전 이력이 필요없는 경우(.git 삭제 후 새로 초기화 해서 원격 저장소에 올린다.)
# .git 폴더 삭제
rm -rf .git # macos/linux 인 경우
rmdir .git # cmd 사용하는 경우
Remove-Item .git -Recurse -Force # powershell 사용하는 경우
# git 초기화
git init
# 버전 관리할 변경 사항이 있는 파일을 커밋 대상 후보군에(staging area) 추가
git add . # 현재 폴더에 변경사항이 있는 모든 파일 지정, 선택적으로 파일을 지정도 가능
git commit -m "변경사항 설명" # 변경 사항 기록
git remote add origin {원격 저장소 URL} # 원격 저장소의 이름을 origin 으로 지정 및 설정
git push -u origin main # 원격저장소 origin 에 main 브랜치를 올림
# -----------------------------------------------------------------------------
# 2. 이전 이력을 그대로 가져갈 경우(원격 저장소에 대한 설정 삭제 후 새로운 원격 저장소 설정)
# 설정된 원격 저장소 정보를 삭제
git remote remove {origin:원격 저장소 이름} # 원격 저장소 목록 확인: git remote
git remote add origin {원격 저장소 URL} # 원격 저장소의 이름을 origin 으로 지정 및 설정
git push -u origin main # 원격저장소 origin 에 main 브랜치를 올림
```

## Scripts

```sh
# 모듈 다운로드
npm install

# 개발 모드 실행
npm run dev
```

## 참조

- [Shadcn Blocks](https://www.shadcnblocks.com)
- [Tweakcn](https://tweakcn.com/)
