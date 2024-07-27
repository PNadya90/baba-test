import { Component, Input, OnInit } from '@angular/core';
import { SlotComponent } from './slot/slot.component';
import { CommonModule } from '@angular/common';
import { ISlot } from '../../interfaces/lobbyData.interface';

@Component({
  selector: 'app-slots',
  standalone: true,
  imports: [SlotComponent, CommonModule],
  templateUrl: './slots.component.html',
  styleUrl: './slots.component.scss'
})
export class SlotsComponent implements OnInit {
  @Input() slots!: ISlot[];
  private DISPLAYED_NUMBER_SLOTES = 4;
  public bulletsList: any[] = [];
  public currentSlots!: ISlot[];
  public currentPage: number = 1;
  public indexOfFirstCurrentSlot = 0;
  public indexLustCurrentSlot = this.DISPLAYED_NUMBER_SLOTES - 1;

  ngOnInit(): void {
    this.bulletsList = new Array(Math.ceil(this.slots.length / this.DISPLAYED_NUMBER_SLOTES));
    this.currentSlots = [...this.slots].slice(this.indexOfFirstCurrentSlot, this.DISPLAYED_NUMBER_SLOTES);
  }

  public navToPrev():void {
    if (this.indexOfFirstCurrentSlot >= this.DISPLAYED_NUMBER_SLOTES) {
      this.currentSlots = [...this.slots]
        .slice(this.indexOfFirstCurrentSlot - this.DISPLAYED_NUMBER_SLOTES, this.indexOfFirstCurrentSlot - this.DISPLAYED_NUMBER_SLOTES + this.DISPLAYED_NUMBER_SLOTES)
      this.currentPage = this.currentPage - 1;
      this.getIndexesOfCurrentSlots();
    }
  }

  public navToNext(): void {
    if (this.indexLustCurrentSlot < this.slots.length - 1) {
      this.currentSlots = [...this.slots]
        .slice(this.indexLustCurrentSlot + 1, this.indexLustCurrentSlot + this.DISPLAYED_NUMBER_SLOTES + 1)
      this.currentPage = this.currentPage + 1;
      this.getIndexesOfCurrentSlots();
    }
  }

  private getIndexesOfCurrentSlots():void {
    this.indexOfFirstCurrentSlot = this.slots.findIndex(el => el.id === this.currentSlots[0].id);
    this.indexLustCurrentSlot = this.slots.findIndex(el => el.id === this.currentSlots[this.currentSlots.length - 1].id)
  }

  public goToPage(page: number):void {
    this.currentPage = page;
    this.indexOfFirstCurrentSlot = (this.currentPage - 1) * this.DISPLAYED_NUMBER_SLOTES;
    this.currentSlots = [...this.slots].slice(this.indexOfFirstCurrentSlot, this.indexOfFirstCurrentSlot + this.DISPLAYED_NUMBER_SLOTES);
    this.getIndexesOfCurrentSlots();
  }
}
