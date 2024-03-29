//detail.js
//获取应用实例
const app = getApp()

Page({
  data: {
    ctAddr:" ",
    ctCost: 100,
    ctId: 1,
    ctImg: 'https://nfcvideo.oss-cn-shanghai.aliyuncs.com/%E4%B8%8B%E8%BD%BD.jpg',
    ctPart:"腹部",
    ctReport:"没有大问题",
    ctTime:"2019-06-02",
    reportTime:"2019-06-02",
    userId:1,
    isNull: true,
  },
  backtohome: function () {
    wx.switchTab({
      url: "../historylist/historylist"
    })
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function (option) {
    var that = this
    wx.request({
      url: 'https://touchez.cn:8090/examination', // 仅为示例，并非真实的接口地址
      data: {
        "examinationOrderId": option.examinationOrderId
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        console.log(res.data)

        //判断是否检查完毕
        if (res.data.data.ctReport != null) {
          that.setData({
            isNull: false
          });
        };

        if(res.data.code==0){
          that.setData({ ctAddr: res.data.data.ctAddr})
          that.setData({ ctCost: res.data.data.ctCost }) 
          that.setData({ ctId: res.data.data.ctId }) 
          that.setData({ ctImg: res.data.data.ctImg })
          that.setData({ ctPart: res.data.data.ctPart })
          that.setData({ ctReport: res.data.data.ctReport })
          that.setData({ ctTime: res.data.data.ctTime })
          that.setData({ reportTime: res.data.data.reportTime })
          that.setData({ userId: res.data.data.userId }) 
        }else if(res.data.code==500500){
          that.setData({ msg: res.data.msg }) 
        }

        
      }
    })
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
