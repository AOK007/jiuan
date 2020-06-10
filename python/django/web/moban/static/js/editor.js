function Editor() {
  this.Error = true;
  this.titleInput = $("#title");
  this.infoInput = $("#info");
}
Editor.prototype.initWangEditor = function() {
  var E = window.wangEditor
  this.wangEditor = new E('#content');
  // 自定义菜单配置
  this.wangEditor.customConfig.menus = [
    'head', // 标题
    'bold', // 粗体
    'fontSize', // 字号
    'fontName', // 字体
    'italic', // 斜体
    'underline', // 下划线
    'strikeThrough', // 删除线
    'foreColor', // 文字颜色
    'backColor', // 背景颜色
    'table', // 表格
    'undo', // 撤销
    'redo' // 重复
  ]
  this.wangEditor.create()
}

Editor.prototype.listenInputEvent = function() {
  var self = this;
  self.titleInput.blur(function() {
    var title = self.titleInput.val();
    if(title.length == '') {
      self.Error = true;
      self.titleInput.parent().addClass("has-error");
      self.titleInput.parent().append("<span class='text-danger'>文章标题不能为空</span>");
    }
  }).focus(function() {
    self.Error = false;
    self.titleInput.parent().removeClass("has-error");
    self.titleInput.parent().find("span[class='text-danger']").remove();
  })

  self.infoInput.blur(function() {
    var info = self.infoInput.val();
    if(info == '') {
      self.Error = true;
      self.infoInput.parent().addClass("has-error");
      self.infoInput.parent().append("<span class='text-danger'>文章概要不能为空</span>");
    }
  }).focus(function() {
    self.Error = false;
    self.infoInput.parent().removeClass("has-error");
    self.infoInput.parent().find("span[class='text-danger']").remove();
  })

}

Editor.prototype.listenSubmitEvent = function() {
  var self = this;
  var submitBtn = $(".submit-btn");
  submitBtn.click(function (e) {
    e.preventDefault();
    if(self.Error) return;
    var title = self.titleInput.val();
    var info = self.infoInput.val();
    var classify = $("#classify").val();
    var content = self.wangEditor.txt.html();
    //发送请求
    $.post("/comment/edit/",{
      "title": title,
      "info": info,
      "classify": classify,
      "content": content
    },function (res) {
      if (res.code == 200){
        window.messageBox.showSuccess("发布成功");
        self.titleInput.val("");
        self.infoInput.val("");
        self.wangEditor.txt.html("");
      }else {
        window.messageBox.showError("发布失败")
      }
      //
    })
  })
}

Editor.prototype.run = function() {
  this.initWangEditor();
  this.listenInputEvent();
  this.listenSubmitEvent();
}

$(function () {
  var editor = new Editor
  editor.run();
})