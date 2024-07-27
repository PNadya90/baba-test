import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JackpotComponent } from '../../lobby-page/jackpot/jackpot.component';
import { SpinnerColumnComponent } from './spinner-column/spinner-column.component';
import { SlotMachineService } from './slot-machine.service';

@Component({
  selector: 'app-slot-machine',
  standalone: true,
  imports: [JackpotComponent, SpinnerColumnComponent],
  templateUrl: './slot-machine.component.html',
  styleUrl: './slot-machine.component.scss'
})
export class SlotMachineComponent implements OnInit {

  shuffledImages: string[] = [];
  columnCount: number = 5; // Number of columns
  totalImages: number = 16; // Total number of images to display (adjust as needed)
  randomNumbers: number[] = Array(5).fill(0);
  enableSpin = true;
  constructor(private slotMacineSrv: SlotMachineService) { }

  ngOnInit(): void {
  }

  onGenerateClick() {
    if (this.enableSpin) {
      this.enableSpin = false;
      this.randomNumbers = this.generateRandomNumbers(5);
      this.slotMacineSrv.start.update(() => true);
      setTimeout(() => this.slotMacineSrv.start.update(() => false));
      setTimeout(() => this.enableSpin = true, 5000)
    }
  }

  generateRandomNumbers(count: number): number[] {
    const numbers = [];
    for (let i = 0; i < count; i++) {
      const randomNumber = Math.floor(Math.random() * 1000000000);
      numbers.push(randomNumber);
    }
    return numbers;
  }
}