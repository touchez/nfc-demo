// pages/smart_home/smart_home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    lighthidden: true,
    light_offhidden: true,
    airhidden: true,
    air_offhidden: true,
    wifihidden: true,
    phidden: true,
    comhidden: true
  },
  // 开灯
  goblance1: function (event) {
    this.setData({
      lighthidden: false
    })
  }, 

//关灯
  goblance2: function (event) {
    this.setData({
      light_offhidden: false
    })
  },
  //开空调
  goblance3: function (event) {
    this.setData({
      airhidden: false
    })
  },
  //关空调
  goblance4: function (event) {
    this.setData({
      air_offhidden: false
    })
  },
  //连wifi
  goblance5: function (event) {
    this.setData({
      wifihidden: false
    })
  },
  //连wifi
  goblance6: function (event) {
    this.setData({
      phidden: false
    })
  },
  //连wifi
  goblance7: function (event) {
    this.setData({
      comhidden: false
    })
  },

  confirm: function () {
    this.setData({
      lighthidden: true,
      light_offhidden: true,
      airhidden: true,
      air_offhidden: true,
      wifihidden: true,
      phidden: true,
      comhidden: true
    });
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