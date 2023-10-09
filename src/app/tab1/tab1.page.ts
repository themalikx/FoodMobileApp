import { Component } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  user = {
    name: 'John Doe',
    email: 'johndoe@example.com',
    phoneNumber: '123-456-7890',
    profilePicture: 'assets/user-avatar.jpg',
  };

  constructor(
    private navCtrl: NavController,
    private storage: Storage,
    private toastController: ToastController
  ) {}

  async ngOnInit() {
    // Initialize Ionic Storage
    await this.storage.create();

    // Retrieve user data from storage and populate the user object
    const storedUser = await this.storage.get('user');
    if (storedUser) {
      this.user = storedUser;
    }
  }

  goToEditProfilePage() {
    // Navigate to the 'EditProfilePage'
    this.navCtrl.navigateForward('/edit-profile');
  }

  logout() {
    // Implement logout functionality (if needed)
  }
}
