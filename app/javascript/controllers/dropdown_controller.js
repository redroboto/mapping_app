import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="dropdown"
export default class extends Controller {

  static targets = ["list"]

  connect() {
    console.log("Dropdown controller connected successfully.");
  }

  toggle() {

    if (this.listTarget.classList.contains("hidden")) {
      this.open();
    }
    else {
      this.close();
    }
  }

  open() {
    this.listTarget.classList.remove("hidden");
  }

  close() {
    this.listTarget.classList.add("hidden");
  }


}
