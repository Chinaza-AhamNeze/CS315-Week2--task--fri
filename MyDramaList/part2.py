from selenium import webdriver
from bs4 import BeautifulSoup
import time

driver = webdriver.Chrome()

print("Loading drama detail page...")
driver.get("https://mydramalist.com/705857-umbrella")
time.sleep(8)

soup2 = BeautifulSoup(driver.page_source, "html.parser")
details_heading = soup2.find("h3", string="Details")
details_list = details_heading.find_next("ul") if details_heading else None

print("\nDetails section:\n")
if details_list:
    for item in details_list.find_all("li"):
        print(item.get_text(" ", strip=True))
else:
    print("Couldn't find the Details section.")

driver.quit()
print("\nDone.")