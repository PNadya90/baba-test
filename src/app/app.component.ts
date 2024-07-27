import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CountdownClockComponent } from './shared/components/countdown-clock/countdown-clock.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CountdownClockComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'baba-assignment';
}
