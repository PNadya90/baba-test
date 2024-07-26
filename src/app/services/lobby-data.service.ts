import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ILobbyData } from '../interfaces/lobbyData.interface';

@Injectable({
  providedIn: 'root'
})
export class LobbyDataService {
  private lobbyDataURL = 'https://s3cdn.babawildslots.com/uploadImages/home-assignment-data.json'

  constructor(private http: HttpClient) { }

  public getLobbyData(): Observable<ILobbyData> {

    return this.http.get<ILobbyData>(this.lobbyDataURL)
  }
}
