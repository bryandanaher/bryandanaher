import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  coordinatesArray: Array<string> = new Array<string>();
  // transformOriginStyle: string = "";
  baseClass: string = "base";

  constructor() { }

  ngOnInit(): void {
    this.initializeCoordinatesArray();
  }

  randomInt(min: number, max: number) { 
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  initializeCoordinatesArray(): void {
    for(let i = 0; i < 500; i++) {
      this.coordinatesArray[i] = 
        "left: " + this.randomInt(0,100) + "%; " + 
        "right: " + this.randomInt(0,100) + "%; " + 
        "top: " + this.randomInt(0,100) + "%; " + 
        "bottom: " + this.randomInt(0,100) + "%;";
    }
  }

  toggleAnimations(): void {
    this.baseClass === "base" ? this.baseClass = "base animation-none" : this.baseClass = "base";
  }

  // updateTransformOrigin(): void {
  //   this.transformOriginStyle = "transform-origin: " + 
  //     this.randomInt(25,75) + "% " + 
  //     this.randomInt(25,75) + "% ";
  // }

}
