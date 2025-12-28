@echo off
REM GitHub Pages 활성화 스크립트 (Windows)
REM
REM 사용법:
REM   1. GitHub CLI 설치: https://cli.github.com/
REM   2. 로그인: gh auth login
REM   3. 이 스크립트 실행: enable-pages.bat

echo 🚀 GitHub Pages 활성화 시도...
echo.

REM GitHub CLI 확인
where gh >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo ❌ GitHub CLI (gh)가 설치되지 않았습니다.
    echo.
    echo 📥 설치 방법:
    echo   https://github.com/cli/cli#installation
    echo.
    echo 또는 브라우저에서 직접 활성화:
    echo   https://github.com/sw-woo/sungwoo-page/settings/pages
    pause
    exit /b 1
)

REM 로그인 확인
gh auth status >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo ❌ GitHub에 로그인되지 않았습니다.
    echo.
    echo 다음 명령어로 로그인하세요:
    echo   gh auth login
    pause
    exit /b 1
)

echo ✅ GitHub CLI 준비 완료
echo.

REM Pages 활성화
echo 📡 GitHub Pages 활성화 중...
gh api --method POST -H "Accept: application/vnd.github+json" -H "X-GitHub-Api-Version: 2022-11-28" /repos/sw-woo/sungwoo-page/pages -f "source[branch]=gh-pages" -f "source[path]=/" 2>error.tmp

if %ERRORLEVEL% EQU 0 (
    echo ✅ GitHub Pages가 성공적으로 활성화되었습니다!
    echo.
    echo 🌐 사이트 URL: https://sw-woo.github.io/sungwoo-page/
    echo.
    echo ⏳ 1-2분 후 위 URL로 접속하세요.
) else (
    type error.tmp | findstr /C:"already exists" >nul
    if %ERRORLEVEL% EQU 0 (
        echo ℹ️  GitHub Pages가 이미 활성화되어 있습니다.
        echo.
        echo 🌐 사이트 URL: https://sw-woo.github.io/sungwoo-page/
    ) else (
        echo ❌ 활성화 실패. 수동으로 활성화하세요:
        echo   https://github.com/sw-woo/sungwoo-page/settings/pages
        echo.
        echo 설정:
        echo   • Branch: gh-pages
        echo   • Folder: / (root)
    )
)

if exist error.tmp del error.tmp

echo.
pause
