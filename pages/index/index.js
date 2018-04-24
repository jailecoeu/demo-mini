//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    imgUrls: [
      '../../../images/slide/design.jpg',
      '../../../images/slide/home.jpg'
    ],
    indicatorDots: false,
    autoplay: false,
    interval: 5000,
    duration: 1000,
    frontend: [{
      "id": 1,
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
      "title": "深入前端",
      "subtitle": "I am a coder",
      "discount": "+3",
      "tag": ""
    }],
    design: [
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
    house: [{
      "id": 1,
      "thumb": [
        {
          "img": "../../../images/book/home1.jpg"
        },
        {
          "img": "../../../images/book/home2.jpg"
        },
        {
          "img": "../../../images/book/home3.jpg"
        }
      ],
      "title": "把家慢慢打磨成喜欢的样子，6本家居书里的生活美学",
      "subtitle": "住宅即生活",
      "discount": "+3",
      "tag": ""
    }
    ],
    weeks: [
      {
        "id": 0,
        "img": "../../../images/books/fe.jpg",
        "title": "高效前端：Web高效编程与优化实践",
        "author": "李银城",
        "publish": "机械工业出版社",
        "pubtime": "2018-01-01",
        "desc": "全书以问题为导向，例如有些页面为什么打开会比较卡顿，从怎么解决这种问题，有哪些方法，这些方法的优缺点是什么，一步步由浅入深地分析和解决问题。学会解决问题，比学会知识更为重要。"
      }
    ],
    books: [
      {
        "id": 0,
        "thumb": "../../../images/books/500website.jpg",
        "name": "高效前端：Web高效编程与优化实践",
        "author": "hang",
        "tag": "设计"
      }, {
        "id": 1,
        "thumb": "../../../images/books/css.jpg",
        "name": "高效前端：Web高效编程与优化实践",
        "author": "hang",
        "tag": "设计"
      }, {
        "id": 2,
        "thumb": "../../../images/books/designbook.jpg",
        "name": "高效前端：Web高效编程与优化实践",
        "author": "hang",
        "tag": "设计"
      }
    ]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
