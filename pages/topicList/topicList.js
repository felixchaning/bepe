// topicList.js
var Api = require('../../utils/api.js');

Page({
  data: {
    title: '话题列表',
    topics: [],
    hidden: false
  },
  // 事件处理函数
  redictDetail: function(e) {
    var id = e.currentTarget.id,
      url = '../detail/detail?id=' + id;
      
    wx.navigateTo({
      url: url
    })
  },
  fetchData: function(field) {
    var that = this;
    that.setData({
      hidden: false
    })
    wx.request({
      url: Api.getField() + '?' + 'field=' + field + '&'+ Api.clientID,
      success: function(res) {
        console.log(res.data)
        that.setData({
          topics: res.data.projects
        })
        setTimeout(function() {
          that.setData({
            hidden: true
          })
        }, 300)
      }
    })
  },
  onLoad: function (options) {
    this.fetchData(options.id);
  }
})
