import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="dropdown"
export default class extends Controller {

  static targets = ["list", "details"]

  // move this function into a helper later
  detectScreenSize() {
    let screenWidth = window.innerWidth;
    return screenWidth;
  }

  connect() {
    console.log("Dropdown controller connected successfully.");

  }

  toggle() {



    // open and expand details window in mobile only (<768px)
    if (this.detectScreenSize() < 768) {
      if (this.detailsTarget.classList.contains("hidden")) {
        this.detailsTarget.classList.add("w-full");
        this.detailsTarget.classList.remove("hidden");
      }
      else {
        this.detailsTarget.classList.remove("w-full");
        this.detailsTarget.classList.add("hidden");
      }
    }
    else {
      // replace this with something else 
      console.log("md and up so no adjustment")
      // displays year selection
      if (this.listTarget.classList.contains("hidden")) {
        this.open();
      }
      else {
        this.close();
      }
    }
  }

  open() {
    this.listTarget.classList.remove("hidden");
  }

  close() {
    this.listTarget.classList.add("hidden");
  }


}
