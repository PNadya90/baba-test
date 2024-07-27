import { Injectable, signal, WritableSignal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SlotMachineService {
  start:WritableSignal<boolean> = signal(false);
  constructor() { }
}
