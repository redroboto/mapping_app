import { Controller } from "@hotwired/stimulus"
import L from "leaflet"

export default class extends Controller {
  static targets = ["container", "locationName", "locationAddress", "locationCoordinates"]
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
    const marker = L.marker([latitude, longitude])
      .addTo(this.map)
      .bindPopup(`<div class="font-medium">${name}</div>`)

    marker.on('click', () => {
      this.updateLocationDetails(name, address, latitude, longitude);
    });
  }

  updateLocationDetails(name, address, latitude, longitude) {
    this.locationNameTarget.textContent = name;
    this.locationAddressTarget.textContent = address;
    this.locationCoordinatesTarget.innerHTML = `
      <p class="pr-4">N ${latitude.toFixed(5)}</p>
      <p>E ${longitude.toFixed(5)}</p>
    `;
  }

  disconnect() {
    this.map.remove();
  }
}
