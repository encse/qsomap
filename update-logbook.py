import requests
import html
import os
import html

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
    # Parse response as URL-encoded data

      # Find the position of ADIF=
    adif_start = response.text.find("ADIF=")
    if adif_start != -1:
        # Extract everything after "ADIF="
        adif_content = response.text[adif_start + 5:]  # Skip "ADIF=" itself
        unescaped_adif = html.unescape(adif_content.strip())  # Unescape and remove any leading/trailing whitespace

        # Save to index.adi
        with open("index.adi", "w", encoding="utf-8") as file:
            file.write(unescaped_adif)

        print("Saved unescaped ADIF data to index.adi")
    else:
        print("Error: 'ADIF' key not found in response")
else:
    print(f"Error: {response.status_code}, {response.text}")
