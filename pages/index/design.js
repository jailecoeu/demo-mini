// pages/index/design.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bookDetail: {
      title: "",
      content: ""
    },
    booklist: [
      {
        "id": 0,
        "thumb": [
          {
            "img": "../../../images/thumbs/fe.jpg"
          },
          {
            "img": "../../../images/thumbs/html5css3.jpg"
          },
          {
            "img": "../../../images/thumbs/webfe.jpg"
          }
        ],
        "title": "什么才是好设计？这里有7本写给大家看的设计书",
        "subtitle": "人人都是设计师",
        "discount": "+4",
        "tag": ""
      }
    ],
    detail: [
      {
        "id": 1,
        "cover": "../../images/book/design.jpg",
        "title": "设计中的设计",
        "score": "8.6",
        "author": "[日]原研哉 著 / 朱锷 译 ",
        "publisher": "山东人民出版社 / 2006-11",
        "desc": "原研哉，日本平面设计大师，无印良品艺术总监，也是日本设计界的一面旗帜。《设计中的设计》是他的代表作之一，它想回答的问题是，“设计到底是什么？”这本书更像是方法论的探讨，“如何更容易了解？如何令人更加舒适？如何更为简单的传达？如何才能让人感动？”它能让你开始思考设计这件事的意义在哪里。"
      }, {
        "id": 2,
        "cover": "../../images/book/design1.jpg",
        "title": "设计入门教室：设计的基本规则",
        "score": "9.1",
        "author": "坂本伸二 著 / 刘庆 译 ",
        "publisher": "中信出版社 / 2016-9",
        "desc": "这本书的作者坂本伸二是日本的一位独立设计师。这本书汇集了他长期在设计第一线的实操经验，从7个常碰到的设计基础知识，到设计制作的流程规划，面面俱到。它把读者带到设计现场，对初学者来说，是非常好用的设计入门书。。"
      }, {
        "id": 3,
        "cover": "../../images/book/design2.jpg",
        "title": "写给大家看的设计书（第4版）",
        "score": "8.9",
        "author": "RobinWilliams 著 / 苏金国、李盼 译 ",
        "publisher": "人民邮电出版社 / 2016-1 ",
        "desc": "这本书是常年的畅销经典，是设计大师罗宾·威廉姆斯的一本代表作。事实上，她不仅仅是设计大师，也是技术专家，图灵社区曾对她做过专访。本书面对所有零基础的爱好者，用简洁幽默的语言把设计这件事变简单。她还把优秀设计的秘诀归纳为对比、重复、对齐和亲密性四条简单易行的法则中。"
      }, {
        "id": 4,
        "cover": "../../images/book/design3.jpg",
        "title": "瞬间打动人心的设计",
        "score": "6.8",
        "author": " [美]奇普•基德（ChipKidd） 著 / 王喆 译 ",
        "publisher": "中信出版社 / 2016-10",
        "desc": "这本书属于“TED思想的力量”系列，是世界知名的设计师奇普·基德写给普通人的一本审美启蒙读物。比起手把手的实际操作，作者更想教会大家一种新的思维方式。什么时候需要准确表达？什么时候可以保持神秘？这位和村上春树、帕慕克等作家合作过的平面设计师为大家揭示了他选择设计方案背后的秘密。"
      }, {
        "id": 5,
        "cover": "../../images/book/design4.jpg",
        "title": "为什么设计",
        "score": "8.1",
        "author": "[日]原研哉、阿部雅世 著 / 朱锷 译 ",
        "publisher": "山东人民出版社 / 2010-5",
        "desc": "本书是原研哉和另一位设计大师阿部雅世的对话集。他们一个居住在东京，一个在柏林，结合自己的想法和实践经验，进行了一场精彩讨论，“设计是启发人思考的强大动力。”不仅是关于设计的书，也是关于生活和教育的思考读本。"
      }, {
        "id": 6,
        "cover": "../../images/book/design5.jpg",
        "title": "人人都是设计师",
        "score": "8.0",
        "author": "[美]RebeccaHagen、[美]KimGolombisky 著 / 王沛 译 ",
        "publisher": "人民邮电出版社 / 2016-9",
        "desc": "每个人都生活在一种视觉文化之中，虽然不一定人人都要去做设计师，但作者更想让所有人都能更能理解视觉文化中的语法。为什么有些设计能够成为经典，而有些设计以打破常规来取胜？作者讲了设计中的元素、原则和理论，也单独讲了外行容易犯的错误，比如，“把每样东西都居中”。"
      }, {
        "id": 7,
        "cover": "../../images/book/design6.jpg",
        "title": "写给大家看的色彩书1",
        "score": "8.1",
        "author": "梁景红（Relen）编著 著 ",
        "publisher": "人民邮电出版社 / 2011-1-1",
        "desc": "配色是设计中一个重要环节，如果色彩没有被正确地表达，再好的设计理念也不会产生好的效果。这本书就专注于方便上手的配色理念，详细讲解了色彩设计的五大原则和两大关键词选色法则，行文简练易懂，是本不错的色彩设计入门书。"
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(this.data.detail[options.id])
    this.setData({
      bookDetail: {
        cover: this.data.detail[options.id].cover,
        title: this.data.detail[options.id].title,
        score: this.data.detail[options.id].score,
        author: this.data.detail[options.id].author,
        publisher: this.data.detail[options.id].publisher,
        desc: this.data.detail[options.id].desc
      }
    })
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