import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListParticipantComponent } from './participant/list-participant/list-participant.component';

const routes: Routes = [
  { path: '', redirectTo: 'participants', pathMatch: 'full' },
  { path: '**', component: ListParticipantComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
