import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { CultureComponent } from './culture/culture.component';
import { HolidaysComponent } from './holidays/holidays.component';
import { CountriesComponent } from './countries/countries.component';
import { MessengerComponent } from './messenger/messenger.component';
import {CommunityComponent} from './community/community.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'culture', component: CultureComponent },
  { path: 'holidays', component: HolidaysComponent },
  { path: 'country', component: CountriesComponent },
  { path: 'messenger', component: MessengerComponent},
  { path: 'community', component: CommunityComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
