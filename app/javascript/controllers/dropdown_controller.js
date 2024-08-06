import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="dropdown"
export default class extends Controller {

  static targets = ["list", "details"]

  connect() {
    console.log("Dropdown controller connected successfully.");
    this.updateLayout();
    window.addEventListener('resize', () => this.updateLayout());
  }

  disconnect() {
    window.removeEventListener('resize', () => this.updateLayout());
  }

  toggle() {
    if (this.detectScreenSize() < 768) {
      this.toggleDetails();
    } else {
      this.toggleSidebar();
    }
  }

  toggleDetails() {
    if (this.detailsTarget.classList.contains("hidden")) {
      this.detailsTarget.classList.add("w-full");
      this.detailsTarget.classList.remove("hidden");
    } else {
      this.detailsTarget.classList.remove("w-full");
      this.detailsTarget.classList.add("hidden");
    }
  }

  toggleSidebar() {
    if (this.listTarget.classList.contains("hidden")) {
      this.open();
    } else {
      this.close();
    }
  }

  open() {
    this.listTarget.classList.remove("hidden");
  }

  close() {
    this.listTarget.classList.add("hidden");
  }

  updateLayout() {
    if (this.detectScreenSize() >= 768) {
      if (!this.detailsTarget.classList.contains("hidden")) {
        this.detailsTarget.classList.add("hidden");
        this.detailsTarget.classList.remove("w-full");
      }
    }
  }

  detectScreenSize() {
    return window.innerWidth;
  }
}
