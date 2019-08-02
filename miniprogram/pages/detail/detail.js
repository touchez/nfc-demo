//detail.js
//获取应用实例
const app = getApp()

Page({
  data: {
    keshi: "",
    pnum: 26,
    time: 0,
    msg: "success"

  },
  backtohome: function() {
    wx.switchTab({
      url: "../activity/activity"
    })
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function(option) {
    var that = this
    wx.request({
      url: 'https://touchez.cn:8090/guahao', // 仅为示例，并非真实的接口地址
      data: {
        "userId": app.globalData.userId,
        "departmentId": option.departmentid * 1

      },
      method: "post",
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        console.log(res.data)
        if (res.data.code == 0) {
          that.setData({
            keshi: res.data.data.departmentName
          })
          that.setData({
            pnum: res.data.data.order
          })
          that.setData({
            time: 5 * res.data.data.order
          })

          //把挂号id存在缓存中
          wx.setStorageSync('guahaoId', res.data.data.guahaoId);
          
        } else if (res.data.code == 500500) {
          that.setData({
            msg: res.data.msg
          })
        }


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