import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SlotMachineComponent } from "../slot-machine/slot-machine.component";

@Component({
  selector: 'app-slot-page',
  standalone: true,
  imports: [SlotMachineComponent],
  templateUrl: './slot-page.component.html',
  styleUrl: './slot-page.component.scss'
})

export class SlotPageComponent implements OnInit {
  public message = 'slot is not available';
  public slotId: number | undefined;

  constructor(
    private route: ActivatedRoute,
    public router: Router
  ) {

  }
  ngOnInit(): void {
    this.slotId = +this.route.snapshot.paramMap.get('id')!;
  }

  public goBackToLobby() {
    this.router.navigate(['/'])
  }
}
