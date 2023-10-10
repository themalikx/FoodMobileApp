import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SavedFavoritesPageRoutingModule } from './saved-favorites-routing.module';

import { SavedFavoritesPage } from './saved-favorites.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SavedFavoritesPageRoutingModule
  ],
  declarations: [SavedFavoritesPage]
})
export class SavedFavoritesPageModule {}
