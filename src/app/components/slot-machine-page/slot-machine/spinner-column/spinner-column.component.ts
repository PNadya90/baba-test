import { CommonModule } from '@angular/common';
import { Component, effect, ElementRef, Input, ViewChild } from '@angular/core';
import { SlotMachineService } from '../slot-machine.service';

@Component({
  selector: 'app-spinner-column',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './spinner-column.component.html',
  styleUrl: './spinner-column.component.scss'
})
export class SpinnerColumnComponent {
  @Input()
  delay: number = 0;
  @ViewChild('cellContainer')
  cellContainer!: ElementRef;
  suffledImages: string[] = [];
  constructor(private slotMacineSrv: SlotMachineService) {
    effect(() => {
      if (slotMacineSrv.start()) {
        this.startSpin();
      }
    })
    for (let i = 0; i < 16; ++i) {
      const symbolId = Math.floor(Math.random() * (12)) + 1;
      this.suffledImages.push("assets/slot-1128/symbol_" + symbolId + ".png");
    }
  }

  startSpin() {
    const firstThreeItem: string[] = []
    for (let i = 0; i < 3; ++i) {
      const symbolId = Math.floor(Math.random() * (12)) + 1;
      firstThreeItem.push("assets/slot-1128/symbol_" + symbolId + ".png");
    }
    this.suffledImages.splice(0, 3, ...firstThreeItem );
    setTimeout(() => {
      this.cellContainer.nativeElement.style.bottom = 0;
      setTimeout(() => {
        this.suffledImages.splice(13, 3, ...firstThreeItem );
        this.cellContainer.nativeElement.style.transition = '0s';
        this.cellContainer.nativeElement.style.bottom = '624px';//jump
        setTimeout(() => { this.cellContainer.nativeElement.style.transition = '3s' },1000);
      }, 3000)
    }, this.delay * 500);
  }
}
