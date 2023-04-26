import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  public speed: number;
  public frictionCoefficient: number;
  public brakingDistance: number;

  constructor() {
    this.speed = 0;
    this.frictionCoefficient = 0;
    this.brakingDistance = 0;
  }

  ngOnInit(): void {
  }

  calculateBrakingDistance(): void {
    const g = 9.81;
    const speedInMetersPerSecond = +this.speed / 3.6; // добавляем явное приведение типа
    this.brakingDistance = Math.pow(speedInMetersPerSecond, 2) / (2 * +this.frictionCoefficient * g); // добавляем явное приведение типа
  }
}

