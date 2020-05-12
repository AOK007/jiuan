import turtle                               # 导入画图模块
from time import sleep
MyName =  ""             # 设置自己姓名
Love = "LOVE"            # LOVE
HerName = ""             # 表白女生姓名
def HeartPart():               # 定义画爱心上部分半圆函数
    for i in range(200):
        turtle.right(1)
        turtle.forward(2)
def DrawLove():

    turtle.setup(width = 800,height = 500)       # 设置窗口大小
    turtle.title('爱你,么么么么么么么哒～～～')   # 设置窗口名称
    turtle.color('red', 'pink')                  # 设置画笔颜色
    turtle.pensize(5)                            # 设置画笔大小
    turtle.speed(0)                              # 设置画笔速度
    turtle.up()                                  # 举笔
    turtle.goto(0, -180)                         # 去到的坐标,窗口中心为0,0
    turtle.showturtle()                          # 显示画笔
    turtle.down()                                # 落笔
    turtle.begin_fill()                          # 画上线
    turtle.left(140)
    turtle.forward(224)
    HeartPart()                                  # 画左边圆
    turtle.left(120)                             # 画右边圆
    HeartPart()
    turtle.forward(224)                          # 画下线
    turtle.end_fill()
    turtle.pensize(5)
    turtle.up()                                  # 举笔
    turtle.hideturtle()                          # 隐藏笔
    # 在心中写字
    turtle.goto(0, 0)
    turtle.showturtle()
    turtle.color('red', 'pink')                  # 设置笔颜色
    # 在心中写字 font可以设置字体自己电脑有的都可以设 align开始写字的位置
    turtle.write(HerName+Love+MyName, font=('gungsuh', 30,), align="center")
    turtle.up()                                  # 举笔
    turtle.hideturtle()                          # 隐藏笔
    if HerName != '':                            # 写署名
        turtle.color('black', 'pink')
        turtle.goto(180, -180)
        turtle.showturtle()
        turtle.write("女神："+HerName, font=(20,), align="center", move=True)
