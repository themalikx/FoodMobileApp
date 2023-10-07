import { Component } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-edit-profile',
  templateUrl: 'edit-profile.page.html',
  styleUrls: ['edit-profile.page.scss'],
})
export class EditProfilePage {
  user = {
    name: '',
    email: '',
    phoneNumber: '',
    profilePicture: 'assets/user-avatar.jpg',
  };

  currentPassword = '';
  newPassword = '';
  confirmNewPassword = '';

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

  uploadProfilePicture(event: any) {
    // Implement logic to handle file upload (as shown in previous responses)
  }

  async saveChanges() {
    // Basic validation: Check if all fields are filled
    if (!this.user.name || !this.user.email || !this.user.phoneNumber) {
      this.presentToast('Please fill in all required fields.');
      return;
    }

    // Email format validation
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(this.user.email)) {
      this.presentToast('Please enter a valid email address.');
      return;
    }

    // Password strength validation (minimum 6 characters in this example)
    if (this.newPassword.length > 0 && this.newPassword.length < 6) {
      this.presentToast('Password must be at least 6 characters long.');
      return;
    }

    // Password confirmation validation
    if (this.newPassword !== this.confirmNewPassword) {
      this.presentToast('Passwords do not match.');
      return;
    }

    // Save user data to Ionic Storage
    await this.storage.set('user', this.user);

    // Display a success message
    this.presentToast('Changes saved successfully.');

    // Navigate back to the 'edit-profile' page
    this.navCtrl.navigateBack('/edit-profile');
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000, // 2 seconds
    });
    toast.present();
  }
}
