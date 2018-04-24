// pages/index/house.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bookDetail: {
      title: "",
      content: ""
    },
    banner: "../../../images/slide/home.jpg",
    title: "把家慢慢打磨成喜欢的样子，6本家居书里的生活美学",
    summary: "",
    detail: [
      {
        "id": 1,
        "cover": "../../images/book/home1.jpg",
        "title": "住宅设计解剖书",
        "score": "7.8",
        "author": "増田奏 著 / 赵可 译 ",
        "publisher": "南海出版公司 / 2013-9-1",
        "desc": "日本建筑师增田奏写的室内设计入门书。作为一本图解书，本书配了550 幅插图，帮助了解关于住宅的方方面面，从玄关到浴室。文字风趣，小标题读来都很可爱。设计是为人服务的，室内设计更是，所以不仅从业者可看，个人更要用心——住宅即生活。"
      }, {
        "id": 2,
        "cover": "../../images/book/home2.jpg",
        "title": "小而美的家",
        "score": "7.3",
        "author": "伊礼智 著 / 董方 译 / ",
        "publisher": "南海出版公司 / 2015-7-1",
        "desc": "作者伊礼智是日本知名建筑师，擅长小户型住宅设计。他结合工作实例，提出了70个小户型设计法则，从空间布局到家具方案，都有涉及。图片包括实景照片、建筑设计图、手绘平面图等，多角度呈现。案例虽多是日式独栋小楼，但空间规划、功能设计等都有独到之处。对小户型居者来说，亦能从中得到灵感。"
      }, {
        "id": 3,
        "cover": "../../images/book/home3.jpg",
        "title": "设计师谈家居色彩搭配",
        "score": "7.8",
        "author": "沈毅 著 / ",
        "publisher": "清华大学出版社 / 2013-1",
        "desc": "家居色彩是决定家装品格的关键之一。这本书偏实践，介绍了色彩原理，总结空间配色的常见印象，也有色彩案例。因为具体而集中，对有明确需求的读者来说，很有用。"
      }, {
        "id": 4,
        "cover": "../../images/book/home4.jpg",
        "title": "小家，越住越大",
        "score": "8.6",
        "author": "逯薇 著",
        "publisher": "中信出版社 / 2016-5 - 20",
        "desc": "作者是知名房产公司的建筑师，设计、绘制过众多户型图，这个绘本汇集了她在家居方面的经验与思考。“住商”，是本书的一个新提法。房子的好坏，不由大小决定，而取决于居住者的住商。这也是书名之意。从小到大的诀窍在于收纳？或许没这么简单。不过，如有收纳方面的困扰，可以看看此书。"
      }, {
        "id": 5,
        "cover": "../../images/book/home5.jpg",
        "title": "筑巢记",
        "score": "7.4",
        "author": "[日]岩崎朋子 著 / 徐凯蒂 译 ",
        "publisher": "九州出版社 / 2016-6",
        "desc": "又一位日本作者，也偏日式生活美学。作者岩崎朋子喜欢木质家具和手工品，她为此结束租房生涯，买下一间42年历史的老公寓，亲自动手翻修，花了很久很久，一点点打磨出自己想要的家，如燕子筑巢。能够做着想做的事，把生活慢慢修正成喜欢的样子，奢侈又幸运。"
      }, {
        "id": 6,
        "cover": "../../images/book/home6.jpg",
        "title": "这样装修不后悔（插图修订版）",
        "score": "8.5",
        "author": "姥姥 著 ",
        "publisher": "北京联合出版公司·后浪出版公司 / 2014-5",
        "desc": "接地气的、能指导实操的家庭装修书。有诚意的是，在出版简体版时，作者更新内容，几近重写，又将部分案例更换为大陆的家装案例。副标题：百笔血泪经验告诉你的装修早知道。对普通家庭来说，装修算是大工程了，珍贵的早知道。"
      }
    ],
    booklist: [
      {
        "id": 0,
        "thumb": [
          {
            "img": "../../../images/book/design1.jpg"
          },
          {
            "img": "../../../images/book/design2.jpg"
          },
          {
            "img": "../../../images/book/design3.jpg"
          }
        ],
        "title": "什么才是好设计？这里有7本写给大家看的设计书",
        "subtitle": "人人都是设计师",
        "discount": "+4",
        "tag": ""
      }
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(this.data.detail[options.id])
    this.setData({
      banner: this.data.banner,
      title: this.data.title,
      summary: this.data.summary,
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