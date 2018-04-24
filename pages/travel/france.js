//import subjectsUtil from '../../utils/util'
var subjectsUtil = require('../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cities:[
      {
        "id":1,
        "title":"巴黎 Paris",
        "content":"也许是《巴黎圣母院》的非典型浪漫，也许是《人间喜剧》的末世浮华；有人说她冷漠，有人说她昂贵，有人说她混乱；但时尚与浪漫共存才是巴黎最完美的写照。",
        "src":"../../images/travel/paris.webp"
      },
      {
        "id": 2,
        "title": "普罗旺斯 Provence",
        "content": "普罗旺斯晨曦：日出东方，红霞万里，花瓣上的露珠折射朝阳，而散发着五光十色的迷人景致。一阵风吹过伴着花香，颤颤巍巍的滴下融入花海！带着帐篷看暮色再看晨曦，美好时光尽收记忆的画面里。",
        "src": "../../images/travel/provence.webp"
      },
      {
        "id": 3,
        "title": "马赛 Marseille",
        "content": "地中海未来的中心，永远的湛蓝 永远的粗狂。",
        "src": "../../images/travel/marseille.webp"
      },
      {
        "id": 4,
        "title": "尼斯 Nice",
        "content": "尼斯是全欧洲最具魅力的蔚蓝海岸，她将各种生活乐趣巧妙地融合在各式各样的博物馆、美术馆、喷水池，甚至鲜花和棕榈树丛间。",
        "src": "../../images/travel/nice.webp"
      },
      {
        "id": 5,
        "title": "里昂 Lyon",
        "content": "里昂保留着文艺复兴时代最精致的建筑群，曲径通幽的狭小巷弄、隐匿在房屋间的串廊、活泼轻快的码头、半岛上的宽广广场，所有这一切都让人仿佛走在悠久的历史中。",
        "src": "../../images/travel/lyon.webp"
      },
      {
        "id": 6,
        "title": "阿维尼翁 Avignon",
        "content": "风情万种的阿维尼翁，呈现给世人的是多样的建筑，多元的文化，多彩的生活。",
        "src": "../../images/travel/avignon.webp"
      },
      {
        "id": 7,
        "title": "阿尔萨斯 Alsace",
        "content": "不同于法国其他地方的气质，淡薄、质朴中带着几分豪爽，顺着阿尔萨斯乡间小路一头扎进去，体味只属于那里的美食、美酒和生活态度。",
        "src": "../../images/travel/alsace.webp"
      },
      {
        "id": 8,
        "title": "戛纳 Cannes",
        "content": "戛纳小城依偎在青山脚下，濒临地中海之滨，占据了得天独厚的地理位置。漫步城中，白色的楼房、蔚蓝的大海，以及一排排高大翠绿的棕榈树相互映衬，构成一幅美丽的自然风光。",
        "src": "../../images/travel/cannes.webp"
      },
      {
        "id": 9,
        "title": "波尔多 Bordeaux",
        "content": "法国西南部城市、港口。位于加龙河下游，距大西洋98公里。1870、1914和1940年曾为法国政府所在地。",
        "src": "../../images/travel/bordeaux.webp"
      },
      {
        "id": 10,
        "title": "兰斯 Reims",
        "content": "兰斯，法国东北部历史名城，离巴黎130公里，位于巴黎盆地东北部埃纳河支流韦斯勒河畔，是香槟-阿登大区马恩省的中心城市，属法国东北部交通枢纽。",
        "src": "../../images/travel/reims.webp"
      },
      {
        "id": 11,
        "title": "诺曼底 Normandie",
        "content": "法国西北部著名的历史和文化大区，面积约3万平方公里，它北临英吉利海峡，与英国遥遥相望，海岸线全长600公里。",
        "src": "../../images/travel/normandie.webp"
      },
      {
        "id": 12,
        "title": "斯特拉斯堡 Strasbourg",
        "content": "与德国隔莱茵河相望，从中世纪保留至今的大量建筑，让这座城市华美而悠久。",
        "src": "../../images/travel/strasbourg.webp"
      },
      {
        "id": 13,
        "title": "第戎 Dijon",
        "content": "法国东部城市，勃艮第运河河港，科多尔省的省会、勃艮第大区首府。",
        "src": "../../images/travel/dijon.webp"
      },
      {
        "id": 14,
        "title": "图卢兹 Toulouse",
        "content": "位于法国西南部加龙河畔，介乎大西洋和地中海之间。。",
        "src": "../../images/travel/toulouse.webp"
      },
      {
        "id": 15,
        "title": "特鲁瓦 Troyes",
        "content": "位于法国香槟-阿登大区塞纳河畔，是奥布省的首府。",
        "src": "../../images/travel/troyes.webp"
      },
      {
        "id": 16,
        "title": "蒙彼利埃 Montpellier",
        "content": "蒙彼利埃位于法国南部，地中海沿岸，经莱兹河与海相通，是朗格多克-鲁西永大区的首府和埃罗省省会，是法国第六大城市，也是法国西南部最重要的商业、工业中心。",
        "src": "../../images/travel/montpellier.webp"
      },
      {
        "id": 17,
        "title": "科西嘉岛 Corsica",
        "content": "科西嘉岛是地中海第四大岛。位于法兰西共和国大陆东南，南隔博尼法乔海峡与意大利撒丁岛相望。",
        "src": "../../images/travel/corsica.webp"
      },
      {
        "id": 18,
        "title": "奥尔良 Orleanss",
        "content": "法国中部城市，卢瓦雷省省会。在巴黎西南124公里，卢瓦尔河畔。人口约10.3万，包括郊区22万（1982）。",
        "src": "../../images/travel/orleanss.webp"
      },
      {
        "id": 19,
        "title": "里尔 Lille",
        "content": "法国北部最大的城市，北部-加莱海峡大区首府和诺尔省省会。",
        "src": "../../images/travel/lille.webp"
      },
      {
        "id": 20,
        "title": "布列塔尼 Bretagne",
        "content": "布列塔尼看圣米歇尔山水下城堡被大片沙岸包围，涨潮时才成为海岛。",
        "src": "../../images/travel/bretagne.webp"
      },
      {
        "id": 21,
        "title": "雷恩 Rennes",
        "content": "法国西北部城市，伊勒-维莱讷省省会。位于伊勒河和维莱讷河汇合处的雷恩盆地内。",
        "src": "../../images/travel/rennes.webp"
      },
      {
        "id": 22,
        "title": "南特 Nantes",
        "content": "法国西北部重要城市，城市主体座落于卢瓦尔河下游北岸，距入海口（卢瓦尔河汇入比斯开湾）约50公里。",
        "src": "../../images/travel/nantes.webp"
      },
      {
        "id": 23,
        "title": "昂热 Angers",
        "content": "昂热市矗立于列入联合国教科文组织世界文化与历史遗产的卢瓦尔河谷西边，是安茹省首府。",
        "src": "../../images/travel/angers.webp"
      },
      {
        "id": 24,
        "title": "罗纳阿尔卑斯大区 Rhone-Alpes",
        "content": "罗讷-阿尔卑斯是法国东南部一个大区的名称，东与瑞士及意大利接壤。下辖安省、阿尔代什省、德龙省、伊泽尔省、卢瓦尔省、罗讷省、萨瓦省、上萨瓦省。",
        "src": "../../images/travel/rhone-Alpes.webp"
      },
      {
        "id": 25,
        "title": "鲁昂 Rouen",
        "content": "位于法国西北部，是上诺曼底大区的首府。历史上，鲁昂是中世纪欧洲最大最繁荣的城市之一。",
        "src": "../../images/travel/rouen.webp"
      },
      {
        "id": 26,
        "title": "卡昂 Caen",
        "content": "卡昂，又译冈城。法国北部城市，靠近拉芒什海峡（英吉利海峡）的港市，下诺曼底大区（Région Basse Normandie）和卡尔瓦多斯省（Calvados，14号省）的省会。",
        "src": "../../images/travel/caen.webp"
      },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // this.getData()
  },
  getData: function () {
    var page = this;
    wx.request({
      url: "https://api.douban.com/v2/movie/coming_soon?apikey=0b2bdeda43b5688921839c8ecb20399b",
      header: {
        "Content-Type": "application/text"
      },
      data: { count: 50 },
      success: function (res) {
        var subjects = res.data.subjects;
        subjectsUtil.processSubjects(subjects);
        page.setData({ "movies": subjects, "loadingHidden": true });
      }
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})