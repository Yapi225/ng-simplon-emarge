import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private readonly router: Router) {}
  
  title = 'simplon-ci-emargement';

  goToNewParticipant() {
    this.router.navigate(['/participant/add']);
  }
  goToListeParticipant() {
    this.router.navigate(['participants']);
  }
}
