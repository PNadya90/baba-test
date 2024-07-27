import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-jackpot',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './jackpot.component.html',
  styleUrl: './jackpot.component.scss'
})
export class JackpotComponent implements OnInit {
  @Input() jackpot!: number;
  @Input() delay?: number;

  currentNumber: number = 0;


  ngOnInit(): void {
    this.animateNumber();
  }

  animateNumber() {
    const duration = this.delay ? this.delay * 1000 : 2000; // animation duration in milliseconds
    const frameDuration = 1000 / 60; // 60 frames per second
    const totalFrames = duration / frameDuration;
    const increment = this.jackpot / totalFrames;

    let frame = 0;
    const interval = setInterval(() => {
      this.currentNumber += increment;
      frame++;
      if (frame >= totalFrames) {
        this.currentNumber = this.jackpot;
        clearInterval(interval);
      }
    }, frameDuration);
  }
}