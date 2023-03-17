import { Component } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bryandanaher';
  toggleAnimationEventSubject: Subject<void> = new Subject<void>();

  emitToggleAnimationEventSubject(): void {
    this.toggleAnimationEventSubject.next();
  }

}

