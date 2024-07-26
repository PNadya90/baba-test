import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JackpotComponent } from '../../lobby-page/jackpot/jackpot.component';

@Component({
  selector: 'app-slot-machine',
  standalone: true,
  imports: [JackpotComponent],
  templateUrl: './slot-machine.component.html',
  styleUrl: './slot-machine.component.scss'
})
export class SlotMachineComponent implements OnInit {
  public imagesSrc = [
    "assets/slot-1128/symbol_1.png",
    "assets/slot-1128/symbol_2.png",
    "assets/slot-1128/symbol_3.png",
    "assets/slot-1128/symbol_4.png",
    "assets/slot-1128/symbol_5.png",
    "assets/slot-1128/symbol_6.png",
    "assets/slot-1128/symbol_7.png",
    "assets/slot-1128/symbol_8.png",
    "assets/slot-1128/symbol_9.png",
    "assets/slot-1128/symbol_10.png",
    "assets/slot-1128/symbol_11.png",
    "assets/slot-1128/symbol_12.png",
  ]

  shuffledImages: string[] = [];
  columnCount: number = 5; // Number of columns
  totalImages: number = 15; // Total number of images to display (adjust as needed)
  randomNumbers: number[] = Array(5).fill(0);
  constructor() { }

  ngOnInit(): void {
    this.shuffledImages = this.shuffleAndDuplicateImages(this.imagesSrc, this.totalImages);
  }

  shuffle(array: any[]): any[] {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  shuffleAndDuplicateImages(images: string[], totalImages: number): string[] {
    let result: string[] = [];
    while (result.length < totalImages) {
      result = result.concat(this.shuffle([...images])); // Shuffle and concatenate
    }
    return result.slice(0, totalImages); // Trim to the required length
  }

  onGenerateClick() {
    this.randomNumbers = this.generateRandomNumbers(5);
    console.log(this.randomNumbers);

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