//list.js
//获取应用实例
const app = getApp()

Page({
  data: {
    doctor: []
  },
  backtohome: function() {
    wx.redirectTo({
      url: "../activity/activity"
    })
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function() {
    var that = this
    wx.request({
      url: 'https://touchez.cn:8090/medicalRecord/web/new', // 仅为示例，并非真实的接口地址
      data: {
        userId: app.globalData.userId,
        departmentId:2,
        doctorId:2
      },
      method: "post",
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        console.log(res.data)
        that.setData({
          doctor: res.data.data
        })
      }
    }),
      wx.request({
        url: 'https://touchez.cn:8090/pyapi/callow', // 仅为示例，并非真实的接口地址
        method: "get",
        header: {
          'content-type': 'application/json' // 默认值
        },
        success(res) {
          console.log(res.data)
        }
      })
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