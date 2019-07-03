//list.js
//获取应用实例
const app = getApp()

Page({
  data: {
    createDate: "2019-06-03 10:40:27",
    poster:"../../image/ms.png",//图片地址
    name:"蒙娜丽莎的微笑简介",
    author:"云游中心",
    src:"../../audio/ma.mp3"//音频地址，
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function (option) {
    var that = this
    
   /* wx.request({
      url: 'http://47.100.35.6:8080/medicalRecord', // 仅为示例，并非真实的接口地址
      data: {
        medicalRecordId: option.medicalRecordId
        
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        console.log(res.data)

        //that.setData({ jianchalist: res.data.data.examinationOrder })

        
      }
    })*/
  }, onReady: function () {
    this.myaudio = wx.createAudioContext('daoyouji');
    this.myaudio.play();
  
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
