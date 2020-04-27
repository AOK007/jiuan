// components/x-segmentBar/x-segmentBar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    segmentItems: { 
      type: Array,
      value: []
      }
  },

  /**
   * 组件的初始数据
   */
  data: {
currentIdenx:0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    _setCurrentIdx:function(index){
      this.setData({
        currentIdenx:index
      })
    },
    clickTap:function(evt){
      //console.log(evt)
      let cid = evt.currentTarget.id
this.setData ({
  currentIdenx:cid
})  
//组件触发事件。传递一个值 }
this.triggerEvent(
  "selectChange", {currentIdx:cid},{}
)
  }
}
})