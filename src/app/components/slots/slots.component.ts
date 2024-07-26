import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { ISlot } from '../../interfaces/lobbyData.interface';
import { SlotComponent } from './slot/slot.component';
import { animate, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-slots',
  standalone: true,
  imports: [SlotComponent, CommonModule],
  templateUrl: './slots.component.html',
  styleUrl: './slots.component.scss',
  animations: [
    trigger('carouselAnimation', [
      transition('* => void', [
        animate('500ms', style({ transform: 'translateX(-100%)', opacity: 0 }))
      ]),
      transition('void => *', [
        style({ transform: 'translateX(100%)', opacity: 0 }),
        animate('500ms', style({ transform: 'translateX(0)', opacity: 1 }))
      ])
    ])
  ]
})
export class SlotsComponent implements OnInit {
  @Input() slots!: ISlot[];
  DISPLAYED_NUMBER_SLOTES = 4;
  bulletsList: any[] = [];
  currentSlots!: ISlot[];
  currentPage: number = 1;
  indexOfFirstCurrentSlot = 0;
  indexLustCurrentSlot = this.DISPLAYED_NUMBER_SLOTES - 1;

  ngOnInit(): void {
    this.bulletsList = new Array(Math.ceil(this.slots.length / this.DISPLAYED_NUMBER_SLOTES));
    this.currentSlots = [...this.slots].slice(this.indexOfFirstCurrentSlot, this.DISPLAYED_NUMBER_SLOTES);
  }

  public navToPrev() {
    if (this.indexOfFirstCurrentSlot >= this.DISPLAYED_NUMBER_SLOTES) {
      this.getIndexesOfCurrentSlots();
      this.currentSlots = [...this.slots]
        .slice(this.indexOfFirstCurrentSlot - this.DISPLAYED_NUMBER_SLOTES, this.indexOfFirstCurrentSlot - this.DISPLAYED_NUMBER_SLOTES + this.DISPLAYED_NUMBER_SLOTES)
      this.currentPage = this.currentPage - 1;
      this.getIndexesOfCurrentSlots();
    }
  }

  public navToNext() {
    if (this.indexLustCurrentSlot < this.slots.length - 1) {
      this.getIndexesOfCurrentSlots();
      console.log(this.indexOfFirstCurrentSlot, this.indexLustCurrentSlot);
      this.currentSlots = [...this.slots]
        .slice(this.indexLustCurrentSlot + 1, this.indexLustCurrentSlot + this.DISPLAYED_NUMBER_SLOTES + 1)
      this.currentPage = this.currentPage + 1;
      this.getIndexesOfCurrentSlots();
    }
  }

  private getIndexesOfCurrentSlots() {
    this.indexOfFirstCurrentSlot = this.slots.findIndex(el => el.id === this.currentSlots[0].id);
    this.indexLustCurrentSlot = this.slots.findIndex(el => el.id === this.currentSlots[this.currentSlots.length - 1].id)
  }

  public changeCurrentPage(page: number) {
    this.currentPage = page;
    this.getIndexesOfCurrentSlots();
    this.indexOfFirstCurrentSlot = (this.currentPage - 1) * this.DISPLAYED_NUMBER_SLOTES;
    this.currentSlots = [...this.slots].slice(this.indexOfFirstCurrentSlot, this.indexOfFirstCurrentSlot + this.DISPLAYED_NUMBER_SLOTES);
    this.getIndexesOfCurrentSlots();
  }
}
