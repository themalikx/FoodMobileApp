import { Component } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-payment-methods',
  templateUrl: 'payment-methods.page.html',
  styleUrls: ['payment-methods.page.scss'],
})
export class PaymentMethodsPage {
  paymentMethods: PaymentMethod[] = [];

  constructor(
    private navCtrl: NavController,
    private alertController: AlertController
  ) {}

  ionViewDidEnter() {
    // Load payment methods when the page enters
    this.loadPaymentMethods();
  }

  loadPaymentMethods() {
    // Replace with your code to load payment methods from a service or storage
    // Example: this.paymentMethods = this.paymentService.getPaymentMethods();
  }

  deletePaymentMethod(method: PaymentMethod) {
    // Implement logic to delete a payment method
    // Example: this.paymentService.deletePaymentMethod(method);
    // Remove the method from the paymentMethods array
    this.paymentMethods = this.paymentMethods.filter(
      (payment) => payment !== method
    );
  }

  async addPaymentMethod() {
    const alert = await this.alertController.create({
      header: 'Add Payment Method',
      inputs: [
        {
          name: 'cardNumber',
          type: 'number',
          placeholder: 'Card Number',
        },
        {
          name: 'cardType',
          type: 'text',
          placeholder: 'Card Type (e.g., Visa)',
        },
        {
          name: 'lastFourDigits', // Add lastFourDigits property
          type: 'number',
          placeholder: 'Last Four Digits',
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        },
        {
          text: 'Add',
          handler: (data) => {
            // Implement logic to add a payment method
            // Example: this.paymentService.addPaymentMethod(data);
            // Add the new method to the paymentMethods array
            this.paymentMethods.push({
              cardNumber: data.cardNumber,
              cardType: data.cardType,
              lastFourDigits: data.lastFourDigits, // Include lastFourDigits property
              // Add other properties as needed
            });
          },
        },
      ],
    });

    await alert.present();
  }
}

interface PaymentMethod {
  cardNumber: string;
  cardType: string;
  lastFourDigits: string; // Include lastFourDigits property
  // Add other properties as needed
}
