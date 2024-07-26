import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-jackpot',
  standalone: true,
  imports: [],
  templateUrl: './jackpot.component.html',
  styleUrl: './jackpot.component.scss'
})
export class JackpotComponent {
  @Input() jackpot!: number;
}
