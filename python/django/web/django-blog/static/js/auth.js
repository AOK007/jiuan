function Auth() {
  this.Error = false;
  this.mask = $(".mask");
}
Auth.prototype.showEvent = function () {
  this.mask.show();
}
Auth.prototype.hideEvent = function () {
  this.mask.hide();
}
Auth.prototype.listenShowHideEvent = function () {
  var self = this;
  var loginBtn = $("#login-btn");
  var registerBtn = $("#register-btn");
  var main = $(".main");
  var close = $(".icon-close");
  loginBtn.click(function () {
    self.showEvent();
    main.css("left", 0);
  })
  registerBtn.click(function () {
    self.showEvent();
    main.css("left", -410);
  })
  close.click(function () {
    self.hideEvent();
  })
}


Auth.prototype.listenSwitchEvent = function () {
  $(".switch").click(function () {
    var main = $(".main");
    var currentLeft = main.css("left");
    currentLeft = parseInt(currentLeft);
    if (currentLeft < 0) {
      main.animate({
        "left": 0
      });
    } else {
      main.animate({
        "left": -410
      });
    }
  })
};
Auth.prototype.listenLoginEvent = function () {
  var self = this;
  var loginBtn = $(".login-submit-btn");
  var loginForm = $(".login-form");
  var usernameInput = loginForm.find("input[name='username']");
  var passwordInput = loginForm.find("input[name='password']");
  var loadingHtml = $("<span class='loading'></span>");
  var serverError = true;
  loginBtn.click(function (e) {
    e.preventDefault();
    if(self.Error) return;

    var username = usernameInput.val();
    var password = passwordInput.val();
    if (username == ''){
      self.Error = true;
      usernameInput.parent().addClass("has-error");
      usernameInput.parent().append("<span id='helpBlock2' class='text-danger'>用户名不能为空</span>");
      return;
    }
    if (password == ''){
      self.Error = true;
      passwordInput.parent().addClass("has-error");
      passwordInput.parent().append("<span id='helpBlock2' class='text-danger'>密码不能为空</span>");
      return;
    }
    $(this).find(".login-sumbit-span").hide();
    loginForm.find("#login-loading").addClass("loading");
    var loginWaiter = setTimeout(function(){
      loginForm.find("#login-loading").removeClass("loading");
      loginBtn.find(".login-sumbit-span").show();
      if (serverError){
          window.messageBox.showError("服务器响应失败！")
      }
    },10000); // 如果十秒还没有响应则停止
    // 发送请求 并关闭login 显示登录成功
    console.log("登录中。。")
    $.post("/account/login/",{
        "username": username,
        "password": password
    },function (res) {
        serverError = false;
        if(res.code == 200){
            window.location.reload();
        }else{
            window.messageBox.showError("用户名或密码错误");
            passwordInput.val("");
            loginForm.find("#login-loading").removeClass("loading");
            loginBtn.find(".login-sumbit-span").show();
        }

    })
  })
};

Auth.prototype.listenRegisterEvent = function() {
  var self = this;
  var self = this;
  var serverError = true;
  var registerBtn = $(".register-submit-btn");
  var registerForm = $(".register-form");
  var usernameInput = registerForm.find("input[name='username']");
  var passwordInput1 = registerForm.find("input[name='password1']");
  var passwordInput2 = registerForm.find("input[name='password2']");
  var loadingHtml = $("<span class='loading'></span>")
  registerBtn.click(function (e) {
    e.preventDefault();
    if(self.Error) return;

    var username = usernameInput.val();
    var password1 = passwordInput1.val();
    var password2 = passwordInput2.val();

    if (username == ''){
      self.Error = true;
      usernameInput.parent().addClass("has-error");
      usernameInput.parent().append("<span id='helpBlock2' class='text-danger'>用户名不能为空</span>");
      return;
    }
    if (password1 == ''){
      self.Error = true;
      passwordInput1.parent().addClass("has-error");
      passwordInput1.parent().append("<span id='helpBlock2' class='text-danger'>密码不能为空</span>");
      return;
    }
    if (password2 == ''){
      self.Error = true;
      passwordInput2.parent().addClass("has-error");
      passwordInput2.parent().append("<span id='helpBlock2' class='text-danger'>密码不能为空</span>");
      return;
    }
    if (password1 != password2){
      self.Error = true;
      passwordInput2.parent().addClass("has-error");
      passwordInput2.parent().append("<span id='helpBlock2' class='text-danger'>两次密码不一致</span>");
      return;
    }

    $(this).find(".register-sumbit-span").hide();
    registerForm.find("#register-loading").addClass("loading");
    var registerWaiter = setTimeout(function(){
      registerForm.find("#register-loading").removeClass("loading");
      registerBtn.find(".register-sumbit-span").show();
      if (serverError){
        registerForm.find("#register-loading").removeClass("loading");
        registerBtn.find(".register-sumbit-span").show();
        if (serverError){
            window.messageBox.showError("服务器响应失败！")
        }
      }
    },10000); // 如果十秒还没有响应则停止
    // 发送请求 并关闭login 显示登录成功
    $.post("/account/register/",{
      "username": username,
      "password1": password1,
      "password2": password2
    },function (res) {
      serverError = false;
      console.log(res);
      if (res.code == 200) {
        window.location.reload();
      }else {
        window.messageBox.showError(res.message);
        registerForm.find("#register-loading").removeClass("loading");
        registerBtn.find(".register-sumbit-span").show();
      }
    })
  })
};

Auth.prototype.listenInputEvent = function (e,r) {
  var self = this;
  e.blur(function(){
    var value = e.val();
    var len = value.length;
    if(len < r['min']['val']){
      self.Error = true;
      e.parent().addClass("has-error");
      e.parent().append("<span id='helpBlock2' class='text-danger'>" + r['min']['error'] +"</span>")
    }
    if(len > r['max']['val']) {
      self.Error = true;
      e.parent().addClass("has-error");
      e.parent().append("<span id='helpBlock2' class='text-danger'>" + r['max']['error'] +"</span>")
    }
  })
  e.focus(function(){
    self.Error = false;
    e.parent().removeClass("has-error");
    e.parent().find("span[class='text-danger']").remove();
  })
}
Auth.prototype.run = function () {
  this.listenShowHideEvent();
  this.listenSwitchEvent();
  this.listenLoginEvent();
  this.listenRegisterEvent();

  // 验证登录的用户名输入框
  this.listenInputEvent($(".login-form").find("input[name='username']"),{
    'max': {
      'val': 10,
      'error': '用户名不得多于10位'
    },
    'min': {
      'val': 3,
      'error': '用户名不得少于3位'
    }
  });

  // 验证登录的密码输入框
  this.listenInputEvent($(".login-form").find("input[name='password']"),{
    'max': {
      'val': 10,
      'error': '密码不得多于10位'
    },
    'min': {
      'val': 3,
      'error': '密码不得少于3位'
    }
  });

  // 验证注册的用户名输入框
  this.listenInputEvent($(".register-form").find("input[name='username']"),{
    'max': {
      'val': 10,
      'error': '用户名不得多于10位'
    },
    'min': {
      'val': 3,
      'error': '用户名不得少于3位'
    }
  })

  // 验证注册的密码输入框
  this.listenInputEvent($(".register-form").find("input[name='password1']"),{
    'max': {
      'val': 10,
      'error': '密码不得多于10位'
    },
    'min': {
      'val': 3,
      'error': '密码不得少于3位'
    }
  })
  // 验证注册的密码输入框
  this.listenInputEvent($(".register-form").find("input[name='password2']"),{
    'max': {
      'val': 10,
      'error': '密码不得多于10位'
    },
    'min': {
      'val': 3,
      'error': '密码不得少于3位'
    }
  })

};
$(function () {
  var auth = new Auth();
  auth.run();
})