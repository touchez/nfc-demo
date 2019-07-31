// 导入socket.io小程序版包
import io from 'utils/socket.io.xcx'

// 使用IO创建socket实例，本实例使用本地socket.io服务器， 请根据根据实际情况修改IP，记得设置userId的值
let socket = io('http://127.0.0.1:9090?userId=1')
//app.js
var SERVER_PATH = 'wss://47.100.35.6:8080';
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
    /*
    wx.connectSocket({
      url: SERVER_PATH,
    })

    wx.onSocketOpen(function (res) {
      console.log('envVersion', __wxConfig.envVersion);
      console.log('WebSocket连接已打开!')

      wx.sendSocketMessage({
        data: "Hello world:" + Math.round(Math.random() * 0xFFFFFF).toString()
      })
    })

    wx.onSocketMessage(function (msg) {
      console.log(msg)
    })

    wx.onSocketClose(function (res) {
      console.log('WebSocket连接已关闭!')
    })
    */
    socket.on('connect', function () {
      console.log('连上了');
    });

    socket.on('jump', function (data) {
      //可以在此处进行相应的跳转操作
      console.log('进行跳转');
    });

    socket.on('disconnect', function () {
      console.log('与socketIO服务器断开连接');
    });
  },
  globalData: {
    userInfo: null,
    userId: 1
  }
})
