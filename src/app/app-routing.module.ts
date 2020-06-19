import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { MainComponent } from './main/main.component';
import { CultureComponent } from './culture/culture.component';
import { HolidaysComponent } from './holidays/holidays.component';
import { CountriesComponent } from './countries/countries.component';
import { MessengerComponent } from './messenger/messenger.component';

const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  scrollOffset: [0, 64],
};

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'culture-component', component: CultureComponent },
  { path: 'holidays', component: HolidaysComponent },
  { path: 'country', component: CountriesComponent },
  { path: 'messenger', component: MessengerComponent},
  { path: '', redirectTo: 'culture', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
