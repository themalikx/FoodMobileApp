import { Component } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.page.html',
  styleUrls: ['./faq.page.scss'],
})
export class FaqPage {
  faqs: { question: string; answer: string }[] = [
    {
      question: 'What is the purpose of this app?',
      answer: 'This app serves as a convenient platform for users to order food from local restaurants. It streamlines the entire process, allowing users to explore various restaurant options, view menus, place orders, and either have the food delivered to their doorstep or prepared for pick-up. The primary goal is to make food ordering hassle-free, providing a diverse range of restaurant choices and menu items for users to explore.'
    },
    {
      question: 'How do I create an account?',
      answer: 'Creating an account is a straightforward process. On the apps login screen, simply click the "Sign Up" or "Create Account" button. You will be prompted to provide essential details like your email address, phone number, and a secure password. Once you have filled in this information and submitted the form, your account will be successfully created, granting you access to additional features and functionalities.'
    },
    {
      question: 'How can I change my delivery address?',
      answer: 'Changing your delivery address is easy. Navigate to the "Account" or "Profile" section within the app, where you can edit your profile details, including your delivery address. Remember to save the changes to ensure that your updated delivery information is applied to future orders.'
    },
    {
      question: 'What payment methods are accepted?',
      answer: 'We offer a range of payment options to cater to your preferences. You can make payments using credit or debit cards, digital wallets like Apple Pay and Google Pay, and even opt for cash on delivery if its available in your area. Managing your preferred payment methods is simple through the Payment or Wallet section of the app, allowing you to choose the most convenient payment option.'
    },
    {
      question: 'How can I track the status of my order?',
      answer: 'Our app provides real-time order tracking, giving you complete visibility into the status of your order. Once your order is confirmed, you will receive updates on its progress, including preparation, estimated delivery time, and the live location of your delivery person. Notifications will keep you informed when your order is on its way and when its been successfully delivered, ensuring a seamless experience.'
    },
    {
      question: 'What if I have dietary restrictions or allergies?',
      answer: 'We take dietary restrictions and allergies seriously. When placing your order, you have the option to communicate any special dietary requirements or allergies in the order notes or special instructions section. Our partner restaurants are committed to accommodating your needs, making modifications to your order as necessary to ensure a safe and enjoyable dining experience.'
    },
    {
      question: 'Can I leave a review for a restaurant?',
      answer: 'Absolutely! Your feedback is valuable. You can leave a review and rate your dining experience for each restaurant you order from. After your order is delivered, you will be prompted to provide feedback, sharing your thoughts on the food quality, delivery speed, and overall service. Your reviews help create a vibrant community and assist other users in making informed decisions.'
    },
    {
      question: 'What should I do if I encounter an issue with my order?',
      answer: ' In the rare event that you encounter any issues with your order, such as missing items or delays, our customer support team is here to assist. You can easily reach out to our support team through the "Support" or "Help Center" section of the app. They are dedicated to resolving any issues promptly, ensuring your satisfaction.'
    },
    {
      question: 'Is my personal information secure?',
      answer: 'Your data security is a top priority. We employ advanced encryption and stringent security measures to safeguard your personal information. Your payment details are securely stored, and we adhere to strict data privacy regulations, ensuring that your sensitive information remains protected. Our commitment to data security ensures your peace of mind while using our app.'
    },
    {
      question: 'Is there a minimum order requirement?',
      answer: 'Minimum order requirements may vary depending on the restaurant you choose. To find out if there a minimum order amount for a specific restaurant, simply check the restaurant s details and menu. Any minimum order amount will be clearly indicated there.'
    },
    {
      question: 'Can I schedule an order for later?',
      answer: 'Yes, you can schedule orders for a later time or date. Our app offers a convenient scheduling feature that allows you to choose when you want your food delivered or ready for pick-up. This feature is perfect for planning meals in advance or accommodating busy schedules.'
    },
    {
      question: 'What happens if my order is late?',
      answer: 'We understand the importance of timely deliveries. If your order is delayed beyond the estimated delivery time, we recommend checking the order tracking feature for updates. In the rare event of a significant delay, our customer support team is available to assist and ensure a satisfactory resolution.'
    },
    {
      question: 'Can I customize my order?',
      answer: ' Absolutely! Many restaurants allow you to customize your order to suit your preferences. You can make special requests, such as extra toppings, sauces on the side, or specific dietary modifications. Use the "Special Instructions" section during checkout to communicate your customization preferences.'
    },
    {
      question: 'Do you offer promotions or discounts?',
      answer: 'Yes, we frequently offer promotions and discounts to enhance your dining experience. Keep an eye on the "Promotions" or "Special Offers" section of the app to discover ongoing deals, coupon codes, and loyalty programs that can help you save on your orders.'
    },
    {
      question: 'What happens if I forget my password?',
      answer: 'If you forget your password, dont worry; it happens to the best of us. Simply click on the Forgot Password or Reset Password option on the login screen. You will receive instructions via email or SMS to reset your password securely.'
    },
    {
      question: 'Can I reorder my favorite meals easily?',
      answer: 'Yes, we have made it convenient for you to reorder your favorite meals. Your order history is stored in the app, allowing you to quickly select and reorder a previous order with just a few taps. Its a time-saving feature for those go-to meals you love.'
    },
    {
      question: 'How do I contact customer support?',
      answer: 'You can reach our customer support team through various channels. In the "Support" or "Help Center" section of the app, you will find options to contact support via live chat, email, or phone. Our support team is available to assist you with any inquiries or issues you may have.'
    },
    {
      question: 'Is there a loyalty program for frequent customers?',
      answer: ' Yes, we value our loyal customers. We offer a loyalty program that rewards frequent orders with points, discounts, or exclusive perks. As you continue to use the app, you will unlock benefits that enhance your overall food ordering experience.'
    },
    {
      question: 'Can I place group orders for events or gatherings?',
      answer: 'Absolutely! Group orders are a breeze with our app. You can easily add multiple items to your cart, specify delivery addresses for each, and even split the bill among participants. Its a convenient way to organize meals for parties, meetings, or gatherings.'
    },
    {
      question: 'How do I provide feedback or suggestions for the app?',
      answer: 'Your feedback is important to us! You can share your suggestions, ideas, or report any issues you encounter through the "Feedback" or "Suggest Improvements" feature within the app. Your input helps us continually improve and enhance the apps functionality.'
    },

    // Add more FAQs here
  ];
   
}
