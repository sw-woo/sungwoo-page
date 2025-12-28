#!/bin/bash

# GitHub Pages 활성화 스크립트
#
# 사용법:
#   1. GitHub CLI 설치: https://cli.github.com/
#   2. 로그인: gh auth login
#   3. 이 스크립트 실행: bash enable-pages.sh

echo "🚀 GitHub Pages 활성화 시도..."
echo ""

# GitHub CLI 확인
if ! command -v gh &> /dev/null; then
    echo "❌ GitHub CLI (gh)가 설치되지 않았습니다."
    echo ""
    echo "📥 설치 방법:"
    echo "  macOS:   brew install gh"
    echo "  Linux:   https://github.com/cli/cli/blob/trunk/docs/install_linux.md"
    echo "  Windows: https://github.com/cli/cli#installation"
    echo ""
    echo "또는 브라우저에서 직접 활성화:"
    echo "  https://github.com/sw-woo/sungwoo-page/settings/pages"
    exit 1
fi

# 로그인 확인
if ! gh auth status &> /dev/null; then
    echo "❌ GitHub에 로그인되지 않았습니다."
    echo ""
    echo "다음 명령어로 로그인하세요:"
    echo "  gh auth login"
    exit 1
fi

echo "✅ GitHub CLI 준비 완료"
echo ""

# Pages 활성화 API 호출
echo "📡 GitHub Pages 활성화 중..."
response=$(gh api \
  --method POST \
  -H "Accept: application/vnd.github+json" \
  -H "X-GitHub-Api-Version: 2022-11-28" \
  /repos/sw-woo/sungwoo-page/pages \
  -f "source[branch]=gh-pages" \
  -f "source[path]=/" \
  2>&1)

if [ $? -eq 0 ]; then
    echo "✅ GitHub Pages가 성공적으로 활성화되었습니다!"
    echo ""
    echo "🌐 사이트 URL: https://sw-woo.github.io/sungwoo-page/"
    echo ""
    echo "⏳ 1-2분 후 위 URL로 접속하세요."
else
    if echo "$response" | grep -q "already exists"; then
        echo "ℹ️  GitHub Pages가 이미 활성화되어 있습니다."
        echo ""
        echo "🌐 사이트 URL: https://sw-woo.github.io/sungwoo-page/"
    else
        echo "❌ 활성화 실패:"
        echo "$response"
        echo ""
        echo "🔧 대신 브라우저에서 수동으로 활성화하세요:"
        echo "  https://github.com/sw-woo/sungwoo-page/settings/pages"
        echo ""
        echo "설정:"
        echo "  • Branch: gh-pages"
        echo "  • Folder: / (root)"
        exit 1
    fi
fi

# 상태 확인
echo ""
echo "📊 현재 상태 확인 중..."
sleep 3

status=$(curl -s -I "https://sw-woo.github.io/sungwoo-page/" | head -1)
if echo "$status" | grep -q "200"; then
    echo "✅ 사이트가 정상적으로 작동합니다!"
    echo "🎉 https://sw-woo.github.io/sungwoo-page/ 에서 확인하세요!"
elif echo "$status" | grep -q "403"; then
    echo "⏳ 아직 배포 중입니다. 1-2분 후 다시 확인하세요."
    echo "🌐 URL: https://sw-woo.github.io/sungwoo-page/"
else
    echo "ℹ️  사이트 배포 대기 중 (약 1-2분 소요)"
    echo "🌐 URL: https://sw-woo.github.io/sungwoo-page/"
fi
