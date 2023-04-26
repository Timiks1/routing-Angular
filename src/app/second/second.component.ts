import { Component } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent {
  distance = 0;
  fuelUsed = 0;
  fuelConsumption: number | null = null;

  calculateFuelConsumption() {
    if (this.distance && this.fuelUsed) {
      this.fuelConsumption = (this.fuelUsed / this.distance) * 100;
    } else {
      this.fuelConsumption = null;
    }
  }
}
