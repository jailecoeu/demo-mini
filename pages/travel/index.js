// pages/travel/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      "../../../images/slide/france.jpeg",
      "../../../images/slide/norway.jpeg"
    ],
    indicatorDots: false,
    autoplay: false,
    interval: 5000,
    duration: 1000,
    travels: [
      {
        "id": 1,
        "title": "法国",
        "content": "也许是《巴黎圣母院》的非典型浪漫，也许是《人间喜剧》的末世浮华；有人说她冷漠，有人说她昂贵，有人说她混乱；但时尚与浪漫共存才是巴黎最完美的写照",
        "src": "../../images/slide/france.jpeg",
        "url": "../travel/france"
      }
    ]  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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