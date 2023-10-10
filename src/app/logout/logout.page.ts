import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.page.html',
  styleUrls: ['./logout.page.scss'],
})
export class LogoutPage {

  constructor(private router: Router) {}

  logout() {
    // You can add your logout logic here.
    // For example, clearing user data or tokens.
    
    // Redirect to the login page after logout
    this.router.navigateByUrl('/login');
  }
}
