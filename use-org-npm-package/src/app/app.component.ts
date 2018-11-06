import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  items;
  constructor() {
    this.items = [
      {
        label: 'Vertebrates'
      },
      {
        label: 'Invertebrates'
      },
      {
        label: 'Test'
      }
    ];
  }
  title = 'use-org-npm-package';
}
