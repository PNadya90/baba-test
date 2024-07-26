import { Routes } from '@angular/router';
import { LobbyComponent } from './components/lobby-page/lobby/lobby.component';
import { SlotPageComponent } from './components/slot-machine-page/slot-page/slot-page.component';

export const routes: Routes = [
     { path: '', component: LobbyComponent },
     { path: 'slot/:id', component: SlotPageComponent },
     { path: 'slot-unavailable', component: SlotPageComponent },
];
