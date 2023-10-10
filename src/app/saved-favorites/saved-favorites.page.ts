import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-saved-favorites',
  templateUrl: 'saved-favorites.page.html',
  styleUrls: ['saved-favorites.page.scss'],
})
export class SavedFavoritesPage {
  savedFavorites: any[]; // Define the saved favorites array

  constructor(private navCtrl: NavController) {
    // Initialize the savedFavorites array with sample data (replace with your data)
    this.savedFavorites = [
      { id: 1, name: 'Favorite Item 1' },
      { id: 2, name: 'Favorite Item 2' },
      { id: 3, name: 'Favorite Item 3' },
    ];
  }

  viewFavoriteDetails(favorite: any) {
    // Implement the logic to navigate to the details page of the selected favorite
    // For example, navigate to a details page with the favorite's ID
    this.navCtrl.navigateForward(`/favorite-details/${favorite.id}`);
  }
}
