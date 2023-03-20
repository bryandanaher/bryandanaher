import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-page-info',
  templateUrl: './page-info.component.html',
  styleUrls: ['./page-info.component.scss']
})
export class PageInfoComponent implements OnInit {

  @Input() cardContent: string = 'HELLO.';
  @Input() paragraphs: string[] = ['HELLO.', 'This is a paragrph.'];
  @Input() linkToPage: string = 'http://qualitySticks.org';

  constructor() { }

  ngOnInit(): void {
  }

}
