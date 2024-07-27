import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-audio-player',
  standalone: true,
  imports: [],
  templateUrl: './audio-player.component.html',
  styleUrl: './audio-player.component.scss'
})
export class AudioPlayerComponent implements AfterViewInit {
  @Input() backgroundMusicUrl!: string;
  @ViewChild('audioCtrl') audio!: any;
  @ViewChild('playBtn') playBtn!: ElementRef;

  public isPlaying = true;


  ngAfterViewInit(): void {

    const interval = setInterval(() => {
      if (!this.audio.nativeElement.paused) {
        clearInterval(interval)
      }
      else {
        this.audio.nativeElement
          .play()
          .then(() => {
            clearInterval(interval);
          })
          .catch((err: Error) => console.log(err));
      }
    }, 200);

  }

  public togglePlay():void {
    this.isPlaying ? this.audio.nativeElement.pause() : this.audio.nativeElement.play();
    this.isPlaying = !this.isPlaying;
  }
}

