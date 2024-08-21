import { Routes } from '@angular/router';
import { LobbyComponent } from './lobby-page/components/lobby/lobby.component';
import { SlotPageComponent } from './slot-machine-page/components/slot-page/slot-page.component';

export const routes: Routes = [
     { path: '', component: LobbyComponent },
     { path: 'slot/:id', component: SlotPageComponent },
     { path: 'slot-unavailable', component: SlotPageComponent },
     { path: '**', redirectTo: '' }
];
