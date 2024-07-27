import { Injectable, signal, WritableSignal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SlotMachineService {
  public start: WritableSignal<boolean> = signal(false);
  constructor() { }
}