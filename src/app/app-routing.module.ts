import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CountriesComponent } from './countries/countries.component';
import { CultureComponent } from './culture/culture.component';
import { HolidaysComponent } from './holidays/holidays.component';

const routes: Routes = [
  { path: 'countries', component: CountriesComponent },
  // Countries from drop down will pull from this path
  { path: 'culture', component: CultureComponent },
  { path: 'holidays', component: HolidaysComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
