import { Controller } from "@hotwired/stimulus"
import L from "leaflet"

export default class extends Controller {
  // targets div with data-map-target="controller" attribute
  static targets = ["container"]
  // location data taken from _map.html.erb data-map-latlong-value attribute
  static values = { latlong: Array }

  // coordinates for the center of the map
  phil_coords = [12.8797, 121.7740]

  // edit setView() coords to re-center map or 2nd parameter to adjust zoom level
  connect() {
    this.createMap();
    this.map.setView(this.phil_coords, 6);
    this.latlongValue.forEach(place => this.addMarker(place));
    console.log('Map Controller connected successfully');
  }

  createMap() {
    // creates map inside target "container"
    this.map = L.map(this.containerTarget)

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 20,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(this.map);
  }

  // edit bindPopup() to change popup contents of marker
  addMarker(place) {
    const [latitude, longitude, name, address] = place;
    L.marker([latitude, longitude])
      .addTo(this.map)
      .bindPopup(`<div>POGO name: ${name}</div>`)
  }

  disconnect() {
    this.map.remove();
  }
}

