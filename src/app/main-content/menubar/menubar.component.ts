import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { faArrowDown, faArrowUp, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.scss']
})
export class MenubarComponent implements OnInit {
  @Output() lfeEvent = new EventEmitter();
  @Output() fathersDayEvent = new EventEmitter();
  @Output() qualitySticksEvent = new EventEmitter();
  @Output() mapEvent = new EventEmitter();
  @Output() unityInventoryEvent = new EventEmitter();

  faBioArrow = faArrowDown;
  faProjectsArrow = faArrowDown;
  faExternalLinkAlt = faExternalLinkAlt;

  bioExpanded: boolean = false;
  projectsExpanded: boolean = false;

  bioBackground: string = "title-background";
  projectsBackground: string = "title-background";
  projectIconContainer: string = "icon-container height-full";
  bioIconContainer: string = "icon-container height-full";

  constructor() { }

  ngOnInit(): void {
  }

  emitLakeForExecutiveEvent(): void {
    this.lfeEvent.emit();
  }
  emitFathersDayEvent(): void {
    this.fathersDayEvent.emit();
  }
  emitQualitySticksEvent(): void {
    this.qualitySticksEvent.emit();
  }
  emitMapEvent(): void {
    this.mapEvent.emit();
  }
  emitUnityInventoryEvent(): void {
    this.unityInventoryEvent.emit();
  }

  toggleExpandProjects(): void {
    if(this.projectsBackground === "title-background") {
      this.projectsBackground = "title-background expanded";
      this.projectIconContainer = "icon-container flex-container";
      this.faProjectsArrow = faArrowUp;
      this.projectsExpanded = true;
    } else {
      this.projectsBackground = "title-background";
      this.projectIconContainer = "icon-container height-full";
      this.faProjectsArrow = faArrowDown;    
      this.projectsExpanded = false;
    }
  }

  toggleExpandBio(): void {
    if(this.bioBackground === "title-background") {
      this.bioBackground = "title-background expanded";
      this.bioIconContainer = "icon-container flex-container";
      this.faBioArrow = faArrowUp;
      this.bioExpanded = true;
    } else {
      this.bioBackground = "title-background";
      this.bioIconContainer = "icon-container  height-full";
      this.faBioArrow = faArrowDown;    
      this.bioExpanded = false;
    }
  }

}
