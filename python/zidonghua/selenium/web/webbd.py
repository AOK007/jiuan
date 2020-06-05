# coding = utf-8from

from selenium import webdriver


browser = webdriver.Chrome(executable_path="/home/selenium/chromedriver")

browser.get("http://www.baidu.com")
browser.find_element_by_id("kw").send_keys("selenium")
browser.find_element_by_id("su").click()
browser.quit()