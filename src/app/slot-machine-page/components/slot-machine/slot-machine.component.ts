import { Component } from '@angular/core';
import { JackpotComponent } from '../../../shared/components/jackpot/jackpot.component';
import { SpinnerColumnComponent } from './spinner-column/spinner-column.component'
import { SlotMachineService } from '../../services/slot-machine.service';

@Component({
  selector: 'app-slot-machine',
  standalone: true,
  imports: [JackpotComponent, SpinnerColumnComponent],
  templateUrl: './slot-machine.component.html',
  styleUrl: './slot-machine.component.scss'
})
export class SlotMachineComponent {
  public randomNumbers: number[] = Array(5).fill(0);
  public spinnersNumber = Array.from(Array(5).keys());
  private enableSpin = true;
  public betNumber = '000.000.000';

  constructor(private slotMacineSrv: SlotMachineService) { }


  public spin() {
    if (this.enableSpin && this.parseNumber(this.betNumber)) {
      this.enableSpin = false;
      this.randomNumbers = this.generateRandomNumbers(5);
      this.slotMacineSrv.start.update(() => true);
      setTimeout(() => this.slotMacineSrv.start.update(() => false));
      setTimeout(() => this.enableSpin = true, 5000);
      setTimeout(() => this.betNumber = '000.000.000', 5000)
    }
  }

  private generateRandomNumbers(count: number): number[] {
    const numbers: number[] = [];
    for (let i = 0; i < count; i++) {
      const randomNumber = Math.floor(Math.random() * 1000000000000);
      numbers.push(randomNumber);
    }
    return numbers;
  }

  private parseNumber(betNumber: string): number {
    return parseInt(betNumber.replace(/\./g, ''), 10);
  }

  public decreaseBet(): void {
    if (this.enableSpin) {
      let number = this.parseNumber(this.betNumber);
      number -= 100;
      this.betNumber = this.formatNumber(number);
    }
  }

  public increaseBet(): void {
    if (this.enableSpin) {
      let number = this.parseNumber(this.betNumber);
      number += 100;
      this.betNumber = this.formatNumber(number);
    }

  }
  private formatNumber(num: number): string {
    return num.toString().padStart(9, '0').replace(/(\d{3})(?=\d)/g, '$1.');
  }
}