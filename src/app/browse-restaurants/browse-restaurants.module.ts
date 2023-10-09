import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BrowseRestaurantsPageRoutingModule } from './browse-restaurants-routing.module';

import { BrowseRestaurantsPage } from './browse-restaurants.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BrowseRestaurantsPageRoutingModule
  ],
  declarations: [BrowseRestaurantsPage]
})
export class BrowseRestaurantsPageModule {}
