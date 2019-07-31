// miniprogram/pages/checkReport/checkReport.js
// 获取服务器接口地址
const api = require('../../config/config.js');
// 获取app应用实例
const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    examinationResult: ""
  },

  getCheckReport: function() {
    let that = this;

    wx.request({
      url: api.getCheckReportUrl,
      data: {
        Id: 1
      },
      success: function (res) {
        console.log('get checkReport success');
        let data = res.data;
        console.log(data);

        if (data.code == 0) {
          that.setData({
            examinationResult: data.data.examinationResult
          })
        }else {

        }
      },
      error: function(err) {
        console.log(err);
      }

    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this;
    that.getCheckReport();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log('current page is onReady');
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log('current page is onShow');
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '病历记录',
      path: '/pages/historylist/historylist',
      imageUrl: '/images/1.jpg',
      success: function (res) {
        // 转发成功
        console.log('转发成功');
      },
      fail: function (res) {
        // 转发失败
        console.log('转发失败')
      }
    }
  }
})