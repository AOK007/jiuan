$(function() {
  // 获取分类元素
  var categories = $("#categories");
  // 获取 ul
  var ul = categories.children(); 


  categories.mouseover(function(){
    ul.css("display","block");
  })
  categories.mouseout(function(){
    ul.css("display","none");
  })
})