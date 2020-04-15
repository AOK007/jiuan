Page({

  formSubmit: function (e) {

    const db = wx.cloud.database()
    db.collection('wupin').add({
      data: {
        'name': e.detail.value.name,
        "age": e.detail.value.age,
        'sex': e.detail.value.sex,
        "moble": e.detail.value.moble,
        'baoe': e.detail.value.baoe
      },
      success: res => {
        // 在返回结果中会包含新创建的记录的 _id
        wx.showToast({
          title: '提交成功请重置',
        })
        console.log('[数据库] [新增记录] 成功，记录 _id: ', res._id)
      },
      fail: err => {
        wx.showToast({
          icon: 'none',
          title: '新增记录失败'
        })
        console.error('[数据库] [新增记录] 失败：', err)
      },

      // },
      //   console.log('form发生了submit事件，携带数据为：', e.detail.value)
      // },
      formReset: function () {
        console.log('form发生了reset事件')
      }
    })
  }
})