import { Component, OnInit } from '@angular/core';
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.scss']
})
export class MenubarComponent implements OnInit {
  faBioArrow = faArrowDown;
  faProjectsArrow = faArrowDown;

  bioExpanded: boolean = false;
  projectsExpanded: boolean = false;

  bioBackground: string = "title-background";
  projectsBackground: string = "title-background";
  iconContainer: string = "icon-container";

  constructor() { }

  ngOnInit(): void {
  }

  toggleExpandProjects(): void {
    if(this.projectsBackground === "title-background") {
      this.projectsBackground = "title-background expanded";
      this.iconContainer = "icon-container flex-container";
      this.faProjectsArrow = faArrowUp;
      this.projectsExpanded = true;
    } else {
      this.projectsBackground = "title-background";
      this.iconContainer = "icon-container";
      this.faProjectsArrow = faArrowDown;    
      this.projectsExpanded = false;
    }
  }

  toggleExpandBio(): void {
    if(this.bioBackground === "title-background") {
      this.bioBackground = "title-background expanded";
      this.iconContainer = "icon-container flex-container";
      this.faBioArrow = faArrowUp;
      this.bioExpanded = true;
    } else {
      this.bioBackground = "title-background";
      this.iconContainer = "icon-container";
      this.faBioArrow = faArrowDown;    
      this.bioExpanded = false;
    }
  }

}
