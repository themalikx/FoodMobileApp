import { Component } from '@angular/core';

@Component({
  selector: 'app-notifications',
  templateUrl: 'notifications.page.html',
  styleUrls: ['notifications.page.scss'],
})
export class NotificationsPage {
  notifications: any[]; // Define the notifications array

  constructor() {
    // Initialize the notifications array with sample data (replace with your data)
    this.notifications = [
      { id: 1, title: 'New Message', message: 'You have a new message from a friend.' },
      { id: 2, title: 'Order Update', message: 'Your order #12345 has been confirmed.' },
      { id: 3, title: 'Special Offer', message: 'Dont miss our special promotion today.' }
    ];
  }
}
