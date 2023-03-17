import { Component, OnInit } from '@angular/core';
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.scss']
})
export class MenubarComponent implements OnInit {
  faArrow = faArrowDown;

  bioExpanded: boolean = false;
  bioBackground: string = "title-background";
  iconContainer: string = "icon-container";

  constructor() { }

  ngOnInit(): void {
  }

  toggleExpandBio(): void {
    if(this.bioBackground === "title-background") {
      this.bioBackground = "title-background expanded";
      this.iconContainer = "icon-container flex-container";
      this.faArrow = faArrowUp;
      this.bioExpanded = true;
    } else {
      this.bioBackground = "title-background";
      this.iconContainer = "icon-container";
      this.faArrow = faArrowDown;    
      this.bioExpanded = false;
    }
  }

}
