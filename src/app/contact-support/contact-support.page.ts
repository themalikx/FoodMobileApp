import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-contact-support',
  templateUrl: './contact-support.page.html',
  styleUrls: ['./contact-support.page.scss'],
})
export class ContactSupportPage {
  name: string = 'John Doe';
  email: string = 'johndoe@example.com';
  phoneNumber: string = '+1 123-456-7890';
  message: string = 'Hello, I have a question about my recent order.';

  supportTopics: string[] = [
    'Order Issue',
    'Billing Inquiry',
    'App Feedback',
    'General Question',
  ];
  selectedTopic: string = 'Order Issue';

  constructor(private toastController: ToastController) {}

  async submitForm() {
    // Validate form fields (You can add more complex validation logic here)
    if (!this.name || !this.email || !this.phoneNumber || !this.message) {
      const toast = await this.toastController.create({
        message: 'Please fill in all fields.',
        duration: 2000,
        color: 'danger',
        position: 'top',
      });
      toast.present();
      return;
    }

    // You can perform actions like sending the message to your support system here
    // Mock example: Showing a success message
    const toast = await this.toastController.create({
      message: 'Your message has been sent!',
      duration: 2000,
      color: 'success',
      position: 'top',
    });
    toast.present();

    // Clear form fields
    this.name = '';
    this.email = '';
    this.phoneNumber = '';
    this.message = '';
  }
}
