import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BrowseResturantsPageRoutingModule } from './browse-resturants-routing.module';

import { BrowseResturantsPage } from './browse-resturants.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BrowseResturantsPageRoutingModule
  ],
  declarations: [BrowseResturantsPage]
})
export class BrowseResturantsPageModule {}
