import L from "leaflet";
import leafletCss from "leaflet/dist/leaflet.css?inline";
import leafletFullScreenCss from "leaflet-fullscreen/dist/leaflet.fullscreen.css?inline";
import "leaflet-fullscreen";

class QsoMap extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    static get observedAttributes() {
        return ["src"];
    }

    async connectedCallback() {
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

        const container = document.createElement("div");
        container.style.width="100%";
        container.style.height="100%";
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

        const callsign = this.getAttribute("callsign");
        if (callsign) {
            const overlayText = L.control({ position: 'topright' });
            overlayText.onAdd = function (map) {
                let div = L.DomUtil.create('div', 'leaflet-control leaflet-control-custom');
                div.style.background = 'rgba(0, 0, 0, 0.7)';
                div.style.color = 'white';
                div.style.padding = '10px';
                div.style.fontSize = '18px';
                div.style.fontWeight = 'bold';
                div.style.borderRadius = '5px';
                div.innerHTML = `<a href="https://www.qrz.com/db/${callsign}" target="_blank" style="color: white">${callsign}</a>`;
                return div;
            };
            overlayText.addTo(map);
        }


        const iconScale = 0.7
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


        fetch(this.getAttribute("src"))
            .then(response => response.text())
            .then(data => parseADIF(data))
            .catch(error => console.error('Error loading default ADIF:', error));

        function gridToCoordinates(grid) {
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

            return { lat, lon }
        }


        function parseADIF(adifText) {
            const parts = adifText.split('<eoh>')
            const lines = parts[parts.length - 1].split('<eor>');
            lines.forEach(entry => {
                const latMatch = entry.match(/<lat:[0-9]+>([NS])([0-9]+) ([0-9]+\.[0-9]+)/i);
                const lonMatch = entry.match(/<lon:[0-9]+>([EW])([0-9]+) ([0-9]+\.[0-9]+)/i);
                const gridsquareMatch = entry.match(/<gridsquare:[0-9]+>([A-Z0-9/]+)/i);
                const callsignMatch = entry.match(/<call:[0-9]+>([A-Z0-9/]+)/i);
                const qslMatch = entry.match(/<app_qrzlog_qsldate:[0-9]+>([0-9]+)/i);
                let lat = 0
                let lon = 0
                if (latMatch && lonMatch) {
                    lat = parseFloat(latMatch[2]) + parseFloat(latMatch[3]) / 60;
                    lon = parseFloat(lonMatch[2]) + parseFloat(lonMatch[3]) / 60;
                    if (latMatch[1] == 'S') lat = -lat;
                    if (lonMatch[1] == 'W') lon = -lon;
                }

                if (lat == 0 && lon == 0 && gridsquareMatch) {
                    let res = gridToCoordinates(gridsquareMatch)
                    lat = res.lat;
                    lon = res.lon;
                }

                if (lat !== 0 || lon !== 0) {
                    const callsign = callsignMatch ? callsignMatch[1] : 'Unknown';

                    const isConfirmed = qslMatch;
                    const icon = isConfirmed ? greenIcon : yellowIcon;

                    L.marker([lat, lon], { icon }).addTo(map)
                        .bindPopup(`<b>${callsign}</b><br>Lat: ${lat.toFixed(4)}<br>Lon: ${lon.toFixed(4)}<br>Confirmed: ${isConfirmed ? 'Yes' : 'No'}`);
                }
            });
        }
    }
}

customElements.define("qso-map", QsoMap);