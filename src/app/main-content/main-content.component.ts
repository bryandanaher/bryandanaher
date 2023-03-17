import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { LandingComponent } from './landing/landing.component';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {
  @ViewChild(LandingComponent) landingComponent!: LandingComponent;

  private eventSubscription!: Subscription;
  @Input() toggleAnimationObservable!: Observable<void>;

  constructor() { }

  ngOnInit(): void {
    this.eventSubscription = this.toggleAnimationObservable.subscribe(
      () => this.toggleAnimations());
  }

  toggleAnimations(): void {
    this.landingComponent.toggleAnimations();
  }
}
