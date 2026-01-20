export class Zone {
  constructor(radius) {
    this.radius = radius
  }

  shrink() {
    this.radius -= 1
  }
}
