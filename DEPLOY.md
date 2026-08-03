# 部署指南

## 问题说明

GitHub Pages (`*.github.io`) 在国内被 GFW 重置连接，无法直接访问。
但 Vercel、Netlify、Cloudflare Pages 均可正常访问，推荐使用以下任一平台部署。

## 方案一：Vercel（推荐，最简单）

1. 打开 https://vercel.com/new
2. 使用 GitHub 账号登录
3. 选择 `travel-sites` 仓库
4. 直接点击 Deploy（无需修改任何配置）
5. 等待 1-2 分钟部署完成
6. 获得 `https://travel-sites-xxx.vercel.app` 链接，国内可直接访问

## 方案二：Netlify

1. 打开 https://app.netlify.com/start
2. 使用 GitHub 账号登录
3. 选择 `travel-sites` 仓库
4. 部署设置已通过 netlify.toml 自动配置
5. 点击 Deploy site
6. 获得 `https://xxx.netlify.app` 链接

## 方案三：Cloudflare Pages

1. 打开 https://dash.cloudflare.com
2. 左侧菜单选择 Workers & Pages
3. 点击 Create application → Pages → Connect to Git
4. 选择 `travel-sites` 仓库
5. 构建命令留空，输出目录填 `.`
6. 点击 Save and Deploy

## 备注

- GitHub Pages 仍可访问（https://meng-73.github.io/travel-sites/），供海外用户使用
- 以上三个平台的免费额度足够个人项目使用
- 推荐优先使用 Vercel，部署最快且国内访问速度较好
