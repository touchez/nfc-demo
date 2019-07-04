//list.js
//获取应用实例
const app = getApp()

Page({
  data: {
    createDate: "2019-06-03 10:40:27",
    poster: "https://i.loli.net/2019/07/04/5d1d741a63cd573725.png",//图片地址
    name: "蒙娜丽莎的微笑简介",
    author: "云游中心",
    src: "../../audio/ma.mp3",//音频地址，
    isPlay: true,
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function (option) {
    this.AppMusic = wx.createInnerAudioContext();
    this.AppMusic.autoplay = true;
    this.AppMusic.src = 'audio/ma.mp3';
    this.AppMusic.loop = true;
    this.AppMusic.volume = 0.8; //音乐音量
    this.AppMusic.onPlay(() => {
      console.log('开始播放')
    })
    this.AppMusic.onError((res) => {
      console.log(res.errMsg)
      console.log(res.errCode)
    });
  }, onReady: function () {
    // this.myaudio = wx.createAudioContext('daoyouji');
    // this.myaudio.play();

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
