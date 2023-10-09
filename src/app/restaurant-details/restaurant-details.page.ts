import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-restaurant-details',
  templateUrl: 'restaurant-details.page.html',
  styleUrls: ['restaurant-details.page.scss'],
})
export class RestaurantDetailsPage {
  selectedRestaurant: any;

  constructor(private route: ActivatedRoute) {}

  ionViewWillEnter() {
    // Get the selected restaurant from the route parameters
    this.route.queryParams.subscribe((params) => {
      if (params && params['restaurant']) { // Use square brackets here
        this.selectedRestaurant = JSON.parse(params['restaurant']); // Use square brackets here
      }
    });
  }
}
