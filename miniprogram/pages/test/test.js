//需要控制音乐的页
const app = getApp();
Page({
  data: {
    isPlay: true,
  },
  onLoad: function() {
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
  },
  controlMusic: function () { //控制音乐停止与播放
    if (this.data.isPlay) {
      app.AppMusic.pause();
      this.setData({
        isPlay: false
      });
    } else {
      app.AppMusic.play();
      this.setData({
        isPlay: true
      });
    }
  }
})