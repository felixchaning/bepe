// detail.js
var Util = require('../../utils/util.js');
var Api = require('../../utils/api.js');

Page({
  data: {
    title: '话题详情',
    detail: {},
    replies: [],
    hidden: false
  },
  fetchDetail: function(id) {
    var that = this;
    wx.request({
      url: Api.getTopicInfo() + id + '?' + Api.clientID,
      success: function(res) {
        // console.log(res.data)
        // res.data[0].created = Util.formatTime(Util.transLocalTime(res.data[0].created));
        that.setData({
          detail: res.data.project
        })
      }
    })
    that.fetchReplies(id);
  },
  fetchReplies: function(id) {
    var that = this;
    wx.request({
      url: Api.getReplies() + id + '/comments?' + Api.clientID,
      success: function(res) {
        console.log(res.data);
        // res.data.forEach(function(item) {
        //   item.created = Util.formatTime(Util.transLocalTime(item.created_on));
        // })
        that.setData({
          
          replies: res.data.comments
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
    this.setData({
      hidden: false
    })
    this.fetchDetail(options.id);
  }
})
