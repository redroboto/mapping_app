import { Controller } from "@hotwired/stimulus"
import L from "leaflet"

export default class extends Controller {
  static targets = ["container"]
  static values = { latlong: Array }

  phil_coords = [12.8797, 121.7740]

  connect() {
    this.createMap();
    // this.map.fitBounds(this.latlongValue)
    this.map.setView(this.phil_coords, 6);
    this.latlongValue.forEach(place => this.addMarker(place));
    console.log('Map Controller connected successfully');
  }

  createMap() {
    this.map = L.map(this.containerTarget)

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 20,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(this.map);
  }

  addMarker(place) {
    const [latitude, longitude] = place;
    L.marker([latitude, longitude])
      .addTo(this.map)
      .bindPopup(`<div>latitude: ${latitude}</div><div>longitude: ${longitude}</div>`)
    // .openPopup();
  }
  // added openPopup. Add POGO name and details to popup?

  disconnect() {
    this.map.remove();
  }
}

