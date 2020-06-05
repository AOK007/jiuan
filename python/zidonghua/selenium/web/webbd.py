# coding = utf-8

from selenium import webdriver
#引入包

browser = webdriver.Chrome(executable_path="/home/selenium/chromedriver")
#引入浏览器驱动
browser.get("http://www.baidu.com")
#输入网址
browser.find_element_by_id("kw").send_keys("selenium")
#找到元素 输入值
browser.find_element_by_id("su").click()
#找到元素 点击操作
browser.save_scrrrnshot('baidu.png')
browser.quit()
# 关闭浏览器