import { Component, OnInit } from '@angular/core';
import { Participant } from '../participant';
import { ParticipantService } from '../participant.service';

@Component({
  selector: 'app-list-participant',
  templateUrl: './list-participant.component.html',
  styleUrls: ['./list-participant.component.css'],
})
export class ListParticipantComponent implements OnInit {
  title = 'Liste des participants';
  listeParticipant: Participant[] = [];

  constructor(
    private readonly participantService: ParticipantService
  ) {}

  ngOnInit(): void {
    this.participantService
      .getParticipantList()
      .subscribe(
        (listParticipant) => (this.listeParticipant = listParticipant)
      );
  }


}
