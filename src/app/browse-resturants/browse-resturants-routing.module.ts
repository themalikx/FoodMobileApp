import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BrowseResturantsPage } from './browse-resturants.page';

const routes: Routes = [
  {
    path: '',
    component: BrowseResturantsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BrowseResturantsPageRoutingModule {}
