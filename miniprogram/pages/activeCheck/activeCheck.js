// miniprogram/pages/activeCheck/activeCheck.js
// 获取服务器接口地址
const api = require('../../config/config.js');
// 获取app应用实例
const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    valid: false,
    type: 'ct'
  },

  checkActive: function() {
    let that = this;

    wx.request({
      url: api.checkActiveUrl,
      data: {
        userId: 13,
        type: that.data.type
      },
      success: function (res) {
        console.log('checkActiveUrl success');
        let data = res.data;
        console.log(data);

        if (data.code == 0) {
          that.setData({
            valid: true
          })
        } else {
          that.setData({
            valid: false
          })
        }
      },
      error: function (err) {
        console.log(err);
      }

    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
    
    let that = this;
    // get type from url
    that.data.type = options.type;
    that.checkActive();
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