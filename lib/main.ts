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


type State = {
  entries: QsoEntry[];
  modes: ReadonlySet<QsoMode>;
  bands: ReadonlySet<string>;
  confirmationFilter: ReadonlySet<boolean>;
  modeFilter: ReadonlySet<QsoMode>;
  bandFilter: ReadonlySet<string>;
  callsign: string;
  hamburger: boolean;
};

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

    const callsign = this.getAttribute("callsign");
    if (!callsign) {
      return;
    }

    let qsoEntries: QsoEntry[] = [];

    const src = this.getAttribute("src");
    if (src) {
      const response = await fetch(src);
      const data = await response.text();
      qsoEntries = parseADIF(data);
    }

    const bands = new Set(qsoEntries.map(entry => entry.band))
    let state: State = {
      entries: qsoEntries,
      callsign: callsign,
      modes: new Set(qsoModes),
      bands: new Set(bands),
      confirmationFilter: new Set([true, false]),
      modeFilter: new Set(qsoModes),
      bandFilter: new Set(bands),
      hamburger: false,
    }

    let map = L.map(container).setView([47, 19], 3);
    function update(stateT: Partial<State>)  {
      map.remove();
      map = L.map(container).setView([47, 19], 3);
      state = {...state, ...stateT};
      console.log(state);
      render(map, state, update)
    }
    render(map, state, update);
  }
}

type Update = (state: Partial<State>) => void;

function render(map: L.Map, state: State, update: Update){
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
  }).addTo(map);

  map.addControl(new L.Control.Fullscreen({
    title: {
      'false': 'View Fullscreen',
      'true': 'Exit Fullscreen'
    }
  }));

  map.addControl(renderMenu(state, update));
  map.addLayer(renderMarkers(state, update));
}


function renderMenu(state: State, update: Update) {
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
    div.style.alignItems = 'flex-end';
    div.style.gap = '5px';

    L.DomEvent.disableClickPropagation(div);
    L.DomEvent.disableScrollPropagation(div);

    const topRow = document.createElement('div');
    topRow.style.display = 'flex';
    topRow.style.gap = '10px';
    topRow.style.alignItems = 'center';

    const link = document.createElement('a');
    link.href = `https://www.qrz.com/db/${state.callsign}`;
    link.target = "_blank";
    link.textContent = state.callsign;
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
    dropdown.style.backgroundColor = '#2c2f36';
    dropdown.style.color = '#fff';
    dropdown.style.padding = '1rem';
    dropdown.style.borderRadius = '12px';
    dropdown.style.width = '240px';
    dropdown.style.display = state.hamburger ? 'flex' : 'none';
    dropdown.style.flexDirection = 'column';
    dropdown.style.gap = '16px';
    dropdown.style.boxShadow = '0 4px 20px rgba(0,0,0,0.2)';

    hamburger.addEventListener('click', () => {
      update({hamburger: !state.hamburger})
    });

    dropdown.appendChild(renderConfirmationFilters(state, update));
    dropdown.appendChild(renderModeFilters(state, update));
    dropdown.appendChild(renderBandFilters(state, update));

    div.appendChild(dropdown);
    return div;
  }

  return overlayText;
}

function toggleInSet<T>(set: ReadonlySet<T>, value:T): ReadonlySet<T>  {
  return set.has(value)
    ? new Set([...set].filter(item => item !== value))
    : new Set([...set, value]);
}


function makeSection(labelText: string, buttons: HTMLElement[]): HTMLElement {
  const section = document.createElement('div');
  section.style.display = 'flex';
  section.style.flexDirection = 'column';

  const label = document.createElement('div');
  label.textContent = labelText;
  label.style.fontWeight = 'bold';
  label.style.marginBottom = '4px';

  const btnGroup = document.createElement('div');
  btnGroup.style.display = 'flex';
  btnGroup.style.flexWrap = 'wrap';
  btnGroup.style.gap = '8px';

  buttons.forEach(btn => {
    btnGroup.appendChild(btn);
  });

  section.appendChild(label);
  section.appendChild(btnGroup);
  return section;
}

function makeButton(label: string, isActive: boolean = false): HTMLButtonElement {
  const btn: HTMLButtonElement = document.createElement('button');
  btn.textContent = label;
  btn.style.padding = '8px 12px';
  btn.style.borderRadius = '8px';
  btn.style.border = '1px solid #555';
  btn.style.cursor = 'pointer';
  btn.style.transition = 'all 0.2s ease';
  btn.style.background = isActive ? '#fff' : 'transparent';
  btn.style.color = isActive ? '#2c2f36' : '#ccc';
  btn.style.fontWeight = isActive ? 'bold' : 'normal';


  return btn;
}

function renderBandFilters(state: State, update: Update) {
  return makeSection("Bands",
    [...state.bands].map(mode => {
      const button = makeButton(mode, state.bandFilter.has(mode))
      button.addEventListener("click", () => {
        update({bandFilter: toggleInSet(state.bandFilter, mode)});
      })
      return button;
    })
  );
}

function renderConfirmationFilters(state: State, update: Update) {
  return makeSection("Confirmed",
    [true, false].map(confirmed => {
      const label = confirmed ? "Yes" : "No";
      const button = makeButton(label, state.confirmationFilter.has(confirmed))
      button.addEventListener("click", () => {
        update({confirmationFilter: toggleInSet(state.confirmationFilter, confirmed)});
      })
      return button;
    })
  );
}

function renderModeFilters(state: State, update: Update) {
  return makeSection("Modes",
    qsoModes.map(mode => {
      const button = makeButton(mode, state.modeFilter.has(mode))
      button.addEventListener("click", () => {
        update({modeFilter: toggleInSet(state.modeFilter, mode)});
      })
      return button;
    })
  );
}

function renderMarkers(state: State, update: Update) {
  const markerLayer = L.layerGroup();
  const allEntries = state.entries;
  const confirmationFilter = state.confirmationFilter;
  const modeFilter = state.modeFilter;
  const bandFilter = state.bandFilter;
  const markerMap: Map<string, QsoMarker[]> = new Map();

  allEntries.forEach(({lat, lon, callsign, isConfirmed, mode, band, date}) => {
    if (!confirmationFilter.has(isConfirmed)) {
      return;
    }
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
        Date: ${date}<br>
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
  return markerLayer;
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

    const qsoDateMatch = entry.match(/<qso_date:[0-9]+>([0-9]{8})/i);
    const qsoDateStr = qsoDateMatch ? qsoDateMatch[1] : null;
    const qsoDate = qsoDateStr
      ? new Date(
        parseInt(qsoDateStr.slice(0, 4)),   // Year
        parseInt(qsoDateStr.slice(4, 6)) - 1, // Month is 0-based
        parseInt(qsoDateStr.slice(6, 8))    // Day
      )
      : null;
    const qsoDateISO = qsoDate?.toISOString().split('T')[0];

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
      const date = qsoDateISO ?? "Unknown";
      result.push({lat, lon, callsign, isConfirmed, mode, band, date});
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
  date: string;
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