import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Participant } from '../participant';
import { ParticipantService } from '../participant.service';

@Component({
  selector: 'app-add-participant',
  templateUrl: './add-participant.component.html',
  styleUrls: ['./add-participant.component.css'],
})
export class AddParticipantComponent implements OnInit{
  @Input() participant: Participant;
  constructor(
    private participantService: ParticipantService,
    private router: Router
  ) {}

  ngOnInit(): void {
      this.participant = new Participant();
  }
  onSubmit() {
    this.participantService
      .addParticipant(this.participant)
      .subscribe(() => this.router.navigate(['/participants']));
  }
}
