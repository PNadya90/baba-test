import { Component, OnInit } from '@angular/core';
import { LobbyDataService } from '../../../services/lobby-data.service';
import { CommonModule } from '@angular/common';
import { AudioPlayerComponent } from '../audio-player/audio-player.component';
import { ISlot } from '../../../interfaces/lobbyData.interface';
import { SlotsComponent } from '../slots/slots.component';

@Component({
  selector: 'app-lobby',
  standalone: true,
  imports: [CommonModule, AudioPlayerComponent, SlotsComponent],
  templateUrl: './lobby.component.html',
  styleUrl: './lobby.component.scss'
})
export class LobbyComponent implements OnInit {
  public backgroundImgUrl: string | undefined;
  public backgroundMusicUrl!: string;
  public slots: ISlot[] = [];

  constructor(private lobbyDataSrv: LobbyDataService) {
    this.lobbyDataSrv.getLobbyData().subscribe(({ backgroundImage, backgroundMusic, slots }) => {
      this.backgroundImgUrl = backgroundImage;
      this.backgroundMusicUrl = backgroundMusic;
      this.slots = slots.sort((a, b) => a.order - b.order);
    })
  }

  ngOnInit() {

  }

}
