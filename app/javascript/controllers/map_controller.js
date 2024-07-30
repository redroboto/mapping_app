import { Controller } from "@hotwired/stimulus"
import L from "leaflet"

export default class extends Controller {
  static targets = ["container"]
  static values = { latlong: Array }

  connect() {
    this.createMap()
    this.map.fitBounds(this.latlongValue)
    this.latlongValue.forEach(place => this.addMarker(place))
    console.log('Hello world')
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
  }


  disconnect() {
    this.map.remove();
  }
}

