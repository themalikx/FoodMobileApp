import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BrowseRestaurantsPage } from './browse-restaurants.page';

const routes: Routes = [
  {
    path: '',
    component: BrowseRestaurantsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BrowseRestaurantsPageRoutingModule {}
