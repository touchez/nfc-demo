// miniprogram/pages/daoyouji2/daoyouji2.js
// 获取服务器接口地址
const api = require('../../config/config.js');
//获取应用实例
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    // createDate: "",
    // poster: "",//图片地址
    // name: "",
    // author: "",
    // src: "",//音频地址，
    // title: "",
    // content: "",
    guideMachines: [],
    auduioSrc: "",
    isPlay: true,
  },

  getCloudData: function (guideMachineName) {
    let that = this;

    wx.request({
      url: api.getGuideMedicineData,
      data: {
        guideMachineName: guideMachineName
      },
      success: function(res) {
        console.log('get CloudData success');
        console.log(res.data);
        that.setData({ 
          guideMachines: res.data.data,
          auduioSrc: res.data.data[0].src,
        })

        that.setAppMusic(res.data.data[0].src);
      }
    })
  },

  setAppMusic:function (src) {
    console.log(this.data.guideMachines);
    console.log(this.data.auduioSrc);
    this.AppMusic = wx.createInnerAudioContext();
    this.AppMusic.autoplay = true;
    this.AppMusic.src = src;
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

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //需要传入guideMachineName
    this.getCloudData(options.guideMachineName);
  },
})