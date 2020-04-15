const db = wx.cloud.database()
const licaiCollection = db.collection("licai")
// var app = getApp()
Page({

  // onPageScroll(e) {
  //   console.log(e.scrollTop)
  // },
  //selSelectChange :function(evt){
  // console.log(evt.detail.currentIdx)
  //},
  /**
   * 页面的初始数据
   */
  data: {
    ggy: '/detail/1.png',
    cx: [],
    sx: [],
    gp: [],
    jj: [],
    qh: [],
    items: [{
      title: "车险"
    },
    {
      title: "寿险"
    },
    {
      title: "股票"
    },
    {
      title: "基金"
    },
    {
      title: "期货"
    }
    ]
  },
  //点击播放按钮，封面图片隐藏,播放视频
  bindplay: function (e) {
    this.setData({
      myVideo: "true"
    }),
      this.videoCtx.play()
  },
  onReady() {
    this.videoCtx = wx.createVideoContext('myVideo')
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this;
    licaiCollection.orderBy('time', 'desc').where({
      type: 'cx'
    })
      .get({
        success: function (res) {
          // res.data 是包含以上定义的两条记录的数组
          that.setData({
            cx: res.data
          })
        }
      })
    licaiCollection.orderBy('time', 'desc').where({
      type: 'sx'
    })
      .get({
        success: function (res) {
          // res.data 是包含以上定义的两条记录的数组
          that.setData({
            sx: res.data
          })
        }
      })
    licaiCollection.orderBy('time', 'desc').where({
      type: 'gp'
    }).get({
      success: function (res) {
        // res.data 是包含以上定义的两条记录的数组
        that.setData({
          gp: res.data
        })
      }
    })
    licaiCollection.orderBy('time', 'desc').where({
      type: 'jj'
    }).get({
      success: function (res) {
        // res.data 是包含以上定义的两条记录的数组
        that.setData({
          jj: res.data
        })
      }
    })
    licaiCollection.orderBy('time', 'desc').where({
      type: 'qh'
    }).get({
      success: function (res) {
        // res.data 是包含以上定义的两条记录的数组
        that.setData({
          qh: res.data
        })
      }
    })
  },
  //点击详情
  // xq: function(evt) {
  //   wx.navigateTo({
  //     url: '/page/detail/detail?title"={{item.title}}>centent={{item.centent}}>image={{item.image}}',
  //     events: {
  //       // 为指定事件添加一个监听器，获取被打开页面传送到当前页面的数据
  //       '../detail/detail': function(data) {
  //         // console.log(data)
  //         title:item.title,
  //         image:item.image,
  //         centent:item.centent
  //       },
  //       someEvent: function(data) {
  //         console.log(data)
  //       }

  //     },
  // success: function(res) {
  //   // 通过eventChannel向被打开页面传送数据
  //   res.eventChannel.emit('../detail/detail', {
  //     data: 'test'
  // })
  // }})
  // },

  // })
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

    /**
    let that = this
    reDian.get().then(
      res => {
        // 输出 [{ "title": "The Catcher in the Rye", ... }]
        console.log(res.data)
        that.setData = ({
          itemList: res.data
        })
      })
       */
  },
  /**
   * 生命周期函数--监听页面显示
   */

  onShow: function () {
    /**
    let that = this
    reDian.get().then(
      res => {
        // 输出 [{ "title": "The Catcher in the Rye", ... }]
        console.log(res.data)
        that.setData = ({
          itemList: res.data
        })
      })
*/
  },
  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  // onPullDownRefresh: function () {
  //   wx.showLoading({
  //     title: '冰冰凉凉雨',
  //   })
  //   setTimeout(function () {
  //     wx.hideLoading()
  // //   }, 2000)
  //    wx.hideNavigationBarLoading() 
  //   let that = this;
  //   redianCollection.orderBy('time', 'desc',).where({
  //     type: 'rd'
  //   }).limit(6)
  //     .get({
  //       success: function (res) {
  //         // res.data 是包含以上定义的两条记录的数组
  //         that.setData({
  //           rd: res.data
  //     })
  //       }})
  //   //完成停止加载      
  //   // wx.stopPullDownRefresh() 
  //     wx.stopPullDownRefresh()
  //  },
  /**.limit(6)
   * 页面上拉触底事件的处理函数
   */
  // onReachBottom: function () {
  //   let that = this
  //   redianCollection.orderBy('time', 'desc++').where({
  //     type: 'rd'
  //   })
  //     .get({
  //       success: function (res) {
  //         // res.data 是包含以上定义的两条记录的数组
  //         that.setData({
  //           rd: res.data
  //         })
  //       }
  //     })
  //   // let that = this;
  //   // let redian = that.data.redian + 1;
  //   wx.showLoading({
  //     title: '疏疏密密欣',
  //   })
  //   setTimeout(function () {
  //     wx.hideLoading()
  //   }, 2000)
  //   // that.setData({
  //   //   isHideLoadMore: false,
  //   // })
  // },
  // redianCollection.get({
  //   success: function (res) {
  //     // res.data 是包含以上定义的两条记录的数组
  //     that.setData({
  //       redian: res.data + 1 
  //   })
  // that.getredian();
  // success: function (res) {
  // console.log("数据更新完成")
  // wx.stopPullDownRefresh();

  /**
   * 
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})