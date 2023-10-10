import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // Set the root path to the 'tabs' route
  {
    path: '',
    redirectTo: 'tabs',
    pathMatch: 'full'
  },
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./tab1/tab1.module').then(m => m.Tab1PageModule),
  },
  {
    path: 'menu',
    loadChildren: () => import('./tab2/tab2.module').then(m => m.Tab2PageModule),
  },
  {
    path: 'cart',
    loadChildren: () => import('./cart/cart.module').then(m => m.CartPageModule),
  },
  {
    path: 'account',
    loadChildren: () => import('./tab4/tab4.module').then(m => m.Tab4PageModule),
  },
  {
    path: 'browse-restaurants',
    loadChildren: () => import('./browse-restaurants/browse-restaurants.module').then( m => m.BrowseRestaurantsPageModule)
  },
  {
    path: 'edit-profile',
    loadChildren: () => import('./edit-profile/edit-profile.module').then( m => m.EditProfilePageModule)
  },
  {
    path: 'tab4',
    loadChildren: () => import('./tab4/tab4.module').then( m => m.Tab4PageModule)
  },
  {
    path: 'browse-restaurants',
    loadChildren: () => import('./browse-restaurants/browse-restaurants.module').then( m => m.BrowseRestaurantsPageModule)
  },
  {
    path: 'restaurant-details',
    loadChildren: () => import('./restaurant-details/restaurant-details.module').then( m => m.RestaurantDetailsPageModule)
  },
  {
    path: 'payment-methods',
    loadChildren: () => import('./payment-methods/payment-methods.module').then( m => m.PaymentMethodsPageModule)
  },
  {
    path: 'wallet',
    loadChildren: () => import('./wallet/wallet.module').then( m => m.WalletPageModule)
  },
  {
    path: 'saved-favorites',
    loadChildren: () => import('./saved-favorites/saved-favorites.module').then( m => m.SavedFavoritesPageModule)
  },
  {
    path: 'notifications',
    loadChildren: () => import('./notifications/notifications.module').then( m => m.NotificationsPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./settings/settings.module').then( m => m.SettingsPageModule)
  },
  {
    path: 'faq',
    loadChildren: () => import('./faq/faq.module').then( m => m.FaqPageModule)
  },
  {
    path: 'contact-support',
    loadChildren: () => import('./contact-support/contact-support.module').then( m => m.ContactSupportPageModule)
  },
  {
    path: 'logout',
    loadChildren: () => import('./logout/logout.module').then( m => m.LogoutPageModule)
  },
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
