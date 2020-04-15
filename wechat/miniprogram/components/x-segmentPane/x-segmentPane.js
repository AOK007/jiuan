// components/x-segmentPane/x-segmentPane.js
Component({
  externalClasses: ["my-class"],
  options: {
   multipleSlots:true
   
  },
  /**
   * 组件的属性列表
   */
  properties: {
    segmentItems: {
      type: Array,
      value: []
    },
    
  },

  /**
   * 组件的初始数据
   */
  data: {
    currentIdx: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    _hanChange:function(evt){
      // console.log(evt.detail.current)
      //选择分段选择器
      let segBar = this.selectComponent("#x-sp-sb")
      //调用选择器
      segBar._setCurrentIdx(evt.detail.current)
    },
    seSelectChange: function(evt) {
      //console.log(evt.detail.current)
      let idx = parseInt(evt.detail.currentIdx)
      this.setData({
        currentIdx: idx
      })
    },
    
  },
})