// miniprogram/pages/detail/detail.js

Page({
 
//   onLoad: function (option) {
//     // let id = getapp().requestDetailId;
//     // // console.log(id)
//     // let data = getApp().data;
//     // let 
    
// },
  /**
   * 页面的初始数据
   */
  data: {
    // tp:''
    msg: 'msg.jpg',
    baoxian: 'baoxian.jpg',
    head:'',
    title: '',
    image: '',
    h1: '',
    h2: '',
    h3: '',
    h4: '',
    h5: '',
    centent: '',
    time: '',
    rq:'',
    end:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // // let that =this
    // var indexid = getApp().requestId;
    // var indexIndex = getApp().requestIndex;
    // let xqT = wx.getStorageSync('xqT')
    
    this.setData({
      // id: options.id,
      title: options.title,
      head: options.head,
      image: options.image,
      h1: options.h1,
      h2: options.h2,
      h3: options.h3,
      h4: options.h4,
      h5: options.h5,
      centent: options.centent,
      time: options.time,
      rq: options.rq,
      end: options.end 
    })
    // this.setData({
    //    tp: options.tp
    // })
    // var str = options.str
    // this.setData({
    //   // console.log(测算)
    //   str: str
    //   })
    // console.log(option.query)
    // const eventChannel = this.getOpenerEventChannel()
    // eventChannel.emit('/page/index/index', { data: '/page/detail/detail' });
    // eventChannel.emit('/page/detail/detail', { data: '/page/detail/detail' });
    // // 监听acceptDataFromOpenerPage事件，获取上一页面通过eventChannel传送到当前页面的数据
    // eventChannel.on('/page/detail/detail', function (data) {
    //   console.log(data)})
    // })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

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
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    return {
      title: '空白格',
      path: '/pages/index/index',
      imageUrl: 'baoxian.jpg'//自定义图片路径，可以是本地文件路径、代码包文件路径或者网络图片路径。支持PNG及JPG。显示图片长宽比是 5:4。
    }
  }
})