import re
import requests
import os
import html
from urllib.parse import parse_qs

# Get API key from environment variable
API_KEY = os.getenv("QRZ_API_KEY")

if not API_KEY:
    print("Error: QRZ_API_KEY environment variable is not set.")
    exit(1)

# API endpoint
url = "https://logbook.qrz.com/api"

# Data to be sent in the POST request
data = {
    "KEY": API_KEY,
    "ACTION": "FETCH",
    "OPTIONS": "TYPE:ADIF",
}

headers = {
    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
}

# Make the POST request
response = requests.post(url, data=data, headers=headers)

# Check if the request was successful
if response.status_code == 200:
    # whoever designed this, deserves a special place somewhere...
    # it's almost like a query string, but the values can contain raw '&' symbols:
    # "RESULT=success&ADIF=value & with & raw & symbols&COUNT=10"
    pattern = re.compile(r"&?([A-Z]+)=")
    tokens = pattern.split(response.text)[1:]
    params = {tokens[i]: html.unescape(tokens[i + 1]) for i in range(0, len(tokens) - 1, 2)}
    if 'COUNT' in params and 'ADIF' in params:
        adif = params['ADIF']
        with open("ha7ncs.adif", "w", encoding="utf-8") as file:
            file.write(adif)
        print(f"Saved {params['COUNT']} QSO data to ha7ncs.adif")
    else:
        print("Error: couldnt parse response")
else:
    print(f"Error: {response.status_code}, {response.text}")
