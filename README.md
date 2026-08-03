# 旅行站点合集

将 `travel-planner` 和 `travel-itinerary` 两个仓库合并为一个 GitHub Pages 站点。

## 目录结构

```
travel-sites/
├── .nojekyll                 # 禁用 Jekyll 处理
├── index.html                # 入口导航页
├── README.md                 # 本文件
├── travel-planner/           # 旅行规划站点
│   ├── index.html
│   └── assets/
│       ├── photo_map.js
│       ├── travel_data.js
│       ├── travel_data.json
│       └── photos/           # 图片文件（需下载）
└── travel-itinerary/         # 行程方案站点
    └── index.html
```

## 部署后访问地址

- 导航页：`https://meng-73.github.io/travel-sites/`
- 旅行规划：`https://meng-73.github.io/travel-sites/travel-planner/`
- 行程方案：`https://meng-73.github.io/travel-sites/travel-itinerary/`

## 图片文件说明

`travel-planner/assets/photos/` 目录下的图片文件未包含在本仓库中（体积过大）。

有两种方式获取：

### 方式一：运行下载脚本（推荐）

在项目根目录执行：

```bash
bash download-photos.sh
```

脚本会自动从原仓库下载所有图片到 `travel-planner/assets/photos/` 目录。

### 方式二：手动复制

从原仓库 `meng-73/travel-planner` 的 `assets/photos/` 目录手动复制图片文件到本仓库对应位置。

## 部署步骤

1. 在 GitHub 创建新仓库，命名为 `travel-sites`
2. 将本目录所有文件推送到仓库 `main` 分支
3. 运行 `bash download-photos.sh` 下载图片（或手动复制）
4. 将图片一并提交推送
5. 进入仓库 Settings > Pages，选择 `main` 分支作为发布源
6. 等待几分钟后即可通过 `https://meng-73.github.io/travel-sites/` 访问
