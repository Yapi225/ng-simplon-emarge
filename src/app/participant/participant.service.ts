import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { env } from 'env';
import { catchError, Observable, of, tap } from 'rxjs';
import { Participant } from './participant';

@Injectable()
export class ParticipantService {
  constructor(private http: HttpClient) {}

  getParticipantList(): Observable<Participant[]> {
   console.log(">: ",env.API_LINK+'participants');
    return this.http.get<Participant[]>(env.API_LINK + 'participants').pipe(
      tap((participantList) => console.log(participantList.length)),
      catchError((err) => of(err))
    );
  }
  addParticipant(participant: Participant): Observable<Participant> {
    return this.http
      .post<Participant>(env.API_LINK + 'Participant', participant)
      .pipe(
        tap((responser) => console.log(responser)),
        catchError((err) => of(err))
      );
  }
}
