// Photo mapping: destination index -> day number -> [{file, caption}]
var PHOTO_MAP = {
  0: { // 黑山+塞尔维亚
    1: [{file: "米哈伊洛大公街.jpeg", caption: "米哈伊洛大公街"}],
    2: [{file: "诺维萨德.jpg", caption: "诺维萨德"}, {file: "斯雷姆斯基卡尔洛夫奇.jpg", caption: "斯雷姆斯基卡尔洛夫奇"}],
    3: [{file: "泽蒙小镇.jpg", caption: "泽蒙小镇"}],
    5: [{file: "科托尔古城1.jpg", caption: "科托尔古城"}, {file: "科托尔古城2.jpg", caption: "科托尔古城"}],
    7: [{file: "杜米托尔国家公园.jpg", caption: "杜米托尔国家公园"}, {file: "塔拉国家公园.jpg", caption: "塔拉国家公园"}, {file: "黑湖.jpg", caption: "黑湖"}],
    8: [{file: "佩拉斯特小镇.jpg", caption: "佩拉斯特小镇"}],
    9: [{file: "圣母岩岛 & 圣乔治岛.jpg", caption: "圣母岩岛与圣乔治岛"}]
  },
  1: { // 土耳其
    1: [{file: "地下水宫.jpg", caption: "地下水宫"}, {file: "托普卡帕宫.jpg", caption: "托普卡帕宫"}],
    2: [{file: "加拉达塔.jpg", caption: "加拉达塔"}, {file: "塔克西姆广场.jpg", caption: "塔克西姆广场"}],
    4: [{file: "费特希耶岩墓.jpg", caption: "费特希耶岩墓"}],
    6: [{file: "D400.jpg", caption: "D400海岸公路"}, {file: "卡什.jpg", caption: "卡什小镇"}],
    7: [{file: "凯科瓦岛.jpg", caption: "凯科瓦岛"}, {file: "莱顿古城遗址.jpg", caption: "莱顿古城遗址"}, {file: "西梅纳城堡.png", caption: "西梅纳城堡"}],
    9: [{file: "卡帕多奇亚格雷梅.jpg", caption: "卡帕多奇亚格雷梅"}, {file: "爱情谷.jpg", caption: "爱情谷"}, {file: "乌奇希萨尔城堡.jpg", caption: "乌奇希萨尔城堡"}]
  },
  2: { // 俄罗斯
    0: [{file: "红场.jpg", caption: "红场"}],
    1: [{file: "圣瓦西里大教堂2.jpg", caption: "圣瓦西里大教堂"}, {file: "古姆百货.jpg", caption: "古姆百货"}],
    2: [{file: "莫斯科地铁巡礼·共青团站.jpg", caption: "莫斯科地铁共青团站"}, {file: "莫斯科地铁巡礼·基辅站.jpg", caption: "莫斯科地铁基辅站"}, {file: "莫斯科地铁巡礼·新庄站.jpg", caption: "莫斯科地铁新庄站"}, {file: "阿尔巴特街.jpg", caption: "阿尔巴特街"}, {file: "基督救世主大教堂.jpg", caption: "基督救世主大教堂"}, {file: "普希金故居博物馆.jpg", caption: "普希金故居博物馆"}],
    3: [{file: "列宁格勒火车站.png", caption: "列宁格勒火车站"}, {file: "涅瓦大街.jpg", caption: "涅瓦大街"}, {file: "喀山大教堂.png", caption: "喀山大教堂"}],
    4: [{file: "冬宫:埃尔米塔日博物馆.jpg", caption: "冬宫"}],
    6: [{file: "皇村.jpg", caption: "皇村"}],
    7: [{file: "滴血大教堂.jpg", caption: "滴血大教堂"}, {file: "圣以撒大教堂.jpg", caption: "圣以撒大教堂"}, {file: "彼得保罗要塞.jpg", caption: "彼得保罗要塞"}],
    8: [{file: "涅瓦河畔.jpg", caption: "涅瓦河畔"}, {file: "马林斯基剧院.jpg", caption: "马林斯基剧院"}]
  },
  3: { // 高加索
    1: [{file: "高地公园火焰塔.jpg", caption: "高地公园火焰塔"}, {file: "希尔凡沙阿王宫.jpg", caption: "希尔凡沙阿王宫"}],
    2: [{file: "亚纳尔山:燃烧的山.jpg", caption: "亚纳尔山"}, {file: "阿特什加火神庙.jpg", caption: "阿特什加火神庙"}],
    3: [{file: "舍基可汗皇宫.jpg", caption: "舍基可汗皇宫"}, {file: "舍基老城漫步.jpg", caption: "舍基老城"}],
    4: [{file: "第比利斯老城.jpg", caption: "第比利斯老城"}],
    5: [{file: "军事大道2.jpg", caption: "格鲁吉亚军事大道"}, {file: "卡兹别克圣三一教堂.jpg", caption: "卡兹别克圣三一教堂"}],
    7: [{file: "共和国广场.jpg", caption: "埃里温共和国广场"}, {file: "亚美尼亚共和国广场.jpg", caption: "亚美尼亚共和国广场"}],
    8: [{file: "深坑修道院.jpg", caption: "深坑修道院"}],
    9: [{file: "加尼神庙.jpg", caption: "加尼神庙"}, {file: "塞凡湖.jpg", caption: "塞凡湖"}]
  },
  4: {} // 中欧 - 使用 PHOTO_MAP_PLANS 按方案区分
};

// Per-plan photo mapping: dest -> plan -> day -> [{file, caption}]
// Used when different plans within the same destination have different schedules
var PHOTO_MAP_PLANS = {
  4: { // 奥地利+匈牙利+捷克
    0: { // 方案A · 奥地利+捷克经典音乐之旅
      0: [{file: "老城广场.jpg", caption: "老城广场"}, {file: "查理大桥.jpg", caption: "查理大桥"}],
      1: [{file: "布拉格城堡.jpg", caption: "布拉格城堡"}, {file: "圣维特大教堂.jpg", caption: "圣维特大教堂"}, {file: "黄金巷.jpg", caption: "黄金巷"}, {file: "小城区.jpg", caption: "小城区"}, {file: "列侬墙.jpg", caption: "列侬墙"}, {file: "卡夫卡博物馆.jpg", caption: "卡夫卡博物馆"}],
      2: [{file: "犹太区.jpg", caption: "犹太区"}, {file: "火药塔.jpg", caption: "火药塔"}, {file: "市政厅.jpg", caption: "市政厅"}, {file: "高堡.jpg", caption: "高堡"}, {file: "伏尔塔瓦河游船.jpg", caption: "伏尔塔瓦河游船"}],
      3: [{file: "CK小镇.jpg", caption: "CK小镇"}],
      4: [{file: "米拉贝尔花园.jpg", caption: "米拉贝尔花园"}, {file: "萨尔茨堡老城.jpg", caption: "萨尔茨堡老城"}],
      5: [{file: "哈尔施塔特湖区.jpg", caption: "哈尔施塔特"}],
      6: [{file: "湖区小镇格蒙登.jpg", caption: "格蒙登"}, {file: "奥尔特城堡.jpg", caption: "奥尔特城堡"}],
      7: [{file: "环城大道.jpg", caption: "环城大道"}, {file: "霍夫堡皇宫.jpg", caption: "霍夫堡皇宫"}],
      8: [{file: "美泉宫.jpg", caption: "美泉宫"}, {file: "维也纳国家歌剧院.jpg", caption: "维也纳国家歌剧院"}],
      9: [{file: "艺术史博物馆.jpg", caption: "艺术史博物馆"}, {file: "百水公寓.jpg", caption: "百水公寓"}],
      10: [{file: "圣斯蒂芬大教堂.jpg", caption: "圣斯蒂芬大教堂"}, {file: "克恩滕大街.jpg", caption: "克恩滕大街"}, {file: "多瑙河.jpg", caption: "多瑙河"}]
    },
    1: { // 方案B · 奥地利+捷克+匈牙利三国环线
      0: [{file: "老城广场.jpg", caption: "老城广场"}, {file: "查理大桥.jpg", caption: "查理大桥"}],
      1: [{file: "布拉格城堡.jpg", caption: "布拉格城堡"}, {file: "圣维特大教堂.jpg", caption: "圣维特大教堂"}, {file: "黄金巷.jpg", caption: "黄金巷"}, {file: "犹太区.jpg", caption: "犹太区"}],
      2: [{file: "CK小镇.jpg", caption: "CK小镇"}],
      3: [{file: "米拉贝尔花园.jpg", caption: "米拉贝尔花园"}, {file: "萨尔茨堡老城.jpg", caption: "萨尔茨堡老城"}],
      4: [{file: "哈尔施塔特湖区.jpg", caption: "哈尔施塔特"}, {file: "圣沃尔夫冈.jpg", caption: "圣沃尔夫冈"}, {file: "夏夫山小火车.jpg", caption: "夏夫山小火车"}],
      5: [{file: "环城大道.jpg", caption: "环城大道"}, {file: "霍夫堡皇宫.jpg", caption: "霍夫堡皇宫"}],
      6: [{file: "美泉宫.jpg", caption: "美泉宫"}, {file: "维也纳国家歌剧院.jpg", caption: "维也纳国家歌剧院"}],
      7: [{file: "议会大厦.jpg", caption: "匈牙利国会大厦"}],
      8: [{file: "布达城堡.jpg", caption: "布达城堡"}, {file: "渔人堡.jpg", caption: "渔人堡"}],
      10: [{file: "多瑙河.jpg", caption: "多瑙河"}]
    }
  }
};

// Attraction names to bold in text (sorted by length, longest first for proper replacement)
var ATTRACTION_NAMES = [
  "莫斯科地铁巡礼·共青团站", "莫斯科地铁巡礼·基辅站", "莫斯科地铁巡礼·新庄站",
  "卡兹别克圣三一教堂", "基督救世主大教堂", "普希金故居博物馆",
  "亚美尼亚共和国广场", "冬宫（埃尔米塔日博物馆）", "冬宫:埃尔米塔日博物馆",
  "斯雷姆斯基卡尔洛夫奇", "圣母岩岛与圣乔治岛", "卡帕多奇亚格雷梅",
  "杜米托尔国家公园", "费特希耶岩墓", "埃里温共和国广场",
  "阿特什加火神庙", "舍基可汗皇宫", "高地公园火焰塔",
  "希尔凡沙阿王宫", "莱顿古城遗址", "塔克西姆广场",
  "彼得保罗要塞", "马林斯基剧院", "圣瓦西里大教堂",
  "滴血大教堂", "圣以撒大教堂", "列宁格勒火车站",
  "乌奇希萨尔城堡", "凯科瓦岛", "西梅纳城堡",
  "佩拉斯特小镇", "塔拉国家公园", "科托尔古城",
  "泽蒙小镇", "诺维萨德", "红场", "古姆百货",
  "阿尔巴特街", "涅瓦大街", "喀山大教堂", "皇村",
  "涅瓦河畔", "地下水宫", "托普卡帕宫", "加拉达塔",
  "D400海岸公路", "卡什小镇", "爱情谷", "黑湖",
  "深坑修道院", "加尼神庙", "塞凡湖", "舍基老城",
  "第比利斯老城", "格鲁吉亚军事大道", "亚纳尔山",
  "米哈伊洛大公街", "冬宫", "叶卡捷琳娜宫",
  "夏宫", "克里姆林宫", "卡莱梅格丹城堡", "圣萨瓦大教堂",
  "蓝色清真寺", "圣索菲亚大教堂", "大巴扎", "博斯普鲁斯海峡",
  "滑翔伞", "蓝礁湖", "阿斯潘多斯剧场", "棉花堡",
  "以弗所古城", "美泉宫", "金色大厅", "查理大桥",
  "布拉格城堡", "渔人堡", "布达城堡", "哈尔施塔特",
  "圣斯蒂芬大教堂", "美景宫", "百水公寓", "CK小镇",
  "萨尔茨堡", "多瑙河", "伏尔塔瓦河",
  // 中欧新增景点
  "匈牙利国会大厦", "塞切尼温泉", "中央市场大厅",
  "圣维特大教堂", "维也纳国家歌剧院", "维也纳森林",
  "圣沃尔夫冈", "米拉贝尔花园", "莫扎特出生地",
  "萨尔茨堡城堡", "霍夫堡皇宫", "茜茜公主博物馆",
  "艺术史博物馆", "老城广场", "天文钟",
  "黄金巷", "列侬墙", "CK城堡",
  "环城大道", "克恩滕大街", "多瑙河塔",
  "马加什教堂", "英雄广场", "自由桥",
  "盖勒特山", "格蒙登", "特劳恩湖", "奥尔特城堡",
  "凯旋门", "市政厅", "火药塔", "高堡", "犹太区",
  "瓦茨街", "皇村", "黑山共和国"
];
