import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { LandingComponent } from './landing/landing.component';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {
  @ViewChild(LandingComponent) landingComponent!: LandingComponent;

  private eventSubscription!: Subscription;
  @Input() toggleAnimationObservable!: Observable<void>;

  faTimes = faTimes;

  expandableContainer: string = 'expandable-container';
  centerExpanded: boolean = false;
  cardContent: string = 'HELLO.';
  paragraphs: string[] = ['HELLO.', 'This is a paragrph.'];
  linkToPage: string = 'http://qualitySticks.org';

  constructor() { }

  ngOnInit(): void {
    this.eventSubscription = this.toggleAnimationObservable.subscribe(
      () => this.toggleAnimations());
  }

  toggleAnimations(): void {
    this.landingComponent.toggleAnimations();
  }

  toggleContent(content: string): void {
    if(!this.centerExpanded) {
      this.expandableContainer = 'expandable-container expanded';
    }
    switch(content) {
      case 'lakeForExecutive':
        this.cardContent = 'Stacy Lake for Jackson County Executive';
        break;
      case 'billBoat':
        this.cardContent = 'Fathers Day Card';
        break;
      case 'qualitySticks':
        this.cardContent = 'Quality Sticks';
        break;
      case 'hyperionMap':
        this.cardContent = 'Hyperion Map';
        break;
    }
  }

  closeCenterContainer(): void {
    this.expandableContainer = 'expandable-container';
  }
}
