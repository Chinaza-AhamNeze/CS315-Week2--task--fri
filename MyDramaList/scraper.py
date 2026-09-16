from selenium import webdriver
from bs4 import BeautifulSoup
import time
import re

driver = webdriver.Chrome()

# --- Aggregation page: Top Shows ---
print("Loading Top Shows page...")
driver.get("https://mydramalist.com/shows/top")
time.sleep(8)

soup = BeautifulSoup(driver.page_source, "html.parser")
titles = soup.find_all("h6")

print(f"\nFound {len(titles)} shows. Top 10:\n")
for h6 in titles[:10]:
    link = h6.find("a")
    if not link:
        continue
    title = link.get_text(strip=True)
    container = h6.find_parent()
    text = container.get_text(" ", strip=True)
    info_match = re.search(r"([A-Za-z ]+(?:Drama|Movie|Special)) - (\d{4}), (\d+) episodes?", text)
    rating_match = re.search(r"\b(\d\.\d)\b", text)
    print(title)
    if info_match:
        print(" ", info_match.group(0))
    if rating_match:
        print("  Rating:", rating_match.group(1))
    print()

# --- Dedicated page: one drama ---
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
