import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SavedFavoritesPage } from './saved-favorites.page';

const routes: Routes = [
  {
    path: '',
    component: SavedFavoritesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SavedFavoritesPageRoutingModule {}
