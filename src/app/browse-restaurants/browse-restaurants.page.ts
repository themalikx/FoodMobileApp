import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-browse-restaurants',
  templateUrl: 'browse-restaurants.page.html',
  styleUrls: ['browse-restaurants.page.scss'],
})
export class BrowseRestaurantsPage {
  // Mock restaurant data (you can replace it with actual data)
  restaurants = [
    {
      name: 'Restaurant 1',
      cuisine: 'Italian',
      rating: 4.5,
      deliveryTime: 30,
      image: 'https://via.placeholder.com/150',
    },
    {
      name: 'Restaurant 2',
      cuisine: 'Mexican',
      rating: 4.2,
      deliveryTime: 40,
      image: 'https://via.placeholder.com/150',
    },
    // Add more restaurant data here
  ];

  searchText = '';
  selectedCuisine = '';
  selectedRating = '';
  selectedLocation = '';

  // Filtered restaurant list
  filteredRestaurants = this.restaurants;

  constructor(private router: Router) {}

  // Function to apply filters
  onFilterChange() {
    this.filteredRestaurants = this.restaurants.filter((restaurant) => {
      const cuisineFilter = !this.selectedCuisine || restaurant.cuisine === this.selectedCuisine;
      const ratingFilter = !this.selectedRating || restaurant.rating >= parseFloat(this.selectedRating);
      const locationFilter = !this.selectedLocation || /* Add location filter logic here */ true;
      const searchFilter = !this.searchText || restaurant.name.toLowerCase().includes(this.searchText.toLowerCase());
      return cuisineFilter && ratingFilter && locationFilter && searchFilter;
    });
  }

  viewRestaurantDetails(restaurant: any) {
    // Navigate to the restaurant details page with the selected restaurant as a parameter
    this.router.navigate(['/restaurant-details'], {
      queryParams: { restaurant: JSON.stringify(restaurant) },
    });
  }

  // Function to handle search input change
  onSearchChange() {
    this.onFilterChange();
  }
}
