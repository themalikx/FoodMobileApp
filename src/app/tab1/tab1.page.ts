import { Component } from '@angular/core';
import { NavController, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  constructor(
    private navCtrl: NavController,
    private menuCtrl: MenuController
  ) {}

  // Logout function
  logout() {
    // Implement your logout logic here
    // For example, clear user session, navigate to the login page, etc.
  }

  // Close the side menu
  closeMenu() {
    this.menuCtrl.close();
  }
  goToEditProfilePage() {
    this.navCtrl.navigateForward('/edit-profile');
  }
}
