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

  constructor(private slotMacineSrv: SlotMachineService) { }


  public onGenerateClick() {
    if (this.enableSpin) {
      this.enableSpin = false;
      this.randomNumbers = this.generateRandomNumbers(5);
      this.slotMacineSrv.start.update(() => true);
      setTimeout(() => this.slotMacineSrv.start.update(() => false));
      setTimeout(() => this.enableSpin = true, 5000)
    }
  }

  private generateRandomNumbers(count: number): number[] {
    const numbers: number[] = [];
    for (let i = 0; i < count; i++) {
      const randomNumber = Math.floor(Math.random() * 1000000000);
      numbers.push(randomNumber);
    }
    return numbers;
  }
}