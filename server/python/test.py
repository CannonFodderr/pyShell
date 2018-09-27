import requests

from bs4 import BeautifulSoup
URL = 'https://www.halilit.com'

def main():
    print('Hi from python!')
    parsed_page = request_website(URL)
    anchors = parsed_page.select("img")
    for a in anchors:
        print(a["src"])


def request_website(url):
    web_content = requests.get(url).content
    return make_soup(web_content)

def make_soup(web_content):
    return BeautifulSoup(web_content, 'html.parser')

if __name__ == "__main__":
    main()