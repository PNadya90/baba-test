import { Component, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ISlot } from '../../../interfaces/lobbyData.interface';
import { JackpotComponent } from '../../../../shared/components/jackpot/jackpot.component';

@Component({
  selector: 'app-slot',
  standalone: true,
  imports: [JackpotComponent, RouterModule],
  templateUrl: './slot.component.html',
  styleUrl: './slot.component.scss'
})
export class SlotComponent {
  @Input() slot!: ISlot;
}
