import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { SlotMachineComponent } from "../slot-machine/slot-machine.component";

@Component({
  selector: 'app-slot-page',
  standalone: true,
  imports: [SlotMachineComponent, RouterModule],
  templateUrl: './slot-page.component.html',
  styleUrl: './slot-page.component.scss'
})

export class SlotPageComponent implements OnInit {
  public message = 'slot is not available. please try slot "777"';
  public slotId: number | undefined;

  constructor(
    private route: ActivatedRoute
  ) {

  }
  ngOnInit(): void {
    this.slotId = +this.route.snapshot.paramMap.get('id')!;
  }
}
