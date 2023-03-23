import { Component, OnInit, Input } from '@angular/core';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-page-info',
  templateUrl: './page-info.component.html',
  styleUrls: ['./page-info.component.scss']
})
export class PageInfoComponent implements OnInit {
  @Input() cardContent!: string;
  @Input() imageName!: string;
  @Input() largeImageName?: string;
  @Input() paragraphs!: string[];
  @Input() linkToPage?: string;

  faExternalLinkAlt = faExternalLinkAlt;

  modalStyle: string = "image-modal"

  constructor() { }

  ngOnInit(): void {
  }

  goToContent(): void {
    if(this.linkToPage) {
      window.open(this.linkToPage, '_blank')?.focus();
      //window.location.href = this.linkToPage;
    } else if(this.largeImageName) {
      this.toggleImageModal();
    } else {
      console.error("No linked content found");
    }
  }

  toggleImageModal(): void {
    if(this.modalStyle == "image-modal") {
      this.modalStyle = "image-modal show-modal";
    } else {
      this.modalStyle = "image-modal";
    }
  }

}
