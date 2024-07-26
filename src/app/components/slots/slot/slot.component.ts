import { Component, Input, OnInit } from '@angular/core';
import { ISlot } from '../../../interfaces/lobbyData.interface';
import { JackpotComponent } from '../jackpot/jackpot.component';

@Component({
  selector: 'app-slot',
  standalone: true,
  imports: [JackpotComponent],
  templateUrl: './slot.component.html',
  styleUrl: './slot.component.scss'
})
export class SlotComponent {
  @Input() slot!: ISlot;
}
