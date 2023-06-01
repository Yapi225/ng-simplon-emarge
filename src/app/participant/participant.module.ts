import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListParticipantComponent } from './list-participant/list-participant.component';
import { AddParticipantComponent } from './add-participant/add-participant.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ParticipantService } from './participant.service';
import { LoaderComponent } from '../loader/loader.component';

const participantRoutes: Routes = [
  {
    path:"participants",
    component:ListParticipantComponent
  },
  {
    path:"participant/add",
    component:AddParticipantComponent
  }
]


@NgModule({
  declarations: [
    LoaderComponent,
    ListParticipantComponent,
    AddParticipantComponent
  ],
  imports: [
    CommonModule,FormsModule,RouterModule.forChild(participantRoutes)
  ],
  providers:[ParticipantService]
})
export class ParticipantModule { }
