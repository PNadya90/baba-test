import { Component, Input, OnInit } from '@angular/core';
import { ISlot } from '../../../../interfaces/lobbyData.interface';
import { JackpotComponent } from '../../jackpot/jackpot.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-slot',
  standalone: true,
  imports: [JackpotComponent],
  templateUrl: './slot.component.html',
  styleUrl: './slot.component.scss'
})
export class SlotComponent {
  @Input() slot!: ISlot;
  constructor(private router: Router) {

  }
  public goToSlotMachinePage(slotId: number) {
    if (slotId === 1128) {
      this.router.navigate(['/slot', slotId]);
    } else {
      this.router.navigate(['/slot-unavailable']);
    }
  }
}
