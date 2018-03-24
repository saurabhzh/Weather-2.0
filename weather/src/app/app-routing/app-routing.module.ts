import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { SerachMapComponent } from '../serach-map/serach-map.component';
import { SavedPlacesComponent } from '../saved-places/saved-places.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'mapSearch', component: SerachMapComponent },
  { path: 'savedPlaces', component: SavedPlacesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
