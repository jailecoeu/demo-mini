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
    banner: "../../../images/slide/home.jpg",
    title: "深入前端",
    summary: "",
    detail: [
      {
        "id": 1,
        "cover": "../../images/thumbs/fe.jpg",
        "title": "高效前端：Web高效编程与优化实践",
        "author": "",
        "publisher": "",
        "desc": ""
      }, {
        "id": 2,
        "cover": "../../images/thumbs/html5css3.jpg",
        "title": "HTML5与CSS3权威指南",
        "author": " ",
        "publisher": "",
        "desc": ""
      }, {
        "id": 3,
        "cover": "../../images/thumbs/webfe.jpg",
        "title": "编写高质量代码：Web前端开发修炼之道",
        "author": " ",
        "publisher": "",
        "desc": ""
      }, {
        "id": 4,
        "cover": "../../images/thumbs/es6.jpg",
        "title": "ES6标准入门",
        "author": "  ",
        "publisher": "",
        "desc": ""
      }, {
        "id": 5,
        "cover": "../../images/thumbs/html5.jpg",
        "title": "What is HTML5?",
        "author": " ",
        "publisher": "",
        "desc": ""
      }, {
        "id": 6,
        "cover": "../../images/thumbs/js.jpg",
        "title": "JavaScript权威指南",
        "author": " ",
        "publisher": "",
        "desc": ""
      }, {
        "id": 7,
        "cover": "../../images/thumbs/jshigh.jpg",
        "title": "JavaScript高级程序设计",
        "author": " ",
        "publisher": ""
      }, {
        "id": 8,
        "cover": "../../images/thumbs/javascript.jpg",
        "title": "JavaScript王者归来",
        "author": " ",
        "publisher": ""
      }, {
        "id": 9,
        "cover": "../../images/thumbs/html5guide.jpg",
        "title": "HTML5权威指南",
        "author": " ",
        "publisher": ""
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