import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="sidebar-dropdown"
export default class extends Controller {

  static targets = ["list", "button"];
  connect() {
    console.log("Connected to the sidebar controller.");
  }

  testHello() {
    console.log(this.listTarget);
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
    this.buttonTarget.classList.remove("rounded-full", "shadow");
    this.buttonTarget.classList.add("rounded-tl-3xl", "rounded-tr-3xl");
  }

  close() {
    this.listTarget.classList.add("hidden");
    this.buttonTarget.classList.add("rounded-full", "shadow");
    this.buttonTarget.classList.remove("rounded-tl-3xl", "rounded-tr-3xl");
  }

}
