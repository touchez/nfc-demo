//index.js
//获取应用实例
const app = getApp()
// 获取服务器接口地址
const api = require('../../config/config.js');

Page({
  data: {
  },
  onLoad: function () {
    wx.request({
      url: api.openLock,
      success:function (res) {
        console.log(res);
      }
    });
  }
})
