import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page {
  cartItems: CartItem[] = [];
  totalAmount: number = 0;

  constructor(private navCtrl: NavController) {}

  ionViewDidEnter() {
    // Load cart items from a service or storage
    this.loadCartItems();
  }

  loadCartItems() {
    // Replace with your code to load cart items
    // Example: this.cartItems = this.cartService.getCartItems();
    // Don't forget to calculate the total amount as well
    this.calculateTotalAmount();
  }

  removeItemFromCart(item: CartItem) {
    // Implement logic to remove item from the cart
    // Example: this.cartService.removeItem(item);
    // Update cart items and totalAmount
    this.cartItems = this.cartItems.filter((cartItem) => cartItem !== item);
    this.calculateTotalAmount();
  }

  calculateTotalAmount() {
    // Calculate total amount based on cartItems
    this.totalAmount = this.cartItems.reduce(
      (total, item) => total + item.price,
      0
    );
  }

  checkout() {
    // Implement logic for checkout process
    // Example: Redirect to a payment page
    this.navCtrl.navigateForward('/payment');
  }
}

interface CartItem {
  name: string;
  price: number;
  // Add other properties as needed
}
