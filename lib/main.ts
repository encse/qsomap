import L from "leaflet";
import leafletCss from "leaflet/dist/leaflet.css?inline";
import leafletFullScreenCss from "leaflet-fullscreen/dist/leaflet.fullscreen.css?inline";
import markerClusterCss from "leaflet.markercluster/dist/MarkerCluster.css?inline";
import markerClusterDefaultCss from "leaflet.markercluster/dist/MarkerCluster.Default.css?inline";
import "leaflet-fullscreen";
import "leaflet.markercluster";


const iconScale = 0.7;
const groupIconScale = iconScale * 1.2;

const greenIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-green.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-shadow.png',
  iconSize: [25 * iconScale, 41 * iconScale],
  iconAnchor: [12 * iconScale, 41 * iconScale],
  popupAnchor: [1 * iconScale, -34 * iconScale],
  shadowSize: [41 * iconScale, 41 * iconScale]
});

const yellowIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-yellow.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-shadow.png',
  iconSize: [25 * iconScale, 41 * iconScale],
  iconAnchor: [12 * iconScale, 41 * iconScale],
  popupAnchor: [1 * iconScale, -34 * iconScale],
  shadowSize: [41 * iconScale, 41 * iconScale]
});

const groupGreenIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-green.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-shadow.png',
  iconSize: [25 * groupIconScale, 41 * groupIconScale],
  iconAnchor: [12 * groupIconScale, 41 * groupIconScale],
  popupAnchor: [1 * groupIconScale, -34 * groupIconScale],
  shadowSize: [41 * groupIconScale, 41 * groupIconScale]
});

const groupYellowIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-yellow.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-shadow.png',
  iconSize: [25 * groupIconScale, 41 * groupIconScale],
  iconAnchor: [12 * groupIconScale, 41 * groupIconScale],
  popupAnchor: [1 * groupIconScale, -34 * groupIconScale],
  shadowSize: [41 * groupIconScale, 41 * groupIconScale]
});


class QsoMap extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: "open"});
  }

  static get observedAttributes() {
    return ["src"];
  }

  async connectedCallback() {
    if (this.shadowRoot == null) {
      return
    }

    const style = document.createElement("style");
    style.textContent = `
          :host {
            display: block;
          }
        `;
    this.shadowRoot.append(style);

    const leafletStyle = document.createElement("style");
    leafletStyle.textContent = leafletCss;
    this.shadowRoot.appendChild(leafletStyle);

    const leafletFullscreenStyle = document.createElement("style");
    leafletFullscreenStyle.textContent = leafletFullScreenCss;
    this.shadowRoot.appendChild(leafletFullscreenStyle);

    const markerClusterStyle = document.createElement("style");
    markerClusterStyle.textContent = markerClusterCss;
    this.shadowRoot.appendChild(markerClusterStyle);

    const markerClusterDefaultStyle = document.createElement("style");
    markerClusterDefaultStyle.textContent = markerClusterDefaultCss;
    this.shadowRoot.appendChild(markerClusterDefaultStyle);

    const container = document.createElement("div");
    container.style.width = "100%";
    container.style.height = "100%";
    this.shadowRoot.appendChild(container);

    const map = L.map(container).setView([47, 19], 3);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    map.addControl(new L.Control.Fullscreen({
      title: {
        'false': 'View Fullscreen',
        'true': 'Exit Fullscreen'
      }
    }));

    const markerLayer = L.layerGroup().addTo(map);
    const callsign = this.getAttribute("callsign");
    let activeModes: Set<QsoMode> = new Set(["PHONE", "CW", "DIGITAL"]);

    let qsoEntries: QsoEntry[] = [];


    const src = this.getAttribute("src");

    if (src) {
      const response = await fetch(src);
      const data = await response.text();
      qsoEntries = parseADIF(data);
    }

    const bands = new Set<string>(qsoEntries.map(entry => entry.band));
    let activeBands: Set<string> = new Set(bands);
    console.log(activeBands);
    if (callsign) {
      const overlayText = new L.Control({position: 'topright'});
      overlayText.onAdd = function () {
        const div = L.DomUtil.create('div', 'leaflet-control leaflet-control-custom');
        div.style.background = 'rgba(0, 0, 0, 0.7)';
        div.style.color = 'white';
        div.style.padding = '10px';
        div.style.fontSize = '18px';
        div.style.fontWeight = 'bold';
        div.style.borderRadius = '5px';
        div.style.display = 'flex';
        div.style.flexDirection = 'column';
        div.style.alignItems = 'flex-start';
        div.style.gap = '5px';

        L.DomEvent.disableClickPropagation(div);
        L.DomEvent.disableScrollPropagation(div);

        const topRow = document.createElement('div');
        topRow.style.display = 'flex';
        topRow.style.gap = '10px';
        topRow.style.alignItems = 'center';

        const link = document.createElement('a');
        link.href = `https://www.qrz.com/db/${callsign}`;
        link.target = "_blank";
        link.textContent = callsign;
        link.style.color = 'white';
        link.style.textDecoration = 'none';

        const hamburger = document.createElement('button');
        hamburger.textContent = '☰';
        hamburger.style.background = 'none';
        hamburger.style.border = 'none';
        hamburger.style.color = 'white';
        hamburger.style.fontSize = '20px';
        hamburger.style.cursor = 'pointer';

        topRow.appendChild(link);
        topRow.appendChild(hamburger);
        div.appendChild(topRow);

        const dropdown = document.createElement('div');
        dropdown.style.display = 'none';
        dropdown.style.flexDirection = 'column';
        dropdown.style.gap = '5px';
        dropdown.style.marginTop = '5px';
        dropdown.style.transition = 'max-height 0.3s ease';
        dropdown.style.overflow = 'hidden';

        qsoModes.forEach(mode => {
          const option = document.createElement('button');
          option.textContent = mode;
          option.style.background = '#333';
          option.style.border = 'none';
          option.style.color = 'white';
          option.style.padding = '5px 10px';
          option.style.borderRadius = '3px';
          option.style.cursor = 'pointer';
          option.addEventListener('click', () => {
            if (activeModes.has(mode)) {
              activeModes.delete(mode);
              option.style.opacity = '0.5';
            } else {
              activeModes.add(mode);
              option.style.opacity = '1';
            }
            renderMarkers(markerLayer, qsoEntries, activeModes, activeBands);            // 🔄 rerender based on new mode
            return true;
          });

          dropdown.appendChild(option);
        });

        function renderBandFilters(bands: string[]) {
          const bandContainer = document.createElement("div");
          bandContainer.style.display = 'flex';
          bandContainer.style.flexDirection = 'column';
          bandContainer.style.gap = '5px';
          bandContainer.style.marginTop = '5px';

          bands.forEach(band => {
            const button = document.createElement("button");
            button.textContent = band;
            button.classList.add("filter-button", "active");

            button.addEventListener("click", () => {
              if (activeBands.has(band)) {
                activeBands.delete(band);
                button.style.opacity = '0.1';
              } else {
                activeBands.add(band);
                button.style.opacity = '1';
              }
              renderMarkers(markerLayer, qsoEntries, activeModes, activeBands);
            });

            bandContainer.appendChild(button);
          });

          dropdown.appendChild(bandContainer);
        }

        renderBandFilters([...bands.values()]);
        div.appendChild(dropdown);

        hamburger.addEventListener('click', () => {
          const isVisible = dropdown.style.display === 'flex';
          dropdown.style.display = isVisible ? 'none' : 'flex';
        });

        return div;
      };
      overlayText.addTo(map);
    }


    renderMarkers(markerLayer, qsoEntries, activeModes, activeBands);
  }
}


function renderMarkers(markerLayer: L.LayerGroup, allEntries: QsoEntry[], modeFilter: Set<QsoMode>, bandFilter: Set<string>) {
  markerLayer.clearLayers(); // just removes markers, keeps tile layer & controls

  const markerMap: Map<string, QsoMarker[]> = new Map();

  allEntries.forEach(({lat, lon, callsign, isConfirmed, mode, band}) => {
    if (!modeFilter.has(mode)) {
      return;
    }
    if (!bandFilter.has(band)) {
      return;
    }

    const icon = isConfirmed ? greenIcon : yellowIcon;

    const marker = new QsoMarker([lat, lon], {
      icon,
      isConfirmed,
      mode
    }).bindPopup(
      `<b>${callsign}</b><br>
        Band: ${band}<br>
        Mode: ${mode}<br>
        `
    );

    const key = `${lat.toFixed(4)},${lon.toFixed(4)}`;
    if (!markerMap.has(key)) {
      markerMap.set(key, []);
    }

    markerMap.get(key)!.push(marker);
  });

  markerMap.forEach((markerList, key) => {
    if (markerList.length === 1) {
      markerList[0].addTo(markerLayer);
    } else {
      const icon = markerList.some(marker => marker.isConfirmed) ? groupGreenIcon : yellowIcon;
      const markerCluster = L.markerClusterGroup({
        iconCreateFunction: () => icon
      });
      for (const item of markerList) {
        markerCluster.addLayer(item);
      }
      markerLayer.addLayer(markerCluster);
    }
  });
}

function gridToCoordinates(grid: string) {
  grid = grid.toUpperCase();

  if (grid.length < 4 || grid.length % 2 !== 0) {
    throw "grid square: grid must be at least 4 characters and have an even length: " + grid;
  }

  let lat = -90; // Starting latitude
  let lon = -180; // Starting longitude
  let lat_step = 240; // Initial latitude step size
  let lon_step = 480; // Initial longitude step size

  for (let i = 0; i < grid.length; i += 2) {

    if (i % 4 == 2) {
      lon_step /= 10;
      lat_step /= 10;
    } else if (i % 4 == 0) {
      lon_step /= 24;
      lat_step /= 24;
    }

    const char1 = grid.charAt(i);
    const char2 = grid.charAt(i + 1);

    if (char1 >= '0' && char1 <= '9') {
      lon += lon_step * parseInt(char1, 10);
      lat += lat_step * parseInt(char2, 10);
    } else {
      lon += lon_step * (char1.charCodeAt(0) - 'A'.charCodeAt(0));
      lat += lat_step * (char2.charCodeAt(0) - 'A'.charCodeAt(0));
    }
  }

  lat += lat_step * 0.5;
  lon += lon_step * 0.5;

  return {lat, lon}
}

function parseMode(mode: string): QsoMode | undefined {
  switch (mode.toUpperCase()) {
    case "SSB":
    case "FM":
      return "PHONE";
    case "FT":
    case "FT8":
    case "FT4":
    case "PSK":
    case "RTTY":
    case "JT65":
    case "JS8":
      return "DIGITAL";
    case "CW":
      return "CW";
    default:
      return undefined;
  }
}

function parseADIF(adifText: string): QsoEntry[] {
  const result: QsoEntry[] = [];

  const parts = adifText.split('<eoh>')
  const lines = parts[parts.length - 1].split('<eor>');

  lines.forEach(entry => {
    const latMatch = entry.match(/<lat:[0-9]+>([NS])([0-9]+) ([0-9]+\.[0-9]+)/i);
    const lonMatch = entry.match(/<lon:[0-9]+>([EW])([0-9]+) ([0-9]+\.[0-9]+)/i);
    const gridsquareMatch = entry.match(/<gridsquare:[0-9]+>([A-Z0-9/]+)/i);
    const callsignMatch = entry.match(/<call:[0-9]+>([A-Z0-9/]+)/i);
    const qslMatch = entry.match(/<app_qrzlog_qsldate:[0-9]+>([0-9]+)/i);
    const modeMatch = entry.match(/<mode:[0-9]+>([A-Z]+)/i);
    const bandMatch = entry.match(/<band:[0-9]+>([A-Z0-9]+)/i);
    const band = bandMatch ? bandMatch[1].toUpperCase() : 'UNKNOWN';

    let lat = 0
    let lon = 0
    if (latMatch && lonMatch) {
      lat = parseFloat(latMatch[2]) + parseFloat(latMatch[3]) / 60;
      lon = parseFloat(lonMatch[2]) + parseFloat(lonMatch[3]) / 60;
      if (latMatch[1] == 'S') lat = -lat;
      if (lonMatch[1] == 'W') lon = -lon;
    }

    if (lat == 0 && lon == 0 && gridsquareMatch) {
      let res = gridToCoordinates(gridsquareMatch[0])
      lat = res.lat;
      lon = res.lon;
    }

    const mode = modeMatch ? parseMode(modeMatch[1]) : undefined

    if (mode && (lat !== 0 || lon !== 0)) {
      const callsign = callsignMatch ? callsignMatch[1] : 'Unknown';
      const isConfirmed = qslMatch != null;
      const icon = isConfirmed ? greenIcon : yellowIcon;
      result.push({lat, lon, callsign, isConfirmed, mode, band});
      console.log(band);
    }
  });

  return result;
}


const qsoModes = ["PHONE", "CW", "DIGITAL"] as const;
type QsoMode = typeof qsoModes[number];

interface QsoEntry {
  lat: number;
  lon: number;
  callsign: string;
  isConfirmed: boolean;
  mode: QsoMode;
  band: string;
}

interface CustomMarkerOptions extends L.MarkerOptions {
  isConfirmed: boolean;
  mode: QsoMode;
}

class QsoMarker extends L.Marker {
  isConfirmed: boolean;
  mode: QsoMode;

  constructor(latlng: L.LatLngExpression, options: CustomMarkerOptions) {
    super(latlng, options);
    this.isConfirmed = options.isConfirmed;
    this.mode = options.mode;
  }
}

customElements.define("qso-map", QsoMap);