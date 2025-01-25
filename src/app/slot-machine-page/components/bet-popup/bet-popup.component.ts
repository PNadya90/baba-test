import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-bet-popup',
  standalone: true,
  imports: [],
  templateUrl: './bet-popup.component.html',
  styleUrl: './bet-popup.component.scss'
})
export class BetPopupComponent {
  @Output() close = new EventEmitter<void>();
  @Input() message = ''

  closePopup() {
    this.close.emit();
  }
}
