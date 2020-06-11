import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CountriesComponent } from './countries/countries.component';

const routes: Routes = [
  { path: 'countries', component: CountriesComponent },
  // Countries from drop down will pull from this path
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
