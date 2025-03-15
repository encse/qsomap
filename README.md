# QSO Map Viewer

## Overview
The **QSO Map Viewer** is a web-based tool that displays QSOs (contacts) from the QRZ Logbook on an interactive fullscreen map. The data updates automatically every day using a scheduled GitHub Actions workflow.

## Usage
The index.html demonstrates the idea. The js file in the dist folder exports a custom html element which can be parameterized when included in a webpage.

```
<script src="dist/qsomap.es.js" />
<qso-map src="url of an adif file" callsign="your callsign" />
```

`qso-map` is a self contained block level element that can be styled with css.

## Automation
The project includes a script that fetches the latest logbook data from QRZ, processes it, and updates the map automatically without manual intervention. If you want to fork the repo, you should also set this up by defining an api key for qrz.com in the repo secrets.

## License
This project is licensed under the MIT License.

