import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-cart',
  templateUrl: 'cart.page.html',
  styleUrls: ['cart.page.scss'],
})
export class CartPage {
  cartItems: any[] = [];

  constructor(private cartService: CartService, private navCtrl: NavController) {}

  ionViewWillEnter() {
    // Load cart items when the cart page is entered
    this.cartItems = this.cartService.getCartItems();
  }

  // Remove an item from the cart
  removeItem(item: any) {
    this.cartService.removeFromCart(item);
    // Reload cart items after removal
    this.cartItems = this.cartService.getCartItems();
  }

  // Calculate the total amount in the cart
  calculateTotal() {
    return this.cartItems.reduce((total, item) => total + item.price, 0).toFixed(2);
  }

  // Proceed to the checkout page
  proceedToCheckout() {
    // Implement navigation to the checkout page
    this.navCtrl.navigateForward('/checkout');
  }
}
