import { Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-audio-player',
  standalone: true,
  imports: [],
  templateUrl: './audio-player.component.html',
  styleUrl: './audio-player.component.scss'
})
export class AudioPlayerComponent implements OnInit {
  @Input() backgroundMusicUrl!: string;
  public isPlaying = false;
  @ViewChild('audioCtrl') audio!: any;
  @ViewChild('playBtn') playBtn!: ElementRef;
  
  ngAfterViewInit(): void {
    // audio will play if user click on page
    setTimeout(()=>{
      this.playBtn.nativeElement.click();
      this.audio.nativeElement.play();
    }, 1000)
   
  }

  ngOnInit(): void {
  }
  public togglePlay() {
    
    this.isPlaying ? this.audio.nativeElement.pause() : this.audio.nativeElement.play();
    this.isPlaying = !this.isPlaying;
  }
}

