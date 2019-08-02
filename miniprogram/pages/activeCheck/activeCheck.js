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
    type: 'exsanguinate',
    result: '正常'
  },
  backtohome: function () {
    wx.switchTab({
      url: "../activity/activity"
    })
  },
  checkActive: function() {
    let that = this;

    wx.request({
      url: api.checkActiveUrl,
      data: {
        userId: app.globalData.userId,
        type: that.data.type
      },
      success: function (res) {
        console.log('checkActiveUrl success');
        let data = res.data;
        console.log(data);

        if (data.code == 0) {
          that.setData({
            valid: true,
            result: data.data
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
    if (options.type != null) {
      that.setData({
        type: options.type
      });
      // that.data.type = options.type;
      console.log(that.data.type);
    }
    
    that.checkActive();
  }
})