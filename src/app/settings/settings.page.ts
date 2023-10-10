import { Component } from '@angular/core';
import { App } from '@capacitor/app';
import { NavController, ToastController } from '@ionic/angular';


@Component({
  selector: 'app-settings',
  templateUrl: 'settings.page.html',
  styleUrls: ['settings.page.scss'],
})
export class SettingsPage {
  appVersion: string = '1.0.0'; // Replace with your actual app version
  notificationEnabled: boolean = true;
  darkModeEnabled: boolean = false;
  language: string = 'English';
  selectedTheme: string = 'light';
  user = {
    name: '',
    email: '',
    phoneNumber: '',
    profilePicture: 'assets/user-avatar.jpg',
  };

  // Add theme and darkMode variables
  theme: string = 'light'; // Default theme
  darkMode: boolean = false; // Default dark mode state


  constructor(
    private navCtrl: NavController,
    private toastController: ToastController
  ) {
    // Initialize the app version manually
    this.initializeAppVersion();
  }

  async initializeAppVersion() {
    const appInfo = await App.getInfo();
    this.appVersion = appInfo.version;
  }

  toggleNotifications() {
    // Implement logic to enable/disable notifications
    this.notificationEnabled = !this.notificationEnabled;
  }

  toggleDarkMode() {
    // Implement logic to toggle dark mode
    this.darkModeEnabled = !this.darkModeEnabled;
  }

  changeLanguage(language: string) {
    // Implement logic to change the app language
    this.language = language;
  }

  selectTheme(theme: string) {
    // Implement logic to select app theme (light/dark)
    this.selectedTheme = theme;
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000, // 2 seconds
    });
    toast.present();
  }

  logout() {
    // Implement logic to log the user out
    // For example, clearing user data and navigating to the login page
    this.presentToast('Logged out successfully.');
    // Navigate to the login page
    this.navCtrl.navigateRoot('/login');
  }
}
