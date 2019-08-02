// miniprogram/pages/medicineList/medicineList.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    treatment: [],
    total:0 ,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;

    if (options.medicalRecordId == "" || options.medicalRecordId == null) {
      that.getTreatmentDrug(wx.getStorageSync('curMedicalRecordId'))
    }else{
      that.getTreatmentDrug(options.medicalRecordId);
    }
  },

  getTreatmentDrug: function (medicalRecordId) {
    var that = this
    wx.request({
      url: 'https://touchez.cn:8090/treatment/get',
      data: {
        medicalRecordId: medicalRecordId

      },
      success(res) {
        console.log(res.data)

        that.setData({ treatment: res.data.data })
        var num=0
        var i=0
        console.log(res.data.data[1].totalPrice)
        while (res.data.data[i]){
          num += res.data.data[i].totalPrice
          i++
        }
        console.log(num)
        that.setData({ total: num })
        
      }
    })
  },
})