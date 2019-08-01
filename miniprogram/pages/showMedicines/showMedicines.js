// miniprogram/pages/showMedicines/showMedicines.js
// 获取服务器接口地址
const api = require('../../config/config.js');
// 获取app应用实例
const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    medicines: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this;
    wx.request({
      url: api.getMedicineData,
      data: {
        medicineName: options.medicineName,
      },
      success: function(res) {
        console.log(res);
        

        let data = res.data;

        console.log(data.data);

        that.setData({
          medicines: data.data
        });

        console.log(that.data.medicines);
      }
    })
  }
})