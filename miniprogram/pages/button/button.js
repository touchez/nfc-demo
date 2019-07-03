//index.js
//获取应用实例
var SERVER_PATH = 'wss://touchez.cn:8080';
const app = getApp()


Page({
  data: {
    motto: 'Our NFC',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },

  //事件处理函数
  bindViewTap: function () {
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
    } else if (this.data.canIUse) {
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
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },

  nfcclick2: function (e) {
    /*
    wx.redirectTo({
      url: '../bus/bus',
    })
    
    */

    wx.connectSocket({
      url: SERVER_PATH,
    })

    wx.onSocketOpen(function (res) {
      console.log('envVersion', __wxConfig.envVersion);
      console.log('WebSocket连接已打开!')

      wx.sendSocketMessage({
        data: "Hello world:" + Math.round(Math.random() * 0xFFFFFF).toString()
      })

      wx.redirectTo({
        url: '../succeed/succeed',
      })
    })

    wx.onSocketMessage(function (msg) {
      console.log(msg)
    })

    wx.onSocketClose(function (res) {
      console.log('WebSocket连接已关闭!')
    })


  }
})
