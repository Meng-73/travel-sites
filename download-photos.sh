#!/bin/bash
# 下载 travel-planner 的图片文件到本地
# 使用方法: bash download-photos.sh

set -e

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
TARGET_DIR="$SCRIPT_DIR/travel-planner/assets/photos"

echo "========================================"
echo "  旅行规划站点 - 图片下载脚本"
echo "========================================"
echo ""

# 创建目标目录
mkdir -p "$TARGET_DIR"

# 检查 svn 是否可用
if command -v svn &> /dev/null; then
    echo "使用 svn 下载 photos 目录..."
    cd "$SCRIPT_DIR/travel-planner/assets"
    svn export --force "https://github.com/meng-73/travel-planner/trunk/assets/photos" photos
    echo ""
    echo "下载完成！图片已保存到 travel-planner/assets/photos/"
    exit 0
fi

# 备用方案：使用 curl + GitHub API
echo "svn 未安装，使用 curl 下载..."
echo ""

BASE_URL="https://raw.githubusercontent.com/meng-73/travel-planner/main/assets/photos"

# 从 photo_map.js 中提取图片文件名
echo "正在提取图片列表..."
PHOTO_FILES=$(grep -oE '["'\'']([^"'\''"]+\.(jpg|jpeg|png|gif|webp))["'\''"]' "$SCRIPT_DIR/travel-planner/assets/photo_map.js" | sed 's/["'\''"]//g' | sort -u)

TOTAL=$(echo "$PHOTO_FILES" | wc -l | tr -d ' ')
echo "找到 $TOTAL 个图片文件"
echo ""

COUNT=0
echo "$PHOTO_FILES" | while read -r filename; do
    [ -z "$filename" ] && continue
    COUNT=$((COUNT + 1))
    printf "[%3d/%3d] 下载: %s\n" "$COUNT" "$TOTAL" "$filename"
    curl -sL -o "$TARGET_DIR/$filename" "$BASE_URL/$filename"
done

echo ""
echo "下载完成！图片已保存到 travel-planner/assets/photos/"
