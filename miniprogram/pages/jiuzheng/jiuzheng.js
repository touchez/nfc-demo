//list.js
//获取应用实例
const app = getApp()
// 获取服务器接口地址
const api = require('../../config/config.js');

Page({
  data: {
    doctor: [],
    isTwiceExam: false,
  },
  backtohome: function() {
    wx.redirectTo({
      url: "../activity/activity"
    })
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },

  newMedicalRecord: function() {
    var that = this;
    wx.request({
      url: 'https://touchez.cn:8090/medicalRecord/web/new', // 仅为示例，并非真实的接口地址
      data: {
        userId: app.globalData.userId,
        departmentId: 2,
        doctorId: 2
      },
      method: "post",
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        console.log(res.data);

        if (res.data.code == 500300) {
          that.needGuahao();
          return;
        }

        that.setData({
          doctor: res.data.data
        });
        wx.setStorageSync('doctor', res.data.data);

        //web页面跳出
        that.openWeb();
      }
    });
  },

  needGuahao: function() {
    wx.showModal({
      title: '错误',
      content: '就诊前需要挂号，请先去挂号',
      confirmText: "我知道了",
      showCancel: false,
      success: function(res) {
        console.log(res);
        if (res.confirm) {
          console.log('用户点击我知道了');
          wx.switchTab({
            url: '/pages/historylist/historylist'
          });
        } else {
          console.log('用户点击辅助操作')
        }
      }
    });
  },

  onLoad: function() {
    var that = this;
    // setTimeout(function () {
    //   wx.reLaunch({
    //     url: '../activity/activity',
    //   })
    // }, 20000),

    console.log(app.getMedicalRecordId());

    var medicalRecordId = app.getMedicalRecordId();

    if (medicalRecordId == "" || medicalRecordId == null) {
      //新建病历
      that.newMedicalRecord();
    } else {
      that.setData({
        doctor: wx.getStorageSync('doctor')
      });
    }

    that.setData({
      isTwiceExam: (medicalRecordId == "" || medicalRecordId == null) ? false : true
    })

    console.log('is Twice :' + that.data.isTwiceExam);

    //最终诊断结束，将挂号设置为非活跃状态
    if (that.data.isTwiceExam == true) {
      that.changeGuahaoState(wx.getStorageSync('guahaoId'));
    }

  },

  openWeb: function() {
    wx.request({
      url: 'https://touchez.cn:8090/pyapi/callow', // 仅为示例，并非真实的接口地址
      method: "get",
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        console.log(res.data)
      }
    });
  },

  changeGuahaoState: function(guahaoId) {
    if (guahaoId == null || guahaoId == undefined || guahaoId == "") {
      return;
    }

    wx.request({
      url: api.setGuahaoStateApi,
      data: guahaoId,
      method: "put",
      success: function(res) {
        console.log(res);
      }
    });

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