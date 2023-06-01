import { Component } from '@angular/core';

@Component({
  selector: 'app-loader',
  template: `
    <div class="d-flex justify-content-center">
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  `,
  styleUrls: ['./loader.component.css'],
})
export class LoaderComponent {}
